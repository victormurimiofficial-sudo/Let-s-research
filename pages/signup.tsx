import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Create your workspace — Let’s Research</title>
      </Head>
      <div className="auth-page">
        <div className="auth-panel">
          <Link href="/" className="brand">
            <span className="brand-mark">LR</span>
            <span>LET’S RESEARCH</span>
          </Link>
          <div className="auth-copy">
            <span className="section-number">CREATE WORKSPACE</span>
            <h1>Start your research workspace.</h1>
            <p>For clients and research teams managing active engagements.</p>
          </div>
          <form className="auth-form" onSubmit={e => e.preventDefault()}>
            <label>
              Full name
              <input required />
            </label>
            <label>
              Work email
              <input type="email" required />
            </label>
            <label>
              Organization
              <input required />
            </label>
            <label>
              Password
              <input type="password" required />
            </label>
            <button className="button button-primary">
              Create workspace <ArrowRight size={17} />
            </button>
          </form>
          <Link href="/login" className="auth-secondary">
            Already have an account? Sign in <ArrowRight size={15} />
          </Link>
          <Link href="/" className="back-link">
            Back to site
          </Link>
        </div>
      </div>
    </>
  );
}
