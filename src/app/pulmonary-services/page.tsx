import FadeInUp from '@/components/FadeInUp';

export default function PulmonaryServicesPage() {
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
                Pulmonary Medicine
              </h1>
              <p className="text-lg text-white/80 text-pretty">
                Expert diagnosis and treatment of lung and respiratory diseases
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
                Our pulmonary specialists provide comprehensive outpatient evaluation and management of pulmonary and respiratory diseases. We combine advanced diagnostics with evidence-based treatment plans tailored to each patient.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Conditions We Treat</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Asthma', desc: 'Comprehensive asthma management and control strategies.' },
                { title: 'COPD & Emphysema', desc: 'Specialized care for chronic obstructive pulmonary disease.' },
                { title: 'Interstitial Lung Disease', desc: 'Management of diffuse parenchymal lung diseases.' },
                { title: 'Pulmonary Fibrosis', desc: 'Expert care for progressive fibrotic lung diseases.' },
                { title: 'Sarcoidosis', desc: 'Diagnosis and treatment of this inflammatory condition.' },
                { title: 'Occupational Lung Disease', desc: 'Evaluation of work-related respiratory conditions.' },
                { title: 'Chronic Cough', desc: 'Thorough evaluation and management of persistent cough.' },
                { title: 'Pulmonary Nodule Evaluation', desc: 'Assessment and management of lung nodules.' },
                { title: 'Pleural Effusion', desc: 'Diagnosis and treatment of fluid around the lungs.' },
                { title: 'Lung Cancer Screening', desc: 'Early detection and prevention programs.' }
              ].map((condition, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber">
                    <h3 className="font-bold text-navy mb-2">{condition.title}</h3>
                    <p className="text-gray-700">{condition.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Diagnostic Services</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Pulmonary Function Testing (PFTs)', desc: 'Comprehensive assessment of lung capacity and function.' },
                { title: 'Bronchoscopy', desc: 'Direct visualization of airways for diagnosis.' },
                { title: 'CT-Guided Lung Biopsy Referral', desc: 'Precise tissue sampling for definitive diagnosis.' },
                { title: 'Cardiopulmonary Exercise Testing', desc: 'Assessment of exercise tolerance and limitation.' },
                { title: '6-Minute Walk Testing', desc: 'Functional assessment of respiratory capacity.' }
              ].map((service, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-light-gray rounded-lg p-6 border-l-4 border-blue">
                    <h3 className="font-bold text-navy mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Office Locations</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'West Clinic', city: 'Lakewood' },
                { name: 'East Clinic', city: 'Castle Rock' }
              ].map((location, idx) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-blue">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-white/80 mb-8">
                Contact us today to learn more about our pulmonary services and schedule your consultation.
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
