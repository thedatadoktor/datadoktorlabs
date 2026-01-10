Got it. You want **one single, complete Markdown document** that contains **everything**:

* Base website
* Blog system
* Real email (Resend)
* Dark mode
* Analytics
* CMS option
* Docker
* Repo structure
* Production checklist
* Homepage + services copy
* README content

Below is the **full unified Markdown**. Save this as for example:

`DATADOKTOR_LABS_FULL_SETUP.md`

and you’re done.

---

````md
# Datadoktor Labs – Full Production Website Setup
(Next.js + Tailwind + Blog + Email + Dark Mode + Analytics + CMS + Docker)

This document contains the complete setup for a production-ready Data Engineering consultancy website.

---

# Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Markdown Blog Engine
- Optional CMS (Sanity / Strapi)
- Resend (Email)
- Plausible Analytics
- Docker
- SEO ready

---

# 1) Create Project

```bash
npx create-next-app@latest datadoktor-labs --typescript --app --tailwind
cd datadoktor-labs
````

Install Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install -D @tailwindcss/typography
```

---

# 2) Tailwind Configuration

## tailwind.config.js

```js
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
```

---

# 3) Global Styles

## app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white text-gray-900;
}

.dark body {
  @apply bg-gray-950 text-gray-100;
}
```

---

# 4) Folder Structure

```text
app/
  layout.tsx
  page.tsx
  services/page.tsx
  about/page.tsx
  case-studies/page.tsx
  contact/page.tsx
  blog/page.tsx
  api/contact/route.ts

components/
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  ServicesGrid.tsx
  TechStack.tsx
  CTA.tsx
  PageHeader.tsx
  ThemeToggle.tsx

content/
  blog/first-post.md

lib/
  blog.ts

public/

.env.example
Dockerfile
README.md
```

---

# 5) Core Layout

## app/layout.tsx

```tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Datadoktor Labs – Data Engineering as a Service",
  description: "Production-grade data pipelines, warehouses and analytics systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        <Script
          defer
          data-domain="datadoktorlabs.com"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
```

---

# 6) Components

## Theme Toggle

```tsx
export default function ThemeToggle() {
  return (
    <button
      onClick={() => document.documentElement.classList.toggle("dark")}
      className="border px-2 py-1 rounded"
    >
      Toggle
    </button>
  );
}
```

Add to Navbar.

## components/Navbar.tsx

```tsx
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b bg-white/70 dark:bg-gray-950/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Datadoktor Labs</Link>
        <nav className="flex items-center gap-4">
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="underline">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
```

## components/Footer.tsx

```tsx
export default function Footer() {
  return (
    <footer className="mt-20 border-t py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm">
        <p>© Datadoktor Labs</p>
        <p>Engineering-first data systems</p>
      </div>
    </footer>
  );
}
```

## components/PageHeader.tsx

```tsx
export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle ? <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p> : null}
      </div>
    </section>
  );
}
```

---

# 7) Blog System (Markdown)

Install:

```bash
npm install gray-matter remark remark-html
```

## content/blog/first-post.md

```md
---
title: "Why data pipelines fail in production"
date: "2026-01-10"
---

Real systems break in boring ways.
```

## lib/blog.ts

```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export function getPosts() {
  const files = fs.readdirSync(blogDir);

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
    const { data } = matter(raw);

    return { slug, ...data };
  });
}

export function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf8");
  return matter(raw);
}
```

## app/blog/page.tsx

```tsx
import Link from "next/link";
import { getPosts } from "../../lib/blog";
import PageHeader from "../../components/PageHeader";

export default function Blog() {
  const posts = getPosts();

  return (
    <>
      <PageHeader title="Blog" />
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {posts.map((p: any) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block underline">
            {p.title}
          </Link>
        ))}
      </div>
    </>
  );
}
```

## app/blog/[slug]/page.tsx

```tsx
import { notFound } from "next/navigation";
import { getPost } from "../../../lib/blog";
import PageHeader from "../../../components/PageHeader";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const { data, content } = getPost(params.slug);
    const processed = await remark().use(html).process(content);
    const body = processed.toString();

    return (
      <>
        <PageHeader title={data.title as string} />
        <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-6" dangerouslySetInnerHTML={{ __html: body }} />
      </>
    );
  } catch {
    notFound();
  }
}
```

Optional: Better prose styling

- The page uses `prose` classes; ensure `@tailwindcss/typography` is installed and added to `tailwind.config.js` plugins as shown above.

---

# 8) Contact API + Real Email (Resend)

Install:

```bash
npm install resend
```

## .env.local

```env
RESEND_API_KEY=your_key
CONTACT_EMAIL=hello@datadoktorlabs.com
```

## app/api/contact/route.ts

```ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    await resend.emails.send({
      from: "Datadoktor Labs <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: "New contact request",
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    });

    return NextResponse.redirect(new URL("/contact?sent=true", req.url));
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
```

### Contact Page (Form)

Create a simple contact page wired to the API.

## app/contact/page.tsx

```tsx
import PageHeader from "../../components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Tell us about your data systems" />
      <div className="max-w-3xl mx-auto px-6 py-8">
        <form action="/api/contact" method="POST" encType="multipart/form-data" className="space-y-4">
          <input type="text" name="name" placeholder="Your name" className="w-full border px-3 py-2 rounded" required />
          <input type="email" name="email" placeholder="Your email" className="w-full border px-3 py-2 rounded" required />
          <textarea name="message" placeholder="What are you trying to achieve?" className="w-full border px-3 py-2 rounded h-32" required />
          {/* honeypot */}
          <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
          <button type="submit" className="border px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </>
  );
}
```

---

# 9) Optional: Persist Dark Mode Preference

To avoid flicker and remember user choice, set the initial theme from `localStorage` before hydration in `app/layout.tsx`:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const theme = localStorage.getItem('theme');
            if (theme === 'dark') document.documentElement.classList.add('dark');
            else if (theme === 'light') document.documentElement.classList.remove('dark');
          } catch {}
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

Update the `ThemeToggle` to store preference:

```tsx
export default function ThemeToggle() {
  const toggle = () => {
    const el = document.documentElement;
    const next = el.classList.toggle("dark") ? "dark" : "light";
    localStorage.setItem("theme", next);
  };
  return (
    <button onClick={toggle} className="border px-2 py-1 rounded">Toggle</button>
  );
}
```

---

# 10) Optional CMS (Sanity)

```bash
npm install @sanity/client
```

Use CMS if you want non-technical content editing.

---

# 11) Docker Support

## Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build:

```bash
docker build -t datadoktor-labs .
docker run -p 3000:3000 datadoktor-labs
```

---

# 12) Homepage Copy

## Hero

Data Engineering as a Service

We design, build, and operate production-grade data pipelines, warehouses, and analytics systems for teams that need their data to actually work.

CTA: Book a consultation

## What We Do

* reliable ingestion
* consistent metrics
* scalable pipelines
* proactive monitoring

## Why

Production code. No slide decks. Systems that survive reality.

---

# 13) Services Copy

* Data Pipeline Engineering
* Warehousing & Modeling
* Streaming Systems
* Analytics Engineering
* Cloud Infrastructure
* Data Quality & Observability

---

# 14) GitHub README.md

```md
# Datadoktor Labs – Website

Production website for Datadoktor Labs (DEaaS).

## Tech
Next.js, Tailwind, Blog, Resend, Analytics, Docker

## Setup
npm install
npm run dev

## Build
npm run build
npm start

## Docker
docker build -t datadoktor-labs .
docker run -p 3000:3000 datadoktor-labs
```

---

# 15) Production Checklist

Add SEO basics:

- `next-sitemap` for `sitemap.xml` and `robots.txt`
- base Open Graph and Twitter metadata in `app/layout.tsx`
- favicons in `public/`

Install and configure `next-sitemap`:

```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:

```js
module.exports = {
  siteUrl: "https://datadoktorlabs.com",
  generateRobotsTxt: true,
};
```

Add a script in `package.json`:

```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

Robots and sitemap will be generated on build.

---

# 16) Deployment Notes

## Vercel (Recommended)

- Import the repository into Vercel.
- Set env vars (`RESEND_API_KEY`, `CONTACT_EMAIL`).
- Verify Plausible script and domain.

## Docker + Reverse Proxy

Use Nginx/Traefik to terminate TLS in front of the container. Example run:

```bash
docker build -t datadoktor-labs .
docker run -p 3000:3000 --env-file .env datadoktor-labs
```

* Domain connected
* HTTPS
* Email working
* Analytics live
* SEO metadata
* Sitemap
* robots.txt
* Favicon

---

# Result

You now have:

* Business website
* Blog engine
* Email capture
* Dark mode
* Analytics
* CMS option
* Dockerized deployment
* Scalable foundation for Datadoktor Hub

---

Next stage:

Client accounts → dashboards → pipeline monitoring → billing → Datadoktor Hub

This is no longer a tutorial project.
It’s a real company frontend.

End.

```

---

If you want, I can also:

- split this into multiple `.md` files  
- generate a ZIP-ready folder tree  
- or convert it into a GitHub template repo structure  

You’ve basically built the control panel for a future data factory. The rest is bending unruly datasets into submission.
```
