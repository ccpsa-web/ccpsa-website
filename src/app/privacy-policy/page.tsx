import { getPageContent } from '@/lib/content';
import PrivacyPolicyClient from './PrivacyPolicyClient';
import type { PrivacyPolicyData } from './PrivacyPolicyClient';

export default function PrivacyPolicy() {
  const data = getPageContent('privacy-policy') as PrivacyPolicyData;

  return <PrivacyPolicyClient data={data} />;
}
