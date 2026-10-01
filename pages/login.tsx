import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';

const ADMIN_EMAIL = 'Victormurimiofficial@gmail.com';

async function hashPassword(value:string){
  const data = new TextEncoder().encode(value);
  if (typeof window !== 'undefined' && window.crypto?.subtle) {
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(digest)).map(v=>v.toString(16).padStart(2,'0')).join('');
  }
  return Array.from(data).map(v=>v.toString(16).padStart(2,'0')).join('');
}

export default function Login(){
  const [email,setEmail]=useState('');
  const [busy,setBusy]=useState(false);
  const [error,setError]=useState('');

  const submit=async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError('');
    setBusy(true);
    try{
      const cleanEmail=email.trim().toLowerCase();
      const password=String(new FormData(e.currentTarget).get('password')||'');
      const raw=localStorage.getItem('lr_profile');
      const profile=raw?JSON.parse(raw):null;

      if(!profile || String(profile.email||'').toLowerCase()!==cleanEmail){
        setError('No workspace exists for this email yet. Create an account first.');
        setBusy(false);
        return;
      }

      const passwordHash=await hashPassword(password);
      if(profile.passwordHash && profile.passwordHash!==passwordHash){
        setError('That password does not match this workspace.');
        setBusy(false);
        return;
      }

      const admin=cleanEmail===ADMIN_EMAIL.toLowerCase();
      const next={...profile,email:cleanEmail,admin,role:admin?'admin':'client'};
      localStorage.setItem('lr_profile',JSON.stringify(next));
      localStorage.setItem('lr_session',JSON.stringify({email:cleanEmail,createdAt:Date.now()}));
      window.location.href='/dashboard';
    }catch{
      setError('We could not sign you in. Please try again.');
      setBusy(false);
    }
  };

  const isAdmin=email.trim().toLowerCase()===ADMIN_EMAIL.toLowerCase();

  return <>
    <Head>
      <title>Sign In | Let’s Research</title>
      <meta name="description" content="Sign in to your Let’s Research workspace."/>
    </Head>
    <div className="lr-auth-page lr-auth-login">
      <div className="lr-auth-visual">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=92" alt="Research team collaborating"/>
        <div className="lr-auth-visual-shade"/>
        <Link href="/" className="lr-auth-brand"><img src="/lr-logo.svg" alt="Let’s Research"/></Link>
        <div className="lr-auth-visual-copy">
          <span>LET’S RESEARCH / ACCESS</span>
          <h2>The work continues where the question becomes evidence.</h2>
          <div><b>PRIVATE WORKSPACE</b><span>CLIENT · RESEARCH · ADMIN</span></div>
        </div>
      </div>

      <main className="lr-auth-main">
        <div className="lr-auth-top">
          <span>RETURNING CLIENT</span>
          <Link href="/">Back to site ↗</Link>
        </div>

        <div className="lr-auth-heading">
          <div className="lr-auth-number">SIGN IN / 02</div>
          <h1>Back to the <i>work.</i></h1>
          <p>Enter the email and password connected to your Let’s Research workspace.</p>
        </div>

        <form className="lr-auth-form" onSubmit={submit}>
          <label><span>01 / WORK EMAIL</span><input name="email" type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@organization.com"/></label>
          <label><span>02 / PASSWORD</span><div className="lr-auth-input-wrap"><LockKeyhole size={15}/><input name="password" type="password" autoComplete="current-password" required placeholder="Your password"/></div></label>

          {isAdmin && <div className="lr-admin-recognition"><ShieldCheck size={15}/><span><b>Administrator account.</b> The configured admin workspace will be available after sign-in.</span></div>}
          {error && <div className="lr-auth-error" role="alert">{error}</div>}

          <button className="lr-auth-submit" type="submit" disabled={busy}>{busy ? 'OPENING WORKSPACE…' : 'Sign in'} <ArrowRight size={16}/></button>
        </form>

        <div className="lr-auth-switch">New to Let’s Research? <Link href="/signup">Create an account <ArrowRight size={13}/></Link></div>
        <div className="lr-auth-footer-note"><ShieldCheck size={14}/><span>Workspace access is client-first. The configured administrator email is recognized separately from client accounts.</span></div>
      </main>
    </div>
  </>;
}
