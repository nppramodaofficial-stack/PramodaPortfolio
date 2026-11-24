import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Atom, BrainCircuit, ChevronRight,
  Github, Mail, Menu, Network, Orbit, ShieldCheck, Sparkles, X,
  Activity, Scale, Waves, Fingerprint, GraduationCap
} from 'lucide-react'
import './styles.css'

const email = 'nppramodaofficial@gmail.com'
const github = 'https://github.com/nppramodaofficial-stack/'
const trustworthyRepo = 'https://github.com/nppramodaofficial-stack/TrustworthyAI'

const pillars = [
  {
    id: 'reliability',
    number: '01',
    title: 'Prediction reliability',
    short: 'When data is imperfect, can we trust the prediction?',
    icon: ShieldCheck,
    color: 'blue',
    question: 'How do noise and distribution shifts change what a model learns?',
    methods: ['Label-noise modelling', 'Robust learning', 'Calibration', 'Generalisation'],
    work: 'Judicial Judgment Prediction Under Data Corruption',
    description: 'Investigating random and feature-dependent label noise in legal judgment prediction, and how corruption affects predictive performance, model generalisation and the reliability of downstream explanations.',
    details: [
      'Compare random and feature-dependent label corruption in legal-domain prediction models.',
      'Study how noisy examples influence learned decision rules and introduce spurious feature dependencies.',
      'Evaluate prediction quality, probability calibration and noise-mitigation strategies.'
    ]
  },
  {
    id: 'interpretability',
    number: '02',
    title: 'Interpretability & explanation stability',
    short: 'Do explanations remain meaningful when models or data change?',
    icon: Sparkles,
    color: 'violet',
    question: 'Can we understand not only a model’s output, but also the stability of its reasoning?',
    methods: ['GAMs', 'Falling Rule Lists', 'SENN', 'CEN', 'SHAP', 'LIME', 'Integrated Gradients'],
    work: 'TrustworthyAI — Interpretable ML Framework',
    description: 'Developing a modular Python framework to study inherently interpretable models and post-hoc explanation methods, with an emphasis on explanation behaviour and the trade-offs between transparency and predictive performance.',
    details: [
      'Implement interpretable models including Generalized Additive Models, Falling Rule Lists, Self-Explaining Neural Networks and Concept Embedding Networks.',
      'Explore SHAP, LIME, Integrated Gradients and counterfactual explanations.',
      'Build reusable components for comparing model transparency and explanation behaviour.'
    ],
    link: trustworthyRepo
  },
  {
    id: 'uncertainty',
    number: '03',
    title: 'Probabilistic modelling & uncertainty',
    short: 'How confident should a model be in what it predicts?',
    icon: Orbit,
    color: 'cyan',
    question: 'How can predictive systems represent uncertainty instead of returning only a point estimate?',
    methods: ['Bayesian inference', 'DeepAR', 'MCMC', 'PyMC', 'Bayesian Networks', 'Probabilistic forecasting'],
    work: 'Uncertainty-Aware Remaining Useful Life Prediction',
    description: 'Developed a hybrid remaining-useful-life prediction approach combining DeepAR-based probabilistic forecasting with gradient boosting on the NASA CMAPSS dataset.',
    details: [
      'Engineered degradation-aware temporal features, rolling statistics, variance measures and higher-order derivatives.',
      'Integrated predictive uncertainty into the forecasting pipeline.',
      'Achieved a reported mean absolute error of approximately 6 cycles on held-out test data.'
    ]
  },
  {
    id: 'causality',
    number: '04',
    title: 'Causal reasoning',
    short: 'Can we move beyond association to reason about causes?',
    icon: Network,
    color: 'amber',
    question: 'What changes when confounding and causal structure are made explicit?',
    methods: ['Causal DAGs', 'DoWhy', 'Backdoor adjustment', 'Bayesian Logistic Regression', 'NUTS sampling'],
    work: 'Probabilistic and Causal Analysis of Employee Burnout',
    description: 'Built a probabilistic and causal analysis pipeline combining classical and Bayesian modelling to investigate the relationship between sleep duration and employee burnout risk.',
    details: [
      'Combined Logistic Regression, Bayesian Logistic Regression, Bayesian Networks and MCMC-based inference.',
      'Estimated posterior distributions using PyMC and NUTS sampling.',
      'Constructed causal DAGs and applied backdoor adjustment to account for potential confounding.'
    ]
  }
]

const education = [
  { degree: 'M.Sc. Data Science', institution: 'Vellore Institute of Technology', place: 'Vellore, India', date: 'JUL 2026 — MAY 2028', status: 'IN PROGRESS' },
  { degree: 'B.Sc. Computer Science and Statistics', institution: 'St. Joseph’s University', place: 'Bengaluru, India', date: 'JUL 2023 — JUN 2026', score: '8.68 / 10 CGPA' }
]

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('reliability')
  const [expanded, setExpanded] = useState(false)
  const selected = pillars.find(p => p.id === active)
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">P.</span><span>PRAMODA N. P.</span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        {[['About','#about'],['Trustworthy AI','#trustworthy-ai'],['Experience','#experience']].map(([label,href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <Reveal><div className="availability"><span className="pulse-dot"/> TRUSTWORTHY AI · STATISTICS · MACHINE LEARNING</div></Reveal>
          <Reveal delay={0.08}><h1>Making machine learning more <span className="gradient-text">trustworthy.</span></h1></Reveal>
          <Reveal delay={0.16}><p className="hero-intro">I’m <strong>Pramoda N. P.</strong>, an M.Sc. Data Science student at VIT Vellore and Research Intern at C-FAIR. My work explores how data imperfections, uncertainty and model explanations shape the reliability of intelligent systems.</p></Reveal>
          <Reveal delay={0.22}><div className="hero-actions"><a className="button button-primary" href="#trustworthy-ai">Explore my research <ArrowRight size={16}/></a><a className="button button-ghost" href="/pramoda-cv.pdf" target="_blank" rel="noreferrer">View CV <ArrowUpRight size={16}/></a></div></Reveal>
          <Reveal delay={0.28}><div className="hero-socials"><a href={github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a><a href={`mailto:${email}`}><Mail size={16}/> Email <ArrowUpRight size={12}/></a><span className="social-divider"/><span>Vellore, India</span></div></Reveal>
        </div>
        <Reveal delay={0.18} className="hero-visual-wrap">
          <div className="hero-visual trust-visual">
            <div className="visual-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
            <div className="core-glow"><ShieldCheck size={54} strokeWidth={1.1}/></div>
            <div className="visual-node node-a"><Activity size={16}/><span>Reliability</span></div>
            <div className="visual-node node-b"><Orbit size={16}/><span>Uncertainty</span></div>
            <div className="visual-node node-c"><Sparkles size={16}/><span>Explanations</span></div>
            <div className="visual-caption"><span>A RESEARCH LENS ON</span><strong>Trustworthy AI</strong></div>
            <div className="visual-index">RELIABILITY / REASONING / TRUST</div>
          </div>
        </Reveal>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-grid">
          <Reveal><div className="section-heading"><div className="eyebrow"><span className="eyebrow-line"/> ABOUT</div><h2>Research begins with asking <span className="gradient-text">better questions.</span></h2><p>Computer Science and Statistics shape how I think about intelligent systems.</p></div></Reveal>
          <Reveal delay={0.1}><div className="about-copy">
            <p>My academic background in Computer Science and Statistics has shaped my approach to machine learning: beyond predictive accuracy, I care about how models behave, what they rely on and how dependable their outputs are.</p>
            <p>I am currently a Research Intern at the Center for AI Research (C-FAIR), VIT, working on Trustworthy AI. My interests include interpretable machine learning, probabilistic modelling, uncertainty quantification, robust learning and causal machine learning.</p>
            <p>I enjoy moving between theory and implementation — studying methods, designing experiments and building tools that make research ideas tangible.</p>
            <div className="about-note"><Sparkles size={17}/><span>The question that guides my work: <strong>What would make us justified in trusting a model?</strong></span></div>
          </div></Reveal>
        </div>
        <div className="about-credentials">
          {education.map((e,i)=><div className="credential" key={e.degree}><div className="credential-icon"><GraduationCap size={18}/></div><div><span>{e.date}</span><strong>{e.degree}</strong><p>{e.institution} · {e.place}</p>{e.score && <em>{e.score}</em>}{e.status && <em>{e.status}</em>}</div></div>)}
        </div>
      </section>

      <section className="section-wrap trust-section" id="trustworthy-ai">
        <Reveal><div className="section-heading trust-heading"><div className="eyebrow"><span className="eyebrow-line"/> THE RESEARCH SPACE</div><h2>One umbrella. <span className="gradient-text">Four connected questions.</span></h2><p>I see Trustworthy AI as a connected research space: reliable predictions, understandable behaviour, calibrated uncertainty and sound causal reasoning all contribute to systems we can evaluate and trust.</p></div></Reveal>

        <div className="trust-explorer">
          <Reveal className="trust-map-wrap">
            <div className="trust-map">
              <div className="map-ring ring-one"/><div className="map-ring ring-two"/><div className="map-ring ring-three"/>
              <div className="map-center"><ShieldCheck size={30}/><strong>TRUSTWORTHY<br/>AI</strong><span>RESEARCH MAP</span></div>
              {pillars.map((p,i)=>{const Icon=p.icon;return <button key={p.id} className={`map-node map-node-${i+1} ${active===p.id?'map-node-active':''}`} onClick={()=>{setActive(p.id);setExpanded(false)}} aria-label={`Explore ${p.title}`}><Icon size={18}/><span>{p.number}</span></button>})}
              <span className="map-label map-label-a">RELIABILITY</span><span className="map-label map-label-b">INTERPRETABILITY</span><span className="map-label map-label-c">UNCERTAINTY</span><span className="map-label map-label-d">CAUSALITY</span>
            </div>
            <p className="map-hint"><span className="pulse-dot"/> SELECT A NODE TO EXPLORE A RESEARCH THREAD</p>
          </Reveal>

          <Reveal delay={0.1} className="pillar-panel-wrap">
            <AnimatePresence mode="wait">
              <motion.article key={selected.id} className={`pillar-panel pillar-${selected.color}`} initial={{opacity:0,x:14}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-10}} transition={{duration:.22}}>
                <div className="pillar-kicker"><span>{selected.number} / RESEARCH PILLAR</span><span className="pillar-live">EXPLORE</span></div>
                <div className="pillar-title-row"><div className="pillar-icon"><selected.icon size={23}/></div><h3>{selected.title}</h3></div>
                <p className="pillar-question">{selected.question}</p>
                <div className="pillar-divider"/>
                <span className="pillar-label">CONNECTED PROJECT</span>
                <h4>{selected.work}</h4>
                <p className="pillar-description">{selected.description}</p>
                <div className="pillar-methods">{selected.methods.map(m=><span key={m}>{m}</span>)}</div>
                <button className="text-action pillar-expand" onClick={()=>setExpanded(!expanded)}>{expanded?'Hide research notes':'View research notes'} <ChevronRight className={expanded?'rotate-right':''} size={15}/></button>
                <AnimatePresence>{expanded&&<motion.ul className="pillar-details" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}>{selected.details.map(d=><li key={d}>{d}</li>)}</motion.ul>}</AnimatePresence>
                {selected.link&&<a className="pillar-repo" href={selected.link} target="_blank" rel="noreferrer"><Github size={14}/> Explore the framework on GitHub <ArrowUpRight size={13}/></a>}
              </motion.article>
            </AnimatePresence>
          </Reveal>
        </div>

        <Reveal><div className="research-principles">
          <div><span>01</span><strong>Question the data</strong><p>Understand the limits and imperfections of the evidence.</p></div>
          <div><span>02</span><strong>Examine the model</strong><p>Study its behaviour, assumptions and explanations.</p></div>
          <div><span>03</span><strong>Quantify uncertainty</strong><p>Communicate what is known — and what is not.</p></div>
          <div><span>04</span><strong>Evaluate with care</strong><p>Test reliability, not just headline performance.</p></div>
        </div></Reveal>
      </section>

      <section className="section-wrap experience-section" id="experience">
        <Reveal><div className="section-heading"><div className="eyebrow"><span className="eyebrow-line"/> RESEARCH EXPERIENCE</div><h2>Where I’ve <span className="gradient-text">worked.</span></h2><p>Research roles that have shaped the questions I explore and the way I approach machine learning.</p></div></Reveal>
        <div className="experience-list">
          <Reveal><article className="experience-card">
            <div className="experience-period">JUL 2026 — PRESENT</div>
            <div className="experience-marker"><span/></div>
            <div className="experience-body">
              <div className="experience-role">RESEARCH INTERN <span className="experience-current">CURRENT</span></div>
              <h3>Center for AI Research (C-FAIR), VIT</h3>
              <p className="experience-place">Vellore, India</p>
              <ul>
                <li>Working under the Director of C-FAIR on Trustworthy AI, focusing on prediction reliability, robustness, interpretability and uncertainty-aware machine learning.</li>
                <li>Investigating data noise in judicial judgment prediction using legal-domain transformer models and the Indian Legal Documents Corpus (ILDC).</li>
                <li>Designing comparative experiments between standard fine-tuning and robust-learning approaches, evaluating prediction quality, uncertainty estimation and probability calibration.</li>
                <li>Evaluating explanation reliability using Integrated Gradients and SHAP, alongside attribution overlap, comprehensiveness and sufficiency.</li>
              </ul>
            </div>
          </article></Reveal>
          <Reveal delay={0.08}><article className="experience-card">
            <div className="experience-period">2024 — 2026</div>
            <div className="experience-marker"><span/></div>
            <div className="experience-body">
              <div className="experience-role">RESEARCH INTERN</div>
              <h3>St. Joseph’s University</h3>
              <p className="experience-place">Bengaluru, India</p>
              <ul>
                <li>Worked on adversarial deepfake detection using Textural Adversarial Hybrid Networks (TAHN), exploring texture-based feature extraction and adversarial learning.</li>
                <li>Studied adversarial examples involving textual modifications and image perturbations.</li>
                <li>Explored blockchain consensus mechanisms for decentralised validation and tamper-resistant logging of detection outcomes.</li>
              </ul>
            </div>
          </article></Reveal>
        </div>
      </section>

      <section className="section-wrap approach-section">
        <Reveal><div className="approach-panel"><div><div className="eyebrow"><span className="eyebrow-line"/> HOW I APPROACH RESEARCH</div><h2>From statistical foundations to <span className="gradient-text">reliable systems.</span></h2></div><div className="approach-copy"><p>My toolkit spans Python and R, machine learning libraries, probabilistic programming and causal inference. I use these tools to formulate experiments, analyse model behaviour and examine the evidence behind predictions.</p><div className="toolkit-groups"><div><span>LANGUAGES & COMPUTATION</span><p>Python · R · SQL · NumPy · Pandas · Scikit-learn · PyTorch · TensorFlow</p></div><div><span>TRUSTWORTHY ML METHODS</span><p>SHAP · LIME · Integrated Gradients · GAMs · Falling Rule Lists · SENN · CEN</p></div><div><span>PROBABILISTIC & CAUSAL METHODS</span><p>Bayesian Networks · MCMC · PyMC · ArviZ · DoWhy · Causal DAGs</p></div></div></div></div></Reveal>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb orb-left"/><div className="contact-orb orb-right"/>
        <div className="section-wrap contact-inner"><Reveal><div className="eyebrow"><span className="eyebrow-line"/> OPEN TO RESEARCH CONVERSATIONS</div><h2>Let’s make AI more <span className="gradient-text">trustworthy.</span></h2><p>I’d be glad to connect with researchers, students and teams exploring interpretable, robust and probabilistic machine learning.</p><a className="button button-primary contact-button" href={`mailto:${email}?subject=Research%20conversation`}>Start a conversation <Mail size={16}/></a><div className="contact-links"><a href={`mailto:${email}`}><Mail size={16}/>{email}</a><a href={github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub <ArrowUpRight size={12}/></a></div></Reveal></div>
      </section>
    </main>
    <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">P.</span><span>PRAMODA N. P.</span></a><span>A focused portfolio on Trustworthy AI.</span><span>© {new Date().getFullYear()} Pramoda N. P.</span></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
