import { getPageContent, getClinicLocations } from '@/lib/content';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

export default function PulmonaryServicesPage() {
  const raw = getPageContent('pulmonary-services') as Omit<ServicePageData, 'locations'>;
  const data: ServicePageData = {
    ...raw,
    locations: getClinicLocations().map((l) => ({ name: l.name, city: l.city })),
  };

  return <ServicePageTemplate data={data} />;
}
