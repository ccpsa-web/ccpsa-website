import FadeInUp from '@/components/FadeInUp';

export default function NeurocriticalCarePage() {
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
                Neurocritical Care
              </h1>
              <p className="text-lg text-white/80 text-pretty">
                Specialized intensive care for acute neurological emergencies and brain disorders
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
                Our neurocritical care team provides specialized intensive care for patients with acute neurological emergencies. Multiple CCPSA physicians hold board certification in Neurocritical Care, offering expert management of complex neurological conditions in the ICU setting.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Acute Neurological Conditions */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Acute Neurological Conditions</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Acute Ischemic & Hemorrhagic Stroke', desc: 'Intensive management of acute cerebrovascular events.' },
                { title: 'Traumatic Brain Injury', desc: 'Expert care for severe head injuries and complications.' },
                { title: 'Subarachnoid Hemorrhage', desc: 'Specialized management of intracranial bleeds.' },
                { title: 'Status Epilepticus', desc: 'Emergency management of prolonged seizures.' },
                { title: 'Spinal Cord Injury', desc: 'Acute care and stabilization of spinal injuries.' },
                { title: 'Neuromuscular Respiratory Failure', desc: 'Management of Guillain-Barre, myasthenia gravis, and related conditions.' },
                { title: 'Brain Tumor Complications', desc: 'Critical care for acute tumor-related emergencies.' },
                { title: 'Post-Neurosurgical Care', desc: 'Intensive monitoring and management after brain surgery.' }
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

      {/* Clinical Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <h2 className="text-3xl font-bold text-navy mb-12">Clinical Capabilities</h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'ICP Monitoring & Management', desc: 'Intracranial pressure assessment and intervention.' },
                { title: 'Continuous EEG Monitoring', desc: '24/7 brain activity monitoring and seizure detection.' },
                { title: 'Targeted Temperature Management', desc: 'Therapeutic hypothermia for neuroprotection.' },
                { title: 'Neurological Prognostication', desc: 'Expert outcome prediction and planning.' },
                { title: 'Specialist Team Coordination', desc: 'Collaboration with neurology and neurosurgery.' },
                { title: 'Family & Goals of Care', desc: 'Compassionate communication and advance care planning.' }
              ].map((capability, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-light-gray rounded-lg p-6 border-l-4 border-blue">
                    <h3 className="font-bold text-navy mb-2">{capability.title}</h3>
                    <p className="text-gray-700">{capability.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Locations */}
      <section className="py-16 bg-light-gray">
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
                Contact us today to learn more about our neurocritical care services and schedule your consultation.
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
