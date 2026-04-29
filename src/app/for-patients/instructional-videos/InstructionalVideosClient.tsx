'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

interface VideoItem {
  title: string;
  description: string;
  youtubeId: string;
}

export interface InstructionalVideosData {
  heroTitle: string;
  heroSubtitle: string;
  introHeading: string;
  introBody: string;
  videos: VideoItem[];
  ctaHeading: string;
  ctaBody: string;
  ctaScheduleLink: string;
  ctaPhone: string;
  ctaPhoneRaw: string;
}

export default function InstructionalVideosClient({ data }: { data: InstructionalVideosData }) {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <nav className="text-sm text-white/80 mb-4" aria-label="Breadcrumb">
              <Link href="/for-patients" className="hover:text-amber transition-colors">
                For Patients
              </Link>
              <span className="mx-2">/</span>
              <span>Instructional Videos</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.heroTitle}</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">{data.heroSubtitle}</p>
          </FadeInUp>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{data.introHeading}</h2>
            <p className="text-gray-600 leading-relaxed">{data.introBody}</p>
          </FadeInUp>
        </div>
      </section>

      {/* Video Grid */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {data.videos.map((video, idx) => (
              <FadeInUp key={video.youtubeId + idx}>
                <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-amber transition-colors">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                      title={`How to use a ${video.title}`}
                      loading="lazy"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-navy mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue hover:text-navy text-sm font-medium transition-colors"
                    >
                      Open on YouTube
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 3h7v7M10 14L21 3M21 14v7H3V3h7" />
                      </svg>
                    </a>
                  </div>
                </article>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp>
            <p className="text-xs text-gray-500 mt-10 max-w-3xl">
              These videos are provided for general patient education and are hosted by their respective creators
              on YouTube. They are not a substitute for instructions from your provider or the manufacturer&rsquo;s
              package insert.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber text-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.ctaHeading}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{data.ctaBody}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:items-start">
              <div className="flex flex-col items-center">
                <a
                  href={data.ctaScheduleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy hover:bg-blue text-white px-8 py-3 rounded font-semibold transition-colors duration-200"
                >
                  Schedule Online
                </a>
                <p className="text-[0.9rem] italic text-navy/80 mt-2">(for established patients only)</p>
              </div>
              <a
                href={`tel:${data.ctaPhoneRaw}`}
                className="inline-block bg-white hover:bg-light-gray text-navy px-8 py-3 rounded font-semibold transition-colors duration-200"
              >
                Call {data.ctaPhone}
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
