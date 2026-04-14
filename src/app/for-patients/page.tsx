import { getPageContent } from '@/lib/content';
import ForPatientsClient from './ForPatientsClient';
import type { ForPatientsData } from './ForPatientsClient';

export default function ForPatients() {
  const data = getPageContent('for-patients') as ForPatientsData;

  return <ForPatientsClient data={data} />;
}
