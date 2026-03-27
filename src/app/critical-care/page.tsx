import FadeInUp from '@/components/FadeInUp';

export default function CriticalCarePage() {
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
                Critical Care Medicine
              </h1>
              <p className="text-lg text-white/80 text-pretty">
                Comprehensive intensive care for complex medical conditions by board-certified intensivists
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
                Our critical care team provides 24/7 intensive care management for patients with serious medical and surgical conditions. CCPSA intensivists are board-certified in Critical Care Medicine and provide care across multiple AdventHealth hospitals in the Denver metro area.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Services We Provide</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'ICU Management', desc: 'Comprehensive care for medical and surgical patients requiring intensive care services.' },
                { title: 'Mechanical Ventilation', desc: 'Advanced management and weaning strategies for patients requiring respiratory support.' },
                { title: 'Sepsis Management', desc: 'Expert care for sepsis and multi-organ failure conditions using evidence-based protocols.' },
                { title: 'Hemodynamic Support', desc: 'Monitoring and management of cardiovascular stability in critically ill patients.' },
                { title: 'Multidisciplinary Care', desc: 'Coordinated care involving specialists across multiple disciplines for complex cases.' },
                { title: 'End-of-Life Care', desc: 'Compassionate end-of-life care planning and family communication support.' },
                { title: 'Procedural Interventions', desc: 'Tracheostomy and percutaneous gastrostomy placement and management.' }
              ].map((service, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber">
                    <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                    <p className="text-gray-700">{service.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Hospital Locations</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'St. Anthony Hospital', city: 'Lakewood' },
                { name: 'St. Anthony North', city: 'Westminster' },
                { name: 'Parker Adventist Hospital', city: 'Parker' },
                { name: 'Littleton Adventist Hospital', city: 'Littleton' },
                { name: 'Castle Rock Adventist Hospital', city: 'Castle Rock' },
                { name: 'Avista Adventist Hospital', city: 'Louisville' },
                { name: 'Porter Adventist Hospital', city: 'Denver' }
              ].map((location, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-light-gray rounded-lg p-6 border-l-4 border-blue">
                    <h3 className="font-bold text-navy mb-2">{location.name}</h3>
                    <p className="text-gray-700">{location.city}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-blue">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-white/80 mb-8">
                Contact us today to learn more about our critical care services and schedule your consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:3039510600" className="inline-block bg-amber text-navy px-8 py-3 rounded-lg font-bold hover:bg-amber/90 transition-colors duration-200">
                  Call (303) 951-0600
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
