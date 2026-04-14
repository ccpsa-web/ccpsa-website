import { getPageContent } from '@/lib/content';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

export default function PulmonaryServicesPage() {
  const data = getPageContent('pulmonary-services') as ServicePageData;

  return <ServicePageTemplate data={data} />;
}
