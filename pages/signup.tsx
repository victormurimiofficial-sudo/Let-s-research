import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function Signup() {
  return <>
    <Head><title>Request Workspace | Let’s Research</title><meta name="description" content="Request a Let’s Research workspace for your organization or research team."/></Head>
    <div className="auth-page"><div className="auth-panel">
      <Link href="/" className="brand"><span className="brand-mark">LR</span><span>LET’S RESEARCH</span></Link>
      <div className="auth-copy"><span className="section-number">CREATE WORKSPACE</span><h1>Bring your research team together.</h1><p>Workspace accounts will be created with secure sign-in and project permissions once the account system is connected.</p></div>
      <div className="auth-message"><Mail size={19}/><span>For now, request access by email. We’ll confirm your organization and the project before setting up a workspace.</span></div>
      <a className="button button-primary" href="mailto:Victormurimiofficial@gmail.com?subject=Let%27s%20Research%20workspace%20request&body=Name%3A%0AOrganization%3A%0AWork%20email%3A%0AResearch%20project%3A"><Mail size={17}/> Request a workspace <ArrowRight size={17}/></a>
      <Link href="/login" className="auth-secondary">Already working with us? <ArrowRight size={15}/></Link>
      <Link href="/" className="back-link">Back to site</Link>
    </div></div>
  </>;
}
