'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface Provider {
  id: string;
  name: string;
  title: string;
  category: string;
  categories?: string[];
  credentials?: string;
  locations?: string[];
  image?: string;
  bio?: string;
  order?: number;
}

interface PageContent {
  title?: string;
  subtitle?: string;
  ctaTitle?: string;
  ctaText?: string;
  phone?: string;
  scheduleUrl?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface TeamClientProps {
  providers: Provider[];
  content?: PageContent | null;
}

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'critical-care', label: 'Critical Care' },
  { key: 'interventional-pulmonology', label: 'Interventional Pulmonology' },
  { key: 'outpatient-pulmonary-sleep', label: 'Outpatient Pulmonary & Sleep' },
  { key: 'app', label: 'APP' },
  { key: 'allied-health', label: 'Allied Health' },
  { key: 'executive', label: 'Executive' },
];

export default function TeamClient({ providers, content }: TeamClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProviders = useMemo(() => {
    if (activeCategory === 'all') {
      return providers;
    }
    return providers.filter((p) => {
      const cats = p.categories || [p.category?.toLowerCase()];
      return cats.some((c) => c?.toLowerCase() === activeCategory);
    });
  }, [providers, activeCategory]);

  const groupedByCategory = useMemo(() => {
    const groups: Record<string, Provider[]> = {};
    if (activeCategory === 'all') {
      filteredProviders.forEach((provider) => {
        const cats = provider.categories || [provider.category || 'Other'];
        cats.forEach((cat) => {
          if (!groups[cat]) {
            groups[cat] = [];
          }
          groups[cat].push(provider);
        });
      });
    } else {
      filteredProviders.forEach((provider) => {
        if (!groups[activeCategory]) {
          groups[activeCategory] = [];
        }
        groups[activeCategory].push(provider);
      });
    }
    return groups;
  }, [filteredProviders, activeCategory]);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content?.title || 'Our Team'}</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              {content?.subtitle || 'Board-certified specialists dedicated to providing exceptional care in critical care, pulmonary medicine, sleep medicine, and interventional pulmonology.'}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">Find Your Provider</h2>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                    activeCategory === cat.key
                      ? 'bg-amber border-amber text-white'
                      : 'border-navy/20 text-navy hover:border-amber hover:text-amber-text'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Provider Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {Object.entries(groupedByCategory).map(([category, categoryProviders]) => {
              const categoryLabel = CATEGORIES.find((c) => c.key === category)?.label || category;
              return (
              <div key={category}>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-8 pb-4 border-b-2 border-amber">
                  {categoryLabel}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {categoryProviders.map((provider) => {
                    const displayTitle = provider.title
                      ?.replace(/,?\s*Attending Physician/gi, '')
                      .replace(/Attending Physician,?\s*/gi, '')
                      .trim();

                    return (
                    <FadeInUp key={provider.id} className="h-full">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                        {/* Photo */}
                        <div className="relative h-48 bg-gradient-to-br from-navy to-blue">
                          {provider.image ? (
                            <Image
                              src={provider.image}
                              alt={`${provider.name}, ${provider.title || 'Provider'}`}
                              fill
                              className="object-cover object-top"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/50 text-center px-4">
                              <p className="text-sm font-medium">{provider.name}</p>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4 flex-grow flex flex-col">
                          {/* Name & Credentials */}
                          <h3 className="text-base font-semibold text-navy mb-1">
                            {provider.credentials ? `${provider.name}, ${provider.credentials}` : provider.name}
                          </h3>

                          {/* Title (without Attending Physician) */}
                          {displayTitle && (
                            <p className="text-xs text-blue-text font-medium mb-3">{displayTitle}</p>
                          )}

                          {/* Locations */}
                          {provider.locations && provider.locations.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {provider.locations.map((location) => (
                                <span
                                  key={location}
                                  className="inline-block bg-blue/10 text-blue-text px-2 py-0.5 rounded-full text-xs font-medium"
                                >
                                  {location}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Bio */}
                          {provider.bio && (
                            <p className="text-xs text-gray-600 leading-relaxed flex-grow mb-3">
                              {provider.bio.substring(0, 140)}
                              {provider.bio.length > 140 ? '...' : ''}
                            </p>
                          )}

                          {/* CTA Link */}
                          <Link
                            href={`/our-team/${provider.id}`}
                            className="mt-auto inline-block bg-blue hover:bg-navy text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors duration-200"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </FadeInUp>
                    );
                  })}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber text-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content?.ctaTitle || 'Schedule an Appointment'}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {content?.ctaText || 'Ready to work with one of our experienced providers? Book your appointment online or call us today.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={content?.scheduleUrl || 'https://mountain.mycommonspirit.org/MCH/Authentication/Login?'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Schedule Online
              </a>
              <a
                href={`tel:${content?.phone?.replace(/[^\d]/g, '') || '3039510600'}`}
                className="inline-block bg-white hover:bg-light-gray text-navy px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call {content?.phone || '(303) 951-0600'}
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
