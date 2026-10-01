import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import { FormEvent, useState } from 'react';

const ADMIN_EMAIL = 'Victormurimiofficial@gmail.com';

async function hashPassword(value:string){
  const data = new TextEncoder().encode(value);
  if (typeof window !== 'undefined' && window.crypto?.subtle) {
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(digest)).map(v=>v.toString(16).padStart(2,'0')).join('');
  }
  return Array.from(data).map(v=>v.toString(16).padStart(2,'0')).join('');
}

export default function Signup(){
  const [created,setCreated]=useState(false);
  const [email,setEmail]=useState('');
  const [busy,setBusy]=useState(false);
  const [error,setError]=useState('');

  const isAdmin=email.trim().toLowerCase()===ADMIN_EMAIL.toLowerCase();

  const submit=async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError('');
    setBusy(true);
    try{
      const fd=new FormData(e.currentTarget);
      const name=String(fd.get('name')||'').trim();
      const cleanEmail=String(fd.get('email')||'').trim().toLowerCase();
      const organization=String(fd.get('organization')||'').trim();
      const password=String(fd.get('password')||'');
      if(!name || !cleanEmail || password.length<6){
        setError('Please complete the required fields and use a password of at least 6 characters.');
        setBusy(false);
        return;
      }
      const passwordHash=await hashPassword(password);
      const admin=cleanEmail===ADMIN_EMAIL.toLowerCase();
      const profile={name,email:cleanEmail,organization,passwordHash,admin,role:admin?'admin':'client'};
      localStorage.setItem('lr_profile',JSON.stringify(profile));
      localStorage.setItem('lr_session',JSON.stringify({email:cleanEmail,createdAt:Date.now()}));
      setCreated(true);
    }catch{
      setError('We could not finish creating the workspace. Please try again.');
    }finally{
      setBusy(false);
    }
  };

  return <>
    <Head>
      <title>Create Account | Let’s Research</title>
      <meta name="description" content="Create your Let’s Research workspace."/>
    </Head>
    <div className="lr-auth-page">
      <div className="lr-auth-visual">
        <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2200&q=92" alt="Research team working together"/>
        <div className="lr-auth-visual-shade"/>
        <Link href="/" className="lr-auth-brand"><img src="/lr-logo.svg" alt="Let’s Research"/></Link>
        <div className="lr-auth-visual-copy">
          <span>LET’S RESEARCH / 01</span>
          <h2>Build a place for the question, the evidence and what comes next.</h2>
          <div><b>OPEN TO CLIENTS</b><span>KENYA · GLOBAL DELIVERY</span></div>
        </div>
      </div>

      <main className="lr-auth-main">
        <div className="lr-auth-top">
          <span>WORKSPACE ACCESS</span>
          <Link href="/">Back to site ↗</Link>
        </div>

        {created ? <div className="lr-auth-success">
          <div className="lr-auth-success-icon"><CheckCircle2 size={22}/></div>
          <span className="lr-auth-label">ACCOUNT READY</span>
          <h1>Welcome to the workspace.</h1>
          <p>Your account has been created and your workspace session is active. You can now move straight into projects, briefs, fieldwork, evidence and reports.</p>
          <Link href="/dashboard" className="lr-auth-submit">Enter workspace <ArrowRight size={16}/></Link>
        </div> : <>
          <div className="lr-auth-heading">
            <div className="lr-auth-number">CREATE / 01</div>
            <h1>Start with a <i>question.</i></h1>
            <p>Anyone can create a client workspace. No invitation or organization approval is required.</p>
          </div>

          <form className="lr-auth-form" onSubmit={submit}>
            <label><span>01 / FULL NAME</span><input name="name" autoComplete="name" required placeholder="Your name"/></label>
            <label><span>02 / WORK EMAIL</span><input name="email" type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@organization.com"/></label>
            <label><span>03 / ORGANIZATION <em>OPTIONAL</em></span><input name="organization" autoComplete="organization" placeholder="Organization or institution"/></label>
            <label><span>04 / PASSWORD</span><div className="lr-auth-input-wrap"><LockKeyhole size={15}/><input name="password" type="password" autoComplete="new-password" required minLength={6} placeholder="At least 6 characters"/></div></label>

            {isAdmin && <div className="lr-admin-recognition"><ShieldCheck size={15}/><span><b>Administrator email recognized.</b> This account will receive the configured administrator role.</span></div>}
            {error && <div className="lr-auth-error" role="alert">{error}</div>}

            <button className="lr-auth-submit" type="submit" disabled={busy}>{busy ? 'CREATING WORKSPACE…' : 'Create workspace'} <ArrowRight size={16}/></button>

            <div className="lr-auth-security"><Sparkles size={14}/><span>Your password is converted to a local hash for this current workspace flow. No raw password is stored in the browser.</span></div>
          </form>

          <div className="lr-auth-switch">Already have a workspace? <Link href="/login">Sign in <ArrowRight size={13}/></Link></div>
        </>}
      </main>
    </div>
  </>;
}
