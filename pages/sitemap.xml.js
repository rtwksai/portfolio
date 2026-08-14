import { SITE_CONFIG } from '../lib/config'

export default function Sitemap() {
  const baseUrl = SITE_CONFIG.baseUrl
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/files/resume.pdf`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  const fields = routes.map((route) => ({
    loc: route.url,
    lastmod: route.lastModified.toISOString(),
    changefreq: route.changeFrequency,
    priority: route.priority,
  }))

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${fields
      .map(
        (field) => `
      <url>
        <loc>${field.loc}</loc>
        <lastmod>${field.lastmod}</lastmod>
        <changefreq>${field.changefreq}</changefreq>
        <priority>${field.priority}</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`
}
