import Head from 'next/head';
import Link from 'next/link';
import { ArrowDownRight, ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const stages = [
  {no:'01',label:'ASK',title:'Start with the question.',text:'We clarify what you need to understand, who the decision is for and what a useful answer needs to look like.',meta:'Research strategy',image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=92'},
  {no:'02',label:'DESIGN',title:'Build the study around the decision.',text:'Method, population, sample, instruments and analysis are designed as one connected study.',meta:'Study design',image:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2400&q=92'},
  {no:'03',label:'COLLECT',title:'Bring the evidence together.',text:'Fieldwork, interviews, surveys and secondary sources move through a structured process with a clear record of what has been collected.',meta:'Fieldwork',image:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=92'},
  {no:'04',label:'ANALYZE',title:'Find the signal inside the data.',text:'We clean, structure and interrogate evidence so the important pattern is easier to see and explain.',meta:'Data & analytics',image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=92'},
  {no:'05',label:'ACT',title:'Finish with something useful.',text:'Findings, reports and recommendations are shaped around the decision that started the project.',meta:'Findings & reports',image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=92'}
];

const capabilities=[
['01','Market research','Customers, competitors, demand, positioning and opportunity.'],
['02','Health research','Public health, healthcare behaviour, outcomes and evidence.'],
['03','Social & development','Communities, programmes, baseline and evaluation.'],
['04','UX & product research','Understand people before product and experience decisions.'],
['05','Academic & institutional','Research design, evidence reviews, analysis and reporting.'],
['06','Data & analytics','From raw datasets to useful tables, visuals and findings.']
];

export default function Home(){
 const [active,setActive]=useState(0); const [menu,setMenu]=useState(false);
 const current=stages[active];
 useEffect(()=>{const t=window.setInterval(()=>setActive(v=>(v+1)%stages.length),6500);return()=>window.clearInterval(t)},[]);
 return <>
 <Head><title>Let’s Research — Better questions. Stronger evidence.</title><meta name="description" content="Let’s Research helps organizations turn important questions into structured research, evidence and useful findings."/></Head>
 <div className="lr-site lr-home">
  <section className="lr-hero-full">
   <img className="lr-hero-full-image" src={current.image} alt="Researchers working together"/>
   <div className="lr-hero-full-shade"/>
   <header className="lr-hero-nav">
    <Link href="/services" className="lr-hero-side-link">CAPABILITIES</Link>
    <Link href="/" className="lr-hero-centered-logo"><img src="/lr-logo.svg" alt="Let’s Research"/></Link>
    <div className="lr-hero-right"><a href="mailto:Victormurimiofficial@gmail.com">SUPPORT</a><Link href="/signup" className="lr-hero-start">CREATE ACCOUNT <ArrowRight size={13}/></Link></div>
    <button className="lr-menu" onClick={()=>setMenu(!menu)} aria-label="Open navigation">{menu?<X size={21}/>:<Menu size={21}/>}</button>
   </header>
   {menu&&<div className="lr-hero-mobile-menu"><Link href="/services">Capabilities</Link><Link href="/blog">Research Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/signup">Create account <ArrowRight size={15}/></Link></div>}
   <div className="lr-hero-full-content">
    <div className="lr-hero-full-kicker"><span>LET’S RESEARCH</span><b>01 — 05</b></div>
    <div className="lr-hero-full-main">
     <div className="lr-hero-copy"><span className="lr-hero-stage">RESEARCH, FROM QUESTION TO EVIDENCE</span><h1 className="lr-hero-display"><span><b>Q</b>uestions worth <i>asking.</i></span><span><b>E</b>vidence worth <i>using.</i></span></h1></div>
     <div className="lr-hero-full-bottom"><p>For decisions that deserve more than a guess. We turn important questions into clear evidence, findings and action.</p><Link href="/start" className="lr-hero-circle">START A PROJECT <ArrowDownRight size={17}/></Link></div>
    </div>
   </div>
   <div className="lr-hero-progress">{stages.map((s,i)=><button key={s.no} onClick={()=>setActive(i)} className={i===active?'active':''} aria-label={'Show '+s.label}><span>{s.no}</span><b>{s.label}</b></button>)}</div>
  </section>

  <main>
   <section className="lr-story-section">
    <div className="lr-section-intro"><span className="lr-index">01 / THE RESEARCH JOURNEY</span><div><h2>One clear line from question to evidence.</h2><p>Five connected stages. The work stays visible from the first conversation through the final report.</p></div></div>
    <div className="lr-story-panel">
     <div className="lr-story-visual"><div className="lr-story-index-rail"><b>{current.no}</b><span>05</span></div>{stages.map((s,i)=><img key={s.no} src={s.image} alt={s.title} className={i===active?'story-image active':'story-image'}/>) }<div className="lr-story-image-caption"><span>{current.meta}</span><b>{current.no} / 05</b></div></div>
     <div className="lr-story-information"><div className="lr-story-top"><span>{current.no}</span><b>{current.label}</b></div><div className="lr-story-body"><div className="lr-purple-line"/><h3>{current.title}</h3><p>{current.text}</p><Link href="/start" className="lr-button purple">Shape this project <ArrowRight size={15}/></Link></div><div className="lr-story-controls"><div className="lr-stage-list">{stages.map((s,i)=><button key={s.no} className={i===active?'active':''} onClick={()=>setActive(i)}><span>{s.no}</span><b>{s.label}</b></button>)}</div></div></div>
    </div>
   </section>

   <section className="lr-statement"><div className="lr-index">WHY LET’S RESEARCH</div><div><h2>Research should reduce uncertainty, not create another pile of work.</h2><p>We connect the brief, methodology, fieldwork, data, analysis and reporting into one visible journey.</p></div></section>

   <section className="lr-capabilities"><div className="lr-section-intro"><span className="lr-index">02 / CAPABILITIES</span><div><h2>Many questions.<br/>One research partner.</h2><Link href="/services" className="lr-text-link">View capabilities <ArrowRight size={15}/></Link></div></div><div className="lr-service-grid">{capabilities.map(([no,title,text])=><Link href="/services" className="lr-service-panel" key={no}><div className="lr-service-head"><span>{no}</span><span>RESEARCH</span></div><div className="lr-service-content"><h3>{title}</h3><p>{text}</p></div><ArrowRight className="service-arrow" size={18}/></Link>)}</div></section>

   <section className="lr-image-editorial"><div className="lr-editorial-photo"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2200&q=92" alt="Research team reviewing work together"/><span>PEOPLE + EVIDENCE</span></div><div className="lr-editorial-copy"><span className="lr-index">03 / HOW WE WORK</span><h2>Serious research can still feel simple to the client.</h2><div className="lr-work-list"><div><b>01</b><strong>Brief</strong><span>Define the question and decision.</span></div><div><b>02</b><strong>Study</strong><span>Agree methodology, scope and outputs.</span></div><div><b>03</b><strong>Evidence</strong><span>Collect, manage and review the evidence.</span></div><div><b>04</b><strong>Output</strong><span>Deliver findings people can actually use.</span></div></div><Link href="/start" className="lr-button outline">Tell us what you need to understand <ArrowRight size={15}/></Link></div></section>

   <section className="lr-workspace-section"><div className="lr-workspace-copy"><span className="lr-index">04 / THE WORKSPACE</span><h2>The project gets its own place.</h2><p>Briefs, fieldwork, participants, datasets, findings, reports, files and conversations are designed to live together.</p><Link href="/signup" className="lr-button purple">Create workspace access <ArrowRight size={15}/></Link></div><div className="lr-dashboard-frame"><div className="frame-top"><img className="lr-mini-logo" src="/lr-icon.svg" alt=""/><span>Let’s Research Workspace</span><b>CLIENT</b></div><div className="frame-body"><aside><strong>WORKSPACE</strong><span className="selected">Overview</span><span>Projects</span><span>Research briefs</span><span>Fieldwork</span><span>Data & Analytics</span><span>Reports</span></aside><div className="frame-main"><div className="frame-title"><div><small>PROJECT WORKSPACE</small><h3>Research, in one place.</h3></div><span>LR</span></div><div className="frame-cards"><div><small>ACTIVE PROJECTS</small><b>04</b><span>Across current studies</span></div><div><small>RESPONSES</small><b>1,842</b><span>Fieldwork received</span></div><div><small>REPORTS</small><b>12</b><span>Available to review</span></div></div><div className="frame-evidence"><div><small>PROJECT ACTIVITY</small><b>Last 30 days</b></div><div className="frame-bars">{[38,52,46,64,58,72,63,84,69,91,76,96].map((h,i)=><i key={i} style={{height:h+'%'}}/>)}</div></div></div></div></div></section>

   <section className="lr-library"><div className="lr-library-head"><span className="lr-index">05 / RESEARCH LIBRARY</span><h2>Useful knowledge.<br/>Published properly.</h2><p>Methods, explainers and evidence-led guides for researchers, organizations and decision-makers.</p><Link href="/blog" className="lr-text-link">Open Research Library <ArrowRight size={15}/></Link></div><div className="lr-library-list">{[['01','Research methods','How to choose the right research method for a business question','8 min'],['02','Research design','How to develop strong research objectives','6 min'],['03','Sampling','Probability and non-probability sampling methods explained','9 min'],['04','Study design','What is a cross-sectional study?','7 min']].map(([no,cat,title,time])=><Link href="/blog" className="lr-library-row" key={no}><span>{no}</span><div><small>{cat}</small><h3>{title}</h3></div><em>{time}</em><ArrowRight size={16}/></Link>)}</div></section>

   <section className="lr-closing"><img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2400&q=92" alt="Research team working together"/><div className="lr-closing-shade"/><div className="lr-closing-content"><span className="lr-index">06 / START WITH THE QUESTION</span><h2>Have something you need to understand?</h2><p>Bring us the question. We’ll help shape the research path.</p><Link href="/start" className="lr-button light">Start a research project <ArrowRight size={15}/></Link></div></section>
  </main>
  <footer className="lr-footer"><div><Link href="/" className="lr-brand"><img className="lr-wordmark" src="/lr-logo.svg" alt="Let’s Research"/></Link><p>Evidence for decisions that matter.</p></div><div className="footer-links"><Link href="/services">Capabilities</Link><Link href="/blog">Research Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/signup">Create account</Link></div><div className="footer-contact"><a href="mailto:Victormurimiofficial@gmail.com">Victormurimiofficial@gmail.com</a><a href="tel:+254111944791">+254 111 944 791</a><span>Kenya · Global delivery</span></div></footer>
 </div></>;
}
