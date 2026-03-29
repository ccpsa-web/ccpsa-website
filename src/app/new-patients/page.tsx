import { getPageContent } from '@/lib/content';
import NewPatientsClient from './NewPatientsClient';

export default function NewPatients() {
  const content = getPageContent('new-patients');
  if (!content) return null;

  return <NewPatientsClient content={content} />;
}
