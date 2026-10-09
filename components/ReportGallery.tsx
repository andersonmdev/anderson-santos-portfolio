'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, X, ZoomIn } from 'lucide-react';
import { reports } from '@/data/reports';
import { ProjectVisual } from '@/components/ProjectVisual';
export function ReportGallery() {
 const [reportId,setReportId]=useState<string|null>(null);
 const [index,setIndex]=useState(0);
 const [focused,setFocused]=useState(false);
 const [paused,setPaused]=useState(false);
 const [hoverSuppressed,setHoverSuppressed]=useState(false);
 const report=reports.find(r=>r.id===reportId);
 const slides=report?.slides;
 const slide=slides?.[index];
 useEffect(()=>{if(!slides || slides.length<2 || focused || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const timer=setInterval(()=>setIndex(i=>(i+1)%slides.length),6000);return()=>clearInterval(timer)},[slides,focused,paused]);
 function select(id:string|null){setReportId(id);setIndex(0);setFocused(false);setPaused(false);setHoverSuppressed(false)}
 function move(delta:number){if(slides){setIndex(i=>(i+delta+slides.length)%slides.length);setFocused(false);setHoverSuppressed(false)}}
 function toggle(){if(focused){setFocused(false);setHoverSuppressed(true)}else{setFocused(true)}}
 return <><div className="report-selector" aria-label="Selecionar relatório">{reports.map(r=><button key={r.id} type="button" className={`button ${reportId===r.id?'primary':'secondary'}`} aria-pressed={reportId===r.id} onClick={()=>select(r.id)}>{r.name}</button>)}{report && <button type="button" className="text-link" onClick={()=>select(null)}><X size={16}/>Limpar seleção</button>}</div>
 <div className={`report-gallery ${focused?'is-focused':''}`} role="region" aria-label="Imagens do relatório">{!slide ? <ProjectVisual variant="reports"/> : <><div className="report-image-stage"><button type="button" className="report-image-button" aria-label={focused?'Voltar ao carrossel':'Destacar imagem e mostrar análise executiva'} aria-pressed={focused} onPointerEnter={e=>{if(e.pointerType==='mouse'&&!hoverSuppressed)setFocused(true)}} onPointerLeave={()=>setHoverSuppressed(false)} onClick={toggle} onKeyDown={e=>{if(e.key==='Escape'){setFocused(false);setHoverSuppressed(true)}}}><Image key={slide.id} src={slide.image} alt={`Relatório ${report?.name} — ${slide.title}: indicadores de clientes, recorrência e rankings comerciais`} width={1361} height={766} sizes="(max-width: 760px) 100vw, 1200px" className="report-slide"/></button></div><div className="report-controls"><div><strong>{report?.name} · {slide.title}</strong><span>{focused?'Imagem em destaque · clique para voltar ao carrossel':'Passe o mouse ou clique para ampliar e ler a análise'}</span></div><div className="report-control-buttons"><button type="button" onClick={()=>move(-1)} disabled={!slides || slides.length<2} aria-label="Imagem anterior"><ChevronLeft size={19}/></button><span>{index+1} / {slides?.length}</span><button type="button" onClick={()=>move(1)} disabled={!slides || slides.length<2} aria-label="Próxima imagem"><ChevronRight size={19}/></button>{slides && slides.length>1 && <button type="button" onClick={()=>setPaused(!paused)} aria-label={paused?'Retomar carrossel':'Pausar carrossel'}>{paused?<Play size={18}/>:<Pause size={18}/>}</button>}<button type="button" onClick={toggle} aria-label={focused?'Recolher imagem':'Ampliar imagem'}>{focused?<X size={18}/>:<ZoomIn size={18}/>}</button></div></div></>}</div>
 <section className="detail-section"><p className="eyebrow">COLEÇÃO DE RELATÓRIOS</p><h2>Uma visão de cada projeto.</h2><div className="report-notes" aria-live="polite">{focused&&slide ? <><p className="eyebrow">LEITURA EXECUTIVA · {report?.name}</p><h3>{slide.title}</h3><p className="report-summary">{slide.summary}</p><div className="report-note-grid">{slide.notes.map(note=><article key={note.title}><h4>{note.title}</h4><p>{note.text}</p></article>)}</div></> : <p className="report-empty">Selecione um relatório e uma imagem</p>}</div></section></>;
}
