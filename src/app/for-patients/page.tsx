'use client';

import { useState } from 'react';
import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface Resource {
  title: string;
  description: string;
  link?: string;
  external?: boolean;
}

interface ResourceSection {
  title: string;
  resources: Resource[];
}

const CLINIC_LOCATIONS = [
  {
    name: 'West Clinic',
    address: '274 Union Blvd. Suite 200',
    city: 'Lakewood, CO 80228',
    phone: '(303) 951-0600',
    fax: '(303) 951-0605',
  },
  {
    name: 'North Clinic',
    address: '11450 Commons Drive',
    city: 'Westminster, CO 80020',
    phone: '(720) 962-2200',
    fax: '(720) 962-2207',
  },
  {
    name: 'South Clinic',
    address: '2950 South Gartland Street',
    city: 'Parker, CO 80134',
    phone: '(720) 851-8300',
    fax: '(720) 851-8307',
  },
  {
    name: 'Central Clinic',
    address: '9220 South Simms Street, Suite B',
    city: 'Littleton, CO 80127',
    phone: '(303) 794-9700',
    fax: '(303) 794-9707',
  },
];

const RESOURCE_SECTIONS: ResourceSection[] = [
  {
    title: 'Patient Resources',
    resources: [
      {
        title: 'Online Scheduling',
        description: 'Schedule your appointment at your convenience.',
        link: 'https://mountain.mycommonspirit.org/MCH/Authentication/Login?',
        external: true,
      },
      {
        title: 'Patient Portal - Epic MyChart',
        description: 'Access your medical records, test results, and communicate with your care team.',
        link: 'https://mountain.mycommonspirit.org/MCH/Authentication/Login?',
        external: true,
      },
      {
        title: 'Online Bill Payment',
        description: 'Pay your medical bills securely online.',
        link: 'https://mountain.mycommonspirit.org/MCH/Authentication/Login?',
        external: true,
      },
      {
        title: 'Patient Information & Paperwork',
        description: 'Download and complete patient forms before your visit.',
        link: '/patient-forms',
      },
      {
        title: 'Notice of Privacy Practices',
        description: 'Review our HIPAA privacy practices and your patient rights.',
        link: '/privacy-policy',
      },
    ],
  },
  {
    title: 'Insurance & Billing',
    resources: [
      {
        title: 'Current Billing (7/1/2018 - Present)',
        description: 'Information about recent billing and payment options.',
      },
      {
        title: 'Prior Billing (Before 7/1/2018)',
        description: 'Historical billing information available upon request.',
      },
      {
        title: 'Insurance Coverage',
        description: 'We accept most major insurance plans. Contact us to verify your coverage.',
      },
    ],
  },
];

export default function ForPatients() {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">For Patients</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              We&apos;re here to help. Find resources, schedule appointments, and get the answers you need.
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
                <h2 className="text-2xl font-bold text-navy mb-4">Before Your Visit</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-600">Arrive 10-15 minutes early to check in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-600">Bring your insurance card and photo ID</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-600">Bring a list of current medications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-600">Bring recent medical records if available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-600">Complete patient paperwork online if possible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber/5 rounded-lg shadow-md p-8 border border-amber/20">
                <h2 className="text-2xl font-bold text-navy mb-4">What to Expect</h2>
                <p className="text-gray-600 mb-4">
                  Our clinical staff will conduct a brief evaluation, take vital signs, and review your medical history. Your physician will then spend time with you to discuss your symptoms, perform an exam, and develop a personalized care plan.
                </p>
                <p className="text-gray-600">
                  We&apos;re committed to providing compassionate, evidence-based care in a comfortable and professional environment.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Patient Resources */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {RESOURCE_SECTIONS.map((section, idx) => (
            <FadeInUp key={idx} className={idx > 0 ? 'mt-16' : ''}>
              <h2 className="text-3xl font-bold text-navy mb-8">{section.title}</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {section.resources.map((resource, rIdx) => (
                  <div key={rIdx} className="group bg-light-gray hover:bg-white hover:shadow-md rounded-lg p-6 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-amber">
                    <Link
                      href={resource.link || '#'}
                      target={resource.external ? '_blank' : undefined}
                      rel={resource.external ? 'noopener noreferrer' : undefined}
                      className="block no-underline"
                    >
                      <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors duration-200">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        {resource.description}
                      </p>
                      {resource.link && (
                        <div className="flex items-center gap-2 text-blue mt-3 group-hover:text-navy transition-colors">
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
          ))}
        </div>
      </section>

      {/* Clinic Locations */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">Clinic Locations</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {CLINIC_LOCATIONS.map((clinic, idx) => (
                <FadeInUp key={idx}>
                  <div
                    onClick={() => setExpandedLocation(expandedLocation === clinic.name ? null : clinic.name)}
                    className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-navy mb-4">{clinic.name}</h3>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-amber mt-1">📍</span>
                        <div>
                          <p>{clinic.address}</p>
                          <p>{clinic.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber">📞</span>
                        <Link href={`tel:${clinic.phone.replace(/[^\d]/g, '')}`} className="hover:text-blue transition-colors">
                          {clinic.phone}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber">📠</span>
                        <span>{clinic.fax}</span>
                      </div>
                    </div>

                    <Link
                      href={`https://maps.google.com/maps?q=${encodeURIComponent(`${clinic.address} ${clinic.city}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue hover:text-navy font-medium text-sm transition-colors"
                    >
                      Get Directions →
                    </Link>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Use our online scheduling system or call us today to book your appointment with one of our specialists.
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
