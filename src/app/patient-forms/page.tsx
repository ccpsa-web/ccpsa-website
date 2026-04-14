import { getPageContent } from '@/lib/content';
import PatientFormsClient from './PatientFormsClient';
import type { PatientFormsData } from './PatientFormsClient';

export default function PatientForms() {
  const data = getPageContent('patient-forms') as PatientFormsData;

  return <PatientFormsClient data={data} />;
}
