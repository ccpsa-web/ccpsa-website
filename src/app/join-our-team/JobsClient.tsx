'use client';

import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';
import type { BambooBoard } from '@/lib/bamboohr';

// Custom-styled BambooHR job board — replaces BambooHR's iframe with server-
// fetched listings rendered as pill buttons that match site styling. Each
// button links straight to the BambooHR posting page in a new tab, where the
// applicant submits through your ATS.
function BambooHRJobBoard({ board }: { board: BambooBoard }) {
  if (board.fetchFailed) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-600">
        Job listings are temporarily unavailable. Please check back soon, or
        email{' '}
        <Link href="mailto:info@critcareMD.com" className="text-blue hover:text-navy font-medium">
          info@critcareMD.com
        </Link>{' '}
        to inquire about open staff positions.
      </div>
    );
  }

  if (board.totalJobs === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-navy font-semibold mb-2">No open positions at this time.</p>
        <p className="text-gray-600 text-sm">
          Please check back as we will be looking for great people to join our
          team in the future.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
      {board.departments.map((dept) => (
        <div key={dept.id}>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
            {dept.name}
          </p>
          <div className="flex flex-wrap gap-3">
            {dept.jobs.map((job) => (
              <a
                key={job.id}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-navy hover:bg-blue text-white font-medium px-5 py-3 rounded-md transition-colors duration-200"
              >
                <span>{job.title}</span>
                {job.location && (
                  <span className="text-xs text-white/70 font-normal hidden sm:inline">
                    · {job.location}
                  </span>
                )}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      ))}
      <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-100">
        Applications are managed through BambooHR. Clicking a position opens the
        full posting where you can apply directly.
      </p>
    </div>
  );
}

interface Benefit {
  title: string;
  description: string;
}

interface PageContent {
  title?: string;
  subtitle?: string;
  aboutTitle?: string;
  aboutParagraphs?: string[];
  whyJoinTitle?: string;
  benefits?: Benefit[];
  staffOpeningsTitle?: string;
  staffOpeningsIntro?: string;
  careersEmail?: string;
}

interface JobsClientProps {
  pageContent: PageContent;
  bambooBoard: BambooBoard;
}

const DEFAULT_CAREERS_EMAIL = 'info@critcareMD.com';

export default function JobsClient({ pageContent, bambooBoard }: JobsClientProps) {
  const heroTitle = pageContent.title || 'Join Our Team';
  const heroSubtitle = pageContent.subtitle || 'Help us deliver exceptional critical care and pulmonary services to the Denver metro area. Explore open positions and apply today.';
  const aboutTitle = pageContent.aboutTitle || 'About CCPSA';
  const aboutParagraphs = pageContent.aboutParagraphs && pageContent.aboutParagraphs.length > 0
    ? pageContent.aboutParagraphs
    : [
        'Critical Care, Pulmonary and Sleep Associates is an independent, physician-owned, large multispecialty private practice. For over 40 years, we have been providing exceptional critical care, pulmonary, and sleep medicine services to the Denver metro area.',
        "Our dedicated team of over 30 board-certified physicians, advanced practice providers, nurses, and support staff exclusively serve multiple CommonSpirit and AdventHealth hospitals and multiple outpatient clinic locations spanning Colorado's front range.",
        "We're committed to building a culture of excellence, collaboration, and professional growth for all team members.",
      ];
  const whyJoinTitle = pageContent.whyJoinTitle || 'Why Join Us';
  const benefits: Benefit[] = pageContent.benefits && pageContent.benefits.length > 0
    ? pageContent.benefits
    : [
        { title: 'Physician-Owned Practice', description: 'An independent practice with physician leadership and input on clinical decisions.' },
        { title: 'Work-Life Balance', description: 'Flexible schedules, no mandated call, and reasonable clinic hours.' },
        { title: 'Competitive Compensation', description: 'Market-driven salaries with comprehensive benefits and relocation assistance.' },
        { title: 'Professional Growth', description: 'Opportunities in teaching, research, leadership, and clinical advancement.' },
      ];
  const staffOpeningsTitle = pageContent.staffOpeningsTitle || 'Current Openings';
  const staffOpeningsIntro = pageContent.staffOpeningsIntro || 'Clinical, advanced practice, physician, administrative, and support positions across our hospital and clinic sites. Click any role below to apply directly through our applicant tracking system.';
  const careersEmail = pageContent.careersEmail || DEFAULT_CAREERS_EMAIL;

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy to-blue py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle}</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              {heroSubtitle}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* About Section */}
          <FadeInUp className="mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy mb-6">{aboutTitle}</h2>
              {aboutParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`text-gray-600 leading-relaxed${idx < aboutParagraphs.length - 1 ? ' mb-4' : ''}`}
                >
                  {para}
                </p>
              ))}
            </div>
          </FadeInUp>

          {/* Why Join Section */}
          <FadeInUp className="mb-16">
            <div className="bg-amber/5 rounded-lg border border-amber/20 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
                {whyJoinTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-navy mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Current Openings — powered by BambooHR, heading/intro managed in the CMS */}
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              {staffOpeningsTitle}
            </h2>
            <p className="text-gray-600 mb-6">{staffOpeningsIntro}</p>
            <BambooHRJobBoard board={bambooBoard} />
          </FadeInUp>

          {/* Alternative Contact */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6 border-l-4 border-amber">
            <p className="text-navy">
              <strong>Prefer to apply another way?</strong> Call{' '}
              <Link href="tel:3039510600" className="text-blue hover:text-navy transition-colors font-medium">
                (303) 951-0600
              </Link>
              , email{' '}
              <Link href={`mailto:${careersEmail}`} className="text-blue hover:text-navy transition-colors font-medium">
                {careersEmail}
              </Link>
              , or mail your resume to CCPSA Human Resources, 274 Union Blvd. Suite 200, Lakewood, CO 80228.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
