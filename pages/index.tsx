import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const story = [
  {
    no: '01',
    label: 'ASK',
    title: 'Start with the question, not the questionnaire.',
    text: 'Every useful study begins by making the decision clear. We turn a broad problem into a research question that can actually be answered.',
    meta: 'Research strategy',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90',
  },
  {
    no: '02',
    label: 'DESIGN',
    title: 'Build a study that can stand up to scrutiny.',
    text: 'Method, population, sample, instruments and analysis are designed as one study rather than disconnected tasks.',
    meta: 'Study design',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2200&q=90',
  },
  {
    no: '03',
    label: 'COLLECT',
    title: 'Bring people, fieldwork and evidence into one place.',
    text: 'Surveys, interviews, observations and secondary sources move through a controlled workflow so the evidence stays traceable.',
    meta: 'Fieldwork',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90',
  },
  {
    no: '04',
    label: 'ANALYZE',
    title: 'Make the pattern visible inside the data.',
    text: 'Clean, structure and interrogate the evidence. The goal is not more charts. It is a clearer understanding of what the evidence says.',
    meta: 'Data & analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=90',
  },
  {
    no: '05',
    label: 'ACT',
    title: 'Finish with something you can use.',
    text: 'Findings, reports and visual evidence are shaped around the decision that started the project.',
    meta: 'Findings & reports',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=90',
  },
];

const services = [
  ['01', 'Market research', 'Customers, competitors, demand, positioning and opportunity.'],
  ['02', 'Health research', 'Public health, healthcare behaviour, outcomes and evidence.'],
  ['03', 'Social & development', 'Communities, programmes, baseline, evaluation and impact.'],
  ['04', 'UX & product research', 'Understand people before product and experience decisions.'],
  ['05', 'Academic & institutional', 'Research design, evidence reviews, analysis and reporting.'],
  ['06', 'Data & analytics', 'From raw datasets to useful tables, visuals and findings.'],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const current = story[active];

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % story.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Let’s Research — Better questions. Stronger evidence.</title>
        <meta name="description" content="Let’s Research designs and delivers rigorous market, health, social, academic, product and data research." />
      </Head>

      <div className="lr-site">
        <header className="lr-header">
          <Link href="/" className="lr-brand"><img className="lr-wordmark" src="/lr-logo.svg" alt="Let’s Research" /></Link>
          <nav className={menu ? 'lr-nav open' : 'lr-nav'}>
            <Link href="/services">Capabilities</Link>
            <Link href="/blog">Research Library</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login" className="lr-signin">Sign in</Link>
            <Link href="/start" className="lr-nav-cta">Start research <ArrowRight size={15} /></Link>
          </nav>
          <button className="lr-menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>

        <main>
          <section className="lr-hero">
            <div className="lr-hero-copy">
              <div className="lr-kicker"><span /> RESEARCH, FROM QUESTION TO EVIDENCE</div>
              <h1>Better questions.<br /><i>Stronger evidence.</i></h1>
              <div className="lr-hero-bottom">
                <p>Let’s Research helps organizations understand people, markets, systems and opportunities before they make important decisions.</p>
                <div className="lr-hero-actions">
                  <Link href="/start" className="lr-button purple">Start a research project <ArrowRight size={16} /></Link>
                  <Link href="/services" className="lr-text-link">Explore capabilities <ArrowRight size={15} /></Link>
                </div>
              </div>
            </div>
            <div className="lr-hero-photo">
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=90" alt="Researchers collaborating around a table" />
              <div className="lr-photo-label"><span>LET’S RESEARCH</span><b>01 / 05</b></div>
            </div>
          </section>

          <section className="lr-story-section">
            <div className="lr-section-intro">
              <span className="lr-index">01 / THE RESEARCH JOURNEY</span>
              <div>
                <h2>Good research has a rhythm.</h2>
                <p>Five connected stages. One clear line from the first question to the final decision.</p>
              </div>
            </div>

            <div className="lr-story-panel">
              <div className="lr-story-visual">
                <div className="lr-story-index-rail"><b>{current.no}</b><span>05</span></div>
                {story.map((item, index) => (
                  <img key={item.no} alt={item.title} src={item.image} className={index === active ? 'story-image active' : 'story-image'} />
                ))}
                <div className="lr-story-image-caption"><span>{current.meta}</span><b>{current.no} / 05</b></div>
              </div>

              <div className="lr-story-information">
                <div className="lr-story-top"><span>{current.no}</span><b>{current.label}</b></div>
                <div className="lr-story-body">
                  <div className="lr-purple-line" />
                  <h3>{current.title}</h3>
                  <p>{current.text}</p>
                  <Link href="/start" className="lr-button purple">Shape this project <ArrowRight size={15} /></Link>
                </div>
                <div className="lr-story-controls">
                  <div className="lr-stage-list">
                    {story.map((item, index) => (
                      <button key={item.no} className={index === active ? 'active' : ''} onClick={() => setActive(index)}>
                        <span>{item.no}</span><b>{item.label}</b>
                      </button>
                    ))}
                  </div>
                  <div className="lr-arrows">
                    <button onClick={() => setActive((active + story.length - 1) % story.length)} aria-label="Previous stage"><ChevronLeft size={17} /></button>
                    <button onClick={() => setActive((active + 1) % story.length)} aria-label="Next stage"><ChevronRight size={17} /></button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="lr-statement">
            <div className="lr-index">WHY LET’S RESEARCH</div>
            <div>
              <h2>Research should reduce uncertainty, not create another pile of work.</h2>
              <p>We connect the brief, methodology, fieldwork, data, analysis and reporting into one visible journey. Clients know what is happening, what has been completed and what comes next.</p>
            </div>
          </section>

          <section className="lr-capabilities">
            <div className="lr-section-intro">
              <span className="lr-index">02 / CAPABILITIES</span>
              <div>
                <h2>One partner.<br />Many questions.</h2>
                <Link href="/services" className="lr-text-link">View all capabilities <ArrowRight size={15} /></Link>
              </div>
            </div>
            <div className="lr-service-grid">
              {services.map(([no, title, text]) => (
                <Link href="/services" className="lr-service-panel" key={no}>
                  <div className="lr-service-head"><span>{no}</span><span>RESEARCH</span></div>
                  <div className="lr-service-content"><h3>{title}</h3><p>{text}</p></div>
                  <ArrowRight className="service-arrow" size={18} />
                </Link>
              ))}
            </div>
          </section>

          <section className="lr-image-editorial">
            <div className="lr-editorial-photo">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=90" alt="Research team reviewing work together" />
              <span>PEOPLE + EVIDENCE</span>
            </div>
            <div className="lr-editorial-copy">
              <span className="lr-index">03 / HOW WE WORK</span>
              <h2>Serious research can still feel simple to the client.</h2>
              <div className="lr-work-list">
                <div><b>01</b><strong>Brief</strong><span>Define the question and the decision.</span></div>
                <div><b>02</b><strong>Study</strong><span>Agree the methodology, scope and outputs.</span></div>
                <div><b>03</b><strong>Evidence</strong><span>Collect, manage and review the evidence.</span></div>
                <div><b>04</b><strong>Output</strong><span>Deliver findings people can actually use.</span></div>
              </div>
              <Link href="/start" className="lr-button outline">Tell us what you need to understand <ArrowRight size={15} /></Link>
            </div>
          </section>

          <section className="lr-workspace-section">
            <div className="lr-workspace-copy">
              <span className="lr-index">04 / THE WORKSPACE</span>
              <h2>The research workspace belongs to the project.</h2>
              <p>Briefs, fieldwork, participants, datasets, findings, reports, files and conversations are designed to sit together rather than disappear across email threads and shared folders.</p>
              <Link href="/dashboard" className="lr-button purple">Enter workspace <ArrowRight size={15} /></Link>
            </div>
            <div className="lr-dashboard-frame">
              <div className="frame-top"><img className="lr-mini-logo" src="/lr-icon.svg" alt="" /><span>Victor Research Workspace</span><b>LIVE</b></div>
              <div className="frame-body">
                <aside><strong>WORKSPACE</strong><span className="selected">Overview</span><span>Projects</span><span>Research briefs</span><span>Fieldwork</span><span>Data & Analytics</span><span>Reports</span></aside>
                <div className="frame-main">
                  <div className="frame-title"><div><small>MONDAY · 12 OCTOBER</small><h3>Good afternoon, Victor.</h3></div><span>VM</span></div>
                  <div className="frame-cards"><div><small>ACTIVE PROJECTS</small><b>04</b><span>Across 3 teams</span></div><div><small>RESPONSES</small><b>1,842</b><span>+12.4% this week</span></div><div><small>REPORTS</small><b>12</b><span>3 updated</span></div></div>
                  <div className="frame-evidence"><div><small>RESEARCH ACTIVITY</small><b>Last 30 days</b></div><div className="frame-bars">{[40,55,48,64,57,70,62,82,68,90,76,96].map((height, i) => <i key={i} style={{ height: height + '%' }} />)}</div></div>
                </div>
              </div>
            </div>
          </section>

          <section className="lr-library">
            <div className="lr-library-head">
              <span className="lr-index">05 / RESEARCH LIBRARY</span>
              <h2>Useful research knowledge.<br />Published properly.</h2>
              <p>Methods, explainers, guides and evidence-led articles for researchers, organizations and decision-makers.</p>
              <Link href="/blog" className="lr-text-link">Open Research Library <ArrowRight size={15} /></Link>
            </div>
            <div className="lr-library-list">
              {[['01', 'Research methods', 'How to choose the right research method for a business question', '8 min'], ['02', 'Research design', 'How to develop strong research objectives', '6 min'], ['03', 'Sampling', 'Probability and non-probability sampling methods explained', '9 min'], ['04', 'Study design', 'What is a cross-sectional study?', '7 min']].map(([no, cat, title, time]) => (
                <Link href="/blog" className="lr-library-row" key={no}><span>{no}</span><div><small>{cat}</small><h3>{title}</h3></div><em>{time}</em><ArrowRight size={16} /></Link>
              ))}
            </div>
          </section>

          <section className="lr-closing">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2200&q=90" alt="Researchers working together" />
            <div className="lr-closing-shade" />
            <div className="lr-closing-content">
              <span className="lr-index">06 / START WITH THE QUESTION</span>
              <h2>Have something you need to understand?</h2>
              <p>Bring us the question. We’ll help shape the research path.</p>
              <Link href="/start" className="lr-button light">Start a research project <ArrowRight size={15} /></Link>
            </div>
          </section>
        </main>

        <footer className="lr-footer">
          <div><Link href="/" className="lr-brand"><img className="lr-wordmark" src="/lr-logo.svg" alt="Let’s Research" /></Link><p>Evidence for decisions that matter.</p></div>
          <div className="footer-links"><Link href="/services">Capabilities</Link><Link href="/blog">Research Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/login">Client login</Link></div>
          <div className="footer-contact"><a href="mailto:Victormurimiofficial@gmail.com">Victormurimiofficial@gmail.com</a><a href="tel:+254111944791">+254 111 944 791</a><span>Kenya · Global delivery</span></div>
        </footer>
      </div>
    </>
  );
}
