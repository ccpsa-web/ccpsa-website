import FadeInUp from '@/components/FadeInUp';

export default function InterventionalPulmonaryPage() {
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
                Interventional Pulmonary
              </h1>
              <p className="text-lg text-white/80 text-pretty">
                Advanced minimally invasive procedures for complex lung and airway conditions
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
                Our interventional pulmonology team performs advanced minimally invasive procedures for diagnosis and treatment of complex lung and airway conditions. Using state-of-the-art technology, we provide options that reduce the need for more invasive surgical procedures.
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
              {[
                { title: 'Flexible & Rigid Bronchoscopy', desc: 'Visualization and treatment of airway disorders.' },
                { title: 'EBUS with TBNA', desc: 'Endobronchial ultrasound for lymph node sampling.' },
                { title: 'Navigational Bronchoscopy', desc: 'Advanced imaging for peripheral lung lesion evaluation.' },
                { title: 'Airway Stent Placement', desc: 'Management of airway obstruction with stent therapy.' },
                { title: 'Endobronchial Valve Placement', desc: 'Treatment of emphysema with minimally invasive technique.' },
                { title: 'Foreign Body Removal', desc: 'Safe extraction of aspirated foreign material.' },
                { title: 'Whole Lung Lavage', desc: 'Therapeutic lung cleansing for specialized conditions.' },
                { title: 'Pleural Procedures', desc: 'Thoracentesis, pleurodesis, and tunneled pleural catheter placement.' },
                { title: 'Percutaneous Tracheostomy', desc: 'Minimally invasive airway access procedure.' }
              ].map((procedure, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber">
                    <h3 className="font-bold text-navy mb-2">{procedure.title}</h3>
                    <p className="text-gray-700">{procedure.desc}</p>
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
              {[
                { title: 'Lung Cancer Staging', desc: 'Diagnostic procedures for cancer diagnosis and staging.' },
                { title: 'Mediastinal Lymphadenopathy', desc: 'Evaluation of enlarged mediastinal lymph nodes.' },
                { title: 'Central Airway Obstruction', desc: 'Treatment of airway narrowing from various causes.' },
                { title: 'Tracheal Stenosis', desc: 'Management of airway narrowing and strictures.' },
                { title: 'Malignant Pleural Effusions', desc: 'Treatment of fluid accumulation from cancer.' },
                { title: 'Benign Pleural Effusions', desc: 'Diagnosis and management of non-cancerous pleural fluid.' },
                { title: 'Bronchopleural Fistula', desc: 'Treatment of abnormal communication between airway and pleura.' }
              ].map((condition, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-light-gray rounded-lg p-6 border-l-4 border-blue">
                    <h3 className="font-bold text-navy mb-2">{condition.title}</h3>
                    <p className="text-gray-700">{condition.desc}</p>
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
                Contact us today to learn more about our interventional pulmonary services and schedule your consultation.
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
