import { getPageContent } from '@/lib/content';
import ForPhysiciansClient from './ForPhysiciansClient';

export default function ForPhysicians() {
  const content = getPageContent('for-physicians');
  if (!content) return null;

  return <ForPhysiciansClient content={content} />;
}
