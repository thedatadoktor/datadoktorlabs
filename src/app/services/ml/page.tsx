import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Machine Learning & AI - Datadoktor Labs",
  description: "Production ML systems with feature engineering, model evaluation, CI/CD, drift detection, and retraining pipelines.",
};

export default function MachineLearning() {
  return (
    <>
      <PageHeader title="Machine Learning & AI" subtitle="Production ML systems that scale" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What We Build</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            We implement production machine learning systems — not just models, but complete end-to-end systems with feature engineering, evaluation, CI/CD, drift detection, and retraining pipelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">ML Solutions</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Predictive Models</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Demand forecasting, churn prediction, time series analysis with production-grade evaluation and monitoring</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Fraud Detection</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Real-time anomaly detection, transaction scoring, rule-based + ML hybrid systems for fintech and e-commerce</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Credit Scoring</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Alternative credit models using transaction history, behavioral data, and mobile patterns for Nigerian markets</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Recommendation Systems</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Product recommendations, content personalization, collaborative filtering for retail and platforms</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">NLP Automation</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Text classification, sentiment analysis, document processing, and chatbot systems</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">What's Included</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Feature engineering pipelines</li>
            <li>Model training and evaluation frameworks</li>
            <li>CI/CD for ML with automated testing</li>
            <li>Model versioning and experiment tracking</li>
            <li>Drift detection and monitoring</li>
            <li>Retraining pipelines with feedback loops</li>
            <li>Model serving infrastructure</li>
            <li>A/B testing frameworks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Trained and validated models</li>
            <li>Feature engineering code</li>
            <li>Model evaluation reports</li>
            <li>Deployment pipelines</li>
            <li>Monitoring dashboards</li>
            <li>Retraining automation</li>
            <li>Full documentation</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_ml">Discuss your ML needs</CTAButton>
        </div>
      </div>
    </>
  );
}
