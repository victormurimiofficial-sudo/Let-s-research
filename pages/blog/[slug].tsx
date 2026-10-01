import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Section = { heading: string; paragraphs?: string[]; bullets?: string[] };
type Article = { slug: string; category: string; title: string; excerpt: string; minutes: string; updated: string; intro: string; sections: Section[]; takeaway: string };

const articles: Article[] = [
  {
    slug: 'choose-the-right-research-method',
    category: 'Research Methods',
    title: 'How to choose the right research method for a business question',
    excerpt: 'A practical framework for moving from a vague question to a defensible research approach.',
    minutes: '8 min', updated: '2026-10-01',
    intro: 'The right research method starts with the decision you need to make. Before choosing a survey, interview, experiment or dataset, be clear about what you need to know, whose perspective matters and how the answer will be used.',
    sections: [
      { heading: '1. Define the decision first', paragraphs: ['Write down the decision the research should support. “Understand our customers” is too broad. “Understand why first-time customers do not return within 60 days” is specific enough to guide a study.', 'A clear decision helps you set boundaries: what is in scope, what is outside the study and what evidence would genuinely change the next step.'] },
      { heading: '2. Match the method to the question', paragraphs: ['Use qualitative methods such as interviews or focus groups when you need to explore experiences, motivations, language or an unfamiliar problem. They help explain how people understand a situation, but a small qualitative sample does not establish how common a view is in a whole population.', 'Use quantitative methods such as structured surveys, experiments or analysis of existing records when you need to measure frequency, compare groups or test a defined relationship. The quality of the result depends on measurement, sampling and study design.', 'Use mixed methods when measurement and explanation are both needed. For example, a survey may identify a drop in satisfaction, while interviews help explore what is behind it.'] },
      { heading: '3. Check the population and evidence available', paragraphs: ['Decide who or what can answer the question. Consider whether you can reach the intended population, whether relevant records already exist and whether the timeframe allows primary data collection.', 'Existing data can reduce cost and time, but first check how it was collected, when it was collected, what each variable means and whether it represents the people or period you care about.'] },
      { heading: '4. Design for quality, ethics and feasibility', paragraphs: ['A method should be realistic as well as appropriate. Consider budget, time, permissions, privacy, participant burden, language, accessibility and the skills needed for analysis.', 'Set out the limitations before data collection begins. A transparent study is clearer about what it can answer and what remains uncertain.'] },
      { heading: '5. Connect analysis to the final decision', paragraphs: ['Choose the method with the analysis and deliverable in mind. Decide what tables, comparisons, themes or evidence summaries would help someone act on the findings.', 'Do not collect data simply because it is easy to collect. Every instrument, question and variable should have a reason to be in the study.'] }
    ],
    takeaway: 'A useful research plan links one decision to clear questions, a suitable method, a reachable population, a credible analysis plan and an honest account of limitations.'
  },
  {
    slug: 'what-is-market-research',
    category: 'Market Research',
    title: 'What is market research and when does a company need it?',
    excerpt: 'A clear guide to customer evidence, competitor intelligence and decision support.',
    minutes: '7 min', updated: '2026-10-01',
    intro: 'Market research is a structured way to understand a market, the people in it and the forces that affect demand. It can help an organization replace assumptions with evidence before investing in a product, entering a market or changing its offer.',
    sections: [
      { heading: 'What market research examines', paragraphs: ['A study may examine customer needs, buying behaviour, awareness, satisfaction, price expectations, competitors, distribution, market barriers or demand for a new offer. The scope depends on the decision, not on a fixed checklist.'] },
      { heading: 'When to commission a study', bullets: ['Before launching a product or service.', 'When customer acquisition or retention changes and the reasons are unclear.', 'Before entering a new geography or customer segment.', 'When testing a new price, message, channel or proposition.', 'When leadership needs evidence to compare strategic options.'] },
      { heading: 'Primary and secondary research', paragraphs: ['Primary research collects information for the current question through surveys, interviews, observation, experiments or other planned methods. Secondary research reviews information already collected, such as public statistics, industry reports, company records and published studies.', 'Many projects use both. Secondary research can establish context and sharpen the primary questions; primary research can then address gaps that existing sources cannot answer.'] },
      { heading: 'From findings to action', paragraphs: ['A useful report does more than describe respondents. It connects evidence to the business question, explains the strength and limits of the evidence and identifies implications for the decision-maker.', 'Research cannot remove all uncertainty or guarantee commercial success. It can make assumptions visible, test important questions and help teams understand the risks behind a decision.'] }
    ],
    takeaway: 'Commission market research when a decision depends on information you do not yet have, and define in advance what evidence would change the decision.'
  },
  {
    slug: 'quantitative-vs-qualitative-research',
    category: 'Data & Analysis',
    title: 'Quantitative vs qualitative research: what is the difference?',
    excerpt: 'Understand what each approach can answer, where they fit and when combining them makes sense.',
    minutes: '6 min', updated: '2026-10-01',
    intro: 'Quantitative and qualitative research answer different kinds of questions. The distinction is not simply numbers versus words; it is about the purpose of the study, the evidence collected and the claims that the design can support.',
    sections: [
      { heading: 'Quantitative research', paragraphs: ['Quantitative research uses structured measurements and numerical data to estimate amounts, describe distributions, compare groups or examine relationships. Common approaches include surveys with closed questions, experiments and analysis of structured records.', 'Its strengths include consistency, comparison and summarization. Limitations can include weak measurement, non-response, sampling error and the risk of reducing complex experiences to narrow response options.'] },
      { heading: 'Qualitative research', paragraphs: ['Qualitative research explores meaning, context, experiences and processes through methods such as interviews, focus groups, observation and document analysis. Analysis looks for patterns, themes, explanations and differences across accounts.', 'It can uncover issues that were not anticipated when a study began. However, qualitative findings from a small or purposively selected group should not automatically be interpreted as prevalence estimates for a larger population.'] },
      { heading: 'How to choose', bullets: ['Choose quantitative methods when the priority is measuring how much, how often or how groups differ.', 'Choose qualitative methods when the priority is understanding how, why or what an experience means.', 'Consider mixed methods when you need both a broad pattern and a deeper explanation.'] },
      { heading: 'A practical example', paragraphs: ['Imagine a service has low satisfaction scores. A structured survey may show which parts of the service receive the lowest ratings and whether ratings differ across user groups. Follow-up interviews may help explain the reasons behind those ratings and reveal problems the survey did not anticipate.'] }
    ],
    takeaway: 'Choose the approach that fits the question and the claims you need to make. Mixed methods can add value when the two forms of evidence answer connected parts of the same problem.'
  },
  {
    slug: 'develop-strong-research-objectives',
    category: 'Academic Research',
    title: 'How to develop strong research objectives',
    excerpt: 'Move from a research problem to specific objectives that guide methods and analysis.',
    minutes: '5 min', updated: '2026-10-01',
    intro: 'Research objectives describe what a study intends to accomplish. Clear objectives help align the problem statement, research questions, methodology, data collection and analysis so that each part of a proposal serves the same purpose.',
    sections: [
      { heading: 'Start with the problem', paragraphs: ['First describe the issue, the context and the knowledge gap the study will address. An objective should respond to that gap rather than introduce a new topic that the problem statement has not justified.'] },
      { heading: 'Write one clear general objective', paragraphs: ['The general objective expresses the overall purpose of the study. It should be broad enough to represent the study as a whole but specific enough to identify the main issue, population or setting where relevant.'] },
      { heading: 'Break the purpose into specific objectives', paragraphs: ['Specific objectives divide the main purpose into manageable areas of inquiry. Each should address one meaningful part of the problem and collectively cover the scope of the study.', 'Use precise verbs such as estimate, assess, compare, describe, explore, determine or examine. Choose a verb that reflects what the design can actually support.'] },
      { heading: 'Check alignment and feasibility', bullets: ['Can each objective be answered with the planned data?', 'Does each objective map to a research question or analytical task?', 'Are the population, setting and key concepts clear?', 'Can the objective be addressed within the available time, access and budget?', 'Does the analysis plan explain how the objective will be answered?'] },
      { heading: 'Avoid common problems', paragraphs: ['Objectives become difficult to use when they contain several unrelated tasks, rely on vague verbs such as “know about,” promise causal conclusions from a design that cannot support them or include variables that are never measured.', 'Review the full chain from problem statement to objective, question, variable or topic, method and analysis. If one link is missing, revise the objective or the plan.'] }
    ],
    takeaway: 'A strong objective is clear, relevant to the research problem, feasible to answer and visibly connected to the study’s data and analysis.'
  },
  {
    slug: 'probability-and-non-probability-sampling',
    category: 'Sampling',
    title: 'Probability and non-probability sampling methods explained',
    excerpt: 'How researchers choose participants and what each sampling approach means for interpretation.',
    minutes: '9 min', updated: '2026-10-01',
    intro: 'Sampling is the process of selecting units from a population for a study. The sampling method affects who can be represented by the findings, how uncertainty can be estimated and how transparently the results should be interpreted.',
    sections: [
      { heading: 'Probability sampling', paragraphs: ['In probability sampling, each eligible unit has a known, non-zero chance of selection under the design. Common approaches include simple random, systematic, stratified and cluster sampling.', 'When implemented well, probability sampling supports design-based estimates of sampling uncertainty and can support population estimates. It still requires attention to coverage, non-response, measurement and weighting.'] },
      { heading: 'Non-probability sampling', paragraphs: ['Non-probability approaches select units without known selection probabilities. Examples include convenience, purposive, quota and snowball sampling.', 'These methods may be useful when a complete sampling frame is unavailable, a study seeks specific experiences or access is constrained. However, results should not be presented as statistically representative of a wider population without a defensible basis for that claim.'] },
      { heading: 'Common methods at a glance', bullets: ['Simple random: select units randomly from a defined sampling frame.', 'Systematic: select every k-th unit after a random start, while checking for periodic patterns in the list.', 'Stratified: divide the population into relevant strata and sample within each.', 'Cluster: select groups or clusters, then sample units within selected clusters as specified.', 'Purposive: deliberately recruit participants with characteristics or experience relevant to the research question.', 'Convenience: recruit accessible participants, acknowledging the limits this places on generalization.'] },
      { heading: 'Document the sampling plan', paragraphs: ['Define the target population, eligibility criteria, sampling frame, selection procedure, intended sample size and approach to non-response. Explain why the method fits the question and what its limitations mean for interpretation.', 'A larger sample does not automatically correct selection bias. Sample size, selection method, measurement quality and response patterns are separate considerations.'] }
    ],
    takeaway: 'Choose a sampling method based on the research question, population access and the kind of inference you need to make. Describe the selection process clearly so readers can judge the evidence.'
  },
  {
    slug: 'what-is-a-cross-sectional-study',
    category: 'Health Research',
    title: 'What is a cross-sectional study?',
    excerpt: 'A practical guide to cross-sectional designs, uses, strengths and limitations.',
    minutes: '7 min', updated: '2026-10-01',
    intro: 'A cross-sectional study collects information about a population or sample at a defined point or period. Researchers often use this design to describe characteristics, estimate prevalence or examine associations between variables.',
    sections: [
      { heading: 'How the design works', paragraphs: ['Researchers define the population, select a sample, measure relevant variables and analyze the data from that study period. Data may come from questionnaires, interviews, examinations, records or other sources.', 'Because exposure and outcome information are often measured at the same time, it can be difficult to establish which came first.'] },
      { heading: 'When it is useful', bullets: ['Estimating the prevalence of a condition or behaviour in a defined population.', 'Describing knowledge, attitudes, practices or service use.', 'Examining associations that can guide further research.', 'Providing baseline information for planning or programme development.'] },
      { heading: 'Strengths and limitations', paragraphs: ['Cross-sectional studies can be relatively quick and practical compared with follow-up designs, and they can measure several variables in one study. Their usefulness depends on sampling, measurement quality and a clearly defined reference period.', 'They are generally limited for establishing temporal sequence and causal effects. Prevalence may also be affected by duration and survival, and non-response or selection issues can distort estimates.'] },
      { heading: 'Plan and report carefully', paragraphs: ['Specify the study population, setting, data-collection period, eligibility criteria, sampling method, sample-size rationale, measurement tools and analysis plan. Explain missing data and potential sources of bias.', 'Use language that matches the design. An observed association may be important, but it does not by itself demonstrate that one variable caused another.'] }
    ],
    takeaway: 'A cross-sectional study can provide a useful snapshot of a defined population. Strong reporting makes the population, timing, sampling, measurements and limits of inference explicit.'
  }
];

export function getStaticPaths() {
  return { paths: articles.map((article) => ({ params: { slug: article.slug } })), fallback: false };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);
  return { props: { article: article ?? null } };
}

export default function ResearchArticle({ article }: { article: Article | null }) {
  if (!article) return null;
  return (
    <>
      <Head>
        <title>{article.title} | Let’s Research</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:type" content="article" />\n        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt, datePublished: article.updated, dateModified: article.updated, author: { "@type": "Organization", name: "Let’s Research" }, publisher: { "@type": "Organization", name: "Let’s Research" } }) }} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="article:published_time" content={article.updated} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="site-shell">
        <header className="topbar">
          <Link href="/" className="brand"><span className="brand-mark">LR</span><span>LET’S RESEARCH</span></Link>
          <nav className="nav-links"><Link href="/services">Capabilities</Link><Link href="/blog">Research Library</Link><Link href="/contact">Contact</Link><Link href="/start" className="nav-cta">Start research <ArrowRight size={15} /></Link></nav>
        </header>
        <main className="inner-page lr-article-page">
          <Link href="/blog" className="back-link"><ArrowLeft size={15} /> Back to Research Library</Link>
          <article className="lr-article">
            <div className="lr-article-kicker">{article.category} <span>·</span> {article.minutes} read</div>
            <h1>{article.title}</h1>
            <p className="lr-article-deck">{article.intro}</p>
            <div className="lr-article-rule"><span>LET’S RESEARCH</span><span>FIELD NOTES / {article.updated}</span></div>
            {article.sections.map((section) => (
              <section key={section.heading} className="lr-article-section">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <aside className="lr-article-takeaway"><span>THE KEY TAKEAWAY</span><p>{article.takeaway}</p></aside>
            <div className="lr-article-cta"><div><span>HAVE A RESEARCH QUESTION?</span><h2>Let’s shape the right study.</h2></div><Link href="/start" className="button button-primary">Start a research brief <ArrowRight size={16} /></Link></div>
          </article>
          <div className="lr-article-more"><span>KEEP EXPLORING</span><Link href="/blog">Browse the Research Library <ArrowRight size={15} /></Link></div>
        </main>
      </div>
    </>
  );
}
