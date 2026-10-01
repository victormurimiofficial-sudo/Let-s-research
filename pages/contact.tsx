import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Let’s Research</title>
      </Head>
      <div className="site-shell">
        <header className="topbar">
          <Link href="/" className="brand">
            <span className="brand-mark">LR</span>
            <span>LET’S RESEARCH</span>
          </Link>
          <Link href="/" className="back-link">
            <ArrowLeft size={15} /> Back
          </Link>
        </header>
        <main className="contact-page">
          <div>
            <span className="section-number">CONTACT</span>
            <h1>Let’s talk about what you need to understand.</h1>
            <p>
              For research projects, partnerships and institutional engagements,
              send us the context and we’ll take it from there.
            </p>
            <Link href="/start" className="button button-primary">
              Start a research brief <ArrowRight size={17} />
            </Link>
          </div>
          <div className="contact-card">
            <div>
              <Mail size={21} />
              <span>Email</span>
              <a href="mailto:Victormurimiofficial@gmail.com">
                Victormurimiofficial@gmail.com
              </a>
            </div>
            <div>
              <Phone size={21} />
              <span>Phone</span>
              <a href="tel:+254111944791">+254 111 944 791</a>
            </div>
            <div>
              <span>Engagements</span>
              <strong>From $2,000</strong>
              <small>Scope confirmed after discovery.</small>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
