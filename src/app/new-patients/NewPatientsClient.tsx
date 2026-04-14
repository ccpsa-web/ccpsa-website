'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface VisitStep {
  title: string;
  items: string[];
}

interface ChecklistItem {
  title: string;
  description: string;
}

export interface NewPatientsData {
  heroTitle: string;
  heroSubtitle: string;
  welcomeHeading: string;
  welcomeBody1: string;
  welcomeBody2: string;
  visitSteps: VisitStep[];
  checklist: ChecklistItem[];
  referralIntro: string;
  referralSteps: string[];
  referralPhone: string;
  referralEmail: string;
  formsHeading: string;
  formsBody: string;
  formsDescription: string;
  ctaHeading: string;
  ctaBody: string;
  ctaScheduleLink: string;
  ctaPhone: string;
  ctaPhoneRaw: string;
}

export default function NewPatientsClient({ data }: { data: NewPatientsData }) {
  let stepCounter = 0;

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

      {/* Welcome Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">{data.welcomeHeading}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{data.welcomeBody1}</p>
              <p className="text-gray-600 leading-relaxed">{data.welcomeBody2}</p>
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
              {data.visitSteps.map((step, sIdx) => (
                <div key={sIdx} className="bg-light-gray rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-navy mb-4">{step.title}</h3>
                  <ul className="space-y-3 text-gray-600">
                    {step.items.map((item, iIdx) => {
                      stepCounter++;
                      return (
                        <li key={iIdx} className="flex items-start gap-3">
                          <span className="text-blue font-bold">{stepCounter}</span>
                          <span>{item}</span>
                        </li>
                      );
                    })}
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
              {data.checklist.map((item, idx) => (
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
              <p className="text-gray-600 mb-6">{data.referralIntro}</p>
              <ul className="space-y-4">
                {data.referralSteps.map((item, idx) => (
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
                  <a href={`tel:${data.referralPhone.replace(/[^\d]/g, '')}`} className="text-blue hover:text-navy font-medium transition-colors">
                    {data.referralPhone}
                  </a>
                  <a href={`mailto:${data.referralEmail}`} className="text-blue hover:text-navy font-medium transition-colors">
                    {data.referralEmail}
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
            <h2 className="text-3xl font-bold text-navy mb-8">{data.formsHeading}</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">{data.formsBody}</p>

            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue">
              <p className="text-gray-600 mb-6">{data.formsDescription}</p>
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
