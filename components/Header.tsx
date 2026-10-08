'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export function Header() { const [open,setOpen]=useState(false); return <header className="header"><Link className="brand" href="/" aria-label="Anderson Santos — início">as<span>.</span><small>ANDERSON SANTOS<br/><em>DATA & ANALYTICS</em></small></Link><button className="menu-button" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="navigation" className={open?'navigation open':'navigation'} aria-label="Navegação principal">{[['Sobre','sobre'],['Especialidades','especialidades'],['Projetos','projetos'],['Ecossistema técnico','stack'],['Trajetória','experiencia']].map(([label,id])=><Link key={id} href={`/#${id}`} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-contact" href="/#contato" onClick={()=>setOpen(false)}>Vamos conversar <ArrowUpRight size={17}/></Link></nav></header>; }

