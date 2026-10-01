import Head from 'next/head';
import Link from 'next/link';
import { Activity, BarChart3, Bell, BookOpen, BriefcaseBusiness, ChevronDown, ClipboardList, FileBarChart, FileText, FolderKanban, Home, Menu, MessageSquare, Settings, ShieldCheck, Users, WalletCards, X, ArrowUpRight, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

const navigation = [
  { title: 'WORKSPACE', items: [['Overview', Home], ['Projects', FolderKanban], ['Research briefs', ClipboardList], ['Fieldwork', BriefcaseBusiness], ['Participants', Users]] },
  { title: 'EVIDENCE', items: [['Data & Analytics', BarChart3], ['Findings', Activity], ['Reports', FileBarChart], ['Research Library', BookOpen]] },
  { title: 'COLLABORATION', items: [['Messages', MessageSquare], ['Team', Users], ['Files', FileText]] },
  { title: 'ACCOUNT', items: [['Billing', WalletCards], ['Security', ShieldCheck], ['Settings', Settings]] },
];

const activity = [
  ['FIELDWORK', '18 new responses received', '12 min ago'],
  ['ANALYSIS', 'Consumer Behaviour Study dataset updated', '48 min ago'],
  ['REPORTS', 'Market Entry Report was reviewed', '2 hrs ago'],
  ['TEAM', 'Aisha joined the Health Access project', 'Yesterday'],
];

const projects = [
  ['Consumer Behaviour Study', 'Quantitative', 'In field', '72%', 'VM'],
  ['Health Access Baseline', 'Mixed methods', 'Analysis', '54%', 'AK'],
  ['Market Entry Study', 'Secondary + interviews', 'Design', '28%', 'VM'],
];

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Overview');
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    setInstallPrompt(null);
  };

  return (
    <>
      <Head><title>{active} — Let’s Research</title></Head>
      <div className="lr-app">
        <aside className={open ? 'lr-sidebar open' : 'lr-sidebar'}>
          <div className="lr-side-brand">
            <Link href="/" className="lr-brand"><span className="lr-logo">LR</span><span>LET’S RESEARCH</span></Link>
            <button onClick={() => setOpen(false)}><X size={19} /></button>
          </div>
          <div className="lr-workspace-switch"><small>WORKSPACE</small><strong>Victor Research</strong><span>PRO</span><ChevronDown size={14} /></div>
          <nav className="lr-side-nav">
            {navigation.map((group) => (
              <div className="lr-nav-group" key={group.title}>
                <small>{group.title}</small>
                {group.items.map(([label, Icon]) => {
                  const I = Icon as typeof Home;
                  return <button key={label as string} className={active === label ? 'active' : ''} onClick={() => { setActive(label as string); setOpen(false); }}><I size={16} /><span>{label as string}</span></button>;
                })}
              </div>
            ))}
          </nav>
          <div className="lr-side-bottom">
            <div className="lr-help"><small>RESEARCH DESK</small><strong>Need help with a project?</strong><Link href="/contact">Talk to the team <ArrowUpRight size={12} /></Link></div>
            <Link href="/">Exit workspace</Link>
          </div>
        </aside>

        <main className="lr-app-main">
          <header className="lr-app-header">
            <button className="lr-mobile-menu" onClick={() => setOpen(true)}><Menu size={20} /></button>
            <div className="lr-breadcrumb"><span>Victor Research</span><b>/</b><strong>{active}</strong></div>
            <div className="lr-search"><span>⌕</span><input placeholder="Search projects, reports, people..." /></div>
            {installPrompt && <button className="lr-install" onClick={install}>Install workspace</button>}
            <button className="lr-icon-button"><Bell size={17} /></button>
            <div className="lr-avatar">VM</div>
          </header>

          <div className="lr-app-content">
            {active === 'Overview' ? (
              <>
                <div className="lr-dashboard-title">
                  <div><small>MONDAY · 12 OCTOBER</small><h1>Good afternoon, Victor.</h1><p>Your research workspace at a glance.</p></div>
                  <Link href="/start" className="lr-app-button"><Plus size={15} /> New research</Link>
                </div>

                <section className="lr-project-feature">
                  <div className="feature-main">
                    <div className="lr-status">ACTIVE PROJECT</div>
                    <h2>Consumer Behaviour Study</h2>
                    <p>Understanding customer behaviour and decision factors across the target market.</p>
                    <div className="feature-tags"><span>Quantitative</span><span>Kenya</span><span>Due 18 Oct</span></div>
                    <Link href="/dashboard" className="lr-inline-link">Open project <ArrowUpRight size={14} /></Link>
                  </div>
                  <div className="feature-progress">
                    <div><small>RESEARCH PROGRESS</small><b>72%</b></div>
                    <div className="lr-progress"><span /></div>
                    <p>Fieldwork is active · 1,842 responses</p>
                  </div>
                </section>

                <section className="lr-stat-strip">
                  <div><small>ACTIVE PROJECTS</small><strong>04</strong><span>Across 3 research teams</span></div>
                  <div><small>RESPONSES</small><strong>1,842</strong><span>+12.4% this week</span></div>
                  <div><small>REPORTS</small><strong>12</strong><span>3 updated this month</span></div>
                  <div><small>TEAM MEMBERS</small><strong>08</strong><span>2 currently online</span></div>
                </section>

                <section className="lr-dashboard-grid">
                  <div className="lr-panel lr-chart-panel">
                    <div className="lr-panel-head"><div><small>RESEARCH ACTIVITY</small><h2>Evidence collected</h2></div><span>Last 30 days</span></div>
                    <div className="lr-chart"><div className="chart-line" /><div className="chart-bars">{[42,58,49,66,61,72,70,83,68,91,78,96,87,100,92,88,96,100].map((height, i) => <i key={i} style={{ height: height + '%' }} />)}</div></div>
                    <div className="lr-chart-axis"><span>Sep 14</span><span>Sep 21</span><span>Sep 28</span><span>Oct 05</span><span>Oct 12</span></div>
                  </div>

                  <div className="lr-panel">
                    <div className="lr-panel-head"><div><small>RECENT ACTIVITY</small><h2>Project feed</h2></div></div>
                    <div className="lr-activity">
                      {activity.map(([type, text, time]) => <div key={text}><i /><div><small>{type}</small><strong>{text}</strong><span>{time}</span></div></div>)}
                    </div>
                  </div>
                </section>

                <section className="lr-panel lr-projects-panel">
                  <div className="lr-panel-head"><div><small>PROJECTS</small><h2>Research in motion</h2></div><Link href="/start" className="lr-inline-link">New project <Plus size={13} /></Link></div>
                  <div className="lr-project-table">
                    <div className="table-heading"><span>PROJECT</span><span>METHOD</span><span>STATUS</span><span>PROGRESS</span><span>OWNER</span></div>
                    {projects.map((row) => <div className="table-project" key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><b>{row[2]}</b><span>{row[3]}</span><em>{row[4]}</em></div>)}
                  </div>
                </section>
              </>
            ) : (
              <section className="lr-module">
                <div className="lr-module-number">WORKSPACE MODULE</div>
                <h1>{active}</h1>
                <p>This section is already part of the workspace architecture. Its dedicated workflow will be built on the same project context, permissions and evidence model.</p>
                <div className="lr-module-panels"><div><small>STATUS</small><strong>Ready for build</strong></div><div><small>ACCESS</small><strong>Workspace team</strong></div><div><small>PROJECT CONTEXT</small><strong>Connected</strong></div></div>
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
