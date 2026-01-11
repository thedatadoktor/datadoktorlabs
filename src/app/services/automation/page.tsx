import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Custom Automation - Datadoktor Labs",
  description: "Workflow automation, API integrations, reporting automation, reconciliation pipelines, and business event systems.",
};

export default function Automation() {
  return (
    <>
      <PageHeader title="Custom Automation" subtitle="Data-driven workflow automation" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Automate</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We build internal data-driven systems that eliminate manual work — workflow automation, API integrations, reporting pipelines, and reconciliation systems tailored to your business processes.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Automation Solutions</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Workflow Automation</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Event-driven systems that trigger actions based on data changes, approvals, or business rules</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">API-Based Integrations</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Connect payment gateways, ERPs, CRMs, and custom internal systems</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Reporting Automation</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Scheduled reports, automated dashboards, and email/Slack delivery of critical business metrics</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Reconciliation Pipelines</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Automated matching of transactions across payment gateways, banks, and internal ledgers with discrepancy alerts</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Business Event Systems</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Capture and process business events (orders, payments, user actions) for downstream analytics and operations</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Common Use Cases</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Automated financial reconciliation for fintech</li>
            <li>Order processing and fulfillment automation</li>
            <li>Customer onboarding workflows with KYC checks</li>
            <li>Invoice generation and payment tracking</li>
            <li>Inventory updates from multiple channels</li>
            <li>Compliance reporting automation</li>
            <li>Data synchronization between systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What You Get</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Custom automation code with tests</li>
            <li>API integration documentation</li>
            <li>Monitoring and error alerting</li>
            <li>Retry logic and failure handling</li>
            <li>Audit logging for compliance</li>
            <li>Runbooks for operations</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_automation">Discuss automation needs</CTAButton>
        </div>
      </div>
    </>
  );
}
