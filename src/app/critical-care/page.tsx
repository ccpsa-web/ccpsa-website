import { getPageContent, getHospitalLocations } from '@/lib/content';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

export default function CriticalCarePage() {
  const raw = getPageContent('critical-care') as Omit<ServicePageData, 'locations'>;
  const data: ServicePageData = {
    ...raw,
    locations: getHospitalLocations(),
  };

  return <ServicePageTemplate data={data} />;
}
