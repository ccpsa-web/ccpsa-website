import { getPageContent } from '@/lib/content';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

export default function NeurocriticalCarePage() {
  const data = getPageContent('neurocritical-care') as ServicePageData;

  return <ServicePageTemplate data={data} />;
}
