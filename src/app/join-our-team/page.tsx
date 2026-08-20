import { getPageContent } from '@/lib/content';
import { getBambooBoard } from '@/lib/bamboohr';
import JobsClient from './JobsClient';

export default async function JoinOurTeam() {
  const pageContent = getPageContent('join-our-team') || {};
  const bambooBoard = await getBambooBoard();

  return <JobsClient pageContent={pageContent} bambooBoard={bambooBoard} />;
}
