'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface FormItem {
  title: string;
  description: string;
  fileName: string;
}

interface FormCategory {
  title: string;
  description: string;
  forms: FormItem[];
}

interface OnlineService {
  title: string;
  description: string;
  link: string;
  icon: string;
}

export interface PatientFormsData {
  heroTitle: string;
  heroSubtitle: string;
  beforeAppointmentHeading: string;
  beforeAppointmentBody1: string;
  beforeAppointmentBody2: string;
  formCategories: FormCategory[];
  onlineServices: OnlineService[];
  printingSteps: string[];
  onlineSteps: string[];
  helpPhone: string;
  helpEmail: string;
  helpAddress: string;
  helpCity: string;
  ctaHeading: string;
  ctaBody: string;
  ctaScheduleLink: string;
  ctaPhone: string;
  ctaPhoneRaw: string;
}

const ICON_MAP: Record<string, string> = {
  portal: '📱',
  schedule: '📅',
  payment: '💳',
  forms: '📝',
};

export default function PatientFormsClient({ data }: { data: PatientFormsData }) {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

      {/* Before Your Appointment */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">{data.beforeAppointmentHeading}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{data.beforeAppointmentBody1}</p>
              <p className="text-gray-600 leading-relaxed">
                {data.beforeAppointmentBody2}
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Form Categories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            {data.formCategories.map((category, catIdx) => (
              <div key={catIdx} className={catIdx > 0 ? 'mt-16' : ''}>
                <h2 className="text-3xl font-bold text-navy mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-8">{category.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.forms.map((form, formIdx) => (
                    <FadeInUp key={formIdx}>
                      <div className="bg-light-gray rounded-lg p-6 border border-gray-200 hover:border-amber hover:shadow-md transition-all duration-300">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-navy mb-1 group-hover:text-blue transition-colors">
                              {form.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{form.description}</p>
                          </div>
                          <svg className="h-5 w-5 text-amber flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>

                        <button
                          onClick={() => handleDownload(form.fileName)}
                          className="mt-4 inline-flex items-center gap-2 text-blue hover:text-navy font-medium transition-colors text-sm"
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Download PDF
                        </button>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>
            ))}
          </FadeInUp>
        </div>
      </section>

      {/* Online Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              Online Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.onlineServices.map((service, idx) => (
                <FadeInUp key={idx}>
                  <Link
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue group"
                  >
                    <div className="text-4xl mb-4">{ICON_MAP[service.icon] || '📋'}</div>
                    <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-blue group-hover:text-navy transition-colors">
                      <span className="text-sm font-medium">Access Now</span>
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">How to Use These Forms</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-light-gray rounded-lg p-8 border-l-4 border-blue">
                <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  Printing Forms
                </h3>
                <ol className="space-y-2 text-gray-600 text-sm">
                  {data.printingSteps.map((step, idx) => (
                    <li key={idx}>{idx + 1}. {step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-light-gray rounded-lg p-8 border-l-4 border-amber">
                <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Online Forms
                </h3>
                <ol className="space-y-2 text-gray-600 text-sm">
                  {data.onlineSteps.map((step, idx) => (
                    <li key={idx}>{idx + 1}. {step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-amber/5 border border-amber/20 rounded-lg p-8 max-w-2xl">
              <h2 className="text-2xl font-bold text-navy mb-4">Need Help With Forms?</h2>
              <p className="text-gray-600 mb-6">
                If you have questions about which forms to complete or need assistance filling them out, please contact us:
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-600">Call us at</p>
                    <a href={`tel:${data.helpPhone.replace(/[^\d]/g, '')}`} className="text-blue hover:text-navy font-medium transition-colors">
                      {data.helpPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-sm text-gray-600">Email us at</p>
                    <a href={`mailto:${data.helpEmail}`} className="text-blue hover:text-navy font-medium transition-colors">
                      {data.helpEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-600">Visit us at</p>
                    <p className="text-navy font-medium">
                      {data.helpAddress}<br />
                      {data.helpCity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Schedule Appointment CTA */}
      <section className="bg-amber text-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.ctaHeading}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{data.ctaBody}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={data.ctaScheduleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Schedule Online
              </a>
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
