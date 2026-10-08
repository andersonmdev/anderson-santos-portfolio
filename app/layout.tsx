import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
const origin = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = { ...(origin ? { metadataBase: new URL(origin), alternates: { canonical: '/' } } : {}), title: { default: 'Anderson Murilo Santos | Power BI, Data Analytics & Microsoft Fabric', template: '%s | Anderson Santos' }, description: 'Portfólio profissional de Anderson Murilo Santos. Power BI, Microsoft Fabric, Data Analytics, SQL, Python e soluções corporativas de BI.', openGraph: { type: 'website', locale: 'pt_BR', title: 'Anderson Murilo Santos — Data & Analytics', description: 'Transformando dados em decisões.', images: [{ url: '/images/profile.png', width: 1024, height: 1024, alt: 'Anderson Murilo Santos' }] }, twitter: { card: 'summary', title: 'Anderson Murilo Santos — Data & Analytics', images: ['/images/profile.png'] } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body><a className="skip-link" href="#main">Pular para o conteúdo</a><div className="site-shell"><Header/>{children}<Footer/></div></body></html>; }
