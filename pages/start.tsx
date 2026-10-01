import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Start() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <Head>
        <title>Start a Research Project — Let’s Research</title>
      </Head>
      <div className="site-shell">
        <header className="topbar">
          <Link href="/" className="brand">
            <span className="brand-mark">LR</span>
            <span>LET’S RESEARCH</span>
          </Link>
          <Link href="/" className="back-link">
            <ArrowLeft size={16} /> Back
          </Link>
        </header>
        <main className="intake-page">
          <div className="intake-intro">
            <span className="section-number">RESEARCH INTAKE</span>
            <h1>Start with the question.</h1>
            <p>
              Give us the context. We’ll help shape the research path, scope and
              next steps.
            </p>
            <div className="intake-side">
              <strong>Engagements from $2,000</strong>
              <span>Human-led · Evidence-first</span>
              <span>Kenya · Global delivery</span>
            </div>
          </div>
          {sent ? (
            <div className="success-panel">
              <CheckCircle2 size={42} />
              <span>Brief received</span>
              <h2>We have your research question.</h2>
              <p>
                Your brief has been captured for review. We’ll use the details
                you provided to shape the discovery conversation.
              </p>
              <Link href="/" className="button button-primary">
                Back to Let’s Research <ArrowRight size={17} />
              </Link>
            </div>
          ) : (
            <form className="intake-form" onSubmit={submit}>
              <label>
                What are you trying to understand?
                <textarea
                  required
                  placeholder="Tell us about the question, opportunity or problem..."
                />
              </label>
              <label>
                What decision will the research support?
                <textarea
                  required
                  placeholder="For example: whether to enter a market, improve a service, evaluate a program..."
                />
              </label>
              <div className="form-row">
                <label>
                  Your name
                  <input required />
                </label>
                <label>
                  Organization
                  <input required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email
                  <input
                    type="email"
                    required
                    defaultValue="Victormurimiofficial@gmail.com"
                  />
                </label>
                <label>
                  Phone
                  <input defaultValue="+254 111 944 791" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Where is the research needed?
                  <input placeholder="Country, city or region" />
                </label>
                <label>
                  Expected investment
                  <select defaultValue="$2,000–$5,000">
                    <option>$2,000–$5,000</option>
                    <option>$5,000–$10,000</option>
                    <option>$10,000+</option>
                  </select>
                </label>
              </div>
              <button className="button button-primary" type="submit">
                Submit research brief <ArrowRight size={17} />
              </button>
            </form>
          )}
        </main>
      </div>
    </>
  );
}
