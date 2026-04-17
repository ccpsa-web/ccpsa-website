import Link from 'next/link';
import Image from 'next/image';
import { getSettings } from '@/lib/content';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export default function Footer() {
  const settings = getSettings('footer');

  if (!settings) return null;

  const phoneHref = `tel:${(settings.phone || '').replace(/[^\d]/g, '')}`;
  const faxText = settings.fax;
  const emailHref = `mailto:${settings.email}`;

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Practice Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{settings.practiceName}</h3>
            <div className="text-sm space-y-2">
              <p>{settings.practiceFullName}</p>
              <p className="mt-4">
                <strong>Address:</strong><br />
                {settings.address}<br />
                {settings.city}
              </p>
              <p className="mt-2">
                <strong>Phone:</strong><br />
                <a href={phoneHref} className="hover:text-amber transition-colors">
                  {settings.phone}
                </a>
              </p>
              <p className="mt-2">
                <strong>Fax:</strong><br />
                {faxText}
              </p>
              <p className="mt-2">
                <strong>Email:</strong><br />
                <a href={emailHref} className="hover:text-amber transition-colors">
                  {settings.email}
                </a>
              </p>
            </div>

            {/* Review Links */}
            {settings.googleReviewUrl && settings.googleReviewImage && (
              <div className="flex items-center gap-4 mt-6">
                <a
                  href={settings.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={settings.googleReviewImage}
                    alt="Review us on Google"
                    width={80}
                    height={40}
                    className="h-8 w-auto rounded"
                  />
                </a>
              </div>
            )}
          </div>

          {/* Dynamic columns */}
          {(settings.columns as FooterColumn[] | undefined)?.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg mb-4">{column.heading}</h3>
              <ul className="text-sm space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="hover:text-amber transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue pt-6 text-sm text-center space-y-2">
          {settings.bottomBarLine1 && (
            <p className="text-amber font-semibold">{settings.bottomBarLine1}</p>
          )}
          <p>&copy; {new Date().getFullYear()} {settings.bottomBarCopyrightName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
