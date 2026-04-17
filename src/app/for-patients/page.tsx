import { getPageContent, getClinicLocations } from '@/lib/content';
import ForPatientsClient from './ForPatientsClient';
import type { ForPatientsData } from './ForPatientsClient';

export default function ForPatients() {
  const raw = getPageContent('for-patients') as Omit<ForPatientsData, 'clinicLocations'>;

  const data: ForPatientsData = {
    ...raw,
    clinicLocations: getClinicLocations().map((l) => ({
      name: l.name,
      address: l.addressStreet,
      city: `${l.city}, ${l.state} ${l.zip}`,
      phone: l.phone,
      fax: l.fax,
    })),
  };

  return <ForPatientsClient data={data} />;
}
