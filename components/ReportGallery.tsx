'use client';
import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { X } from 'lucide-react';
import { reports } from '@/data/reports';
import { ProjectVisual } from '@/components/ProjectVisual';
export function ReportGallery() {
 const [reportId,setReportId]=useState<string|null>(null);
 const [index,setIndex]=useState(0);
 const [focused,setFocused]=useState(false);
 const [hoverSuppressed,setHoverSuppressed]=useState(false);
 const [reduced,setReduced]=useState(false);
 const touchStart=useRef<number|null>(null);
 const swiped=useRef(false);
 const report=reports.find(r=>r.id===reportId);
 const slides=report?.slides;
 const slide=slides?.[index];
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(media.matches);update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update)},[]);
 useEffect(()=>{if(!slides || slides.length<2 || focused || reduced)return;const timer=setInterval(()=>setIndex(i=>(i+1)%slides.length),6000);return()=>clearInterval(timer)},[slides,focused,reduced]);
 function select(id:string){setReportId(id);setIndex(0);setFocused(false);setHoverSuppressed(false)}
 function move(delta:number){if(slides){setIndex(i=>(i+delta+slides.length)%slides.length);setFocused(false);setHoverSuppressed(true)}}
 function toggle(){if(focused){setFocused(false);setHoverSuppressed(true)}else{setFocused(true)}}
 function offset(i:number){if(!slides)return 0;let d=i-index;if(d>slides.length/2)d-=slides.length;if(d< -slides.length/2)d+=slides.length;return d}
 return <><div className="report-selector" aria-label="Selecionar relatório">{reports.map(r=><button key={r.id} type="button" className={`button ${reportId===r.id?'primary':'secondary'}`} aria-pressed={reportId===r.id} onClick={()=>select(r.id)}>{r.name}</button>)}</div>
 <div className={`report-gallery ${focused?'is-focused':''}`} role="region" aria-roledescription="carrossel" aria-label="Imagens do relatório">{!slide ? <ProjectVisual variant="reports"/> : <><div className={`report-image-stage report-coverflow ${slides?.length===1?'is-single':''}`}
 onTouchStart={e=>{touchStart.current=e.touches[0].clientX;swiped.current=false}}
 onTouchEnd={e=>{if(touchStart.current!==null&&!focused&&slides&&slides.length>1){const delta=e.changedTouches[0].clientX-touchStart.current;if(Math.abs(delta)>45){swiped.current=true;move(delta<0?1:-1)}}touchStart.current=null}}
 onTouchCancel={()=>{touchStart.current=null}}
 onKeyDown={e=>{if(e.key==='Escape'){setFocused(false);setHoverSuppressed(true)}if(e.key==='ArrowRight'){e.preventDefault();move(1)}if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}}}>
 {slides?.map((item,i)=>{const d=offset(i);const active=d===0;const hidden=Math.abs(d)>2||(focused&&!active);const flipped=active&&focused;return <div key={item.id}
 className={`report-image-button coverflow-slide ${active?'is-active':''} ${flipped?'is-flipped':''}`}
 style={{'--offset':d,'--depth':Math.abs(d),zIndex:10-Math.abs(d)} as CSSProperties}
 aria-hidden={hidden} inert={hidden}
 onPointerEnter={e=>{if(active&&e.pointerType==='mouse'&&!hoverSuppressed)setFocused(true)}}
 onPointerLeave={e=>{setHoverSuppressed(false);if(active&&e.pointerType==='mouse')setFocused(false)}}>
 <div className="report-flip-inner">
 <button type="button" className="report-flip-front" inert={flipped} aria-hidden={flipped}
 aria-label={active?'Virar imagem e ler análise executiva':`Ver ${item.title}`}
 onClick={()=>{if(swiped.current){swiped.current=false;return}if(active)setFocused(true);else{setIndex(i);setFocused(false);setHoverSuppressed(true)}}}>
 <Image unoptimized src={item.image} alt={`Relatório ${report?.name} — ${item.title}`} width={1361} height={766} sizes="(max-width: 760px) 90vw, 1000px" className="report-slide"/>
 </button>
 <section className="report-flip-back" inert={!flipped} aria-hidden={!flipped} aria-label={`Análise executiva: ${item.title}`} tabIndex={flipped?0:-1}>
 <button type="button" className="report-flip-close" onClick={toggle}>Voltar à imagem <X size={16}/></button>
 <p className="eyebrow">LEITURA EXECUTIVA · {report?.name}</p><h3>{item.title}</h3><p className="report-summary">{item.summary}</p>
 <div className="report-note-grid">{item.notes.map(note=><article key={note.title}><h4>{note.title}</h4><p>{note.text}</p></article>)}</div>
 </section></div></div>})}</div><div className="report-controls"><div><strong>{report?.name} · {slide.title}</strong><span>{focused?'Notas no verso · retire o mouse ou use Voltar à imagem':'Passe o mouse ou toque para ler o verso · deslize para navegar'}</span></div></div></>}</div>
</>;
}
