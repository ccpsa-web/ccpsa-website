import { getPageContent } from '@/lib/content';
import PatientFormsClient from './PatientFormsClient';

export default function PatientForms() {
  const content = getPageContent('patient-forms');
  if (!content) return null;

  return <PatientFormsClient content={content} />;
}
