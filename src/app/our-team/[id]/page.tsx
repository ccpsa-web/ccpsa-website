import { getProvider, getProviders } from '@/lib/content';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FadeInUp from '@/components/FadeInUp';

export function generateStaticParams() {
  const providers = getProviders();
  return providers.map((provider) => ({
    id: provider.id,
  }));
}

export default function ProviderProfile({ params }: { params: { id: string } }) {
  const provider = getProvider(params.id);

  if (!provider) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-12 md:py-16 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInUp>
            <Link
              href="/our-team"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Our Team
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">
              {provider.credentials
                ? `${provider.name}, ${provider.credentials}`
                : provider.name}
            </h1>
            <p className="text-lg text-white/90 mt-2">{provider.title}</p>
          </FadeInUp>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <FadeInUp>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                {/* Photo */}
                <div className="md:w-1/3 relative">
                  {provider.image ? (
                    <div className="relative h-80 md:h-full md:min-h-[400px]">
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="h-80 md:h-full md:min-h-[400px] bg-gradient-to-br from-navy to-blue flex items-center justify-center">
                      <p className="text-white/50 text-lg font-medium">{provider.name}</p>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="md:w-2/3 p-8">
                  {/* Category Badge */}
                  <span className="inline-block bg-amber/10 text-amber px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {provider.category}
                  </span>

                  {/* Locations */}
                  {provider.locations && provider.locations.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-2">Locations</h3>
                      <div className="flex flex-wrap gap-2">
                        {provider.locations.map((location: string) => (
                          <span
                            key={location}
                            className="inline-block bg-blue/10 text-blue px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bio */}
                  {provider.bio && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-navy uppercase tracking-wide mb-2">About</h3>
                      <p className="text-gray-700 leading-relaxed">{provider.bio}</p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://mountain.mycommonspirit.org/MCH/Authentication/Login?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue hover:bg-navy text-white px-6 py-3 rounded font-semibold transition-colors duration-200 text-center"
                      >
                        Schedule an Appointment
                      </a>
                      <a
                        href="tel:3039510600"
                        className="inline-block bg-light-gray hover:bg-gray-200 text-navy px-6 py-3 rounded font-semibold transition-colors duration-200 text-center"
                      >
                        Call (303) 951-0600
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
