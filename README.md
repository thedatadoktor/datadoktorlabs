# Datadoktor Labs

**Reliable Data Systems. Built for Reality.**

A global data engineering, analytics, and machine learning consultancy that designs, builds, and operates production-grade data systems for organizations that need their data to actually work.

🌐 **Live Site:** [datadoktorlabs.com](https://datadoktorlabs.vercel.app/)

---

## About

Datadoktor Labs helps organizations move from fragmented, unreliable data to systems that are structured, monitored, compliant, scalable, and decision-ready. We cover the full data lifecycle from ingestion to insights.

### Our Services

- **Data Pipeline Engineering** - Reliable batch and streaming ingestion with SLAs
- **Warehousing & Data Modeling** - Scalable data warehouses with clear business logic
- **Streaming Systems** - Real-time event processing and CDC pipelines
- **Analytics Engineering** - Metrics, semantic layers, and BI dashboards
- **Cloud Infrastructure** - Secure, cost-aware IaC deployments
- **Data Quality & Observability** - Monitoring, lineage, and drift detection
- **Machine Learning & AI** - Production ML systems with full MLOps
- **Data Governance & Compliance** - GDPR, SOC 2, and regulatory readiness
- **Agri-Data Solutions** - Farm management and agricultural intelligence
- **Custom Automation** - Workflow automation and API integrations

---

## Tech Stack

This website is built with modern web technologies for performance and maintainability:

- **Framework:** [Next.js 16.1](https://nextjs.org/) (App Router, React 19, Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Email:** [Resend](https://resend.com/)
- **Analytics:** [Plausible](https://plausible.io/)
- **Content:** Markdown with gray-matter and remark
- **Sitemap:** next-sitemap

---

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/thedatadoktor/datadoktorlabs.git
cd datadoktorlabs

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys
```

### Environment Variables

Create a `.env.local` file with:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

### Development

```bash
# Run development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
datadoktorlabs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes (contact form)
│   │   ├── blog/              # Blog and posts
│   │   ├── case-studies/      # Case studies page
│   │   ├── contact/           # Project intake form
│   │   ├── services/          # Service pages
│   │   │   ├── pipelines/
│   │   │   ├── warehousing/
│   │   │   ├── streaming/
│   │   │   ├── analytics/
│   │   │   ├── infrastructure/
│   │   │   ├── observability/
│   │   │   ├── ml/
│   │   │   ├── governance/
│   │   │   ├── agri/
│   │   │   └── automation/
│   │   ├── why/               # Why choose us page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable React components
│   │   ├── ContactForm.tsx    # Project intake form
│   │   ├── CTAButton.tsx      # Call-to-action button
│   │   ├── Footer.tsx         # Site footer
│   │   ├── MobileMenu.tsx     # Mobile navigation
│   │   ├── Navbar.tsx         # Site navigation
│   │   └── PageHeader.tsx     # Page header component
│   └── lib/                   # Utility functions
│       └── blog.ts            # Blog content utilities
├── content/                   # Markdown content
│   └── blog/                  # Blog posts
├── public/                    # Static assets
│   ├── og/                    # Open Graph images
│   ├── robots.txt
│   └── sitemaps
├── scripts/                   # Build scripts
│   └── generate-og.js         # Generate OG images
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

---

## Key Features

### Design
- Mobile-first responsive design
- Dark mode optimized color scheme
- Accessible navigation with mobile hamburger menu
- Consistent branding across all pages

### Content Management
- Markdown-based blog with frontmatter
- Static generation for performance
- Automatic sitemap generation
- Open Graph images for social sharing

### Project Intake
- Comprehensive contact form with multiple sections
- Service selection, industry, timeline, and budget fields
- File attachment support
- Structured email notifications via Resend

### SEO
- Metadata optimization for all pages
- Sitemap generation
- robots.txt configuration
- Semantic HTML structure

### Analytics
- Privacy-focused analytics with Plausible
- Event tracking on CTAs
- No cookies or personal data collection

---

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/thedatadoktor/datadoktorlabs)

1. Push to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify:** Use `next build` and `next start`
- **AWS Amplify:** Configure build settings
- **Docker:** Create Dockerfile with Node.js base image

---

## Contributing

This is a private project for Datadoktor Labs. If you're part of the team:

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run build`
4. Submit a pull request

---

## License

© 2026 Datadoktor Labs. All rights reserved.

---

## Contact

- **Website:** [datadoktorlabs.com](https://datadoktorlabs.vercel.app/)
- **Email:** Contact via website form
- **GitHub:** [@thedatadoktor](https://github.com/thedatadoktor)

---

**Built with precision. Engineered for reality.**
