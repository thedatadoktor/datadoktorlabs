import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Cloud Infrastructure",
  description: "Provision secure, cost-aware data platforms with reproducible IaC and least-privilege access.",
};

export default function Infrastructure() {
  return (
    <>
      <PageHeader title="Cloud Infrastructure" subtitle="Cost-aware, secure data platforms" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Build</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We provision secure, cost-aware cloud data platforms with Infrastructure-as-Code — reproducible environments with least-privilege access, encryption, and budget controls for Nigerian and European operations.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Infrastructure Solutions</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Infrastructure-as-Code</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Terraform, Pulumi, CloudFormation for version-controlled, reproducible infrastructure</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Cloud Platforms</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">AWS, Azure, GCP — architecture design, setup, and multi-cloud strategies</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Security & Compliance</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Least-privilege IAM, secret management (Vault, AWS Secrets), encryption at rest/in-transit, VPN/VPC isolation</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Cost Optimization</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Budget alerting, cost allocation tags, resource rightsizing, and reserved instance strategies</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Multi-Environment Strategy</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Dev/staging/prod separation with environment parity and promotion workflows</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">CI/CD for Infrastructure</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Automated infrastructure deployments with testing, validation, and rollback capabilities</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Infrastructure-as-code with Terraform, Pulumi, or CloudFormation</li>
            <li>Least-privilege IAM policies and secret management</li>
            <li>Cost allocation tags and budget alerting</li>
            <li>Multi-environment strategies (dev/staging/prod)</li>
            <li>Network isolation and encryption at rest/in-transit</li>
            <li>Nigerian cost-awareness with cloud optimization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Version-controlled IaC modules</li>
            <li>CI/CD pipelines for infrastructure changes</li>
            <li>Cost reports and optimization recommendations</li>
            <li>Security audit reports and compliance documentation</li>
            <li>IAM policies and access control documentation</li>
            <li>Disaster recovery and backup procedures</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_detail_infrastructure">Discuss your infrastructure needs</CTAButton>
        </div>
      </div>
    </>
  );
}
