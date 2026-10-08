import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
export function Footer() { return <footer><span>© {new Date().getFullYear()} Anderson Murilo Santos</span><span>Dados com propósito. Soluções com impacto.</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a></footer>; }
