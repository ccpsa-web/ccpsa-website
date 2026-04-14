import { getPageContent } from '@/lib/content';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

export default function InterventionalPulmonaryPage() {
  const data = getPageContent('interventional-pulmonary') as ServicePageData;

  return <ServicePageTemplate data={data} />;
}
