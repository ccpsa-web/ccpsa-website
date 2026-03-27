'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface ChecklistItem {
  title: string;
  description: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    title: 'Complete Patient Paperwork Online',
    description:
      'Fill out your medical history and patient forms on our online portal before your appointment to save time at check-in.',
  },
  {
    title: 'Arrive Early',
    description: 'Plan to arrive 10-15 minutes early to allow time for check-in and to verify your insurance information.',
  },
  {
    title: 'Bring Required Documents',
    description:
      'Have your photo ID, insurance card, and current medication list ready. Bring any recent medical records or imaging.',
  },
  {
    title: 'Prepare Your Medical History',
    description: 'Write down any recent symptoms, changes in health, allergies, and family medical history to discuss with your provider.',
  },
  {
    title: 'List All Medications',
    description:
      'Include all prescription medications, over-the-counter drugs, and supplements you are currently taking with dosages.',
  },
  {
    title: 'Bring Medical Imaging',
    description: 'If available, bring CDs or images from recent chest X-rays, CT scans, sleep studies, or pulmonary function tests.',
  },
];

const GETTING_REFERRAL = [
  'If your insurance requires a referral, contact your primary care physician to obtain one before your appointment.',
  'Ask your primary care physician to send your medical records to our office to facilitate continuity of care.',
  'Provide CCPSA with your referral number when scheduling your appointment.',
];

export default function NewPatients() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New Patient Welcome</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              We&apos;re excited to meet you. Here&apos;s what to expect during your first visit.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Welcome to CCPSA</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We&apos;re committed to providing compassionate, evidence-based care tailored to your individual needs. Our board-certified physicians and clinical team work together to ensure you receive comprehensive evaluation and treatment planning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re seeking care for critical illness, pulmonary conditions, sleep disorders, or interventional pulmonology procedures, we&apos;re here to help you achieve optimal health outcomes.
              </p>
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
              <div className="bg-light-gray rounded-lg p-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Check-In (5-10 minutes)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue font-bold">1</span>
                    <span>Verify insurance and complete demographic information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue font-bold">2</span>
                    <span>Review and sign HIPAA privacy notice and consent forms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light-gray rounded-lg p-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Clinical Evaluation (20-40 minutes)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue font-bold">3</span>
                    <span>Vital signs and clinical assessment by nursing staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue font-bold">4</span>
                    <span>Comprehensive evaluation and exam by your physician</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light-gray rounded-lg p-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Care Planning (10-15 minutes)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue font-bold">5</span>
                    <span>Discussion of diagnosis, treatment options, and next steps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue font-bold">6</span>
                    <span>Prescriptions and referrals as needed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light-gray rounded-lg p-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Check-Out (5 minutes)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue font-bold">7</span>
                    <span>Schedule follow-up appointments or procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue font-bold">8</span>
                    <span>Receive aftercare instructions and educational materials</span>
                  </li>
                </ul>
              </div>
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
              {CHECKLIST_ITEMS.map((item, idx) => (
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
                {GETTING_REFERRAL.map((item, idx) => (
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
                  <a href="tel:3039510600" className="text-blue hover:text-navy font-medium transition-colors">
                    (303) 951-0600
                  </a>
                  <a href="mailto:info@critcareMD.com" className="text-blue hover:text-navy font-medium transition-colors">
                    info@critcareMD.com
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Use our convenient online scheduling system or give us a call. We look forward to meeting you!
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
