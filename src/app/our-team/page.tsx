import { getProviders } from '@/lib/content';
import TeamClient from './TeamClient';

export default function OurTeam() {
  const providers = getProviders();

  return <TeamClient providers={providers} />;
}
