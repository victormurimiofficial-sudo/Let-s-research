import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const people = [
  {
    no:'01',
    role:'Founder',
    name:'Victor Murimi',
    title:'The person behind the question.',
    text:'Let’s Research was built around a simple belief: important decisions deserve a better route to evidence. Victor leads the company and shapes the research experience around clarity, useful evidence and work that clients can actually act on.',
    image:'/founder.jpg',
    founder:true
  },
  {
    no:'02',
    role:'Research & strategy',
    name:'The research team',
    title:'People who make the question sharper.',
    text:'Researchers, strategists and subject-matter specialists bring different ways of thinking to the same brief. The goal is not to make research complicated. It is to make the right things clear.',
    image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90'
  },
  {
    no:'03',
    role:'Fieldwork & evidence',
    name:'Across markets',
    title:'Evidence comes from people.',
    text:'Good research stays close to the people behind the data. We design fieldwork, interviews, surveys and evidence collection around the population and decision the study is meant to serve.',
    image:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=90'
  },
  {
    no:'04',
    role:'Analysis & reporting',
    name:'From evidence to action',
    title:'The last mile matters.',
    text:'A report should not become the place where useful evidence goes to disappear. We connect analysis, findings and reporting so the final output can be understood, discussed and used.',
    image:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=90'
  }
];

export default function About(){
 return <><Head><title>About — Let’s Research</title><meta name="description" content="Meet the people and thinking behind Let’s Research, a research company and digital workspace built around better questions and useful evidence."/></Head>
 <div className="lr-site lr-about-page">
  <header className="lr-product-nav lr-about-nav">
   <Link href="/" className="lr-product-logo"><img src="/lr-logo.svg" alt="Let’s Research"/></Link>
   <nav><Link href="/services">Capabilities</Link><Link href="/blog">Research Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
   <div className="lr-product-nav-actions"><Link href="/start" className="lr-product-account">START A RESEARCH PROJECT <ArrowRight size={13}/></Link></div>
  </header>

  <main>
   <section className="lr-about-hero">
    <div className="lr-about-hero-copy">
     <span className="lr-index">ABOUT / THE PEOPLE BEHIND THE WORK</span>
     <h1>Good research<br/><i>starts with</i><br/>people.</h1>
     <p>Let’s Research brings research strategy, fieldwork, evidence, analysis and reporting into one clear experience.</p>
    </div>
    <div className="lr-about-hero-card">
      <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90" alt="Research professionals working together"/>
      <div><span>LET’S RESEARCH</span><b>PEOPLE + EVIDENCE</b></div>
    </div>
   </section>

   <section className="lr-about-intent">
    <div><span className="lr-index">01 / WHY WE EXIST</span></div>
    <div><h2>Research should feel like a path, not a maze.</h2><p>There is usually a question at the beginning, a decision at the end and a lot of important work in between. We are building the layer that keeps that journey connected: what was asked, how it was designed, what was collected, what the evidence says and what happens next.</p></div>
   </section>

   <section className="lr-about-people">
    <div className="lr-about-people-heading"><span className="lr-index">02 / THE PEOPLE</span><h2>A team is more than the names on a page.</h2><p>These are the roles, perspectives and people that shape the work. Real team photographs can be replaced from the workspace as the company grows.</p></div>
    <div className="lr-about-story">
     {people.map((person,i)=><article className={'lr-about-person '+(i%2?'reverse':'')} key={person.no}>
       <div className="lr-about-person-image"><img src={person.image} alt={person.founder?'Victor Murimi, founder of Let’s Research':'Research professional collaborating with a team'}/><span>{person.no} / {person.role}</span></div>
       <div className="lr-about-person-copy">
        <div className="lr-about-person-meta"><span>{person.role}</span><b>{person.no}</b></div>
        <h3>{person.title}</h3>
        <strong>{person.name}</strong>
        <p>{person.text}</p>
        {person.founder && <div className="lr-founder-note"><span>FOUNDER</span><b>Research · Strategy · Product</b></div>}
       </div>
     </article>)}
    </div>
   </section>

   <section className="lr-about-principles">
    <div><span className="lr-index">03 / WHAT WE BELIEVE</span><h2>Make the serious work feel clear.</h2></div>
    <div className="lr-principle-grid">
      <article><b>01</b><h3>Clarity</h3><p>A strong study starts by making the question precise.</p></article>
      <article><b>02</b><h3>Rigour</h3><p>Methods and evidence should stand up when the work is examined.</p></article>
      <article><b>03</b><h3>Visibility</h3><p>Clients should know where the project is without chasing updates.</p></article>
      <article><b>04</b><h3>Usefulness</h3><p>The final output should help somebody decide, build or change something.</p></article>
    </div>
   </section>

   <section className="lr-about-cta"><span className="lr-index">04 / YOUR QUESTION</span><h2>Have something worth understanding?</h2><p>Bring us the question. We’ll shape the research path with you.</p><Link href="/start" className="lr-button light">Start a research project <ArrowRight size={15}/></Link></section>
  </main>

  <footer className="lr-footer"><div><Link href="/" className="lr-brand"><img className="lr-wordmark" src="/lr-logo.svg" alt="Let’s Research"/></Link><p>Evidence for decisions that matter.</p></div><div className="footer-links"><Link href="/services">Capabilities</Link><Link href="/blog">Research Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/signup">Create account</Link></div><div className="footer-contact"><a href="mailto:Victormurimiofficial@gmail.com">Victormurimiofficial@gmail.com</a><a href="tel:+254111944791">+254 111 944 791</a><span>Kenya · Global delivery</span></div></footer>
 </div></>
}