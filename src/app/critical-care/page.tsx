import { getPageContent } from '@/lib/content';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

export default function CriticalCarePage() {
  const data = getPageContent('critical-care') as ServicePageData;

  return <ServicePageTemplate data={data} />;
}
