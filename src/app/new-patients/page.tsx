import { getPageContent } from '@/lib/content';
import NewPatientsClient from './NewPatientsClient';
import type { NewPatientsData } from './NewPatientsClient';

export default function NewPatients() {
  const data = getPageContent('new-patients') as NewPatientsData;

  return <NewPatientsClient data={data} />;
}
