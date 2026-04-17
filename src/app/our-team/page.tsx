import { getProviders, getPageContent } from '@/lib/content';
import TeamClient from './TeamClient';

export default function OurTeam() {
  const providers = getProviders();
  const pageContent = getPageContent('our-team') || {};

  return <TeamClient providers={providers} pageContent={pageContent} />;
}
