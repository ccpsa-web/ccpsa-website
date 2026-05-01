'use client';

import { useState, useEffect } from 'react';
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
        <p className="text-navy font-semibold mb-2">No open staff positions at this time.</p>
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
        Applications for staff positions are managed through BambooHR. Clicking
        a position opens the full posting where you can apply directly.
      </p>
    </div>
  );
}

interface Job {
  id: string;
  slug: string;
  title: string;
  department?: string;
  location: string;
  type: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
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
  openPositionsTitle?: string;
  applyTitle?: string;
  applyIntro?: string;
  applyIntroEmailSuffix?: string;
  careersEmail?: string;
}

interface JobsClientProps {
  jobs: Job[];
  pageContent: PageContent;
  bambooBoard: BambooBoard;
}

const DEFAULT_CAREERS_EMAIL = 'info@critcareMD.com';

export default function JobsClient({ jobs, pageContent, bambooBoard }: JobsClientProps) {
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
  const openPositionsTitle = pageContent.openPositionsTitle || 'Physician Opportunities';
  const applyTitle = pageContent.applyTitle || 'Apply Now';
  const applyIntro = pageContent.applyIntro || "Upload your resume and we'll be in touch. You can also email";
  const applyIntroEmailSuffix = pageContent.applyIntroEmailSuffix || 'directly.';
  const careersEmail = pageContent.careersEmail || DEFAULT_CAREERS_EMAIL;
  const formAction = `https://formsubmit.co/${careersEmail}`;

  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    position: '',
  });
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  }, []);

  const toggleJobDetails = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const selectPosition = (positionTitle: string) => {
    setFormData({ ...formData, position: positionTitle });
    setTimeout(() => {
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.borderColor = '#2E86C1';
    e.currentTarget.style.backgroundColor = '#f0f9ff';
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.borderColor = '';
    e.currentTarget.style.backgroundColor = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.borderColor = '';
    e.currentTarget.style.backgroundColor = '';
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

          {/* Clinical Staff Openings — powered by BambooHR */}
          <FadeInUp className="mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              Clinical Staff Openings
            </h2>
            <p className="text-gray-600 mb-6">
              Nursing, advanced practice, administrative, and support staff positions. Click any role below to apply directly through our applicant tracking system.
            </p>
            <BambooHRJobBoard board={bambooBoard} />
          </FadeInUp>

          {/* Physician Opportunities — CMS-managed */}
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              {openPositionsTitle}
            </h2>
            <p className="text-gray-600 mb-6">
              Physician and advanced practice provider roles with our physician-led practice. Review openings below and submit your CV through the application form.
            </p>

            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <FadeInUp key={job.id} className="fade-in-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="bg-white rounded-lg shadow-md border-l-4 border-amber hover:shadow-lg transition-shadow duration-300">
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-navy mb-2">{job.title}</h3>
                          <p className="text-gray-600 mb-2">{job.location}</p>
                          <p className="text-sm font-medium text-navy">
                            <strong>{job.type}</strong> Position
                          </p>
                        </div>
                        <span className="inline-block bg-amber/10 text-amber px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap h-fit">
                          Open
                        </span>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="px-6 pb-4">
                      <button
                        onClick={() => toggleJobDetails(job.id)}
                        className="text-sm text-blue font-medium flex items-center gap-1 hover:text-navy transition-colors"
                      >
                        <span className="toggle-text">
                          {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                        </span>
                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${
                            expandedJob === job.id ? 'rotate-180' : ''
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {expandedJob === job.id && (
                      <div className="px-6 pb-6 space-y-4 border-t border-gray-200 pt-4">
                        {job.description && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Summary</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
                          </div>
                        )}

                        {job.hospitalServices && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">{job.hospitalServices.title}</h4>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                              {job.hospitalServices.items?.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            {job.hospitalServices.locations && (
                              <p className="text-sm text-gray-600 mt-3">
                                <strong>Hospital Locations:</strong> {job.hospitalServices.locations}
                              </p>
                            )}
                          </div>
                        )}

                        {job.clinicServices && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">{job.clinicServices.title}</h4>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                              {job.clinicServices.items?.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            {job.clinicServices.locations && (
                              <p className="text-sm text-gray-600 mt-3">
                                <strong>Clinic Locations:</strong> {job.clinicServices.locations}
                              </p>
                            )}
                          </div>
                        )}

                        {job.responsibilities?.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Responsibilities</h4>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                              {job.responsibilities.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.requirements?.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Skills, Education & Experience Requirements</h4>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                              {job.requirements?.map((req: string, i: number) => (
                                <li key={i}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.physicalRequirements?.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Physical Requirements</h4>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                              {job.physicalRequirements.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.compensation?.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Compensation & Benefits</h4>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                              {job.compensation.map((comp: string, i: number) => (
                                <li key={i}>{comp}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Apply Button */}
                        <div className="pt-4 border-t border-gray-200">
                          <button
                            onClick={() => selectPosition(job.title)}
                            className="inline-flex items-center gap-2 text-blue font-medium hover:text-navy transition-colors"
                          >
                            Apply for this Position
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>

          {/* Application Form */}
          <FadeInUp className="mt-16" id="apply">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></div>
              <h2 className="text-3xl font-bold text-navy">{applyTitle}</h2>
            </div>
            <p className="text-gray-600 mb-8 mt-4">
              {applyIntro}{' '}
              <Link href={`mailto:${careersEmail}`} className="text-blue hover:text-navy transition-colors font-medium">
                {careersEmail}
              </Link>{' '}
              {applyIntroEmailSuffix}
            </p>

            <div className="bg-white rounded-lg shadow-md p-8">
              <form
                id="application-form"
                action={formAction}
                method="POST"
                encType="multipart/form-data"
              >
                <input type="hidden" name="_subject" value="New Job Application - CCPSA Website" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://critcaremd.com/join-our-team?submitted=true" />

                {/* Resume Upload */}
                <div className="mb-8">
                  <label className="block text-navy font-semibold mb-3">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-blue/30 rounded-lg p-8 text-center hover:border-blue/60 transition-colors duration-300 cursor-pointer bg-light-gray/50"
                  >
                    <svg
                      className="h-10 w-10 text-blue/50 mx-auto mb-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    <p className="text-gray-600 mb-2">Drag and drop your resume here, or</p>
                    <label htmlFor="resume-file" className="inline-block bg-blue text-white font-semibold px-6 py-2 rounded-lg cursor-pointer hover:bg-navy transition-colors duration-300">
                      Select File
                    </label>
                    <input
                      type="file"
                      id="resume-file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    {fileName && <p className="text-sm text-navy mt-3 font-medium">Selected: {fileName}</p>}
                    <p className="text-xs text-gray-600 mt-2">PDF, DOC, or DOCX (max 10MB)</p>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="first-name" className="block text-navy font-semibold mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-navy font-semibold mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-navy font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-navy font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors"
                    placeholder="(303) 555-0100"
                  />
                </div>

                {/* Position */}
                <div className="mb-8">
                  <label htmlFor="position" className="block text-navy font-semibold mb-2">
                    Position <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/50 focus:border-blue transition-colors bg-white"
                  >
                    <option value="">Select a position</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-blue text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg flex items-center justify-center gap-2"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                  </svg>
                  Submit Application
                </button>
              </form>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mt-6 p-4 bg-sage/20 border border-sage rounded-lg text-navy text-center animate-fade-in">
                <strong>Application submitted.</strong> Our HR team will review your resume and contact you if there is a match. Thank you for your interest in CCPSA.
              </div>
            )}

            {/* Alternative Contact */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 border-l-4 border-amber">
              <p className="text-navy">
                <strong>Prefer to apply another way?</strong> Call{' '}
                <Link href="tel:3039510600" className="text-blue hover:text-navy transition-colors font-medium">
                  (303) 951-0600
                </Link>
                , email{' '}
                <Link href="mailto:info@critcareMD.com" className="text-blue hover:text-navy transition-colors font-medium">
                  info@critcareMD.com
                </Link>
                , or mail your resume to CCPSA Human Resources, 274 Union Blvd. Suite 200, Lakewood, CO 80228.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
