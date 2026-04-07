const EXTERNAL_DATA_URL = 'https://mmfreegifts.de';

function generateSiteMap(currentDate) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     
     {/* Aap yahan apne dusre pages bhi add kar sakte hain */}
     <url>
       <loc>${EXTERNAL_DATA_URL}/tips-&amp;-tricks</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.8</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps handle karega sabkuch
}

export async function getServerSideProps({ res }) {
  // Aaj ki date nikalne ke liye (YYYY-MM-DD format)
  const today = new Date().toISOString().split('T')[0];

  // Hum XML generate kar rahe hain
  const sitemap = generateSiteMap(today);

  res.setHeader('Content-Type', 'text/xml');
  // XML response bhej rahe hain
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
