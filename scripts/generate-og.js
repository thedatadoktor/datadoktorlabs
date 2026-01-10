const fs = require('fs');
const path = require('path');

// Simple OG image generator using SVG data URIs (these work better on social platforms)
const createOGImage = (title, subtitle, filename) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0b1023;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a2442;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grad)"/>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="64" font-weight="700" fill="#ffffff">${title}</text>
  <text x="60" y="240" font-family="system-ui,-apple-system,sans-serif" font-size="40" fill="#60a5fa">${subtitle}</text>
  <rect x="60" y="280" width="120" height="4" fill="#60a5fa"/>
  <text x="60" y="560" font-family="system-ui,-apple-system,sans-serif" font-size="24" fill="#94a3b8">datadoktorlabs.com</text>
</svg>`;
  
  const outputPath = path.join(__dirname, '..', 'public', 'og', filename);
  fs.writeFileSync(outputPath, svg);
  console.log(`Created ${filename}`);
};

// Generate all OG images
createOGImage('Datadoktor Labs', 'Data Engineering as a Service', 'home.svg');
createOGImage('About', 'Vision & Mission', 'about.svg');
createOGImage('Services', 'Production Data Systems', 'services.svg');
createOGImage('Blog', 'From the Lab', 'blog.svg');
createOGImage('Contact', 'Talk to the Engineers', 'contact.svg');
createOGImage('Case Studies', 'Patterns that Survive', 'case-studies.svg');
createOGImage('Why', 'Engineering over theatrics', 'why.svg');

console.log('All OG images generated successfully!');
