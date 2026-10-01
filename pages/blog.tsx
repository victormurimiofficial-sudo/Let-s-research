import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

const posts = [
  [
    'Research Methods',
    'How to choose the right research method for a business question',
    'A practical framework for moving from a vague question to a defensible research approach.',
    '8 min',
  ],
  [
    'Market Research',
    'What is market research and when does a company need it?',
    'A clear guide to market research, customer evidence, competitor intelligence and decision support.',
    '7 min',
  ],
  [
    'Data & Analysis',
    'Quantitative vs qualitative research: what is the difference?',
    'Understand what each approach can answer, where they fit and when combining them makes sense.',
    '6 min',
  ],
  [
    'Academic Research',
    'How to develop strong research objectives',
    'A practical explanation of moving from a research problem to specific, measurable objectives.',
    '5 min',
  ],
  [
    'Sampling',
    'Probability and non-probability sampling methods explained',
    'How researchers choose participants and what each sampling approach means for interpretation.',
    '9 min',
  ],
  [
    'Health Research',
    'What is a cross-sectional study?',
    'A straightforward guide to cross-sectional designs, their uses, strengths and limitations.',
    '7 min',
  ],
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Research Library — Let’s Research</title>
        <meta
          name="description"
          content="Research methods, market research, data analysis, health research and evidence guides from Let’s Research."
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
          <div className="page-hero library-hero">
            <span className="section-number">RESEARCH LIBRARY</span>
            <h1>Useful answers to serious research questions.</h1>
            <p>
              Guides and insights written for people who need to understand
              research, data and evidence without unnecessary jargon.
            </p>
            <div className="search-box">
              <Search size={18} />
              <input
                placeholder="Search the research library"
                aria-label="Search research library"
              />
            </div>
          </div>
          <div className="blog-grid">
            {posts.map(([cat, title, body, time], i) => (
              <article className="blog-card" key={title}>
                <div className="blog-number">0{i + 1}</div>
                <span>{cat}</span>
                <h2>{title}</h2>
                <p>{body}</p>
                <div className="blog-footer">
                  <small>{time} read</small>
                  <Link href="/blog">
                    Read article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
