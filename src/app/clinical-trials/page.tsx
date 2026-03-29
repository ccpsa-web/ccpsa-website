import FadeInUp from '@/components/FadeInUp';
import { getPageContent } from '@/lib/content';

export default function ClinicalTrialsPage() {
  const content = getPageContent('clinical-trials');
  if (!content) return null;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-navy to-blue scroll-mt-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                {content.title}
              </h1>
              <p className="text-lg text-white/80 text-pretty">
                {content.subtitle}
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-6">{content.partnershipTitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {content.partnershipText}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {content.monitoringText}
              </p>
              <a
                href={content.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue font-semibold hover:text-navy transition-colors"
              >
                {content.partnerUrlLabel}
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Enrolling Trials */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">{content.enrollingTitle}</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.enrollingTrials.map((trial: { title: string; description: string }, idx: number) => (
                <FadeInUp key={idx}>
                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber">
                    <h3 className="font-bold text-navy mb-2">{trial.title}</h3>
                    <p className="text-gray-700">{trial.description}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
            <FadeInUp>
              <p className="text-gray-600 mt-8 italic">
                {content.enrollingNote}
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-6">{content.contactTitle}</h2>
              <p className="text-lg text-gray-700 mb-6">{content.contactText}</p>
              <div className="bg-light-gray rounded-lg p-8 border-l-4 border-blue">
                <p className="font-bold text-navy text-lg mb-3">{content.contactName}</p>
                <div className="space-y-2">
                  <a href={`tel:${content.contactPhone.replace(/\D/g, '')}`} className="flex items-center text-gray-700 hover:text-navy transition-colors">
                    <svg className="h-5 w-5 mr-3 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    {content.contactPhone}
                  </a>
                  <a href={`mailto:${content.contactEmail}`} className="flex items-center text-gray-700 hover:text-navy transition-colors">
                    <svg className="h-5 w-5 mr-3 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    {content.contactEmail}
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-blue">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.ctaTitle}</h2>
              <p className="text-lg text-white/80 mb-8">
                {content.ctaText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${content.phone.replace(/\D/g, '')}`} className="inline-block bg-amber text-navy px-8 py-3 rounded-lg font-bold hover:bg-amber/90 transition-colors duration-200">
                  Call {content.phone}
                </a>
                <a href="/contact" className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors duration-200">
                  Contact Us
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
