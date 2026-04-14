'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Our Care', href: '/#services' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Join Our Team', href: '/join-our-team' },
    { label: 'For Patients', href: '/for-patients' },
    { label: 'For Physicians', href: '/for-physicians' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top contact bar - desktop only */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-navy border-b border-light-gray">
          <span className="mr-6">Phone: (303) 951-0600</span>
          <span>Email: info@critcareMD.com</span>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/site/ccpsa-logo.png"
              alt="CCPSA Logo"
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy hover:text-blue transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-navy hover:bg-light-gray rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-light-gray">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-navy hover:bg-light-gray transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3 border-t border-light-gray">
              <p className="text-sm text-navy mb-2">Phone: (303) 951-0600</p>
              <p className="text-sm text-navy">Email: info@critcareMD.com</p>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
