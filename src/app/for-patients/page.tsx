import { getPageContent } from '@/lib/content';
import ForPatientsClient from './ForPatientsClient';

export default function ForPatients() {
  const content = getPageContent('for-patients');

  if (!content) return null;

  return <ForPatientsClient content={content} />;
}
