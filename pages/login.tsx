import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, LockKeyhole, Mail } from 'lucide-react';

export default function Login() {
  return <>
    <Head><title>Client Workspace | Let’s Research</title><meta name="description" content="Access to the Let’s Research client workspace is arranged for active project teams."/></Head>
    <div className="auth-page"><div className="auth-panel">
      <Link href="/" className="brand"><img className="lr-wordmark" src="/lr-logo.svg" alt="Let’s Research" /></Link>
      <div className="auth-copy"><span className="section-number">CLIENT WORKSPACE</span><h1>Your research, in one place.</h1><p>The workspace is being prepared for secure client and research-team access.</p></div>
      <div className="auth-message"><LockKeyhole size={19}/><span><strong>Secure sign-in is not active yet.</strong><br/>We’re not collecting passwords until account authentication is connected.</span></div>
      <a className="button button-primary" href="mailto:Victormurimiofficial@gmail.com?subject=Let%27s%20Research%20workspace%20access"><Mail size={17}/> Request workspace access</a>
      <Link href="/start" className="auth-secondary">Start a research project <ArrowRight size={15}/></Link>
      <Link href="/dashboard" className="auth-secondary">Explore the workspace preview <ArrowRight size={15}/></Link>
      <Link href="/" className="back-link"><ArrowLeft size={15}/> Back to site</Link>
    </div></div>
  </>;
}
