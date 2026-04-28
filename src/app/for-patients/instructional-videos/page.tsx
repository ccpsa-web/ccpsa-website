import { getPageContent } from '@/lib/content';
import InstructionalVideosClient from './InstructionalVideosClient';
import type { InstructionalVideosData } from './InstructionalVideosClient';

export const metadata = {
  title: 'Instructional Videos | Critical Care, Pulmonary & Sleep Associates',
  description:
    'Step-by-step video guides for using inhalers (MDI with spacer, Flexhaler, Aerolizer, Twisthaler, Diskus) and nebulizers correctly.',
};

export default function InstructionalVideos() {
  const data = getPageContent('instructional-videos') as InstructionalVideosData;
  return <InstructionalVideosClient data={data} />;
}
