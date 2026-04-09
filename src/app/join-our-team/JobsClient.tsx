'use client';

import { useState, useEffect } from 'react';
import FadeInUp from '@/components/FadeInUp';
import Link from 'next/link';

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

interface PageContent {
  title?: string;
  subtitle?: string;
  aboutTitle?: string;
  aboutText?: string;
  benefits?: Array<{ title: string; description: string }>;
  ctaTitle?: string;
  ctaText?: string;
  careersEmail?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface JobsClientProps {
  jobs: Job[];
  content?: PageContent | null;
}

/**
 * Renders a field that can be:
 *   1. string[] — legacy array format, renders as bullet list
 *   2. string with bullet lines (-, •, *, or 1.) — renders as bullet list
 *   3. plain string — renders as paragraph(s)
 *
 * Bullet detection: if >50% of non-empty lines start with a bullet
 * character, the whole block is treated as a list.
 */
function FlexContent({ content }: { content: string | string[] }) {
  // Legacy array format
  if (Array.isArray(content)) {
    return (
      <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
        {content.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  // String — check if it contains bulleted lines
  const bulletPattern = /^[\s]*[-•*▪◦‣⁃]\s|^[\s]*\d+[.)]\s/;
  const lines = content.split(/\n/).filter((l) => l.trim().length > 0);

  if (lines.length > 0) {
    const bulletCount = lines.filter((l) => bulletPattern.test(l)).length;
    // If at least some lines look like bullets, render as a mixed list
    if (bulletCount >= 1 && bulletCount > lines.length * 0.3) {
      // Build elements: non-bullet lines become bold headers, bullet lines become <li>
      const elements: React.ReactNode[] = [];
      let currentItems: string[] = [];

      const flushItems = () => {
        if (currentItems.length > 0) {
          elements.push(
            <ul key={`ul-${elements.length}`} className="text-sm text-gray-600 space-y-1 list-disc list-inside mb-2">
              {currentItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          currentItems = [];
        }
      };

      for (const line of lines) {
        if (bulletPattern.test(line)) {
          const cleaned = line.replace(/^[\s]*[-•*▪◦‣⁃]\s*/, '').replace(/^[\s]*\d+[.)]\s*/, '').trim();
          currentItems.push(cleaned);
        } else {
          flushItems();
          elements.push(
            <p key={`h-${elements.length}`} className="text-sm font-semibold text-navy mt-3 mb-1">{line.trim()}</p>
          );
        }
      }
      flushItems();

      return <div>{elements}</div>;
    }
  }

  // Plain text — render as paragraph(s), splitting on double newlines
  const paragraphs = content.split(/\n\n+/).filter(Boolean);
  return (
    <div className="text-sm text-gray-600 leading-relaxed space-y-2">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export default function JobsClient({ jobs, content }: JobsClientProps) {
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
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById('apply')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content?.title || 'Join Our Team'}</h1>
            <p className="text-lg md:text-xl max-w-3xl text-white/90">
              {content?.subtitle || 'Help us deliver exceptional critical care and pulmonary services to the Denver metro area. Explore open positions and apply today.'}
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
              <h2 className="text-3xl font-bold text-navy mb-6">{content?.aboutTitle || 'About CCPSA'}</h2>
              <p className="text-gray-600 leading-relaxed">
                {content?.aboutText || 'Critical Care, Pulmonary and Sleep Associates is an independent, physician-owned, large multispecialty private practice. For over 40 years, we have been providing exceptional critical care, pulmonary, and sleep medicine services to the Denver metro area.'}
              </p>
            </div>
          </FadeInUp>

          {/* Why Join Section */}
          <FadeInUp className="mb-16">
            <div className="bg-amber/5 rounded-lg border border-amber/20 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
                Why Join Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {content?.benefits && content.benefits.length > 0 ? (
                  content.benefits.map((benefit: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-navy mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Physician-Owned Practice</h3>
                      <p className="text-sm text-gray-600">An independent practice with physician leadership and input on clinical decisions.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Work-Life Balance</h3>
                      <p className="text-sm text-gray-600">Flexible schedules, no mandated call, and reasonable clinic hours.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Competitive Compensation</h3>
                      <p className="text-sm text-gray-600">Market-driven salaries with comprehensive benefits and relocation assistance.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Professional Growth</h3>
                      <p className="text-sm text-gray-600">Opportunities in teaching, research, leadership, and clinical advancement.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </FadeInUp>

          {/* Open Positions */}
          <FadeInUp>
            <h2 className="text-3xl font-bold text-navy mb-8 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-blue to-navy"></span>
              Open Positions
            </h2>

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
                        <span className="inline-block bg-amber/10 text-amber-text px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap h-fit">
                          Open
                        </span>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="px-6 pb-4">
                      <button
                        onClick={() => toggleJobDetails(job.id)}
                        className="text-sm text-blue-text font-medium flex items-center gap-1 hover:text-navy transition-colors"
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
                          aria-hidden="true"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {expandedJob === job.id && (
                      <div className="px-6 pb-6 space-y-4 border-t border-gray-200 pt-4">
                        {(job.summary || job.description) && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Summary</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{job.summary || job.description}</p>
                          </div>
                        )}

                        {job.responsibilities && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Responsibilities</h4>
                            <FlexContent content={job.responsibilities} />
                          </div>
                        )}

                        {job.hospitalServices && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">{job.hospitalServices.title}</h4>
                            <FlexContent content={job.hospitalServices.items} />
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
                            <FlexContent content={job.clinicServices.items} />
                            {job.clinicServices.locations && (
                              <p className="text-sm text-gray-600 mt-3">
                                <strong>Clinic Locations:</strong> {job.clinicServices.locations}
                              </p>
                            )}
                          </div>
                        )}

                        {job.requirements && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Skills, Education & Experience Requirements</h4>
                            <FlexContent content={job.requirements} />
                          </div>
                        )}

                        {job.compensation && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Compensation & Benefits</h4>
                            <FlexContent content={job.compensation} />
                          </div>
                        )}

                        {job.physicalRequirements && (
                          <div>
                            <h4 className="font-semibold text-navy mb-2">Physical Requirements</h4>
                            <FlexContent content={job.physicalRequirements} />
                          </div>
                        )}

                        {/* Apply Button */}
                        <div className="pt-4 border-t border-gray-200">
                          <button
                            onClick={() => selectPosition(job.title)}
                            className="inline-flex items-center gap-2 text-blue-text font-medium hover:text-navy transition-colors"
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
              <h2 className="text-3xl font-bold text-navy">Apply Now</h2>
            </div>
            <p className="text-gray-600 mb-8 mt-4">
              Upload your resume and we&apos;ll be in touch. You can also email{' '}
              <Link href={`mailto:${content?.careersEmail || 'careers@critcareMD.com'}`} className="text-blue-text hover:text-navy transition-colors font-medium">
                {content?.careersEmail || 'careers@critcareMD.com'}
              </Link>{' '}
              directly.
            </p>

            <div className="bg-white rounded-lg shadow-md p-8">
              <form
                id="application-form"
                action="https://formsubmit.co/careers@critcareMD.com"
                method="POST"
                encType="multipart/form-data"
              >
                <input type="hidden" name="_subject" value="New Job Application - CCPSA Website" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://ccpsa-website.vercel.app/join-our-team?submitted=true" />
                <input type="hidden" name="_to" value={content?.careersEmail || 'careers@critcareMD.com'} />

                {/* Resume Upload */}
                <div className="mb-8">
                  <label className="block text-navy font-semibold mb-3">
                    Upload Resume <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-blue/30 rounded-lg p-8 text-center hover:border-blue/60 transition-colors duration-300 cursor-pointer bg-light-gray/50"
                  >
                    <svg
                      className="h-10 w-10 text-blue-text/50 mx-auto mb-3"
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
                      First Name <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
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
                      Last Name <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
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
                    Email <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
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
                    Position <span className="text-red-500" aria-hidden="true">*</span><span className="sr-only">(required)</span>
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
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
