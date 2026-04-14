import { getPageContent } from '@/lib/content';
import ForPhysiciansClient from './ForPhysiciansClient';
import type { ForPhysiciansData } from './ForPhysiciansClient';

export default function ForPhysicians() {
  const data = getPageContent('for-physicians') as ForPhysiciansData;

  return <ForPhysiciansClient data={data} />;
}
