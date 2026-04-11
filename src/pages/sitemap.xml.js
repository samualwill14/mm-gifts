const BASE_URL = 'https://solitairegrandharvestcoins.de';

// Fixed dates for other pages (jab site launch hui thi tab ki date daal do)
// Ya phir unhe dynamically bhi generate kar sakte ho
function getPageLastmod(page, currentDate) {
  // Sirf homepage ke liye current date
  if (page.url === '') {
    return currentDate;
  }
  
  // Baaki pages ke liye fixed date - Jab last time content update hua tha
  // Aap inhe apne hisaab se change kar sakte ho
  const fixedDates = {
    '/tips-&-tricks': '2026-04-01',
    '/tips-&-tricks/get-free-stickers-match-masters': '2026-04-01',
    '/tips-&-tricks/how-to-get-free-coins-on-match-masters': '2026-04-01',
	'/tips-&-tricks/match-masters-perks-guide': '2026-04-01',
    '/about-us': '2026-04-01',
    '/contact-us': '2026-04-01',
    '/privacy-policy': '2026-04-01',
  };
  
  return fixedDates[page.url] || '2026-04-01'; // Default fallback date
}

function generateSiteMap(currentDate) {
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' }, // Homepage - daily change
    { url: '/tips-&-tricks', priority: '0.8', changefreq: 'weekly' },
    { url: '/tips-&-tricks/get-free-stickers-match-masters', priority: '0.7', changefreq: 'weekly' },
    { url: '/tips-&-tricks/how-to-get-free-coins-on-match-masters', priority: '0.7', changefreq: 'weekly' },
	{ url: '/tips-&-tricks/match-masters-perks-guide', priority: '0.7', changefreq: 'weekly' },
    { url: '/about-us', priority: '0.5', changefreq: 'monthly' },
    { url: '/contact-us', priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const lastmod = getPageLastmod(page, currentDate);
      return `
    <url>
      <loc>${BASE_URL}${page.url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;
}

function SiteMap() {
  // Empty component - sirf XML serve karne ke liye
}

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString().split('T')[0]; // Sirf homepage ke liye

  const sitemap = generateSiteMap(today);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
