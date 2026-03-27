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
  credentials?: string;
  locations?: string[];
  image?: string;
  bio?: string;
  order?: number;
}

interface TeamClientProps {
  providers: Provider[];
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

export default function TeamClient({ providers }: TeamClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProviders = useMemo(() => {
    if (activeCategory === 'all') {
      return providers;
    }
    return providers.filter((p) => p.category?.toLowerCase() === activeCategory);
  }, [providers, activeCategory]);

  const groupedByCategory = useMemo(() => {
    const groups: Record<string, Provider[]> = {};
    filteredProviders.forEach((provider) => {
      const category = provider.category || 'Other';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(provider);
    });
    return groups;
  }, [filteredProviders]);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              Board-certified specialists dedicated to providing exceptional care in critical care, pulmonary medicine, sleep medicine, and interventional pulmonology.
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
                      : 'border-navy/20 text-navy hover:border-amber hover:text-amber'
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
            {Object.entries(groupedByCategory).map(([category, categoryProviders]) => (
              <div key={category}>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-8 pb-4 border-b-2 border-amber">
                  {category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProviders.map((provider) => (
                    <FadeInUp key={provider.id} className="h-full">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                        {/* Photo */}
                        <div className="relative h-64 bg-gradient-to-br from-navy to-blue">
                          {provider.image ? (
                            <Image
                              src={provider.image}
                              alt={provider.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/50 text-center px-4">
                              <p className="text-sm font-medium">{provider.name}</p>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col">
                          {/* Category Badge */}
                          <div className="mb-3">
                            <span className="inline-block bg-amber/10 text-amber px-3 py-1 rounded-full text-xs font-semibold">
                              {provider.category}
                            </span>
                          </div>

                          {/* Name & Credentials */}
                          <h3 className="text-xl font-semibold text-navy mb-1">
                            {provider.credentials ? `${provider.name}, ${provider.credentials}` : provider.name}
                          </h3>

                          {/* Title */}
                          <p className="text-sm text-blue font-medium mb-4">{provider.title}</p>

                          {/* Locations */}
                          {provider.locations && provider.locations.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {provider.locations.map((location) => (
                                <span
                                  key={location}
                                  className="inline-block bg-blue/10 text-blue px-3 py-1 rounded-full text-xs font-medium"
                                >
                                  {location}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Bio */}
                          {provider.bio && (
                            <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4">
                              {provider.bio.substring(0, 180)}
                              {provider.bio.length > 180 ? '...' : ''}
                            </p>
                          )}

                          {/* CTA Link */}
                          <Link
                            href={`/our-team/${provider.id}`}
                            className="mt-auto inline-block bg-blue hover:bg-navy text-white px-4 py-2 rounded text-sm font-semibold transition-colors duration-200"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber text-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule an Appointment</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to work with one of our experienced providers? Book your appointment online or call us today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mountain.mycommonspirit.org/MCH/Authentication/Login?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Schedule Online
              </a>
              <a
                href="tel:3039510600"
                className="inline-block bg-white hover:bg-light-gray text-navy px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call (303) 951-0600
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
