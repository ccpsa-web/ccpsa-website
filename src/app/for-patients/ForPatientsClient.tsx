'use client';

import { useState } from 'react';
import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface Resource {
  title: string;
  description: string;
  link: string;
  external: boolean;
}

interface ResourceSection {
  title: string;
  resources: Resource[];
}

interface ClinicLocation {
  name: string;
  address: string;
  city: string;
  phone: string;
  fax: string;
}

export interface ForPatientsData {
  heroTitle: string;
  heroSubtitle: string;
  beforeYourVisit: string[];
  whatToExpectHeading: string;
  whatToExpectBody1: string;
  whatToExpectBody2: string;
  resourceSections: ResourceSection[];
  clinicLocations: ClinicLocation[];
  ctaHeading: string;
  ctaBody: string;
  ctaScheduleLink: string;
  ctaPhone: string;
  ctaPhoneRaw: string;
}

export default function ForPatientsClient({ data }: { data: ForPatientsData }) {
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.heroTitle}</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              {data.heroSubtitle}
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
                  {data.beforeYourVisit.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-amber flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber/5 rounded-lg shadow-md p-8 border border-amber/20">
                <h2 className="text-2xl font-bold text-navy mb-4">{data.whatToExpectHeading}</h2>
                <p className="text-gray-600 mb-4">{data.whatToExpectBody1}</p>
                <p className="text-gray-600">{data.whatToExpectBody2}</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* New Patients */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">New Patients</h2>

            <div className="bg-amber/5 border border-amber/20 rounded-lg p-8 mb-10 max-w-4xl">
              <p className="text-lg text-navy font-semibold mb-4">Please call to schedule your appointment.</p>
              <p className="text-gray-700">Please either fill out all paperwork online, OR print out the paperwork and complete it ahead of time, OR arrive to clinic 30 minutes early to fill out paperwork.</p>
            </div>

            <h3 className="text-xl font-semibold text-navy mb-6">New Patient Paperwork</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://criticalcare.medforward.com/FillOutForm.aspx?formname=Pulmonary_and_Sleep_Packet"
                target="_blank"
                rel="noopener noreferrer"
                className="group block no-underline bg-light-gray hover:bg-white hover:shadow-md rounded-lg p-6 transition-all duration-300 border border-gray-200 hover:border-amber"
              >
                <h4 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors">Fill Out Online</h4>
                <p className="text-sm text-gray-600">Complete the Pulmonary &amp; Sleep Packet online before your visit.</p>
                <div className="flex items-center gap-2 text-blue mt-3 group-hover:text-navy transition-colors">
                  <span className="text-sm font-medium">Open Form</span>
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
              <a
                href="/pdfs/CCPSA-New-Patient-Packet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group block no-underline bg-light-gray hover:bg-white hover:shadow-md rounded-lg p-6 transition-all duration-300 border border-gray-200 hover:border-amber"
              >
                <h4 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors">Print Form</h4>
                <p className="text-sm text-gray-600">Download the new patient packet PDF to print and complete by hand.</p>
                <div className="flex items-center gap-2 text-blue mt-3 group-hover:text-navy transition-colors">
                  <span className="text-sm font-medium">View PDF</span>
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Established Patients */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">Established Patients</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://mountain.mycommonspirit.org/MCH/Authentication/Login?"
                target="_blank"
                rel="noopener noreferrer"
                className="group block no-underline bg-white hover:shadow-md rounded-lg p-6 shadow-sm transition-all duration-300 border border-gray-200 hover:border-amber"
              >
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors">Online Scheduling</h3>
                <p className="text-sm text-gray-600">Schedule or reschedule your appointment online.</p>
                <div className="flex items-center gap-2 text-blue mt-3 group-hover:text-navy transition-colors">
                  <span className="text-sm font-medium">Schedule Now</span>
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
              <a
                href={`tel:${data.ctaPhoneRaw}`}
                className="group block no-underline bg-white hover:shadow-md rounded-lg p-6 shadow-sm transition-all duration-300 border border-gray-200 hover:border-amber"
              >
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors">Call to Schedule</h3>
                <p className="text-sm text-gray-600">Reach our office to schedule by phone.</p>
                <div className="flex items-center gap-2 text-blue mt-3 group-hover:text-navy transition-colors">
                  <span className="text-sm font-medium">{data.ctaPhone}</span>
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
              <a
                href="https://mountain.mycommonspirit.org/MCH/Billing/GuestPay/PayasGuest"
                target="_blank"
                rel="noopener noreferrer"
                className="group block no-underline bg-white hover:shadow-md rounded-lg p-6 shadow-sm transition-all duration-300 border border-gray-200 hover:border-amber"
              >
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors">Pay Your Bill</h3>
                <p className="text-sm text-gray-600">Pay your medical bills securely online.</p>
                <div className="flex items-center gap-2 text-blue mt-3 group-hover:text-navy transition-colors">
                  <span className="text-sm font-medium">Pay Now</span>
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Patient Resources */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {data.resourceSections.map((section, idx) => (
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
              {data.clinicLocations.map((clinic, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.ctaHeading}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{data.ctaBody}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:items-start">
              <div className="flex flex-col items-center">
                <a
                  href={data.ctaScheduleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
                >
                  Schedule Online
                </a>
                <p className="text-[0.9rem] italic text-navy/80 mt-2">(for established patients only)</p>
              </div>
              <a
                href={`tel:${data.ctaPhoneRaw}`}
                className="inline-block bg-white hover:bg-light-gray text-navy px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call {data.ctaPhone}
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
