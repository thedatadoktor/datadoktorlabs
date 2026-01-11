import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Data Governance & Compliance - Datadoktor Labs",
  description: "GDPR, NDPR compliance, data inventories, access control, and security documentation for regulatory readiness.",
};

export default function Governance() {
  return (
    <>
      <PageHeader title="Data Governance & Compliance" subtitle="Regulatory readiness by design" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Build</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We help teams meet regulatory and investor requirements through structured data governance — GDPR readiness, NDPR compliance, data inventories, access policies, and security documentation.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Compliance Services</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">GDPR Readiness</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Data mapping, consent management, right to erasure automation, DPIAs, and compliance documentation for EU operations</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">NDPR Compliance (Nigeria)</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Nigeria Data Protection Regulation adherence, data processing records, breach notification systems</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">DPIA Assessments</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Data Protection Impact Assessments for high-risk processing activities with mitigation strategies</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Data Inventories & RoPA</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Records of Processing Activities, data flow mapping, system inventories with automated discovery</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Access Control Policies</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">RBAC, attribute-based access, audit logging, and periodic access reviews</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Retention & Deletion Automation</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Automated data lifecycle management, retention policies, and deletion workflows</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Data inventory and classification</li>
            <li>Records of Processing Activities (RoPA)</li>
            <li>DPIA documentation</li>
            <li>Access control policies</li>
            <li>Retention and deletion schedules</li>
            <li>Breach notification procedures</li>
            <li>Security documentation bundles</li>
            <li>Training materials for teams</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Nigeria-Specific Focus</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We understand Nigerian regulatory context including CBN IT and data compliance requirements for fintech projects, ensuring systems are audit-ready for local regulators.
          </p>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_governance">Discuss compliance needs</CTAButton>
        </div>
      </div>
    </>
  );
}
