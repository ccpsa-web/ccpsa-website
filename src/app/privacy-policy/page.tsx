'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface Section {
  title: string;
  content: string | string[];
}

const POLICY_SECTIONS: Section[] = [
  {
    title: 'Introduction',
    content:
      'Critical Care, Pulmonary and Sleep Associates (CCPSA), as a healthcare provider, is committed to protecting your privacy. This Notice of Privacy Practices describes how your medical information may be used and shared, and how you can access and control that information.',
  },
  {
    title: 'Our Legal Duty',
    content:
      'We are required by law to maintain the privacy of your protected health information. This Notice describes our privacy practices and your rights regarding your health information. We are required to give you this Notice and to follow the practices described herein.',
  },
  {
    title: 'Information We Collect',
    content: [
      'Medical history and current health conditions',
      'Insurance information and payment records',
      'Clinical examination findings and test results',
      'Medications and allergies',
      'Family medical history',
      'Emergency contact information',
      'Contact information (address, phone, email)',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'Treatment: To provide you with medical care and services',
      'Payment: To bill your insurance and collect payment for services',
      'Operations: To improve our services, staff training, and quality assurance',
      'Legal Compliance: To comply with applicable laws and regulations',
      'Patient Safety: To protect the health and safety of our patients and staff',
      'Communication: To contact you about appointments, test results, and health information',
    ],
  },
  {
    title: 'How We May Share Your Information',
    content: [
      'With your healthcare providers: Other physicians, specialists, and hospitals involved in your care',
      'For treatment coordination: To facilitate continuity of care among multiple providers',
      'Insurance purposes: With your insurance company for billing and coverage determination',
      'As required by law: To comply with legal obligations (court orders, subpoenas, etc.)',
      'Public health: To report disease outbreaks, births, and deaths as required by law',
      'Patient safety: In emergencies to protect your health and safety',
    ],
  },
  {
    title: 'Your Privacy Rights',
    content: [
      'Right to Access: You have the right to request and receive copies of your medical records',
      'Right to Amendment: You can request corrections to your medical records',
      'Right to Accounting: You can request a list of disclosures made of your medical information',
      'Right to Restrict: You can request restrictions on uses and disclosures (certain restrictions may apply)',
      'Right to Confidential Communication: You can request we communicate with you at alternate locations or methods',
      'Right to Breach Notification: You will be notified of any breach of your unsecured medical information',
    ],
  },
  {
    title: 'How to Request Your Rights',
    content:
      'To exercise any of these rights, contact our Privacy Officer at (303) 951-0600 or submit a written request to our main office. We will respond to reasonable requests within 30 days.',
  },
  {
    title: 'Minors and Legal Representatives',
    content:
      'If you are a parent or legal guardian, you have the right to access and control the health information of your minor children, subject to certain limitations under state and federal law.',
  },
  {
    title: 'Health Information Exchange',
    content:
      'We participate in secure health information exchange with other healthcare providers to improve care coordination and patient safety. Your information may be shared for treatment purposes without your specific authorization unless you opt out.',
  },
  {
    title: 'Electronic Health Records (EHR)',
    content:
      'Your health information is stored in a secure electronic health record system (Epic MyChart). You can access your records through our patient portal at https://mountain.mycommonspirit.org/MCH/Authentication/Login?',
  },
  {
    title: 'Breach Notification',
    content:
      'In the event of a breach of your unsecured health information, we will notify you without unreasonable delay and describe the breach, information that may have been involved, and steps you should take.',
  },
  {
    title: 'Changes to This Notice',
    content:
      'We may update this Notice of Privacy Practices. Any changes will be effective upon distribution of the revised Notice. We will post the updated Notice in our offices and on our website.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              Notice of Privacy Practices & HIPAA Compliance
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
                <strong>Effective Date:</strong> This Notice became effective January 1, 2024. Your privacy is important to us. Critical Care, Pulmonary and Sleep Associates (CCPSA) is required by federal law to protect the privacy of your health information and to give you this Notice of our privacy practices.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeInUp>
            {POLICY_SECTIONS.map((section, idx) => (
              <div key={idx} className={idx > 0 ? 'mt-12' : ''}>
                <h2 className="text-2xl font-bold text-navy mb-4 pb-3 border-b-2 border-amber">
                  {section.title}
                </h2>

                {typeof section.content === 'string' ? (
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                ) : (
                  <ul className="space-y-3">
                    {section.content.map((item, itemIdx) => (
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
                    <a href="tel:3039510600" className="text-blue hover:text-navy font-medium transition-colors">
                      (303) 951-0600
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a href="mailto:privacy@critcareMD.com" className="text-blue hover:text-navy font-medium transition-colors">
                      privacy@critcareMD.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <p className="text-navy font-medium">
                      274 Union Blvd. Suite 200<br />
                      Lakewood, CO 80228
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
                    <strong className="text-navy">U.S. Department of Health and Human Services</strong><br />
                    Office for Civil Rights<br />
                    <a
                      href="mailto:OCRComplaint@hhs.gov"
                      className="text-blue hover:text-navy transition-colors"
                    >
                      OCRComplaint@hhs.gov
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
              <div className="bg-light-gray rounded-lg p-6 border-l-4 border-navy">
                <h3 className="font-semibold text-navy mb-2">Right to Inspect Records</h3>
                <p className="text-gray-600 text-sm">
                  You have the right to inspect and obtain copies of your medical records by submitting a written request to our Privacy Officer. We may charge reasonable copying and mailing costs.
                </p>
              </div>

              <div className="bg-light-gray rounded-lg p-6 border-l-4 border-blue">
                <h3 className="font-semibold text-navy mb-2">Right to Request Amendments</h3>
                <p className="text-gray-600 text-sm">
                  If you believe information in your medical record is incorrect or incomplete, you can request an amendment. We may deny your request under certain circumstances as permitted by law.
                </p>
              </div>

              <div className="bg-light-gray rounded-lg p-6 border-l-4 border-amber">
                <h3 className="font-semibold text-navy mb-2">Right to Request Restrictions</h3>
                <p className="text-gray-600 text-sm">
                  You can request restrictions on how we use and disclose your information. We are not required to agree to all restriction requests, but we will consider and discuss your requests.
                </p>
              </div>

              <div className="bg-light-gray rounded-lg p-6 border-l-4 border-sage">
                <h3 className="font-semibold text-navy mb-2">Right to Request Confidential Communications</h3>
                <p className="text-gray-600 text-sm">
                  You can request that we communicate with you about your health information by alternative means, such as emailing you at a specific address or calling you at an alternate phone number.
                </p>
              </div>
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
              <p className="text-gray-600 mb-6">
                You will receive a copy of this Notice of Privacy Practices when you first visit CCPSA or can request a copy at any time. We will document when you acknowledge receipt of this Notice.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/patient-forms"
                  className="inline-block bg-blue hover:bg-navy text-white px-6 py-3 rounded font-semibold transition-colors duration-200"
                >
                  Download Privacy Notice
                </Link>
                <a
                  href="tel:3039510600"
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
            <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our Privacy Officer or visit your local clinic with any questions or concerns about your privacy rights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3039510600"
                className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call (303) 951-0600
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
