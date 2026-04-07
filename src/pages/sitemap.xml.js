const BASE_URL = 'https://mmfreegifts.de';

function generateSiteMap(currentDate) {
  const pages = [
    { url: '', priority: '1.0', changefreq: 'daily' }, // Homepage
    { url: '/tips-&amp;-tricks', priority: '0.8', changefreq: 'daily' },
    { url: '/tips-&amp;-tricks/how-to-get-free-coins-on-match-masters', priority: '0.7', changefreq: 'weekly' },
    { url: '/tips-&amp;-tricks/get-free-stickers-match-masters', priority: '0.7', changefreq: 'weekly' },
    { url: '/tips-&amp;-tricks/match-masters-perks-guide', priority: '0.7', changefreq: 'weekly' },
    { url: '/about-us', priority: '0.5', changefreq: 'monthly' },
    { url: '/contact-us', priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${BASE_URL}${page.url}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>${page.changefreq}</changefreq>
           <priority>${page.priority}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString().split('T')[0];

  const sitemap = generateSiteMap(today);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
