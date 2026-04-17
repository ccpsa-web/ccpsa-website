import { getSettings } from '@/lib/content';
import HeaderNav from './HeaderNav';

const DEFAULT_LOGO_IMAGE = '/images/site/ccpsa-logo.png';
const DEFAULT_LOGO_ALT = 'CCPSA Logo';
const DEFAULT_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our Care', href: '/#services' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Join Our Team', href: '/join-our-team' },
  { label: 'For Patients', href: '/for-patients' },
  { label: 'For Physicians', href: '/for-physicians' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const settings = getSettings('header');

  return (
    <HeaderNav
      logoImage={settings?.logoImage || DEFAULT_LOGO_IMAGE}
      logoAlt={settings?.logoAlt || DEFAULT_LOGO_ALT}
      navLinks={settings?.navLinks || DEFAULT_NAV_LINKS}
    />
  );
}
