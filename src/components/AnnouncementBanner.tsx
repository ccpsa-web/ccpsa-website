'use client';

import { useEffect, useState } from 'react';

/**
 * Sitewide announcement banner(s).
 *
 * TEMPORARY notices. Each entry in ANNOUNCEMENTS renders as its own navy bar,
 * stacked above the header. A bar hides itself automatically on or after its
 * `hideOn` date (visitor local time), so no follow-up deploy is needed to take
 * it down. Each bar is independently dismissible (remembered per browser via
 * `dismissKey`). To remove one early, delete its entry below. To bring a
 * previously-dismissed bar back after editing its text, bump its `dismissKey`.
 */

type Announcement = {
  id: string;
  // Auto-hide date, format YYYY-MM-DD. Bar stops rendering once the visitor's
  // local date reaches this date (i.e. it shows through the day before).
  hideOn: string;
  dismissKey: string;
  // Accessible label for the region.
  label: string;
  content: React.ReactNode;
};

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'north-clinic-move',
    hideOn: '2026-08-31',
    dismissKey: 'ccpsa-banner-north-move-2026-08',
    label: 'Clinic relocation announcement',
    content: (
      <>
        <span className="font-semibold text-amber">North Clinic is moving.</span>{' '}
        Effective <span className="font-semibold">August 3, 2026</span>, our North
        Clinic will be located at{' '}
        <span className="font-semibold">
          905 W 124th Avenue, Suite 170, Westminster, CO 80234
        </span>
        . Same phone:{' '}
        <a href="tel:+13039510600" className="underline underline-offset-2">
          (303) 951-0600
        </a>
        .
      </>
    ),
  },
  {
    id: 'phone-system-upgrade',
    hideOn: '2026-09-04',
    dismissKey: 'ccpsa-banner-phone-upgrade-2026-09',
    label: 'Phone system update',
    content: (
      <>
        <span className="font-semibold text-amber">Phone system update:</span> In an
        effort to improve our level of service, we are in the process of upgrading
        our phone system (anticipated go-live date is{' '}
        <span className="font-semibold">9/3</span>). We apologize for any
        inconvenience related to our current phone solution. Thank you for your
        patience as we work to resolve these issues.
      </>
    ),
  },
];

export default function AnnouncementBanner() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const next: Record<string, boolean> = {};
    for (const a of ANNOUNCEMENTS) {
      try {
        if (window.localStorage.getItem(a.dismissKey) === '1') next[a.id] = true;
      } catch {
        /* ignore storage errors */
      }
    }
    setDismissed(next);
    setMounted(true);
  }, []);

  // Avoid SSR/hydration mismatch: render nothing until mounted on the client.
  if (!mounted) return null;

  const now = new Date();
  const visible = ANNOUNCEMENTS.filter(
    (a) => now < new Date(`${a.hideOn}T00:00:00`) && !dismissed[a.id]
  );

  if (visible.length === 0) return null;

  const dismiss = (a: Announcement) => {
    try {
      window.localStorage.setItem(a.dismissKey, '1');
    } catch {
      /* ignore storage errors */
    }
    setDismissed((prev) => ({ ...prev, [a.id]: true }));
  };

  return (
    <div>
      {visible.map((a) => (
        <div
          key={a.id}
          role="region"
          aria-label={a.label}
          className="relative bg-navy text-white border-b border-white/10"
        >
          <div className="mx-auto max-w-7xl px-4 py-3 pr-12 sm:px-6 lg:px-8">
            <p className="text-center text-sm leading-relaxed sm:text-base">
              {a.content}
            </p>
          </div>
          <button
            type="button"
            onClick={() => dismiss(a)}
            aria-label="Dismiss announcement"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
