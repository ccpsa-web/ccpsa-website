'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface PolicySection {
  title: string;
  contentType: 'text' | 'list';
  content: string;
}

interface RightsDetail {
  title: string;
  description: string;
  style: string;
}

export interface PrivacyPolicyData {
  heroTitle: string;
  heroSubtitle: string;
  effectiveDate: string;
  sections: PolicySection[];
  privacyOfficerPhone: string;
  privacyOfficerEmail: string;
  privacyOfficerAddress: string;
  privacyOfficerCity: string;
  complaintAgency: string;
  complaintOffice: string;
  complaintEmail: string;
  rightsDetails: RightsDetail[];
  acknowledgementBody: string;
  ctaHeading: string;
  ctaBody: string;
  ctaPhone: string;
  ctaPhoneRaw: string;
}

export default function PrivacyPolicyClient({ data }: { data: PrivacyPolicyData }) {
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

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-12">
              <p className="text-gray-600 leading-relaxed">
                <strong>Effective Date:</strong> {data.effectiveDate}
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeInUp>
            {data.sections.map((section, idx) => (
              <div key={idx} className={idx > 0 ? 'mt-12' : ''}>
                <h2 className="text-2xl font-bold text-navy mb-4 pb-3 border-b-2 border-amber">
                  {section.title}
                </h2>

                {section.contentType === 'text' ? (
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                ) : (
                  <ul className="space-y-3">
                    {section.content.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-blue flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </FadeInUp>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue">
                <h3 className="text-xl font-semibold text-navy mb-6">Privacy Officer</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a href={`tel:${data.privacyOfficerPhone.replace(/[^\d]/g, '')}`} className="text-blue hover:text-navy font-medium transition-colors">
                      {data.privacyOfficerPhone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a href={`mailto:${data.privacyOfficerEmail}`} className="text-blue hover:text-navy font-medium transition-colors">
                      {data.privacyOfficerEmail}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <p className="text-navy font-medium">
                      {data.privacyOfficerAddress}<br />
                      {data.privacyOfficerCity}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber">
                <h3 className="text-xl font-semibold text-navy mb-6">To File a Complaint</h3>
                <p className="text-gray-600 mb-4">
                  If you believe your privacy rights have been violated, you can file a complaint with:
                </p>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong className="text-navy">{data.complaintAgency}</strong><br />
                    {data.complaintOffice}<br />
                    <a
                      href={`mailto:${data.complaintEmail}`}
                      className="text-blue hover:text-navy transition-colors"
                    >
                      {data.complaintEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">Important Information About Your Rights</h2>

            <div className="space-y-6">
              {data.rightsDetails.map((right, idx) => (
                <div key={idx} className={`bg-light-gray rounded-lg p-6 border-l-4 border-${right.style}`}>
                  <h3 className="font-semibold text-navy mb-2">{right.title}</h3>
                  <p className="text-gray-600 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Acknowledgement Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-amber/5 border border-amber/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Acknowledgement of Receipt</h2>
              <p className="text-gray-600 mb-6">{data.acknowledgementBody}</p>
              <div className="flex gap-4">
                <Link
                  href="/patient-forms"
                  className="inline-block bg-blue hover:bg-navy text-white px-6 py-3 rounded font-semibold transition-colors duration-200"
                >
                  Download Privacy Notice
                </Link>
                <a
                  href={`tel:${data.ctaPhoneRaw}`}
                  className="inline-block bg-navy hover:bg-blue text-white px-6 py-3 rounded font-semibold transition-colors duration-200"
                >
                  Request Paper Copy
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-amber text-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl font-bold mb-4">{data.ctaHeading}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{data.ctaBody}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.ctaPhoneRaw}`}
                className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call {data.ctaPhone}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white hover:bg-light-gray text-navy px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
