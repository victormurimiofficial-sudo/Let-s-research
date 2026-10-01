import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  FileText,
  HeartPulse,
  Layers3,
  Search,
  Users,
  Workflow,
} from 'lucide-react';

const items = [
  [
    'Market Research',
    'Understand demand, customer behaviour, competitors, markets and commercial opportunity.',
    Search,
  ],
  [
    'Health Research',
    'Evidence for healthcare, public health, patient experience and health-system decisions.',
    HeartPulse,
  ],
  [
    'Social & Development Research',
    'Baseline studies, evaluations, community research and outcome measurement.',
    Users,
  ],
  [
    'UX & Product Research',
    'Learn how people use, understand and experience products and services.',
    Workflow,
  ],
  [
    'Academic & Institutional Research',
    'Research design, evidence synthesis, data analysis and methodological support.',
    FileText,
  ],
  [
    'Data & Analytics',
    'Data cleaning, statistical analysis, visualization, dashboards and analytical reporting.',
    BarChart3,
  ],
  [
    'Feasibility Studies',
    'Assess market, operational, financial and implementation questions before investment.',
    Layers3,
  ],
  [
    'Literature & Evidence Reviews',
    'Structured reviews that locate, assess and synthesize existing evidence.',
    Search,
  ],
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Research Capabilities — Let’s Research</title>
        <meta
          name="description"
          content="Market, health, social, product, academic and data research services from Let’s Research."
        />
      </Head>
      <div className="site-shell">
        <header className="topbar">
          <Link href="/" className="brand">
            <span className="brand-mark">LR</span>
            <span>LET’S RESEARCH</span>
          </Link>
          <nav className="nav-links">
            <Link href="/services">Capabilities</Link>
            <Link href="/blog">Research Library</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/start" className="nav-cta">
              Start research <ArrowRight size={15} />
            </Link>
          </nav>
        </header>
        <main className="inner-page">
          <div className="page-hero">
            <span className="section-number">CAPABILITIES</span>
            <h1>Research built around the question, not the template.</h1>
            <p>
              We choose methods based on the decision, population, evidence and
              constraints in front of us.
            </p>
          </div>
          <div className="service-list">
            {items.map(([title, body, Icon], i) => {
              const I = Icon as typeof Search;
              return (
                <article className="large-service" key={title as string}>
                  <span>0{i + 1}</span>
                  <div className="service-icon">
                    <I size={24} />
                  </div>
                  <div>
                    <h2>{title as string}</h2>
                    <p>{body as string}</p>
                  </div>
                  <Link href="/start" aria-label={'Start ' + String(title)}>
                    <ArrowRight />
                  </Link>
                </article>
              );
            })}
          </div>
          <section className="pricing-band">
            <span>ENGAGEMENTS FROM</span>
            <strong>$2,000</strong>
            <p>
              Scope, methodology and investment are confirmed after the research
              brief and discovery conversation.
            </p>
            <Link href="/start" className="button button-light">
              Discuss a project <ArrowRight size={17} />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
