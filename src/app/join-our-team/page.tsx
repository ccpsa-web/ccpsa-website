import { getJobs } from '@/lib/content';
import JobsClient from './JobsClient';

// Parse bullet-point strings into arrays
function parseList(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string' || !value.trim()) return [];
  // Split on bullet characters (•) or newline-dash patterns
  return value
    .split(/(?:\n[-•]\s*|\n•\t|•\t)/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function JoinOurTeam() {
  const rawJobs = getJobs();

  // Normalize job data so the client component gets consistent arrays
  const jobs = rawJobs.map((job) => ({
    ...job,
    description: job.description || job.summary || '',
    requirements: parseList(job.requirements),
    compensation: parseList(job.compensation),
    responsibilities: parseList(job.responsibilities),
    physicalRequirements: parseList(job.physicalRequirements),
  }));

  return <JobsClient jobs={jobs} />;
}
