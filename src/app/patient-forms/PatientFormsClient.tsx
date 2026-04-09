'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface PageContent {
  [key: string]: any;
}

interface PatientFormsClientProps {
  content: PageContent;
}

export default function PatientFormsClient({ content }: PatientFormsClientProps) {
  if (!content) {
    return <div>Loading...</div>;
  }

  const newPatientForms = content.newPatientForms || [];
  const establishedPatientForms = content.establishedPatientForms || [];
  const downloadableForms = content.downloadableForms || [];
  const onlineServices = content.onlineServices || [];
  const beforeAppointmentParagraphs = content.beforeAppointmentText?.split('\n\n') || [];
  const addressLines = content.address?.split('\n') || [];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              {content.subtitle}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Before Your Appointment */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">Before Your Appointment</h2>
              {beforeAppointmentParagraphs.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph.split('<a ').length > 1 ? (
                    <>
                      {paragraph.split('<a ')[0]}
                      {paragraph.includes('tel:') ? (
                        <a href={`tel:${content.phone?.replace(/[^\d]/g, '')}`} className="text-blue-text hover:text-navy font-medium">
                          {content.phone}
                        </a>
                      ) : null}
                      {paragraph.split('</a>')[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
              {!beforeAppointmentParagraphs.some((p: string) => p.includes('phone')) && (
                <p className="text-gray-600 leading-relaxed">
                  If you need assistance completing any forms, please call us at{' '}
                  <a href={`tel:${content.phone?.replace(/[^\d]/g, '')}`} className="text-blue-text hover:text-navy font-medium">
                    {content.phone}
                  </a>
                  .
                </p>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* New Patient Paperwork */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-2">New Patient Paperwork</h2>
            <p className="text-gray-600 mb-8">Required for all new patients visiting our clinics for the first time.</p>

            <div className="grid md:grid-cols-2 gap-6">
              {newPatientForms.map((form: any, idx: number) => (
                <FadeInUp key={idx}>
                  <a
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-light-gray rounded-lg p-6 border border-gray-200 hover:border-amber hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-navy mb-1">{form.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{form.description}</p>
                      </div>
                      <svg className="h-5 w-5 text-amber flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                    <span className="inline-flex items-center gap-2 text-blue-text font-medium text-sm">
                      Fill Out Online
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </FadeInUp>
              ))}
            </div>

            {/* Established Patient Paperwork */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-navy mb-2">Established Patient Paperwork</h2>
              <p className="text-gray-600 mb-8">Please complete all three of the following forms before your next in-office or telehealth appointment.</p>

              <div className="grid md:grid-cols-2 gap-6">
                {establishedPatientForms.map((form: any, idx: number) => (
                  <FadeInUp key={idx}>
                    <a
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-light-gray rounded-lg p-6 border border-gray-200 hover:border-amber hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-navy mb-1">{form.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{form.description}</p>
                        </div>
                        <svg className="h-5 w-5 text-amber flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                      <span className="inline-flex items-center gap-2 text-blue-text font-medium text-sm">
                        Fill Out Online
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Downloadable Forms */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-navy mb-2">Additional Forms & Documents</h2>
              <p className="text-gray-600 mb-8">Downloadable PDF forms and reference documents.</p>

              <div className="grid md:grid-cols-2 gap-6">
                {downloadableForms.map((form: any, idx: number) => (
                  <FadeInUp key={idx}>
                    <div className="bg-light-gray rounded-lg p-6 border border-gray-200 hover:border-amber hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-navy mb-1">{form.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{form.description}</p>
                        </div>
                        <svg className="h-5 w-5 text-amber flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                      <button
                        onClick={() => handleDownload(form.fileName)}
                        className="inline-flex items-center gap-2 text-blue-text hover:text-navy font-medium transition-colors text-sm"
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

            <div className="grid md:grid-cols-3 gap-6">
              {onlineServices.map((service: any, idx: number) => (
                <FadeInUp key={idx}>
                  <Link
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue group"
                  >
                    <div className="text-4xl mb-4" role="img" aria-label={service.iconLabel || ''}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue-text transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-blue-text group-hover:text-navy transition-colors">
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

      {/* Contact Section */}{/* Contact Section */}
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
                  <span className="text-2xl" role="img" aria-label="Phone">📞</span>
                  <div>
                    <p className="text-sm text-gray-600">Call us at</p>
                    <a href={`tel:${content.phone?.replace(/[^\d]/g, '')}`} className="text-blue-text hover:text-navy font-medium transition-colors">
                      {content.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label="Email">✉️</span>
                  <div>
                    <p className="text-sm text-gray-600">Email us at</p>
                    <a href={`mailto:${content.email}`} className="text-blue-text hover:text-navy font-medium transition-colors">
                      {content.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl" role="img" aria-label="Address">📍</span>
                  <div>
                    <p className="text-sm text-gray-600">Visit us at</p>
                    <p className="text-navy font-medium">
                      {addressLines.map((line: string, idx: number) => (
                        <span key={idx}>
                          {line}
                          {idx < addressLines.length - 1 && <br />}
                        </span>
                      ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {content.ctaText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col items-center">
                <a
                  href={content.scheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
                >
                  Schedule Online
                </a>
                <span className="text-sm text-navy/70 mt-2">(established patients)</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href={`tel:${content.phone?.replace(/[^\d]/g, '')}`}
                  className="inline-block bg-white hover:bg-light-gray text-navy px-8 py-3 rounded font-semibold transition-colors duration-200"
                >
                  Call {content.phone}
                </a>
                <span className="text-sm text-navy/70 mt-2">(new patients)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
