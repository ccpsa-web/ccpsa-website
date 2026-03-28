import Image from 'next/image';
import Link from 'next/link';
import FadeInUp from '@/components/FadeInUp';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-blue min-h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <FadeInUp>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                  <span className="w-2 h-2 bg-amber rounded-full animate-pulse"></span>
                  <span className="text-white/90 text-sm font-medium">40+ Years Serving Colorado</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                  Award-Winning <span className="text-amber">Critical Care</span>, <span className="text-blue">Pulmonary</span> and <span className="text-blue/80">Sleep Specialists</span>
                </h1>

                <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 text-pretty">
                  Board-certified physicians providing advanced, collaborative care for complex lung conditions, sleep disorders, and critical care needs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="tel:3039510600" className="bg-amber hover:bg-amber/90 text-navy font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Call (303) 951-0600
                  </a>
                  <a href="#contact" className="border-2 border-white text-navy bg-white hover:bg-white/90 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <line x1="19" y1="8" x2="19" y2="14"></line>
                      <line x1="22" y1="11" x2="16" y2="11"></line>
                    </svg>
                    New Patient
                  </a>
                </div>
              </div>
            </FadeInUp>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/site/hero-team.jpg"
                  alt="CCPSA medical team"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-amber text-navy rounded-xl px-4 py-3 shadow-lg z-20">
                <p className="text-sm font-bold">Collaborative Care</p>
                <p className="text-xs opacity-80">Team-based approach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#F7F0E6"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-light-gray scroll-mt-24">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Specialized Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive care across multiple specialties, delivered by board-certified physicians with decades of experience.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/critical-care', title: 'Critical Care', desc: 'Comprehensive intensive care for complex medical conditions', gradient: 'from-red-500 to-rose-600' },
              { href: '/pulmonary-services', title: 'Pulmonary Services', desc: 'Expert diagnosis and treatment of lung diseases', gradient: 'from-blue to-cyan-600' },
              { href: '/interventional-pulmonary', title: 'Interventional Pulmonary', desc: 'Advanced procedures for complex pulmonary conditions', gradient: 'from-purple-500 to-indigo-600' },
              { href: '/sleep-medicine', title: 'Sleep Medicine', desc: 'Specialized care for sleep disorders and related conditions', gradient: 'from-indigo-500 to-blue-600' },
              { href: '/neurocritical-care', title: 'Neurocritical Care', desc: 'Specialized critical care for neurological conditions', gradient: 'from-emerald-500 to-teal-600' },
            ].map((service, idx) => (
              <FadeInUp key={idx}>
                <Link href={service.href}>
                  <div className="group h-full bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden rounded-lg">
                    <div className="p-6 relative">
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}></div>
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          {idx === 0 && <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>}
                          {idx === 1 && <><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></>}
                          {idx === 2 && <><path d="M3.196 11.823c.99-1.465 2.573-2.765 4.45-3.582a8 8 0 0 1 8.708 0c1.877.817 3.46 2.117 4.45 3.582"></path><path d="M6 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"></path><path d="M12 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"></path><path d="M18 21H6a3 3 0 0 1-3-3v-3h18v3a3 3 0 0 1-3 3z"></path></>}
                          {idx === 3 && <><circle cx="12" cy="12" r="1"></circle><path d="M12 1v6m0 6v6"></path><path d="M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24"></path><path d="M1 12h6m6 0h6"></path><path d="M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"></path></>}
                          {idx === 4 && <><path d="M4 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"></path><path d="M12 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0"></path><path d="M20 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"></path><path d="M12 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0"></path></>}
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-blue transition-colors duration-200">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.desc}</p>
                      <div className="flex items-center text-blue font-medium group-hover:text-navy transition-colors duration-200">
                        <span>Learn More</span>
                        <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative order-2 lg:order-1">
              <FadeInUp>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/site/hero-consulting.jpg"
                    alt="CCPSA physician consulting"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
                </div>
              </FadeInUp>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">1000s</div>
                    <div className="text-sm text-gray-600">Patients Served</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-2 mb-6">
                  <svg className="h-4 w-4 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 8a6 6 0 1 0 12 0A6 6 0 0 0 6 8z"></path>
                    <path d="M15 11h5"></path>
                    <path d="M18 8v6"></path>
                  </svg>
                  <span className="text-navy font-medium text-sm">Expert Physicians</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
                  Personalized Care from Board-Certified Specialists
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our team of board-certified physicians brings decades of combined experience in critical care, pulmonary medicine, sleep disorders, and interventional procedures. We believe in collaborative care, working closely with you and your family to develop personalized treatment plans.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Collaborative approach involving you in every decision',
                    'Same-day consultations for urgent cases',
                    'Coordinated care with your primary physician'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-amber"></div>
                      </div>
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-6 rounded-lg inline-flex items-center transition-all duration-300">
                  Meet Our Team
                </a>
              </FadeInUp>
            </div>
          </div>

          <FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { number: '40+', label: 'Years Serving Colorado', icon: 'calendar' },
                { number: '100%', label: 'Board Certified', icon: 'check' },
                { number: '5', label: 'Specialized Disciplines', icon: 'book' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-light-gray border-0 text-center rounded-lg p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${idx === 0 ? 'bg-navy/10 text-navy' : idx === 1 ? 'bg-blue/10 text-blue' : 'bg-amber/10 text-amber'} mb-4`}>
                    {idx === 0 && <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9c0-1 1-2 2-2h8c1 0 2 1 2 2v12c0 1-1 2-2 2H8c-1 0-2-1-2-2V9z"></path><path d="M9 5c0-1 .5-2 1.5-2h3c1 0 1.5 1 1.5 2"></path></svg>}
                    {idx === 1 && <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 1 0 12 0A6 6 0 0 0 6 8z"></path><path d="M15 11h5"></path><path d="M18 8v6"></path></svg>}
                    {idx === 2 && <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>}
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue via-blue to-navy"></div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy/30 rounded-full translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-amber/20 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your Appointment
              </h2>
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                We make it easy to get the care you need. Choose the scheduling option that works best for you.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber text-navy mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Schedule Online</h3>
                  <div className="flex items-center justify-center gap-2 text-white/70 mb-6">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Available 24/7</span>
                  </div>
                  <a href="https://mountain.mycommonspirit.org/MCH/Authentication/Login?" target="_blank" rel="noopener noreferrer" className="w-full bg-amber hover:bg-amber/90 text-navy font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg inline-block">
                    Book Now
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-navy mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">(303) 951-0600</h3>
                  <div className="flex items-center justify-center gap-2 text-white/70 mb-6">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Mon-Fri, 8 AM - 5 PM</span>
                  </div>
                  <a href="tel:3039510600" className="w-full border-2 border-white bg-white text-navy hover:bg-white/90 font-semibold py-6 text-lg transition-all duration-300 rounded-lg inline-block">
                    Call Us
                  </a>
                </div>
              </div>

              <div className="inline-flex items-center gap-3 bg-red-600/40 border-2 border-red-400/60 rounded-full px-6 py-3 text-white">
                <svg className="h-5 w-5 text-red-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span className="text-sm font-bold">For emergencies, call 911 immediately.</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue/10 rounded-full px-4 py-2 mb-6">
                    <svg className="h-4 w-4 text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                    <span className="text-blue font-medium text-sm">Virtual Care Available</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                    Telehealth Visits from the Comfort of Home
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Experience the same quality care you&apos;d receive in-person, but from wherever you are. Our secure telehealth platform makes it easy to consult with our specialists.
                  </p>

                  <a href="https://mountain.mycommonspirit.org/MCH/Authentication/Login?" target="_blank" rel="noopener noreferrer" className="bg-blue hover:bg-blue/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg inline-flex items-center">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                    Schedule a Telehealth Visit
                  </a>
                </div>

                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/site/hero-data.jpg"
                      alt="CCPSA physician reviewing data"
                      width={600}
                      height={300}
                      className="w-full h-72 object-cover object-[center_30%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: 'Face-to-Face Care', desc: 'Connect via secure video' },
                      { title: 'HIPAA Compliant', desc: 'Privacy protected' },
                      { title: 'Convenient', desc: 'No commute needed' },
                      { title: 'Easy to Use', desc: 'Simple technology' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-light-gray rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{transitionDelay: `${idx * 50}ms`}}>
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue/10 text-blue mb-3">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                        </div>
                        <h3 className="font-semibold text-navy mb-1 text-sm">{item.title}</h3>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section id="patients" className="py-20 bg-light-gray scroll-mt-24">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Quick Access
              </h2>
              <p className="text-lg text-gray-600">
                Manage your care with just a few clicks
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Patient Portal', desc: 'Access records, results, communicate with care team', gradient: 'from-navy to-blue' },
              { title: 'Online Scheduling', desc: 'Book an appointment 24/7', gradient: 'from-blue to-cyan-600' },
              { title: 'Pay Your Bill', desc: 'Make a secure payment online', gradient: 'from-amber to-orange-500' }
            ].map((card, idx) => (
              <div key={idx} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden rounded-lg flex flex-col" style={{transitionDelay: `${idx * 100}ms`}}>
                <div className={`bg-gradient-to-r ${card.gradient} p-6 text-white`}>
                  {idx === 0 && <svg className="h-10 w-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>}
                  {idx === 1 && <svg className="h-10 w-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
                  {idx === 2 && <svg className="h-10 w-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><path d="M16 3l-4 4-4-4"></path></svg>}
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 flex-grow">{card.desc}</p>
                  <a href="https://mountain.mycommonspirit.org/MCH/Authentication/Login?" target="_blank" rel="noopener noreferrer" className="w-full bg-navy hover:bg-blue text-white font-semibold transition-all duration-300 group-hover:shadow-lg rounded-lg py-2 px-4 inline-flex items-center justify-center">
                    {idx === 0 && 'Login'}
                    {idx === 1 && 'Schedule Now'}
                    {idx === 2 && 'Pay Now'}
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-navy relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Patients Say
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Trusted by patients and physicians throughout Colorado
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote: "The care provided by the team at CCPSA was nothing short of exceptional. From the moment I walked in, I felt heard and supported. The doctors and staff were not only highly skilled but also deeply compassionate.",
                author: 'Sarah M.',
                role: 'Former ICU Patient'
              },
              {
                quote: "I have had the pleasure of working with several of the physicians at Critical Care Pulmonary and Sleep Associates over the past decade. Their clinical expertise is top-notch, and they consistently go above and beyond for their patients.",
                author: 'Dr. James R.',
                role: 'Referring Physician'
              },
              {
                quote: "After struggling with sleep issues for years, I finally found answers at CCPSA. The sleep medicine team was thorough, patient, and genuinely interested in improving my quality of life.",
                author: 'Michael T.',
                role: 'Sleep Medicine Patient'
              }
            ].map((testimonial, idx) => (
              <FadeInUp key={idx}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group rounded-lg p-8" style={{transitionDelay: `${idx * 150}ms`}}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber/20 text-amber mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5s-7 3.75-7 5c0 6 4 7 7 8m14 0c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5s-7 3.75-7 5c0 6 4 7 7 8"></path>
                    </svg>
                  </div>

                  <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="border-t border-white/20 pt-4">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Recognition */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-4">
              Our Affiliations & Recognition
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Proudly affiliated with leading healthcare systems and recognized for excellence in patient care.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <Image
                src="/images/site/adventhealth-logo.png"
                alt="AdventHealth"
                width={180}
                height={60}
                className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/site/commonspirit-logo.png"
                alt="CommonSpirit Health"
                width={180}
                height={60}
                className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/site/us-news-badge.png"
                alt="U.S. News and World Report"
                width={120}
                height={120}
                className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/site/critical-care-excellence-badge.png"
                alt="Critical Care Excellence Award - Healthgrades"
                width={120}
                height={120}
                className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/site/5280-top-docs-badge.png"
                alt="5280 Top Docs"
                width={120}
                height={120}
                className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/site/hipaa-compliant-badge.png"
                alt="HIPAA Compliant"
                width={120}
                height={120}
                className="h-16 md:h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-amber relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-navy rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Ready to Start Your Care?
              </h2>
              <p className="text-lg text-navy/80 mb-8">
                Our team is here to help. Reach out today and take the first step toward better health.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:3039510600" className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call (303) 951-0600
                </a>
                <a href="mailto:info@critcareMD.com" className="border-2 border-navy text-navy bg-white hover:bg-navy hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 rounded-lg inline-flex items-center">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
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
