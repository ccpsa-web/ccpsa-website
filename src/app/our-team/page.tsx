import { getProviders, getPageContent } from '@/lib/content';
import TeamClient from './TeamClient';
import type { OurTeamData } from './TeamClient';

export default function OurTeam() {
  const providers = getProviders();
  const data = getPageContent('our-team') as OurTeamData;

  return <TeamClient providers={providers} data={data} />;
}
