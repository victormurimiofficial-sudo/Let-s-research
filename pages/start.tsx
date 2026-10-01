import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Start() {
  const [emailReady, setEmailReady] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const fields = [
      ['Research question', form.get('question')],
      ['Decision to support', form.get('decision')],
      ['Name', form.get('name')],
      ['Organization', form.get('organization')],
      ['Contact email', form.get('email')],
      ['Phone', form.get('phone')],
      ['Geography', form.get('geography') || 'Not specified'],
      ['Expected investment', form.get('budget')],
    ];
    const body = fields.map(([label, value]) => label + ': ' + String(value ?? '').trim()).join('\n\n');
    const subject = 'New research brief — ' + String(form.get('organization') || form.get('name'));
    window.location.href = 'mailto:Victormurimiofficial@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setEmailReady(true);
  };
  return (
    <>
      <Head><title>Start a Research Project | Let’s Research</title><meta name="description" content="Share your research question with Let’s Research. We help shape the study, scope, methodology and next steps."/></Head>
      <div className="site-shell">
        <header className="topbar"><Link href="/" className="brand"><img className="lr-wordmark" src="/lr-logo.svg" alt="Let’s Research" /></Link><Link href="/" className="back-link"><ArrowLeft size={16}/> Back</Link></header>
        <main className="intake-page">
          <div className="intake-intro"><span className="section-number">RESEARCH INTAKE</span><h1>Start with the question.</h1><p>Give us the context. We’ll help shape the research path, scope and next steps.</p><div className="intake-side"><strong>Engagements from $2,000</strong><span>Human-led · Evidence-first</span><span>Kenya · Global delivery</span></div></div>
          {emailReady ? <div className="success-panel"><CheckCircle2 size={42}/><span>One last step</span><h2>Your brief is ready to send.</h2><p>Your email app should open with the details filled in. Please send that email to submit your brief. We have not received it until you press Send in your email app.</p><a className="button button-primary" href="mailto:Victormurimiofficial@gmail.com?subject=Research%20brief"> <Mail size={17}/> Open email again</a><p><Link href="/">Back to Let’s Research <ArrowRight size={16}/></Link></p></div> : <form className="intake-form" onSubmit={submit}>
            <label>What are you trying to understand?<textarea name="question" required placeholder="Tell us about the question, opportunity or problem..."/></label>
            <label>What decision will the research support?<textarea name="decision" required placeholder="For example: whether to enter a market, improve a service or evaluate a programme..."/></label>
            <div className="form-row"><label>Your name<input name="name" autoComplete="name" required/></label><label>Organization<input name="organization" autoComplete="organization" required/></label></div>
            <div className="form-row"><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@organization.com"/></label><label>Phone<input name="phone" autoComplete="tel" placeholder="+254…"/></label></div>
            <div className="form-row"><label>Where is the research needed?<input name="geography" placeholder="Country, city or region"/></label><label>Expected investment<select name="budget" defaultValue="$2,000–$5,000"><option>$2,000–$5,000</option><option>$5,000–$10,000</option><option>$10,000+</option></select></label></div>
            <button className="button button-primary" type="submit">Prepare research brief email <ArrowRight size={17}/></button><p className="intake-privacy-note">Your answers are prepared in your email app so you can review them before sending. This form does not store your information on a server yet.</p>
          </form>}
        </main>
      </div>
    </>
  );
}
