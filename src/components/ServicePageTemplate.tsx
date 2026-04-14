import FadeInUp from '@/components/FadeInUp';

interface SectionItem {
  title: string;
  description: string;
}

interface Section {
  heading: string;
  style: 'amber' | 'blue';
  items: SectionItem[];
}

interface Location {
  name: string;
  city: string;
}

export interface ServicePageData {
  heroTitle: string;
  heroSubtitle: string;
  approachHeading: string;
  approachBody: string;
  sections: Section[];
  locationsHeading: string;
  locations: Location[];
  ctaHeading: string;
  ctaBody: string;
  ctaPhone: string;
  ctaPhoneRaw: string;
  ctaSecondaryLink: string;
  ctaSecondaryText: string;
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
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
                {data.heroTitle}
              </h1>
              <p className="text-lg text-white/80 text-pretty">
                {data.heroSubtitle}
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
              <h2 className="text-3xl font-bold text-navy mb-6">{data.approachHeading}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.approachBody}
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {data.sections.map((section, sIdx) => {
        const isEven = sIdx % 2 === 0;
        const bgClass = isEven ? 'bg-light-gray' : 'bg-white';
        const borderClass = section.style === 'amber' ? 'border-amber' : 'border-blue';
        const cardBg = isEven ? 'bg-white shadow-md' : 'bg-light-gray';

        return (
          <section key={sIdx} className={`py-16 ${bgClass}`}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <FadeInUp>
                  <h2 className="text-3xl font-bold text-navy mb-12">{section.heading}</h2>
                </FadeInUp>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, idx) => (
                    <FadeInUp key={idx}>
                      <div className={`rounded-lg p-6 border-l-4 ${borderClass} ${cardBg}`}>
                        <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Locations */}
      {data.locations.length > 0 && (
        <section className={`py-16 ${data.sections.length % 2 === 0 ? 'bg-light-gray' : 'bg-light-gray'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInUp>
                <h2 className="text-3xl font-bold text-navy mb-12">{data.locationsHeading}</h2>
              </FadeInUp>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.locations.map((location, idx) => (
                  <FadeInUp key={idx}>
                    <div className="bg-white rounded-lg p-6 border-l-4 border-blue shadow-md">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.ctaHeading}</h2>
              <p className="text-lg text-white/80 mb-8">
                {data.ctaBody}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${data.ctaPhoneRaw}`} className="inline-block bg-amber text-navy px-8 py-3 rounded-lg font-bold hover:bg-amber/90 transition-colors duration-200">
                  Call {data.ctaPhone}
                </a>
                <a href={data.ctaSecondaryLink} className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors duration-200">
                  {data.ctaSecondaryText}
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
