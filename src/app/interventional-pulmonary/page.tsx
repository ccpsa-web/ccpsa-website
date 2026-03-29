import FadeInUp from '@/components/FadeInUp';
import { getPageContent } from '@/lib/content';

export default function InterventionalPulmonaryPage() {
  const content = getPageContent('interventional-pulmonary');
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

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {content.approachText}
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Procedures We Perform */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Procedures We Perform</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.procedures.map((procedure: {title: string; description: string}, idx: number) => (
                <FadeInUp key={idx}>
                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber">
                    <h3 className="font-bold text-navy mb-2">{procedure.title}</h3>
                    <p className="text-gray-700">{procedure.description}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Conditions We Treat</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.conditions.map((condition: {title: string; description: string}, idx: number) => (
                <FadeInUp key={idx}>
                  <div className="bg-light-gray rounded-lg p-6 border-l-4 border-blue">
                    <h3 className="font-bold text-navy mb-2">{condition.title}</h3>
                    <p className="text-gray-700">{condition.description}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Locations */}
      {content.locations && content.locations.length > 0 && (
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInUp>
                <h2 className="text-3xl font-bold text-navy mb-12">Hospital Locations</h2>
              </FadeInUp>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.locations.map((location: {name: string; city: string}, idx: number) => (
                  <FadeInUp key={idx}>
                    <div className="bg-white rounded-lg p-6 border-l-4 border-blue">
                      <h3 className="font-bold text-navy mb-2">{location.name}</h3>
                      <p className="text-gray-700">{location.city}</p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
                <a href="/for-physicians" className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors duration-200">
                  For Physicians
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
