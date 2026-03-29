'use client';

import { useState } from 'react';
import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface PageContent {
  [key: string]: any;
}

interface ForPatientsClientProps {
  content: PageContent;
}

export default function ForPatientsClient({ content }: ForPatientsClientProps) {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  if (!content) {
    return <div>Loading...</div>;
  }

  const clinicLocations = content.clinicLocations || [];
  const patientResources = content.patientResources || [];
  const insuranceBilling = content.insuranceBilling || [];
  const whatToExpectParagraphs = content.whatToExpectText?.split('\n\n') || [];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              {content.subtitle}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Before Your Visit */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-navy mb-4">{content.beforeVisitTitle}</h2>
                <ul className="space-y-3">
                  {(content.beforeVisitItems || []).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-amber flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber/5 rounded-lg shadow-md p-8 border border-amber/20">
                <h2 className="text-2xl font-bold text-navy mb-4">{content.whatToExpectTitle}</h2>
                {whatToExpectParagraphs.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Patient Resources */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Patient Resources Section */}
          <FadeInUp className="mb-16">
            <h2 className="text-3xl font-bold text-navy mb-8">Patient Resources</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {patientResources.map((resource: any, rIdx: number) => (
                <div key={rIdx} className="group bg-light-gray hover:bg-white hover:shadow-md rounded-lg p-6 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-amber">
                  <Link
                    href={resource.link || '#'}
                    target={resource.external ? '_blank' : undefined}
                    rel={resource.external ? 'noopener noreferrer' : undefined}
                    className="block no-underline"
                  >
                    <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue-text transition-colors duration-200">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      {resource.description}
                    </p>
                    {resource.link && (
                      <div className="flex items-center gap-2 text-blue-text mt-3 group-hover:text-navy transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* Insurance & Billing Section */}
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">Insurance & Billing</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {insuranceBilling.map((resource: any, rIdx: number) => (
                <div key={rIdx} className="group bg-light-gray hover:bg-white hover:shadow-md rounded-lg p-6 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-amber">
                  <Link
                    href={resource.link || '#'}
                    target={resource.external ? '_blank' : undefined}
                    rel={resource.external ? 'noopener noreferrer' : undefined}
                    className="block no-underline"
                  >
                    <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue-text transition-colors duration-200">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      {resource.description}
                    </p>
                    {resource.link && (
                      <div className="flex items-center gap-2 text-blue-text mt-3 group-hover:text-navy transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Clinic Locations */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">Clinic Locations</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {clinicLocations.map((clinic: any, idx: number) => (
                <FadeInUp key={idx}>
                  <button
                    type="button"
                    onClick={() => setExpandedLocation(expandedLocation === clinic.name ? null : clinic.name)}
                    className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full text-left"
                    aria-expanded={expandedLocation === clinic.name}
                  >
                    <h3 className="text-lg font-semibold text-navy mb-4">{clinic.name}</h3>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-amber mt-1" role="img" aria-label="Address">📍</span>
                        <div>
                          <p>{clinic.address}</p>
                          <p>{clinic.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber" role="img" aria-label="Phone">📞</span>
                        <Link href={`tel:${clinic.phone.replace(/[^\d]/g, '')}`} className="hover:text-blue-text transition-colors">
                          {clinic.phone}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber" role="img" aria-label="Fax">📠</span>
                        <span>{clinic.fax}</span>
                      </div>
                    </div>

                    <Link
                      href={`https://maps.google.com/maps?q=${encodeURIComponent(`${clinic.address} ${clinic.city}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue-text hover:text-navy font-medium text-sm transition-colors"
                    >
                      Get Directions →
                    </Link>
                  </button>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber text-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {content.ctaText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={content.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Schedule Online
              </a>
              <a
                href={`tel:${content.phone?.replace(/[^\d]/g, '')}`}
                className="inline-block bg-white hover:bg-light-gray text-navy px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call {content.phone}
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
