import { getPageContent } from '@/lib/content';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { ServicePageData } from '@/components/ServicePageTemplate';

export default function SleepMedicinePage() {
  const data = getPageContent('sleep-medicine') as ServicePageData;

  return <ServicePageTemplate data={data} />;
}
