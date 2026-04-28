// Server-side fetch + parser for BambooHR's public ATS embed.
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
    const html = await res.text();
    return parseBambooHtml(html);
  } catch {
    return { departments: [], totalJobs: 0, fetchFailed: true };
  }
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
