import PageHeader from "@/components/PageHeader";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Agri-Data Solutions - Datadoktor Labs",
  description: "Farmer registration systems, crop yield prediction, satellite and IoT ingestion, and market intelligence for agriculture.",
};

export default function AgriData() {
  return (
    <>
      <PageHeader title="Agri-Data Solutions" subtitle="Data systems for modern agriculture" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Agriculture Data Systems</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-primary dark:text-slate-300">
            Agriculture generates massive data: farmer records, crop cycles, weather patterns, market prices, supply chains. Most of it is trapped in spreadsheets, disconnected apps, or lost entirely.
          </p>
          <p className="mt-3 text-base md:text-lg text-text-primary dark:text-slate-300">
            We build data systems that turn this fragmented information into operational intelligence for agribusinesses, cooperatives, and development programs.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Solutions We Build</h2>
          <div className="mt-3 md:mt-4 space-y-4">
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Farmer Registration Systems</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Centralized farmer databases with mobile data collection, identity verification, and integration with payment systems</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Satellite & IoT Ingestion</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Automated ingestion of satellite imagery, weather data, soil sensors, and drone surveys for farm monitoring</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Crop Yield Prediction</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">ML models combining weather, soil data, farming practices, and historical yields for harvest forecasting</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Produce Tracking</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Supply chain visibility from farm to market with quality tracking, logistics optimization, and loss prevention</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Market Price Intelligence</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Real-time market data aggregation, price trend analysis, and demand forecasting for better trading decisions</p>
            </div>
            <div className="p-4 bg-bg-light dark:bg-bg-dark-section rounded border-l-4 border-secondary">
              <h3 className="font-semibold text-base md:text-lg text-primary dark:text-secondary">Weather Linked Forecasting</h3>
              <p className="mt-2 text-sm md:text-base text-text-primary dark:text-slate-300">Integration with meteorological data for planting advice, risk assessment, and insurance claims</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Who We Serve</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Agribusiness companies and cooperatives</li>
            <li>Input suppliers and distributors</li>
            <li>Development programs and NGOs</li>
            <li>Government agricultural agencies</li>
            <li>AgTech startups and platforms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-secondary">Typical Deliverables</h2>
          <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-2 text-base md:text-lg text-text-primary dark:text-slate-300">
            <li>Farmer data management systems</li>
            <li>Satellite and IoT data pipelines</li>
            <li>Yield prediction models</li>
            <li>Supply chain tracking dashboards</li>
            <li>Market intelligence reports</li>
            <li>Mobile data collection apps</li>
            <li>Integration with payment systems</li>
          </ul>
        </section>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <CTAButton href="/contact" event="cta_service_agri">Discuss agri-data needs</CTAButton>
        </div>
      </div>
    </>
  );
}
