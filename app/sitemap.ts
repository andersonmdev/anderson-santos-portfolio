import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const url=process.env.NEXT_PUBLIC_SITE_URL; if(!url) return []; return ['', '/projects/bpa-analyzer','/projects/assessment-analyzer','/projects/relatorios-power-bi'].map(path=>({url:`${url}${path}`})); }

