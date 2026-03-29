'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface PageContent {
  [key: string]: any;
}

interface NewPatientsClientProps {
  content: PageContent;
}

export default function NewPatientsClient({ content }: NewPatientsClientProps) {
  if (!content) {
    return <div>Loading...</div>;
  }

  const checklist = content.checklist || [];
  const referralSteps = content.referralSteps || [];
  const visitStages = content.visitStages || [];
  const welcomeParagraphs = content.welcomeText?.split('\n\n') || [];

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

      {/* Welcome Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">{content.welcomeTitle}</h2>
              {welcomeParagraphs.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">What to Expect During Your Visit</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {visitStages.map((stage: any, idx: number) => (
                <div key={idx} className="bg-light-gray rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-navy mb-4">{stage.title}</h3>
                  <ul className="space-y-3 text-gray-600">
                    {stage.steps.map((step: string, sIdx: number) => (
                      <li key={sIdx} className="flex items-start gap-3">
                        <span className="text-blue-text font-bold">{sIdx + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Before Your Visit Checklist */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-12 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              Before Your Visit - Checklist
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {checklist.map((item: any, idx: number) => (
                <FadeInUp key={idx}>
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue text-white text-sm font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Getting a Referral */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              Getting a Referral
            </h2>

            <div className="bg-amber/5 border border-amber/20 rounded-lg p-8 max-w-3xl">
              <p className="text-gray-600 mb-6">
                If your insurance plan requires a referral from your primary care physician, please follow these steps:
              </p>
              <ul className="space-y-4">
                {referralSteps.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-amber flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-amber/20">
                <p className="text-sm text-gray-600 mb-3">
                  Have questions about referral requirements? Contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${content.phone?.replace(/[^\d]/g, '')}`} className="text-blue-text hover:text-navy font-medium transition-colors">
                    {content.phone}
                  </a>
                  <a href={`mailto:${content.email}`} className="text-blue-text hover:text-navy font-medium transition-colors">
                    {content.email}
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Forms & Paperwork */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8">Patient Forms</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Download and complete our patient forms before your visit. This helps us provide you with better care and speeds up your check-in process.
            </p>

            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue">
              <p className="text-gray-600 mb-6">
                View all available patient forms, including new patient packets, consent forms, and medical records release forms.
              </p>
              <Link
                href="/patient-forms"
                className="inline-flex items-center gap-2 bg-blue hover:bg-navy text-white px-6 py-3 rounded font-semibold transition-colors duration-200"
              >
                Download Forms
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
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
