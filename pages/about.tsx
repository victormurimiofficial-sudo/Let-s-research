import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About(){
  return <><Head><title>About — Let’s Research</title><meta name="description" content="Learn how Let’s Research connects research strategy, fieldwork, analysis and reporting into one clear journey."/></Head>
  <div className="lr-site">
    <header className="lr-header"><Link href="/" className="lr-brand"><img className="lr-wordmark" src="/lr-logo.svg" alt="Let’s Research"/></Link><nav className="lr-nav"><Link href="/services">Capabilities</Link><Link href="/blog">Research Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/start" className="lr-nav-cta">Start research <ArrowRight size={15}/></Link></nav></header>
    <main>
      <section className="lr-story-section" style={{borderTop:0}}>
        <div className="lr-section-intro"><span className="lr-index">ABOUT / LET’S RESEARCH</span><div><h2>Research that moves from uncertainty to evidence.</h2><p>Let’s Research is a research company and digital workspace built around one simple idea: the process should be as clear as the answer.</p></div></div>
        <div className="lr-image-editorial">
          <div className="lr-editorial-photo"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=90" alt="Research team collaborating"/><span>PEOPLE + EVIDENCE</span></div>
          <div className="lr-editorial-copy"><span className="lr-index">01 / THE INTENT</span><h2>Make serious research easier to understand, manage and use.</h2><p>Projects often involve a question, a methodology, participants, data, analysis and a final report. We bring those pieces into a connected journey so clients can see what is happening and researchers can work with a clear structure.</p><div className="lr-work-list"><div><b>01</b><strong>Clarity</strong><span>Define the question before choosing the method.</span></div><div><b>02</b><strong>Rigour</strong><span>Build evidence through a defensible research process.</span></div><div><b>03</b><strong>Visibility</strong><span>Keep project progress and outputs in one workspace.</span></div><div><b>04</b><strong>Action</strong><span>Turn findings into something a decision-maker can use.</span></div></div><Link href="/start" className="lr-button purple">Start a research conversation <ArrowRight size={15}/></Link></div>
        </div>
      </section>
    </main>
    <footer className="lr-footer"><div><Link href="/" className="lr-brand"><img className="lr-wordmark" src="/lr-logo.svg" alt="Let’s Research"/></Link><p>Evidence for decisions that matter.</p></div><div className="footer-links"><Link href="/services">Capabilities</Link><Link href="/blog">Research Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/signup">Create account</Link></div><div className="footer-contact"><a href="mailto:Victormurimiofficial@gmail.com">Victormurimiofficial@gmail.com</a><a href="tel:+254111944791">+254 111 944 791</a><span>Kenya · Global delivery</span></div></footer>
  </div></>
}
