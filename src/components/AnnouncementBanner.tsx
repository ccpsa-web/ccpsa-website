'use client';

import { useEffect, useState } from 'react';

/**
 * Sitewide announcement banner.
 *
 * TEMPORARY — North Clinic relocation notice.
 * The banner hides itself automatically on or after HIDE_ON (local time),
 * so no follow-up deploy is required to take it down. To remove it early or
 * change the message, edit the constants below or delete this component and
 * its import in src/app/layout.tsx.
 */

// Auto-hide date (inclusive of the day before). Banner stops rendering once
// the visitor's local date reaches this date. Format: YYYY-MM-DD.
const HIDE_ON = '2026-08-31';

// Bump this key if the message changes and you want previously-dismissed
// visitors to see the new banner.
const DISMISS_KEY = 'ccpsa-banner-north-move-2026-08';

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expired = new Date() >= new Date(`${HIDE_ON}T00:00:00`);
    const dismissed =
      typeof window !== 'undefined' &&
      window.localStorage.getItem(DISMISS_KEY) === '1';
    if (!expired && !dismissed) setVisible(true);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Clinic relocation announcement"
      className="relative bg-navy text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 pr-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm leading-relaxed sm:text-base">
          <span className="font-semibold text-amber">North Clinic is moving.</span>{' '}
          Effective <span className="font-semibold">August 3, 2026</span>, our North
          Clinic will be located at{' '}
          <span className="font-semibold">
            905 W 124th Avenue, Suite 170, Westminster, CO 80234
          </span>
          . Same phone: <a href="tel:+13039510600" className="underline underline-offset-2">(303) 951-0600</a>.
        </p>
      </div>
      <button
        type="button"
        onClick={dismiss}
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
  );
}
