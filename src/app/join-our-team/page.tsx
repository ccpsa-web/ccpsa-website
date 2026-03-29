import { getJobs, getPageContent } from '@/lib/content';
import JobsClient from './JobsClient';

export default function JoinOurTeam() {
  const jobs = getJobs();
  const content = getPageContent('join-our-team');

  return <JobsClient jobs={jobs} content={content} />;
}
