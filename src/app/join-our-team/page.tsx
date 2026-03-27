import { getJobs } from '@/lib/content';
import JobsClient from './JobsClient';

export default function JoinOurTeam() {
  const jobs = getJobs();

  return <JobsClient jobs={jobs} />;
}
