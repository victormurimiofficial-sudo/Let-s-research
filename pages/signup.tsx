import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Signup(){
 const [created,setCreated]=useState(false);
 const submit=(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const fd=new FormData(e.currentTarget);
  const profile={name:String(fd.get('name')),email:String(fd.get('email')).trim(),organization:String(fd.get('organization')||'')};
  localStorage.setItem('lr_profile',JSON.stringify(profile));
  setCreated(true);
 };
 return <><Head><title>Create Workspace | Let’s Research</title><meta name="description" content="Create a Let’s Research client workspace."/></Head>
 <div className="lr-account-page"><div className="lr-account-image"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90" alt="Modern research workspace"/><div><span>LET’S RESEARCH</span><strong>Your research deserves its own place.</strong></div></div>
 <main className="lr-account-main"><Link href="/" className="lr-account-logo"><img src="/lr-logo.svg" alt="Let’s Research"/></Link>{created?<div className="account-success"><CheckCircle2 size={38}/><span>WORKSPACE CREATED</span><h1>Welcome to Let’s Research.</h1><p>Your workspace profile is ready. You can now explore projects, briefs, fieldwork, evidence, reports and collaboration.</p><Link href="/dashboard" className="dash-primary">Enter workspace <ArrowRight size={16}/></Link></div>:<><div className="account-heading"><span>CREATE ACCOUNT</span><h1>Start your research workspace.</h1><p>Use your work details. You can review everything inside the workspace before the secure authentication layer is connected.</p></div><form className="account-form" onSubmit={submit}><label>Full name<input name="name" autoComplete="name" required placeholder="Your name"/></label><label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@organization.com"/></label><label>Organization<input name="organization" autoComplete="organization" placeholder="Organization or institution"/></label><label>Password<input name="password" type="password" required minLength={6} placeholder="Create a password"/></label><button className="dash-primary" type="submit">Create workspace <ArrowRight size={16}/></button><div className="account-note"><ShieldCheck size={16}/><span>Your password is accepted for the account flow but is <strong>not stored by this temporary workspace layer</strong>. Secure authentication will replace this before production password access is enabled.</span></div></form><Link href="/" className="account-back">Back to Let’s Research</Link></>}</main></div></>;
}
