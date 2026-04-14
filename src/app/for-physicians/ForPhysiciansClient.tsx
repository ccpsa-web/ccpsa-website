'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
}

interface ReferralSection {
  title: string;
  items: string[];
}

interface ExcellenceItem {
  title: string;
  description: string;
}

interface OfficeInfo {
  title: string;
  address: string;
  city: string;
  phone: string;
  fax: string;
  email: string;
}

export interface ForPhysiciansData {
  heroTitle: string;
  heroSubtitle: string;
  aboutHeading: string;
  aboutBody1: string;
  aboutBody2: string;
  services: Service[];
  referralSections: ReferralSection[];
  officeInfo: OfficeInfo;
  excellenceHeading: string;
  excellenceBody: string;
  excellenceItems: ExcellenceItem[];
  ctaHeading: string;
  ctaBody: string;
  ctaPhone: string;
  ctaPhoneRaw: string;
  ctaFax: string;
  ctaFaxRaw: string;
  ctaEmail: string;
}

export default function ForPhysiciansClient({ data }: { data: ForPhysiciansData }) {
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

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">{data.aboutHeading}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{data.aboutBody1}</p>
              <p className="text-gray-600 leading-relaxed">{data.aboutBody2}</p>
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
              {data.services.map((service, idx) => (
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
              {data.referralSections.map((section, idx) => (
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

            <div className="bg-light-gray rounded-lg shadow-md p-8 border-l-4 border-blue max-w-2xl">
              <h3 className="text-xl font-semibold text-navy mb-6">{data.officeInfo.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-medium text-navy">{data.officeInfo.address}</p>
                    <p className="text-gray-600">{data.officeInfo.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <Link href={`tel:${data.officeInfo.phone.replace(/[^\d]/g, '')}`} className="text-blue hover:text-navy font-medium transition-colors">
                    {data.officeInfo.phone}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📠</span>
                  <span className="text-gray-600">{data.officeInfo.fax}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 mb-3">
                  For consultation requests and referrals, please contact us at:
                </p>
                <Link href={`mailto:${data.officeInfo.email}`} className="text-blue hover:text-navy font-medium transition-colors">
                  {data.officeInfo.email}
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Clinical Excellence Section */}
      <section className="py-16 md:py-20 bg-amber text-navy">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.excellenceHeading}</h2>
              <p className="text-lg max-w-2xl mx-auto">{data.excellenceBody}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {data.excellenceItems.map((item, idx) => (
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
            <h2 className="text-2xl font-bold text-navy mb-6">{data.ctaHeading}</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{data.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.ctaPhoneRaw}`}
                className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call {data.ctaPhone}
              </a>
              <a
                href={`fax:${data.ctaFaxRaw}`}
                className="inline-block bg-blue hover:bg-navy text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Fax {data.ctaFax}
              </a>
              <a
                href={`mailto:${data.ctaEmail}`}
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
