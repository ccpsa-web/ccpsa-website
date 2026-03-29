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

      {/* Quick Access Cards */}
      {content.quickAccessCards && content.quickAccessCards.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <FadeInUp>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  {content.quickAccessTitle}
                </h2>
                <p className="text-lg text-gray-600">
                  {content.quickAccessSubtitle}
                </p>
              </div>
            </FadeInUp>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {(() => {
                const cardGradients = ['from-navy to-blue', 'from-blue to-cyan-600', 'from-amber to-orange-500'];
                return content.quickAccessCards.map((card: any, idx: number) => (
                  <div key={idx} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden rounded-lg flex flex-col" style={{transitionDelay: `${idx * 100}ms`}}>
                    <div className={`bg-gradient-to-r ${cardGradients[idx]} p-6 text-white`}>
                      {idx === 0 && <svg className="h-10 w-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>}
                      {idx === 1 && <svg className="h-10 w-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
                      {idx === 2 && <svg className="h-10 w-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><path d="M16 3l-4 4-4-4"></path></svg>}
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 mb-6 flex-grow">{card.description}</p>
                      <a href={content.scheduleUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-navy hover:bg-blue text-white font-semibold transition-all duration-300 group-hover:shadow-lg rounded-lg py-2 px-4 inline-flex items-center justify-center">
                        {card.buttonText}
                        <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </section>
      )}

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
