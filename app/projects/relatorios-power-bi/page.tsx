import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ReportGallery } from '@/components/ReportGallery';
export const metadata: Metadata = { title: 'Relatórios Power BI', description: 'Coleção de relatórios e dashboards Power BI de Anderson Murilo Santos.', ...(process.env.NEXT_PUBLIC_SITE_URL ? {alternates: {canonical: '/projects/relatorios-power-bi'}} : {}) };
export default function ReportsPage() { return <main id="main" className="project-detail"><Link className="text-link" href="/#projetos"><ArrowLeft size={17}/>Todos os projetos</Link><p className="eyebrow">DASHBOARDS & DATA VISUALIZATION</p><h1>Relatórios Power BI<span>.</span></h1><p className="detail-lead">Dados, contexto e clareza para apoiar decisões de negócio.</p><div className="tags"><span>Power BI</span><span>DAX</span><span>DataViz</span></div><ReportGallery/></main>; }

