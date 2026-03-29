import { getPageContent } from '@/lib/content';
import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface Location {
  name: string;
  address: string;
  phone: string;
}

interface ContactData {
  title: string;
  phone: string;
  fax: string;
  email: string;
  locations: Location[];
}

export default function Contact() {
  const contactData = getPageContent('contact') as ContactData | null;

  if (!contactData) {
    return (
      <div className="min-h-screen bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <p className="text-center text-gray-600">Unable to load contact information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              Reach out to CCPSA with questions, referrals, or to schedule an appointment. We&apos;re here to help.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Phone */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4" role="img" aria-label="Phone">📞</div>
                <h3 className="text-xl font-semibold text-navy mb-2">Call Us</h3>
                <a href={`tel:${contactData.phone.replace(/[^\d]/g, '')}`} className="text-blue-text hover:text-navy font-medium transition-colors">
                  {contactData.phone}
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4" role="img" aria-label="Email">✉️</div>
                <h3 className="text-xl font-semibold text-navy mb-2">Email Us</h3>
                <a href={`mailto:${contactData.email}`} className="text-blue-text hover:text-navy font-medium transition-colors">
                  {contactData.email}
                </a>
              </div>

              {/* Fax */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4" role="img" aria-label="Fax">📠</div>
                <h3 className="text-xl font-semibold text-navy mb-2">Fax Us</h3>
                <p className="text-blue-text font-medium">{contactData.fax}</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">Our Locations</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              CCPSA provides services across multiple locations throughout the Denver metro area. Find the clinic nearest you.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactData.locations.map((location, idx) => (
                <FadeInUp key={idx}>
                  <div className="bg-light-gray rounded-lg p-6 border border-gray-200 hover:border-amber hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-navy mb-4">{location.name}</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-amber text-lg" role="img" aria-label="Address">📍</span>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-amber text-lg" role="img" aria-label="Phone">📞</span>
                        <Link
                          href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
                          className="text-blue-text hover:text-navy font-medium transition-colors text-sm"
                        >
                          {location.phone}
                        </Link>
                      </div>
                    </div>

                    {/* Get Directions Link */}
                    <Link
                      href={`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-text hover:text-navy font-medium text-sm transition-colors"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Get Directions
                    </Link>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              Send Us a Message
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
              <form action="https://formsubmit.co/info@critcareMD.com" method="POST">
                <input type="hidden" name="_subject" value="New Contact Form Submission - CCPSA Website" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-navy font-semibold mb-2">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-navy font-semibold mb-2">
                      Email <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-navy font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors"
                    placeholder="(303) 555-0100"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-navy font-semibold mb-2">
                    Subject <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="Patient Inquiry">Patient Inquiry</option>
                    <option value="Physician Referral">Physician Referral</option>
                    <option value="Insurance Question">Insurance Question</option>
                    <option value="Employment Opportunity">Employment Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-navy font-semibold mb-2">
                    Message <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors resize-none"
                    placeholder="Please tell us how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-blue text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg flex items-center justify-center gap-2"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Business Hours</h2>

            <div className="max-w-2xl mx-auto bg-light-gray rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                  <span className="text-navy font-medium">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                  <span className="text-navy font-medium">Saturday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-navy font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-6 pt-6 border-t border-gray-300">
                For emergencies outside of business hours, please go to the nearest emergency room or call 911.
              </p>
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
              Book your appointment online or call us directly. We look forward to helping you.
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
