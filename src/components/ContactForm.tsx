"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessMessage() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent");

  if (!sent) return null;

  return (
    <div className="mb-6 p-4 bg-secondary/20 border-2 border-secondary rounded">
      <h3 className="font-semibold text-secondary mb-2">✓ Submission Received</h3>
      <p className="text-sm md:text-base text-text-primary dark:text-slate-300">
        Thank you for sharing your project details. We'll review your submission and get back to you within 1-2 business days.
      </p>
    </div>
  );
}

export default function ContactForm() {
  return (
    <>
      <Suspense fallback={null}>
        <SuccessMessage />
      </Suspense>
      
      <p className="mb-6 text-base md:text-lg text-text-primary dark:text-slate-300">
        Share details about your current data landscape and what you're trying to achieve. The more specific you are, the better we can help.
      </p>
      
      <form action="/api/contact" method="POST" encType="multipart/form-data" className="space-y-6">
        {/* Basic Information */}
        <section className="space-y-4 pb-6 border-b border-primary/30">
          <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-secondary">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Full Name *</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                placeholder="John Doe" 
                className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Email Address *</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="john@company.com" 
                className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Organization *</label>
              <input 
                type="text" 
                id="organization"
                name="organization" 
                placeholder="Your company name" 
                className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Your Role</label>
              <input 
                type="text" 
                id="role"
                name="role" 
                placeholder="CTO, Data Lead, etc." 
                className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
              />
            </div>
          </div>
        </section>

        {/* Project Scope */}
        <section className="space-y-4 pb-6 border-b border-primary/30">
          <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-secondary">Project Scope</h3>
          
          <div>
            <label htmlFor="services" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Services Needed * (Select all that apply)</label>
            <select 
              id="services"
              name="services" 
              multiple 
              size={10}
              className="w-full border-3 border-primary px-3 py-2 bg-bg-light text-white text-sm md:text-base rounded"
              required
            >
              <option value="data-pipeline-engineering">Data Pipeline Engineering</option>
              <option value="warehousing-modeling">Warehousing & Data Modeling</option>
              <option value="streaming-systems">Streaming Systems</option>
              <option value="analytics-engineering">Analytics Engineering & BI</option>
              <option value="cloud-infrastructure">Cloud Infrastructure</option>
              <option value="data-quality-observability">Data Quality & Observability</option>
              <option value="machine-learning-ai">Machine Learning & AI</option>
              <option value="data-governance-compliance">Data Governance & Compliance</option>
              <option value="agri-data-solutions">Agri-Data Solutions</option>
              <option value="custom-automation">Custom Automation</option>
            </select>
            <p className="mt-1 text-xs text-text-muted dark:text-slate-400">Hold Ctrl (Windows) or Cmd (Mac) to select multiple</p>
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Industry *</label>
            <select 
              id="industry"
              name="industry" 
              className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white text-sm md:text-base rounded"
              required
            >
              <option value="">Select your industry</option>
              <option value="fintech">Fintech</option>
              <option value="agriculture">Agriculture & Agribusiness</option>
              <option value="logistics">Logistics & Mobility</option>
              <option value="retail">Retail & E-commerce</option>
              <option value="ngo">NGO & Development</option>
              <option value="public-sector">Public Sector</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="technology">Technology</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Expected Timeline *</label>
            <select 
              id="timeline"
              name="timeline" 
              className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white text-sm md:text-base rounded"
              required
            >
              <option value="">Select timeline</option>
              <option value="urgent">Urgent (within 2 weeks)</option>
              <option value="short-term">Short term (1-2 months)</option>
              <option value="medium-term">Medium term (3-6 months)</option>
              <option value="long-term">Long term (6+ months)</option>
              <option value="exploratory">Exploratory (no fixed timeline)</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Budget Range</label>
            <select 
              id="budget"
              name="budget" 
              className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white text-sm md:text-base rounded"
            >
              <option value="">Prefer not to say</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="over-100k">Over $100,000</option>
            </select>
          </div>
        </section>

        {/* Current State */}
        <section className="space-y-4 pb-6 border-b border-primary/30">
          <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-secondary">Current Data Landscape</h3>
          
          <div>
            <label htmlFor="current-tools" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Tools & Platforms You Currently Use</label>
            <textarea 
              id="current-tools"
              name="current_tools" 
              placeholder="e.g., PostgreSQL, Excel, Power BI, AWS S3, Salesforce, etc."
              className="w-full border-3 border-primary px-3 py-2 md:py-3 h-24 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
            />
          </div>

          <div>
            <label htmlFor="data-sources" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Primary Data Sources</label>
            <textarea 
              id="data-sources"
              name="data_sources" 
              placeholder="e.g., Mobile app, POS systems, APIs, CSV exports, third party services"
              className="w-full border-3 border-primary px-3 py-2 md:py-3 h-24 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
            />
          </div>

          <div>
            <label htmlFor="data-volume" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Approximate Data Volume</label>
            <select 
              id="data-volume"
              name="data_volume" 
              className="w-full border-3 border-primary px-3 py-2 md:py-3 bg-bg-light text-white text-sm md:text-base rounded"
            >
              <option value="">Not sure</option>
              <option value="small">Small (&lt; 1GB)</option>
              <option value="medium">Medium (1GB - 100GB)</option>
              <option value="large">Large (100GB - 1TB)</option>
              <option value="very-large">Very large (&gt; 1TB)</option>
            </select>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="space-y-4 pb-6 border-b border-primary/30">
          <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-secondary">The Challenge</h3>
          
          <div>
            <label htmlFor="problem" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">What problem are you trying to solve? *</label>
            <textarea 
              id="problem"
              name="problem" 
              placeholder="Describe your current challenges, pain points, and what's not working. Be as specific as possible."
              className="w-full border-3 border-primary px-3 py-2 md:py-3 h-32 md:h-40 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
              required
            />
          </div>

          <div>
            <label htmlFor="goals" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">What would success look like? *</label>
            <textarea 
              id="goals"
              name="goals" 
              placeholder="Describe the outcomes you're hoping to achieve. What decisions or actions will better data enable?"
              className="w-full border-3 border-primary px-3 py-2 md:py-3 h-32 md:h-40 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
              required
            />
          </div>

          <div>
            <label htmlFor="constraints" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Known Constraints or Requirements</label>
            <textarea 
              id="constraints"
              name="constraints" 
              placeholder="e.g., Must comply with GDPR, need on-premises solution, limited budget, existing tech stack, regulatory requirements"
              className="w-full border-3 border-primary px-3 py-2 md:py-3 h-24 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
            />
          </div>
        </section>

        {/* Additional Information */}
        <section className="space-y-4 pb-6 border-b border-primary/30">
          <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-secondary">Supporting Materials</h3>
          
          <div>
            <label htmlFor="documentation-links" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Links to Documentation or Resources</label>
            <textarea 
              id="documentation-links"
              name="documentation_links" 
              placeholder="Share links to Google Docs, Notion pages, architecture diagrams, or any relevant documentation (one per line)"
              className="w-full border-3 border-primary px-3 py-2 md:py-3 h-24 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
            />
            <p className="mt-1 text-xs text-text-muted dark:text-slate-400">Ensure links are publicly accessible or provide view permissions</p>
          </div>

          <div>
            <label htmlFor="attachments" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Attachments (Optional)</label>
            <input 
              type="file" 
              id="attachments"
              name="attachments" 
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg"
              className="w-full border-3 border-primary px-3 py-2 bg-bg-light text-white text-sm md:text-base rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-black hover:file:bg-accent file:cursor-pointer" 
            />
            <p className="mt-1 text-xs text-text-muted dark:text-slate-400">PDFs, spreadsheets, diagrams, or sample data files (max 10MB per file)</p>
          </div>

          <div>
            <label htmlFor="additional-notes" className="block text-sm font-medium text-text-primary dark:text-slate-300 mb-2">Additional Notes</label>
            <textarea 
              id="additional-notes"
              name="additional_notes" 
              placeholder="Anything else we should know? Questions you have? Specific concerns?"
              className="w-full border-3 border-primary px-3 py-2 md:py-3 h-24 bg-bg-light text-white placeholder-text-muted text-sm md:text-base rounded" 
            />
          </div>
        </section>

        {/* Honeypot */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Submit */}
        <div className="pt-4">
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-secondary text-black px-8 py-3 rounded font-semibold hover:bg-accent transition text-sm md:text-base"
          >
            Submit Project Details
          </button>
          <p className="mt-3 text-sm text-text-muted dark:text-slate-400">
            We'll review your submission and get back to you within 1-2 business days with next steps.
          </p>
        </div>
      </form>
    </>
  );
}
