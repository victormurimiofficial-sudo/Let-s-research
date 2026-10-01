import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, LockKeyhole } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Login() {
  const [message, setMessage] = useState('');
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setMessage(
      'Authentication is being connected in the platform build. The workspace preview is available now.'
    );
  };
  return (
    <>
      <Head>
        <title>Sign in — Let’s Research</title>
      </Head>
      <div className="auth-page">
        <div className="auth-panel">
          <Link href="/" className="brand">
            <span className="brand-mark">LR</span>
            <span>LET’S RESEARCH</span>
          </Link>
          <div className="auth-copy">
            <span className="section-number">CLIENT WORKSPACE</span>
            <h1>Welcome back.</h1>
            <p>Your research, evidence and project progress in one place.</p>
          </div>
          <form className="auth-form" onSubmit={submit}>
            <label>
              Email
              <input type="email" required placeholder="you@company.com" />
            </label>
            <label>
              Password
              <input type="password" required placeholder="••••••••" />
            </label>
            <button className="button button-primary" type="submit">
              Sign in <ArrowRight size={17} />
            </button>
          </form>
          {message && (
            <div className="auth-message">
              <LockKeyhole size={17} />
              {message}
            </div>
          )}
          <Link href="/signup" className="auth-secondary">
            Create an account <ArrowRight size={15} />
          </Link>
          <Link href="/dashboard" className="auth-secondary">
            Preview dashboard <ArrowRight size={15} />
          </Link>
          <Link href="/" className="back-link">
            <ArrowLeft size={15} /> Back to site
          </Link>
        </div>
      </div>
    </>
  );
}
