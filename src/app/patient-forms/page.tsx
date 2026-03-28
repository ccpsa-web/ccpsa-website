'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface OnlineForm {
  title: string;
  description: string;
  url: string;
}

interface DownloadableForm {
  title: string;
  description: string;
  fileName: string;
}

const NEW_PATIENT_FORMS: OnlineForm[] = [
  {
    title: 'New Patient Paperwork (Pulmonary & Sleep Packet)',
    description: 'Comprehensive patient demographics, medical history, and intake forms. Required for all new patients.',
    url: 'https://criticalcare.medforward.com/FillOutForm.aspx?formname=Pulmonary_and_Sleep_Packet',
  },
];

const ESTABLISHED_PATIENT_FORMS: OnlineForm[] = [
  {
    title: 'General Consent for Care and Treatment',
    description: 'Initial consent for medical evaluation and treatment.',
    url: 'https://criticalcare.medforward.com/FillOutForm.aspx?formname=General_Consent_for_Care_and_Treatment',
  },
  {
    title: 'Consent to Leave or Send Medical Information',
    description: 'Authorization for sharing medical records with other providers.',
    url: 'https://criticalcare.medforward.com/FillOutForm.aspx?formname=Consent_to_Leave_or_Send_Medical_Information',
  },
  {
    title: 'Acknowledgement of Privacy Practices & Patient Responsibility',
    description: 'HIPAA privacy notice acknowledgement and patient financial responsibility.',
    url: 'https://criticalcare.medforward.com/FillOutForm.aspx?formname=Privacy_Agreement',
  },
];

const DOWNLOADABLE_FORMS: DownloadableForm[] = [
  {
    title: 'Release of Information',
    description: 'Authorization for release of medical records to other providers or parties.',
    fileName: 'CCPSA-Release-of-Information.pdf',
  },
  {
    title: 'Sleep Diary',
    description: 'Track your sleep patterns before your sleep medicine appointment.',
    fileName: 'CCPSA-Sleep-Diary.pdf',
  },
  {
    title: 'Notice of Privacy Practices',
    description: 'HIPAA privacy notice detailing how your medical information is used and protected.',
    fileName: 'Notice-of-Privacy-Practices.pdf',
  },
];

const ONLINE_SERVICES = [
  {
    title: 'Patient Portal / Epic MyChart',
    description: 'Access your medical records, test results, view medications, and communicate with your care team.',
    link: 'https://mountain.mycommonspirit.org/MCH/Authentication/Login?',
    icon: '📱',
  },
  {
    title: 'Online Scheduling',
    description: 'Schedule or reschedule your appointments at your convenience, 24/7.',
    link: 'https://mountain.mycommonspirit.org/MCH/Authentication/Login?',
    icon: '📅',
  },
  {
    title: 'Online Bill Payment',
    description: 'Pay your medical bills securely online using our payment portal.',
    link: 'https://mountain.mycommonspirit.org/MCH/Authentication/Login?',
    icon: '💳',
  },
];

export default function PatientForms() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Forms</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              Download, complete, and bring patient forms to your appointment, or fill them out online before your visit.
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
              <p className="text-gray-600 leading-relaxed mb-4">
                To expedite your check-in and ensure we have complete information about your medical history, please complete the appropriate patient forms before your appointment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Complete your paperwork online using the secure links below. All online forms are hosted on a HIPAA-compliant server — your information is safe. If you do not have your paperwork complete prior to your appointment, please plan to arrive 15 minutes early.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you need assistance completing any forms, please call us at <a href="tel:3039510600" className="text-blue hover:text-navy font-medium">(303) 951-0600</a>.
              </p>
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
              {NEW_PATIENT_FORMS.map((form, idx) => (
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
                    <span className="inline-flex items-center gap-2 text-blue font-medium text-sm">
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
                {ESTABLISHED_PATIENT_FORMS.map((form, idx) => (
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
                      <span className="inline-flex items-center gap-2 text-blue font-medium text-sm">
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
                {DOWNLOADABLE_FORMS.map((form, idx) => (
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
                        className="inline-flex items-center gap-2 text-blue hover:text-navy font-medium transition-colors text-sm"
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
              {ONLINE_SERVICES.map((service, idx) => (
                <FadeInUp key={idx}>
                  <Link
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue group"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
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
                  <li>1. Click the Download button for the form you need</li>
                  <li>2. Print the PDF on standard 8.5&quot; x 11&quot; paper</li>
                  <li>3. Complete the form using black or blue ink</li>
                  <li>4. Bring the completed form to your appointment</li>
                </ol>
              </div>

              <div className="bg-light-gray rounded-lg p-8 border-l-4 border-amber">
                <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Online Forms
                </h3>
                <ol className="space-y-2 text-gray-600 text-sm">
                  <li>1. Log into your Patient Portal (Epic MyChart)</li>
                  <li>2. Select &quot;Complete Paperwork&quot;</li>
                  <li>3. Fill out forms electronically</li>
                  <li>4. Submit before your appointment date</li>
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
                    <a href="tel:3039510600" className="text-blue hover:text-navy font-medium transition-colors">
                      (303) 951-0600
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-sm text-gray-600">Email us at</p>
                    <a href="mailto:info@critcareMD.com" className="text-blue hover:text-navy font-medium transition-colors">
                      info@critcareMD.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-600">Visit us at</p>
                    <p className="text-navy font-medium">
                      274 Union Blvd. Suite 200<br />
                      Lakewood, CO 80228
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Complete your forms and book your appointment with one of our specialists.
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
