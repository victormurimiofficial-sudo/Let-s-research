import Head from 'next/head';
import Link from 'next/link';
import { ArrowDownRight, ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const stages = [
  {no:'01',label:'ASK',title:'What are we really trying to understand?',text:'We clarify what you need to understand, who the decision is for and what a useful answer needs to look like.',meta:'Research strategy',image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=92'},
  {no:'02',label:'DESIGN',title:'What is the right way to find out?',text:'Method, population, sample, instruments and analysis are designed as one connected study.',meta:'Study design',image:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2400&q=92'},
  {no:'03',label:'COLLECT',title:'What evidence do we need to trust the answer?',text:'Fieldwork, interviews, surveys and secondary sources move through a structured process with a clear record of what has been collected.',meta:'Fieldwork',image:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=92'},
  {no:'04',label:'ANALYZE',title:'What pattern actually matters?',text:'We clean, structure and interrogate evidence so the important pattern is easier to see and explain.',meta:'Data & analytics',image:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=92'},
  {no:'05',label:'ACT',title:'What should change next?',text:'Findings, reports and recommendations are shaped around the decision that started the project.',meta:'Findings & reports',image:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=92'}
];

const heroStages = stages.slice(0,3);

const capabilities=[
['01','Market research','Customers, competitors, demand, positioning and opportunity.'],
['02','Health research','Public health, healthcare behaviour, outcomes and evidence.'],
['03','Social & development','Communities, programmes, baseline and evaluation.'],
['04','UX & product research','Understand people before product and experience decisions.'],
['05','Academic & institutional','Research design, evidence reviews, analysis and reporting.'],
['06','Data & analytics','From raw datasets to useful tables, visuals and findings.']
];

export default function Home(){
 const [active,setActive]=useState(0); const [heroActive,setHeroActive]=useState(0); const [menu,setMenu]=useState(false);
 const current=stages[active]; const heroCurrent=heroStages[heroActive];
 useEffect(()=>{const t=window.setInterval(()=>setHeroActive(v=>(v+1)%heroStages.length),6500);return()=>window.clearInterval(t)},[]);
 return <>
 <Head><title>Let’s Research — Better questions. Stronger evidence.</title><meta name="description" content="Let’s Research helps organizations turn important questions into structured research, evidence and useful findings."/></Head>
 <div className="lr-site lr-home">
  <section className="lr-product-hero">
   <header className="lr-product-nav">
    <Link href="/" className="lr-product-logo"><img src="/lr-logo.svg" alt="Let’s Research"/></Link>
    <nav>
     <Link href="/services">Capabilities</Link>
     <Link href="/blog">Research Library</Link>
     <Link href="/contact">Contact</Link>
     <Link href="/about">About</Link>
     <Link href="/login" className="lr-nav-signin">SIGN IN</Link>
    </nav>
    <div className="lr-product-nav-actions">
     <a href="mailto:Victormurimiofficial@gmail.com">SUPPORT</a>
     <Link href="/signup" className="lr-product-account">CREATE ACCOUNT <ArrowRight size={13}/></Link>
    </div>
    <button className="lr-menu" onClick={()=>setMenu(!menu)} aria-label="Open navigation">{menu?<X size={21}/>:<Menu size={21}/>}</button>
   </header>

   {menu&&<div className="lr-product-mobile-menu">
    <Link href="/services">Capabilities</Link>
    <Link href="/blog">Research Library</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/about">About</Link>
    <Link href="/login">Sign in</Link>
    <Link href="/signup">Create account <ArrowRight size={15}/></Link>
   </div>}

   <div className="lr-mobile-hero">
    <img src={heroCurrent.image} alt="People working together on research"/>
    <div className="lr-mobile-hero-shade"/>
    <div className="lr-mobile-hero-content">
     <div className="lr-mobile-hero-kicker"><span>LET’S RESEARCH</span><b>{heroCurrent.no} / 03</b></div>
     <h1 className="lr-mobile-hero-title"><span><b>B</b>etter <i>questions.</i></span><span><b>B</b>etter <i>evidence.</i></span></h1>
     <p>Research that turns important questions into evidence people can use.</p>
     <div className="lr-mobile-hero-actions">
      <Link href="/start">Start with a question <ArrowRight size={15}/></Link>
      <Link href="/signup">Create account <ArrowRight size={15}/></Link>
     </div>
     <div className="lr-mobile-hero-stages">
      {heroStages.map((s,i)=><button key={s.no} onClick={()=>setHeroActive(i)} className={i===heroActive?'active':''} aria-label={s.label}><span>{s.no}</span><b>{s.label}</b></button>)}
     </div>
    </div>
   </div>

   <div className="lr-product-hero-grid">
    <div className="lr-product-copy">
     <div className="lr-product-kicker"><span>RESEARCH, DESIGNED AROUND THE QUESTION</span><b>01 — 05</b></div>
     <h1 className="lr-product-title"><span><b>B</b>etter <i>questions.</i></span><span><b>B</b>etter <i>evidence.</i></span></h1>
     <p className="lr-product-lead">What do your customers really need? Where is demand moving? What should you change next?</p>
     <div className="lr-product-actions"><Link href="/start" className="lr-product-primary">Start with a question <ArrowRight size={15}/></Link><span>Minimum research engagement <strong>$2,000</strong></span></div>
    </div>

    <div className="lr-product-stage">
     <div className="lr-question-card">
      <div className="lr-card-top"><span>THE QUESTION</span><b>{heroCurrent.no}</b></div>
      <div className="lr-question-mark">?</div>
      <h2>{heroCurrent.title}</h2>
      <p>{heroCurrent.text}</p>
      <div className="lr-card-footer"><span>{heroCurrent.meta}</span><span>LET’S RESEARCH ↗</span></div>
     </div>

     <div className="lr-photo-card">
      <img src={heroCurrent.image} alt="Research team working together"/>
      <div><span>{heroCurrent.label}</span><b>FIELD NOTE / {heroCurrent.no}</b></div>
     </div>

     <div className="lr-evidence-card">
      <div className="lr-evidence-head"><span>RESEARCH JOURNEY</span><b>LIVE</b></div>
      <div className="lr-evidence-steps">{heroStages.map((s,i)=><button key={s.no} onClick={()=>setHeroActive(i)} className={i===heroActive?'active':''}><span>{s.no}</span><b>{s.label}</b></button>)}</div>
      <div className="lr-evidence-bottom"><span>ASK</span><i></i><span>COLLECT</span><em>0{heroCurrent.no} / 03</em></div>
     </div>

     <div className="lr-mini-metric"><span>ACTIVE STUDY</span><strong>2,500</strong><small>target responses</small></div>
    </div>
   </div>

   <div className="lr-product-bottom">
    <span>LET’S RESEARCH / EVIDENCE FOR DECISIONS THAT MATTER</span>
    <span>SCROLL TO EXPLORE <ArrowDownRight size={14}/></span>
   </div>
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
