'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    title: 'Critical Care Services',
    description: 'Comprehensive ICU coverage and consultation for critically ill patients across multiple hospital sites.',
  },
  {
    title: 'Pulmonary Medicine',
    description: 'Board-certified pulmonologists providing outpatient pulmonary services and hospital consultations.',
  },
  {
    title: 'Interventional Pulmonology',
    description: 'Advanced procedures including bronchoscopy, transbronchial biopsies, and airway management.',
  },
  {
    title: 'Sleep Medicine',
    description: 'Comprehensive sleep disorder diagnosis and treatment in our accredited sleep labs.',
  },
  {
    title: 'Neurocritical Care',
    description: 'Specialized care for neurologically ill and injured patients in our ICUs.',
  },
];

const REFERRAL_INFO = [
  {
    title: 'How to Refer a Patient',
    items: [
      'Call our main office at (303) 951-0600',
      'Fax referral forms to (303) 951-0605',
      'Use our online patient portal for direct consultation requests',
      'Patients can self-schedule via our online system',
    ],
  },
  {
    title: 'What We Need',
    items: [
      'Patient name and contact information',
      'Insurance details (if available)',
      'Pertinent medical history and medications',
      'Current imaging or test results',
      'Clinical question or reason for consultation',
    ],
  },
];

const OFFICE_INFO = [
  {
    title: 'Main Office',
    details: {
      address: '274 Union Blvd. Suite 200',
      city: 'Lakewood, CO 80228',
      phone: '(303) 951-0600',
      fax: '(303) 951-0605',
    },
  },
];

export default function ForPhysicians() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">For Physicians</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              Partner with our board-certified specialists for comprehensive critical care, pulmonary, sleep, and interventional services.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">About CCPSA</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Critical Care, Pulmonary and Sleep Associates has been proudly serving the Denver metro area for over 40 years. As an independent, physician-owned practice, we provide specialized critical care, pulmonary, sleep, and interventional pulmonary services to multiple CommonSpirit and AdventHealth hospitals and outpatient clinics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of over 30 board-certified physicians works collaboratively with referring physicians and hospital partners to deliver exceptional patient care and outcomes.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">Our Services</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((service, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-light-gray hover:bg-amber/5 rounded-lg p-6 border border-gray-200 hover:border-amber transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue text-white">
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 11l3 3L22 4" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* How to Refer */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-12 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              How to Refer a Patient
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {REFERRAL_INFO.map((section, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber">
                    <h3 className="text-2xl font-semibold text-navy mb-6">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3">
                          <svg className="h-5 w-5 text-blue flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">Contact Us</h2>

            {OFFICE_INFO.map((office, idx) => (
              <div key={idx} className="bg-light-gray rounded-lg shadow-md p-8 border-l-4 border-blue max-w-2xl">
                <h3 className="text-xl font-semibold text-navy mb-6">{office.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-medium text-navy">{office.details.address}</p>
                      <p className="text-gray-600">{office.details.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <Link href={`tel:${office.details.phone.replace(/[^\d]/g, '')}`} className="text-blue hover:text-navy font-medium transition-colors">
                      {office.details.phone}
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📠</span>
                    <span className="text-gray-600">{office.details.fax}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-sm text-gray-600 mb-3">
                    For consultation requests and referrals, please contact us at:
                  </p>
                  <Link href="mailto:info@critcareMD.com" className="text-blue hover:text-navy font-medium transition-colors">
                    info@critcareMD.com
                  </Link>
                </div>
              </div>
            ))}
          </FadeInUp>
        </div>
      </section>

      {/* Clinical Excellence Section */}
      <section className="py-16 md:py-20 bg-amber text-navy">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Clinical Excellence & Collaboration</h2>
              <p className="text-lg max-w-2xl mx-auto">
                We&apos;re committed to providing evidence-based, collaborative care and maintaining the highest standards of clinical practice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Board Certified', description: 'All physicians are board-certified in their specialties' },
                { title: 'Multidisciplinary Care', description: 'Collaborative approach with hospital teams and specialists' },
                { title: 'Continuous Improvement', description: 'Ongoing education and adoption of best practices' },
              ].map((item, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-6 text-center">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-navy/80">{item.description}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-2xl font-bold text-navy mb-6">Need to Refer a Patient?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to refer a patient or discuss a case with one of our specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3039510600"
                className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call (303) 951-0600
              </a>
              <a
                href="fax:3039510605"
                className="inline-block bg-blue hover:bg-navy text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Fax (303) 951-0605
              </a>
              <a
                href="mailto:info@critcareMD.com"
                className="inline-block bg-amber hover:bg-amber/90 text-navy px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Email Us
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
