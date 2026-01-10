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
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Challenge</h2>
          <p className="mt-2 text-text-primary dark:text-slate-300">
            Cloud bills are unpredictable, permissions are overly broad, and nobody knows how to reproduce the environment. Manual changes create drift.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Our Approach</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Infrastructure-as-code with Terraform, Pulumi, or CloudFormation</li>
            <li>Least-privilege IAM policies and secret management</li>
            <li>Cost allocation tags and budget alerting</li>
            <li>Multi-environment strategies (dev/staging/prod)</li>
            <li>Network isolation and encryption at rest/in-transit</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-text-primary dark:text-slate-300">
            <li>Version-controlled IaC modules</li>
            <li>CI/CD pipelines for infrastructure changes</li>
            <li>Cost reports and optimization recommendations</li>
            <li>Security audit reports and compliance documentation</li>
          </ul>
        </section>

        <div className="pt-4">
          <CTAButton href="/contact" event="cta_service_detail_infrastructure">Discuss your infrastructure needs</CTAButton>
        </div>
      </div>
    </>
  );
}
