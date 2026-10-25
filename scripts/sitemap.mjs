import { writeFile, rm } from 'node:fs/promises';
const raw = process.env.SITE_URL;
if (!raw) {
  await rm('dist/sitemap.xml', { force: true });
  await writeFile('dist/robots.txt', 'User-agent: *\nDisallow: /\n');
  console.log('Demo non indicizzata. Impostare SITE_URL al dominio reale per generare la sitemap.');
} else {
  const url = new URL(raw);
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) throw new Error('SITE_URL deve essere un URL HTTPS pubblico senza credenziali, query o frammenti.');
  const base = url.href.replace(/\/$/, '');
  const { readFile } = await import('node:fs/promises');
  let html = await readFile('dist/index.html', 'utf8');
  html = html.replace('<meta name="robots" content="noindex, nofollow" />', `<meta name="robots" content="index, follow" /><link rel="canonical" href="${base}/" /><meta property="og:url" content="${base}/" />`).replace(/(<meta property="og:image" content=")[^"]*(")/, (_, prefix, suffix) => `${prefix}${base}/images/hero.webp${suffix}`);
  await writeFile('dist/index.html', html);
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}/</loc></url></urlset>\n`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
  console.log('Sitemap XML e metadati generati per il dominio configurato. Pubblicare solo dopo la verifica dei contenuti.');
}
