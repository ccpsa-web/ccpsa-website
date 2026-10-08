// Server-side fetch + parser for BambooHR's public ATS embed.
// Note: as of Oct 2026 the endpoint returns JSON
// ({ departments: [{ id, label, positions: [{ id, name, url, location }] }] }).
// The older HTML-fragment format is still handled as a fallback.
// Hits the same endpoint embed.js uses internally and parses its HTML so we
// can render listings with our own site styling instead of a cross-origin
// iframe. Cached at the Next.js fetch layer with a 5-minute revalidation.

const BAMBOO_EMBED_URL =
  'https://ccpsa.bamboohr.com/jobs/embed2.php?version=1.0.0';

export interface BambooJob {
  id: string;
  title: string;
  url: string;
  location: string;
}

export interface BambooDepartment {
  id: string;
  name: string;
  jobs: BambooJob[];
}

export interface BambooBoard {
  departments: BambooDepartment[];
  totalJobs: number;
  fetchFailed: boolean;
}

export async function getBambooBoard(): Promise<BambooBoard> {
  try {
    const res = await fetch(BAMBOO_EMBED_URL, {
      next: { revalidate: 300 },
      headers: { 'User-Agent': 'CCPSA-Website/1.0 (+https://critcaremd.com)' },
    });
    if (!res.ok) {
      return { departments: [], totalJobs: 0, fetchFailed: true };
    }
    const body = await res.text();
    // BambooHR switched embed2.php from an HTML fragment to JSON (~Oct 2026).
    // Try JSON first; fall back to the legacy HTML parser.
    const fromJson = parseBambooJson(body);
    if (fromJson) return fromJson;
    return parseBambooHtml(body);
  } catch {
    return { departments: [], totalJobs: 0, fetchFailed: true };
  }
}

interface BambooJsonPosition {
  id?: number | string;
  name?: string;
  url?: string;
  location?: string;
}

interface BambooJsonDepartment {
  id?: number | string;
  label?: string;
  positions?: BambooJsonPosition[];
}

function parseBambooJson(body: string): BambooBoard | null {
  let data: { departments?: BambooJsonDepartment[] };
  try {
    data = JSON.parse(body);
  } catch {
    return null;
  }
  if (!data || !Array.isArray(data.departments)) return null;

  const departments: BambooDepartment[] = [];
  let totalJobs = 0;

  data.departments.forEach((dept, idx) => {
    const rawName = decodeEntities(String(dept.label ?? '')).trim();
    const name = !rawName || rawName.toLowerCase() === 'none' ? 'Other' : rawName;
    const deptId = String(dept.id ?? '') || `dept-${idx}`;

    const jobs: BambooJob[] = [];
    for (const pos of dept.positions ?? []) {
      const title = decodeEntities(String(pos.name ?? '')).trim();
      if (!title || pos.id == null) continue;
      const id = String(pos.id);
      let url = String(pos.url ?? '').trim();
      if (!url) url = `https://ccpsa.bamboohr.com/careers/${id}`;
      else if (url.startsWith('//')) url = 'https:' + url;
      else if (url.startsWith('/')) url = 'https://ccpsa.bamboohr.com' + url;
      const location = decodeEntities(String(pos.location ?? ''))
        .replace(/\s+/g, ' ')
        .trim();
      jobs.push({ id, title, url, location });
      totalJobs++;
    }

    if (jobs.length > 0) {
      // Merge departments that collapse to the same display name (e.g. "None" and blank → "Other").
      const existing = departments.find((d) => d.name === name);
      if (existing) existing.jobs.push(...jobs);
      else departments.push({ id: deptId, name, jobs });
    }
  });

  return { departments, totalJobs, fetchFailed: false };
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, '');
}

function parseBambooHtml(html: string): BambooBoard {
  const departments: BambooDepartment[] = [];
  let totalJobs = 0;

  // Split on each department-item open tag, capturing the dept ID.
  const deptParts = html.split(
    /<li[^>]*id="bhrDepartmentID_(\d+)"[^>]*class="BambooHR-ATS-Department-Item"[^>]*>/i
  );
  // After split with capture: [preamble, id1, body1, id2, body2, ...]

  for (let i = 1; i < deptParts.length; i += 2) {
    const deptId = deptParts[i];
    const body = deptParts[i + 1] || '';

    const headerMatch = body.match(
      /<div[^>]*class="BambooHR-ATS-Department-Header"[^>]*>([\s\S]*?)<\/div>/i
    );
    const rawName = headerMatch ? stripTags(headerMatch[1]).trim() : '';
    const name = !rawName || rawName.toLowerCase() === 'none' ? 'Other' : rawName;

    const jobs: BambooJob[] = [];
    const jobItemRegex =
      /<li[^>]*id="bhrPositionID_(\d+)"[^>]*>([\s\S]*?)<\/li>/gi;
    let m: RegExpExecArray | null;
    while ((m = jobItemRegex.exec(body)) !== null) {
      const id = m[1];
      const inner = m[2];

      const linkMatch = inner.match(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
      if (!linkMatch) continue;

      let url = linkMatch[1].trim();
      if (url.startsWith('//')) url = 'https:' + url;
      else if (url.startsWith('/')) url = 'https://ccpsa.bamboohr.com' + url;

      const title = decodeEntities(stripTags(linkMatch[2])).trim();
      if (!title) continue;

      const locMatch = inner.match(
        /<span[^>]*class="BambooHR-ATS-Location"[^>]*>([\s\S]*?)<\/span>/i
      );
      const location = locMatch
        ? decodeEntities(stripTags(locMatch[1]))
            .replace(/\s+/g, ' ')
            .trim()
        : '';

      jobs.push({ id, title, url, location });
      totalJobs++;
    }

    if (jobs.length > 0) {
      departments.push({ id: deptId, name, jobs });
    }
  }

  return { departments, totalJobs, fetchFailed: false };
}
