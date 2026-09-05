/**
 * Aishika Das — Asian Heritage Glassmorphism UI/UX Developer Portfolio Script
 * Palette: #3368A0 (Deep Ocean Blue), #66A3BF (Slate Blue), #C8DFDB (Seafoam), #F2EFE7 (Warm Canvas)
 * Typography: Cormorant Garamond + Outfit | Asian Artisan Iconography
 */

const projectsData = [
  {
    id: "hr-dashboard",
    title: "Enterprise HR Analytics Dashboard",
    category: "enterprise",
    categoryLabel: "Enterprise SaaS",
    desc: "A scalable enterprise workforce analytics and payroll dashboard adhering strictly to Material Design principles, component-based tokens, and dense data visualizations in Figma.",
    tags: ["Figma", "Material Design 3", "Enterprise UX", "Design Systems"],
    metrics: [
      { number: "42%", label: "Task Speed Increase" },
      { number: "100%", label: "Material 3 Compliance" },
      { number: "35k+", label: "Active Daily Users" }
    ],
    problem: "Enterprise HR managers faced fragmented systems for tracking workforce distribution, compliance, and payroll approval queues, creating operational bottlenecks.",
    solution: "Architected a unified component-based design system in Figma with auto-layout tokens, multi-tier filters, and contextual alert drawers for seamless employee management.",
    process: "Conducted stakeholder interviews, mapped end-to-end payroll approval user journeys, designed low-fidelity wireframes, established Material 3 token variables, and built high-fidelity interactive prototypes in Figma.",
    deliverables: ["Atomic Design System Library", "Interactive Figma Prototype", "Responsive Desktop & Tablet Layouts", "WCAG 2.2 AA Accessibility Spec"]
  },
  {
    id: "clinic-healthcare",
    title: "Clinic & Healthcare Portal Interface",
    category: "enterprise",
    categoryLabel: "Healthcare Tech",
    desc: "Patient-doctor scheduling, electronic health records (EHR), and telemetry tracking interface designed for quick clinical decision-making and low cognitive fatigue.",
    tags: ["Healthcare UX", "Information Architecture", "Figma", "User Flows"],
    metrics: [
      { number: "65%", label: "Faster Triage Onboarding" },
      { number: "0.2s", label: "Clinical Lookup Time" },
      { number: "98%", label: "Practitioner Usability" }
    ],
    problem: "Doctors and clinic desk staff were overwhelmed by cluttered legacy medical software with confusing navigation, leading to delayed triage.",
    solution: "Restructured the core information architecture into three streamlined workflows: Quick Triage, Patient Timeline, and Diagnostic Records with prominent emergency callouts.",
    process: "Analyzed clinical touchpoints in high-stress emergency settings, designed modular vital cards with high-contrast color tokens, and validated layouts through task-based usability testing.",
    deliverables: ["Clinical User Journey Maps", "High-Contrast EHR Views", "Interactive ProtoPie Prototype", "Design Handoff Specifications"]
  },
  {
    id: "wf-to-df",
    title: "Workflow to Data Flow (WF → DF) Transformation",
    category: "enterprise",
    categoryLabel: "Systems Design",
    desc: "A strategic digital transformation initiative converting static, human-step business workflows into automated, reactive data-flow pipelines.",
    tags: ["Workflow Analysis", "Data Flow Design", "System Architecture", "Enterprise UX"],
    metrics: [
      { number: "78%", label: "Automated Data Processing" },
      { number: "3.5x", label: "Pipeline Velocity Gain" },
      { number: "0", label: "Data Loss in Migration" }
    ],
    problem: "Legacy operations relied on manual spreadsheet handoffs and static paperwork flowcharts, creating data silos and making real-time tracking impossible.",
    solution: "Designed visual data pipeline blueprints, state machines, and interface nodes that allow stakeholders to inspect real-time data transformations instead of manual checkpoints.",
    process: "Audited existing manual approval loops, mapped state transitions into reactive data streams, and created visual telemetry dashboard components.",
    deliverables: ["WF to DF Mapping Matrix", "State Transition Diagrams", "Real-time Telemetry UI", "Process Transformation Documentation"]
  },
  {
    id: "ai-prompt-engineering",
    title: "AI Research & NotebookLM Knowledge Base",
    category: "enterprise",
    categoryLabel: "AI & Knowledge Systems",
    desc: "Structured prompt frameworks for Gemini and curated NotebookLM knowledge architectures enabling executive decision extraction and enterprise research acceleration.",
    tags: ["Google Gemini", "NotebookLM", "Context Engineering", "Prompt Design"],
    metrics: [
      { number: "5x", label: "Research Synthesis Speed" },
      { number: "94%", label: "Doc Extraction Accuracy" },
      { number: "12+", label: "Knowledge Bases Built" }
    ],
    problem: "Cross-functional teams struggled to extract actionable intelligence from hundreds of dense PDFs, market reports, and internal policy documents.",
    solution: "Formulated multi-shot prompt schemas, chain-of-thought instructions, and indexed NotebookLM knowledge graphs with custom source groundings for instant semantic search.",
    process: "Created structured context templates for Gemini, curated domain-specific reference corpora in NotebookLM, and benchmarked output factual accuracy.",
    deliverables: ["Enterprise Prompt Playbook", "NotebookLM Source Architecture", "Evaluation Benchmarks", "Team Training Guides"]
  },
  {
    id: "real-estate-web",
    title: "PrimeSpaces — Real Estate Platform",
    category: "personal",
    categoryLabel: "Personal Project",
    desc: "A modern property discovery platform featuring neighborhood map filters, 3D tour previews, and interactive mortgage calculations.",
    tags: ["UI/UX Design", "Figma", "Responsive Web", "Visual Hierarchy"],
    metrics: [
      { number: "4.9/5", label: "User Preference Rating" },
      { number: "8+", label: "Responsive Breakpoints" },
      { number: "100%", label: "Custom Component Kit" }
    ],
    problem: "Real estate websites often overwhelm buyers with disorganized filters, low-resolution media, and clunky calculation forms.",
    solution: "Engineered a card-based visual discovery UI with dual list/map split view, sticky price calculators, and seamless direct agent booking.",
    process: "Conducted competitive benchmarking, built modular property card components with micro-interactions, and tested mobile search usability.",
    deliverables: ["Full Figma Design System", "High-Fidelity Desktop & Mobile Prototypes", "Custom Property Card Micro-Interactions"]
  },
  {
    id: "fitness-gym-web",
    title: "PulseFit — Gym & Membership Portal",
    category: "personal",
    categoryLabel: "Personal Project",
    desc: "High-energy fitness app and gym membership portal with dynamic workout tracking, trainer scheduling, and community leaderboard interactions.",
    tags: ["Visual Design", "Gamification UX", "Figma", "Mobile-First"],
    metrics: [
      { number: "52%", label: "Booking Conversion Boost" },
      { number: "15+", label: "Micro-animations" },
      { number: "Adaptive", label: "Tonal UI Themes" }
    ],
    problem: "Gym members found tracking class schedules and coach availability cumbersome on generic booking platforms.",
    solution: "Crafted a vibrant visual design with interactive calendar widgets, streak tracking badges, and one-tap spot reservations.",
    process: "Created user personas for casual gym-goers vs. athletes, designed quick-booking modal flows, and defined motion design guidelines.",
    deliverables: ["Figma Community File", "Motion UI Specifications", "Trainer Dashboard Screen Flow"]
  },
  {
    id: "job-portal-web",
    title: "TalentGrid — Next-Gen Job Portal",
    category: "personal",
    categoryLabel: "Personal Project",
    desc: "Recruitment platform connecting designers and engineers with tech startups via skill-verified portfolio showcases.",
    tags: ["Information Architecture", "Figma", "User Research", "Wireframing"],
    metrics: [
      { number: "3-Step", label: "Rapid Application Flow" },
      { number: "89%", label: "Applicant Satisfaction" },
      { number: "25+", label: "Modular UI Widgets" }
    ],
    problem: "Job seekers often face exhausting 10-page application funnels with no transparency on recruiter review status.",
    solution: "Designed a transparent 'Pipeline Tracker' UI and modular 3-step application flow with instant skill-match score previews.",
    process: "Mapped applicant friction points, created wireframes for candidate profile builder, and optimized recruiter review interfaces.",
    deliverables: ["Candidate Journey Mapping", "Recruiter Review Interface", "Design System UI Kit"]
  },
  {
    id: "coffee-ecommerce",
    title: "Aura Roast — Specialty Coffee Experience",
    category: "personal",
    categoryLabel: "Personal Project",
    desc: "Sensory-driven e-commerce experience for specialty coffee lovers, featuring bean roast flavor profiles, subscription builders, and brewing guides.",
    tags: ["E-Commerce UX", "Figma", "Color Theory", "Typography"],
    metrics: [
      { number: "38%", label: "Average Order Value Boost" },
      { number: "4.8★", label: "Checkout Usability Score" },
      { number: "12+", label: "Flavor Profile Radar Sets" }
    ],
    problem: "Online coffee buyers struggle to gauge aroma, acidity, and roast levels through plain thumbnail grids.",
    solution: "Created an interactive 'Flavor Wheel' selector and customizable recurring subscription box builder with warm, artisanal aesthetics.",
    process: "Researched sensory e-commerce patterns, designed visual flavor radar cards, and simplified the multi-step checkout funnel.",
    deliverables: ["Visual Identity & Moodboard", "Figma E-Commerce Prototype", "Checkout Flow Optimization Wireframes"]
  }
];

// --- Glassmorphic Vector Mockups in Blue Palette ---
function getGlassMockupSVG(id) {
  const deep = "#3368a0";
  const slate = "#66a3bf";
  const seafoam = "#c8dfdb";

  const svgs = {
    "hr-dashboard": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glassGrad1" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
            <stop stop-color="#3368a0" stop-opacity="0.15"/>
            <stop offset="1" stop-color="#66a3bf" stop-opacity="0.25"/>
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#glassGrad1)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.78)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <rect x="20" y="20" width="360" height="34" rx="14" fill="${deep}"/>
        <circle cx="36" cy="37" r="4" fill="#ffffff" fill-opacity="0.8"/>
        <circle cx="48" cy="37" r="4" fill="#ffffff" fill-opacity="0.8"/>
        <circle cx="60" cy="37" r="4" fill="#ffffff" fill-opacity="0.8"/>
        <rect x="80" y="32" width="90" height="10" rx="5" fill="#ffffff" fill-opacity="0.95"/>
        <rect x="20" y="54" width="65" height="146" fill="rgba(200,223,219,0.3)" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
        <rect x="30" y="68" width="45" height="6" rx="3" fill="${deep}"/>
        <rect x="30" y="82" width="45" height="6" rx="3" fill="${slate}"/>
        <rect x="30" y="96" width="45" height="6" rx="3" fill="${slate}"/>
        <rect x="95" y="66" width="85" height="42" rx="8" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,1)" stroke-width="1"/>
        <rect x="105" y="74" width="40" height="6" rx="2" fill="${deep}"/>
        <rect x="105" y="85" width="55" height="14" rx="3" fill="${deep}"/>
        <rect x="190" y="66" width="85" height="42" rx="8" fill="rgba(200,223,219,0.5)" stroke="rgba(255,255,255,1)" stroke-width="1"/>
        <rect x="200" y="74" width="40" height="6" rx="2" fill="${slate}"/>
        <rect x="200" y="85" width="55" height="14" rx="3" fill="${slate}"/>
        <rect x="285" y="66" width="85" height="42" rx="8" fill="rgba(51,104,160,0.15)" stroke="rgba(51,104,160,0.35)" stroke-width="1"/>
        <rect x="295" y="74" width="40" height="6" rx="2" fill="${deep}"/>
        <rect x="295" y="85" width="55" height="14" rx="3" fill="${deep}"/>
        <rect x="95" y="118" width="275" height="72" rx="10" fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,1)" stroke-width="1"/>
        <path d="M110 170 L150 148 L195 158 L240 135 L290 148 L345 130" stroke="${deep}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="240" cy="135" r="5" fill="${slate}" stroke="#ffffff" stroke-width="2"/>
        <circle cx="345" cy="130" r="5" fill="${deep}" stroke="#ffffff" stroke-width="2"/>
      </svg>`,
    "clinic-healthcare": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="rgba(200,223,219,0.25)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <rect x="35" y="35" width="38" height="38" rx="10" fill="rgba(200,223,219,0.7)" stroke="rgba(255,255,255,1)" stroke-width="1"/>
        <path d="M54 43 V65 M43 54 H65" stroke="${deep}" stroke-width="3" stroke-linecap="round"/>
        <rect x="85" y="42" width="130" height="10" rx="5" fill="${deep}"/>
        <rect x="85" y="58" width="90" height="6" rx="3" fill="${slate}"/>
        <rect x="35" y="82" width="330" height="50" rx="10" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,1)" stroke-width="1"/>
        <path d="M45 107 H110 L120 92 L130 120 L140 98 L150 107 H230 L240 90 L250 122 L260 100 L270 107 H355" stroke="${deep}" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="35" y="142" width="102" height="46" rx="8" fill="rgba(200,223,219,0.5)" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>
        <rect x="45" y="152" width="60" height="8" rx="2" fill="${deep}"/>
        <rect x="148" y="142" width="102" height="46" rx="8" fill="rgba(200,223,219,0.5)" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>
        <rect x="158" y="152" width="60" height="8" rx="2" fill="${deep}"/>
        <rect x="261" y="142" width="104" height="46" rx="8" fill="rgba(51,104,160,0.15)" stroke="rgba(51,104,160,0.4)" stroke-width="1"/>
        <rect x="271" y="152" width="60" height="8" rx="2" fill="${deep}"/>
      </svg>`,
    "wf-to-df": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="rgba(102,163,191,0.2)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <rect x="45" y="82" width="75" height="56" rx="10" fill="rgba(200,223,219,0.6)" stroke="${slate}" stroke-width="1.5"/>
        <text x="58" y="115" fill="${deep}" font-size="11" font-weight="bold" font-family="sans-serif">INGEST</text>
        <path d="M125 110 H165" stroke="${slate}" stroke-width="2" stroke-dasharray="3 3"/>
        <polygon points="168,110 162,106 162,114" fill="${slate}"/>
        <rect x="170" y="70" width="85" height="80" rx="12" fill="${deep}" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
        <circle cx="212" cy="98" r="14" fill="${seafoam}"/>
        <text x="182" y="130" fill="#ffffff" font-size="10" font-weight="bold" font-family="sans-serif">PIPELINE</text>
        <path d="M260 110 H300" stroke="${slate}" stroke-width="2"/>
        <polygon points="303,110 297,106 297,114" fill="${slate}"/>
        <rect x="305" y="82" width="70" height="56" rx="10" fill="rgba(200,223,219,0.6)" stroke="${slate}" stroke-width="1.5"/>
        <text x="318" y="115" fill="${deep}" font-size="11" font-weight="bold" font-family="sans-serif">FLOW</text>
      </svg>`,
    "ai-prompt-engineering": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="rgba(51,104,160,0.15)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <circle cx="200" cy="95" r="32" fill="rgba(200,223,219,0.7)" stroke="${deep}" stroke-width="1.5"/>
        <circle cx="200" cy="95" r="14" fill="${deep}"/>
        <circle cx="105" cy="75" r="18" fill="rgba(255,255,255,0.9)" stroke="${slate}" stroke-width="1.5"/>
        <circle cx="295" cy="75" r="18" fill="rgba(255,255,255,0.9)" stroke="${slate}" stroke-width="1.5"/>
        <circle cx="135" cy="150" r="16" fill="rgba(255,255,255,0.9)" stroke="${slate}" stroke-width="1.5"/>
        <circle cx="265" cy="150" r="16" fill="rgba(255,255,255,0.9)" stroke="${slate}" stroke-width="1.5"/>
        <path d="M120 82 L172 90 M280 82 L228 90 M148 140 L185 115 M252 140 L215 115" stroke="${slate}" stroke-width="1.5"/>
        <rect x="120" y="175" width="160" height="8" rx="4" fill="${deep}" fill-opacity="0.3"/>
      </svg>`,
    "real-estate-web": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="rgba(200,223,219,0.25)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <polygon points="200,45 110,105 290,105" stroke="${deep}" stroke-width="2" fill="rgba(200,223,219,0.5)"/>
        <rect x="130" y="105" width="140" height="70" stroke="${deep}" stroke-width="2" fill="rgba(255,255,255,0.9)"/>
        <rect x="150" y="120" width="28" height="28" rx="4" fill="${slate}" fill-opacity="0.4"/>
        <rect x="195" y="125" width="35" height="50" rx="4" fill="${deep}"/>
        <circle cx="275" cy="65" r="14" fill="${seafoam}"/>
      </svg>`,
    "fitness-gym-web": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="rgba(102,163,191,0.2)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <circle cx="95" cy="100" r="28" fill="rgba(200,223,219,0.6)" stroke="${deep}" stroke-width="1.5"/>
        <path d="M135 110 H175 L190 65 L210 145 L225 95 L240 115 H325" stroke="${deep}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="45" y="158" width="90" height="22" rx="11" fill="${deep}"/>
        <rect x="145" y="158" width="80" height="22" rx="11" fill="rgba(200,223,219,0.7)"/>
        <rect x="235" y="158" width="95" height="22" rx="11" fill="rgba(200,223,219,0.7)"/>
      </svg>`,
    "job-portal-web": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="rgba(51,104,160,0.15)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <rect x="45" y="45" width="140" height="55" rx="8" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,1)" stroke-width="1"/>
        <circle cx="70" cy="72" r="12" fill="${deep}"/>
        <rect x="95" y="64" width="70" height="6" rx="2" fill="${deep}"/>
        <rect x="95" y="75" width="45" height="4" rx="2" fill="${slate}"/>
        <rect x="200" y="45" width="140" height="55" rx="8" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,1)" stroke-width="1"/>
        <circle cx="225" cy="72" r="12" fill="${slate}"/>
        <rect x="250" y="64" width="70" height="6" rx="2" fill="${deep}"/>
        <rect x="250" y="75" width="45" height="4" rx="2" fill="${slate}"/>
        <rect x="45" y="120" width="295" height="50" rx="10" fill="${deep}"/>
        <text x="65" y="150" fill="#ffffff" font-size="12" font-weight="bold" font-family="sans-serif">96% Skill Compatibility Match</text>
        <rect x="240" y="132" width="88" height="26" rx="6" fill="${seafoam}"/>
        <text x="254" y="148" fill="${deep}" font-size="10" font-weight="bold" font-family="sans-serif">Apply Now</text>
      </svg>`,
    "coffee-ecommerce": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="rgba(200,223,219,0.25)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <ellipse cx="200" cy="148" rx="55" ry="10" fill="rgba(200,223,219,0.7)"/>
        <path d="M165 98 C165 138 235 138 235 98 Z" fill="${deep}"/>
        <path d="M235 104 C248 104 248 124 235 124" stroke="${deep}" stroke-width="2.5" fill="none"/>
        <path d="M185 80 Q190 68 185 55 M200 80 Q205 65 200 52 M215 80 Q220 68 215 55" stroke="${slate}" stroke-width="2" stroke-linecap="round"/>
        <rect x="75" y="175" width="250" height="6" rx="3" fill="rgba(200,223,219,0.7)"/>
      </svg>`
  };
  return svgs[id] || svgs["hr-dashboard"];
}

// --- Render Projects with Asian Emblems & Staggered Scroll Reveal ---
function renderProjects(filter = "all") {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  const filtered = filter === "all"
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map((p, idx) => `
    <article class="glass-project-card reveal-on-scroll reveal-stagger-${(idx % 4) + 1}" data-id="${p.id}" tabindex="0" role="button" aria-label="View case study for ${p.title}">
      <div class="project-preview-frame">
        <span class="project-pill-glass">
          <span class="asian-icon" style="width:12px;height:12px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </span>
          ${p.categoryLabel}
        </span>
        ${getGlassMockupSVG(p.id)}
      </div>
      <div class="project-card-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.desc}</p>
        <div class="project-tags-list">
          ${p.tags.map(t => `<span class="glass-tag">${t}</span>`).join('')}
        </div>
        <div class="project-card-footer">
          <span>Read Full Case Study</span>
          <span class="asian-icon" style="width:16px;height:16px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }

  initScrollReveal();

  document.querySelectorAll(".glass-project-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openProjectModal(id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = card.getAttribute("data-id");
        openProjectModal(id);
      }
    });
  });
}

// --- Case Study Modal ---
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modalBody = document.getElementById("modalDynamicBody");
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <span class="badge-glass" style="margin-bottom:0.75rem; color:var(--c-deep-blue); font-family:var(--font-heading);">
        <span class="asian-icon" style="width:13px;height:13px;margin-right:0.35rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </span>
        ${project.categoryLabel}
      </span>
      <h2 style="font-size:clamp(1.6rem, 3.5vw, 2.2rem); margin-bottom:0.75rem; font-family:var(--font-heading);">${project.title}</h2>
      <p style="font-size:1.02rem; color:var(--text-body); line-height:1.72;">${project.desc}</p>
    </div>

    <!-- Metrics Row -->
    <div style="margin-bottom:2rem;">
      <h4 style="font-size:0.92rem; text-transform:uppercase; letter-spacing:0.08em; font-family:var(--font-heading); color:var(--c-deep-blue); margin-bottom:0.75rem;">Key Results & Impact</h4>
      <div class="metrics-glass-row">
        ${project.metrics.map(m => `
          <div class="metric-card-glass">
            <div style="font-size:1.6rem; font-weight:800; font-family:var(--font-heading); color:var(--c-deep-blue);">${m.number}</div>
            <div style="font-size:0.78rem; font-weight:600; color:var(--text-muted); font-family:var(--font-heading);">${m.label}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Problem & Solution Grid -->
    <div style="display:grid; grid-template-columns:1fr; gap:1.25rem; margin-bottom:2rem;">
      <div class="ds-panel-glass">
        <h4 style="font-size:1.1rem; margin-bottom:0.5rem; color:var(--text-main); font-family:var(--font-heading);">The Challenge</h4>
        <p style="font-size:0.95rem; color:var(--text-body); line-height:1.68;">${project.problem}</p>
      </div>

      <div class="ds-panel-glass">
        <h4 style="font-size:1.1rem; margin-bottom:0.5rem; color:var(--c-deep-blue); font-family:var(--font-heading);">The Solution</h4>
        <p style="font-size:0.95rem; color:var(--text-body); line-height:1.68;">${project.solution}</p>
      </div>
    </div>

    <!-- Process -->
    <div style="margin-bottom:2rem;">
      <h4 style="font-size:1.1rem; margin-bottom:0.5rem; font-family:var(--font-heading);">Design & Research Methodology</h4>
      <p style="font-size:0.95rem; color:var(--text-body); line-height:1.68;">${project.process}</p>
    </div>

    <!-- Deliverables -->
    <div style="margin-bottom:2rem;">
      <h4 style="font-size:0.92rem; text-transform:uppercase; letter-spacing:0.08em; font-family:var(--font-heading); color:var(--c-deep-blue); margin-bottom:0.75rem;">Core Deliverables</h4>
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
        ${project.deliverables.map(d => `<span class="badge-glass" style="background:var(--glass-surface-subtle);">${d}</span>`).join('')}
      </div>
    </div>

    <div style="display:flex; justify-content:flex-end; gap:0.75rem; padding-top:1rem; border-top:1px solid var(--glass-border-subtle);">
      <button class="btn btn-glass btn-sm" onclick="closeModal()">Close</button>
      <a href="#contact" class="btn btn-primary btn-sm" onclick="closeModal()">Discuss Project</a>
    </div>
  `;

  const modal = document.getElementById("projectModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// --- Theme Switcher (Navbar Button + Interactive Lantern) ---
function updateThemeTooltips(theme) {
  const tooltips = document.querySelectorAll(".lantern-tooltip");
  tooltips.forEach(tt => {
    tt.innerHTML = `
      <span class="asian-icon" style="width:13px;height:13px;color:var(--c-deep-blue);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      </span>
      <span>${theme === "light" ? "Light up" : "Dim lantern"}</span>
    `;
  });
}

function setTheme(nextTheme) {
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("aishika_theme", nextTheme);
  updateThemeTooltips(nextTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
}

function initTheme() {
  const savedTheme = localStorage.getItem("aishika_theme") || "light";
  setTheme(savedTheme);

  // 1. Navbar Theme Toggle Button
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (window.scatterLanternFireflies) {
        window.scatterLanternFireflies(0.8);
      }
      toggleTheme();
    });
  }

  // 2. Interactive Lantern Pods (Clicking the lantern toggles theme / dims off)
  const lanternStage = document.querySelector(".lanterns-depth-stage");
  if (lanternStage) {
    const lanternPods = lanternStage.querySelectorAll(".lantern-pod");
    lanternPods.forEach(pod => {
      pod.setAttribute("tabindex", "0");
      pod.setAttribute("role", "button");
      pod.setAttribute("aria-label", "Toggle light and dark mode by lighting the lantern");

      pod.addEventListener("click", (e) => {
        e.stopPropagation();
        if (window.scatterLanternFireflies) {
          window.scatterLanternFireflies(0.8);
        }
        toggleTheme();
      });

      pod.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (window.scatterLanternFireflies) {
            window.scatterLanternFireflies(0.8);
          }
          toggleTheme();
        }
      });
    });
  }
}

// --- Silky Smooth Momentum Scroll ---
let activeScrollAnimationId = null;

function smoothScrollToTarget(targetY, duration = 850) {
  if (activeScrollAnimationId) {
    cancelAnimationFrame(activeScrollAnimationId);
  }

  const startY = window.pageYOffset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    return;
  }

  let startTime = null;

  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuart(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (elapsed < duration) {
      activeScrollAnimationId = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      activeScrollAnimationId = null;
    }
  }

  activeScrollAnimationId = requestAnimationFrame(step);
}

function initNavigation() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      const iconMenu = menuBtn.querySelector(".icon-menu");
      const iconClose = menuBtn.querySelector(".icon-close");
      if (iconMenu && iconClose) {
        iconMenu.style.display = isOpen ? "none" : "block";
        iconClose.style.display = isOpen ? "block" : "none";
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        const iconMenu = menuBtn.querySelector(".icon-menu");
        const iconClose = menuBtn.querySelector(".icon-close");
        if (iconMenu && iconClose) {
          iconMenu.style.display = "block";
          iconClose.style.display = "none";
        }
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 74;
        const targetPos = Math.max(0, targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight);
        smoothScrollToTarget(targetPos, 800);
      }
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "-80px 0px -40% 0px"
  });

  sections.forEach(sec => spyObserver.observe(sec));
}

// --- Scroll Reveal Engine ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".section-head, .experience-glass-box, .ds-glass-box, .skills-category-glass, .edu-card-glass, .contact-glass-card, .reveal-on-scroll"
  );

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => {
    el.classList.add("reveal-on-scroll");
    revealObserver.observe(el);
  });
}

// --- Filter Tabs ---
function initFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-tab-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filterVal = btn.getAttribute("data-filter");
      renderProjects(filterVal);
    });
  });
}

// --- 1-Click Clipboard Copy Toast ---
function copyContactInfo(text, msg = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  }).catch(() => {
    showToast(text);
  });
}

function showToast(message) {
  const existing = document.querySelector(".toast-glass");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-glass";
  toast.innerHTML = `<span style="display:flex;align-items:center;gap:0.5rem;"><span class="asian-icon" style="color:var(--c-deep-blue);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="9 12 11 14 15 10"/></svg></span> ${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 400);
  }, 2400);
}

// --- Click outside modal to close ---
window.addEventListener("click", (e) => {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeModal();
  }
});

// ==========================================================================
// REALISTIC LANTERN SILK FIREFLIES (AUTHENTIC FLIGHT & PHYSICAL PARALLAX LOCK)
// - Fireflies are physically anchored inside lantern pods, guaranteeing 100%
//   perfect parallax synchronization with zero latency or detachment.
// - Real Firefly Physics: Buoyant floating, intermittent wing-flap hops,
//   natural steering, landing & perching on silk folds.
// - Authentic Blinking: Intermittent dark pause -> warm radiant glow pulse ->
//   soft fade, with bright flashes during wing-flap bursts.
// - Interactive Reactions: Burst scatter on lantern clicks, scroll startle.
// ==========================================================================

function initLanternSilkFireflies() {
  const stage = document.querySelector(".lanterns-depth-stage");
  if (!stage) return;

  const podPrimary = stage.querySelector(".lantern-pod.pod-primary");
  const podMid = stage.querySelector(".lantern-pod.pod-midground");
  const podBg = stage.querySelector(".lantern-pod.pod-background");

  if (!podPrimary || !podMid || !podBg) return;

  // Configuration for 8 unique, individual fireflies placed strictly on the lantern silk & fixtures
  const fireflyConfigs = [
    {
      pod: podPrimary,
      type: "amber",
      name: "Primary Silk Sitter",
      perchSpots: [
        { x: 48, y: 162 }, // Upper left blue silk
        { x: 82, y: 162 }  // Upper right blue silk
      ],
      homeSpot: { x: 65, y: 185 },
      blinkInterval: 170,
      scale: 1.05
    },
    {
      pod: podPrimary,
      type: "seafoam",
      name: "Primary Flame Flutterer",
      perchSpots: [
        { x: 65, y: 185 }, // Center waist flame line
        { x: 50, y: 215 }  // Lower left slate silk
      ],
      homeSpot: { x: 65, y: 185 },
      blinkInterval: 150,
      scale: 0.96
    },
    {
      pod: podPrimary,
      type: "amber",
      name: "Primary Tassel Sparkler",
      perchSpots: [
        { x: 65, y: 252 }, // Bottom tassel collar
        { x: 80, y: 215 }  // Lower right slate silk
      ],
      homeSpot: { x: 65, y: 252 },
      blinkInterval: 180,
      scale: 1.02
    },
    {
      pod: podPrimary,
      type: "seafoam",
      name: "Primary Lantern Crest",
      perchSpots: [
        { x: 65, y: 125 }, // Top cap mount
        { x: 65, y: 150 }  // Upper silk center
      ],
      homeSpot: { x: 65, y: 125 },
      blinkInterval: 160,
      scale: 0.92
    },
    {
      pod: podMid,
      type: "seafoam",
      name: "Midground Explorer",
      perchSpots: [
        { x: 44, y: 120 }, // Midground upper blue silk
        { x: 60, y: 120 }  // Midground upper right
      ],
      homeSpot: { x: 52, y: 140 },
      blinkInterval: 190,
      scale: 0.94
    },
    {
      pod: podMid,
      type: "amber",
      name: "Midground Silk Gleamer",
      perchSpots: [
        { x: 52, y: 140 }, // Midground center waist
        { x: 46, y: 165 }, // Midground lower silk
        { x: 52, y: 190 }  // Midground tassel collar
      ],
      homeSpot: { x: 52, y: 140 },
      blinkInterval: 175,
      scale: 0.90
    },
    {
      pod: podBg,
      type: "amber",
      name: "Background High Flutterer",
      perchSpots: [
        { x: 40, y: 80 },  // Background top cap
        { x: 35, y: 105 }  // Background upper silk
      ],
      homeSpot: { x: 40, y: 125 },
      blinkInterval: 210,
      scale: 0.88
    },
    {
      pod: podBg,
      type: "seafoam",
      name: "Background Distant Spark",
      perchSpots: [
        { x: 40, y: 125 }, // Background center waist
        { x: 44, y: 150 }  // Background lower rim
      ],
      homeSpot: { x: 40, y: 125 },
      blinkInterval: 200,
      scale: 0.82
    }
  ];

  class RealLanternFirefly {
    constructor(cfg, index) {
      this.cfg = cfg;
      this.index = index;
      this.state = "perched"; // Strictly perched on the lantern by default

      // Create DOM elements inside host
      let host = cfg.pod.querySelector(".lantern-firefly-host");
      if (!host) {
        host = document.createElement("div");
        host.className = "lantern-firefly-host";
        cfg.pod.appendChild(host);
      }

      this.el = document.createElement("div");
      this.el.className = `silk-firefly ${cfg.type}`;
      this.el.innerHTML = `<div class="firefly-glow-aura"></div><div class="firefly-core-spark"></div>`;
      host.appendChild(this.el);

      // Spot assignment strictly on lantern coordinates
      this.spotIndex = index % cfg.perchSpots.length;
      const initialSpot = cfg.perchSpots[this.spotIndex];
      this.x = initialSpot.x;
      this.y = initialSpot.y;
      this.vx = 0;
      this.vy = 0;

      // 8 Completely Distinct Individual Flutter Personalities (Ultra-Slow, Hypnotic Floating Insects)
      const personalities = [
        { type: "glider", speed: 0.12, turnRate: 0.015, wingFreq: 0.4, wingAmpX: 0.002, wingAmpY: 0.004, timeRate: 0.005 },
        { type: "sparkle-wander", speed: 0.18, turnRate: 0.045, wingFreq: 0.8, wingAmpX: 0.004, wingAmpY: 0.004, timeRate: 0.008 },
        { type: "spiral", speed: 0.14, turnRate: 0.022, wingFreq: 0.5, timeRate: 0.006 },
        { type: "hover-bob", speed: 0.13, turnRate: 0.025, wingFreq: 0.6, hoverCycle: 160, timeRate: 0.005 },
        { type: "climber", speed: 0.14, turnRate: 0.018, wingFreq: 0.5, climbBias: -0.003, timeRate: 0.005 },
        { type: "zigzag", speed: 0.16, turnRate: 0.035, wingFreq: 0.7, sweepInterval: 80, timeRate: 0.007 },
        { type: "deep-float", speed: 0.10, turnRate: 0.010, wingFreq: 0.3, wingAmpX: 0.001, wingAmpY: 0.002, timeRate: 0.004 },
        { type: "burst-glide", speed: 0.16, turnRate: 0.030, wingFreq: 0.75, burstCycle: 130, timeRate: 0.006 }
      ];

      this.persona = personalities[index % personalities.length];
      this.time = Math.random() * 1000 + index * 123.45; // De-synchronized phase offset
      this.timeRate = this.persona.timeRate;
      this.wanderAngle = Math.random() * Math.PI * 2;
      this.hoverRadius = 240 + (index % 4) * 60 + Math.random() * 50; // Expansive open-air flight perimeter (240px - 450px far from lantern)

      // Independent behavioral state timers
      this.subTimer = Math.floor(Math.random() * 100);
      this.isSubPaused = false;
      this.zigzagDir = (index % 2 === 0) ? 1 : -1;
      this.startleTimer = 0;

      // Organic glowing pulse
      this.blinkTimer = Math.floor(Math.random() * cfg.blinkInterval);
      this.flashProgress = 1.0;
      this.isFlashing = false;
      this.currentAlpha = 0;
    }

    triggerFlash(speed = 0.02) {
      this.isFlashing = true;
      this.flashProgress = 0;
      this.flashRate = speed;
    }

    // Scared / Startled Reaction: Fly & scatter far away from the lantern into wide ambient space
    scatter(force = 0.8) {
      this.state = "startled";
      // Sustained outward escape flight duration (~2.0s - 2.8s)
      this.startleTimer = 120 + Math.random() * 50;

      // Radial escape vector pointing outward from the lantern center
      const dx = this.x - this.cfg.homeSpot.x;
      const dy = this.y - this.cfg.homeSpot.y;
      let baseAngle = Math.atan2(dy, dx);

      if (Math.abs(dx) < 10) {
        const side = (this.index % 2 === 0) ? 1 : -1;
        baseAngle = (side * (0.7 + Math.random() * 0.6)) - Math.PI * 0.35;
      }

      // Disperse widely outward in all directions
      const angleVariance = (this.persona.type === "sparkle-wander" ? 1.1 : 0.8);
      const angle = baseAngle + (Math.random() - 0.5) * angleVariance;
      // Gentle outward escape velocity that carries them 180px - 340px far away
      const speed = (this.persona.speed * 4.4) + Math.random() * 0.22;

      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;

      this.triggerFlash(0.04);
    }

    initiateLanding() {
      if (this.state === "flutter" || this.state === "startled") {
        this.state = "landing";
        this.spotIndex = Math.floor(Math.random() * this.cfg.perchSpots.length);
      }
    }

    update() {
      // Independent de-synchronized internal clock
      this.time += this.timeRate;
      this.subTimer++;

      // 1. Organic Blinking Cycle (individualized per personality)
      this.blinkTimer++;
      if (this.blinkTimer >= this.cfg.blinkInterval + (Math.sin(this.time) * 30)) {
        this.blinkTimer = 0;
        const flashSpd = this.persona.type === "sparkle-wander" ? 0.022 : 0.014;
        this.triggerFlash(flashSpd);
      }

      let flashAlpha = 0;
      if (this.isFlashing) {
        this.flashProgress += this.flashRate || 0.018;
        if (this.flashProgress >= 1.0) {
          this.isFlashing = false;
          this.flashProgress = 1.0;
        } else {
          flashAlpha = Math.pow(Math.sin(this.flashProgress * Math.PI), 1.5);
        }
      }

      const baseAlpha = this.state === "perched" ? 0.32 : 0.50;
      this.currentAlpha = Math.min(1.0, baseAlpha + flashAlpha * 0.72);

      const spot = this.cfg.perchSpots[this.spotIndex % this.cfg.perchSpots.length];

      // 2. Realistic Scared & Flight Lifecycle with Far Outward Dispersion
      if (this.state === "startled") {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.988; // Gentle damping allows fireflies to travel far out (180px - 340px)
        this.vy *= 0.988;
        this.startleTimer--;

        if (this.startleTimer <= 0) {
          this.state = "flutter";
          this.wanderAngle = Math.atan2(this.vy, this.vx);
        }
      } else if (this.state === "flutter") {
        // --- Personality-Driven Individual Flight Motion in Spacious Outer Airspace ---
        const p = this.persona;
        let accelX = 0;
        let accelY = 0;

        if (p.type === "glider") {
          // Personality 0: Slow, wide, majestic drifting curves
          this.wanderAngle += Math.sin(this.time * 0.8) * p.turnRate;
          accelX = Math.cos(this.wanderAngle) * 0.003;
          accelY = Math.sin(this.wanderAngle) * 0.0025 + Math.sin(this.time * p.wingFreq) * p.wingAmpY;

        } else if (p.type === "sparkle-wander") {
          // Personality 1: Curious, delicate wandering
          if (this.subTimer % 28 === 0) {
            this.wanderAngle += (Math.random() - 0.5) * p.turnRate * 2.0;
          }
          accelX = Math.cos(this.wanderAngle) * 0.006 + (Math.random() - 0.5) * p.wingAmpX;
          accelY = Math.sin(this.wanderAngle) * 0.005 + Math.sin(this.time * p.wingFreq * 2.0) * p.wingAmpY;

        } else if (p.type === "spiral") {
          // Personality 2: Circular orbital swirling & graceful loops
          this.wanderAngle += p.turnRate * 0.8;
          const spiralX = Math.cos(this.time * 1.5) * 0.004;
          const spiralY = Math.sin(this.time * 1.5) * 0.004;
          accelX = Math.cos(this.wanderAngle) * 0.004 + spiralX;
          accelY = Math.sin(this.wanderAngle) * 0.004 + spiralY;

        } else if (p.type === "hover-bob") {
          // Personality 3: Curious pauses & gentle vertical hover-bobbing
          if (this.subTimer % p.hoverCycle < 55) {
            // Hover in place with gentle vertical bob
            accelX = 0;
            accelY = Math.sin(this.time * p.wingFreq * 2.5) * 0.004;
          } else {
            // Drift to next pocket
            this.wanderAngle += (Math.random() - 0.5) * p.turnRate;
            accelX = Math.cos(this.wanderAngle) * 0.004;
            accelY = Math.sin(this.wanderAngle) * 0.0035 + Math.sin(this.time * p.wingFreq) * 0.003;
          }

        } else if (p.type === "climber") {
          // Personality 4: Upward thermal floater (warm rising air)
          this.wanderAngle += (Math.random() - 0.5) * p.turnRate;
          accelX = Math.cos(this.wanderAngle) * 0.004;
          accelY = Math.sin(this.wanderAngle) * 0.003 + p.climbBias + Math.sin(this.time * p.wingFreq) * 0.003;

        } else if (p.type === "zigzag") {
          // Personality 5: Crisp, alternating diagonal sweeping
          if (this.subTimer % p.sweepInterval === 0) {
            this.zigzagDir *= -1;
            this.wanderAngle += this.zigzagDir * 0.65;
          }
          accelX = Math.cos(this.wanderAngle) * 0.005;
          accelY = Math.sin(this.wanderAngle) * 0.004 + Math.sin(this.time * p.wingFreq) * 0.003;

        } else if (p.type === "deep-float") {
          // Personality 6: Deep, slow, hypnotic ambient drifting
          this.wanderAngle += Math.cos(this.time * 0.5) * p.turnRate;
          accelX = Math.cos(this.wanderAngle) * 0.002 + Math.cos(this.time * p.wingFreq) * p.wingAmpX;
          accelY = Math.sin(this.wanderAngle) * 0.0018 + Math.sin(this.time * p.wingFreq) * p.wingAmpY;

        } else if (p.type === "burst-glide") {
          // Personality 7: Flutter-burst followed by still glide
          const isBurst = (this.subTimer % p.burstCycle) < 45;
          if (isBurst) {
            this.wanderAngle += (Math.random() - 0.5) * p.turnRate * 1.2;
            accelX = Math.cos(this.wanderAngle) * 0.006;
            accelY = Math.sin(this.wanderAngle) * 0.005 + Math.sin(this.time * p.wingFreq * 1.5) * 0.004;
          } else {
            // Smooth glide
            accelX = Math.cos(this.wanderAngle) * 0.002;
            accelY = Math.sin(this.wanderAngle) * 0.0015;
          }
        }

        this.vx += accelX;
        this.vy += accelY;
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Wide outer airspace boundary (keeps them floating in the expansive sky around the lantern)
        const distFromCenter = Math.hypot(this.x - this.cfg.homeSpot.x, this.y - this.cfg.homeSpot.y);
        if (distFromCenter > this.hoverRadius) {
          const steerAngle = Math.atan2(this.cfg.homeSpot.y - this.y, this.cfg.homeSpot.x - this.x);
          this.vx += Math.cos(steerAngle) * 0.005;
          this.vy += Math.sin(steerAngle) * 0.005;
        }

        // Limit cruising speed strictly based on this firefly's personality
        const spd = Math.hypot(this.vx, this.vy);
        if (spd > p.speed) {
          this.vx = (this.vx / spd) * p.speed;
          this.vy = (this.vy / spd) * p.speed;
        }

        this.x += this.vx;
        this.y += this.vy;

      } else if (this.state === "landing") {
        // Individualized graceful ultra-slow homing glide from far away back to silk spot
        const dx = spot.x - this.x;
        const dy = spot.y - this.y;
        const dist = Math.hypot(dx, dy);

        const homingAngle = Math.atan2(dy, dx);
        this.wanderAngle += (Math.random() - 0.5) * (this.persona.turnRate || 0.05);

        const wingVibeY = Math.sin(this.time * this.persona.wingFreq * 1.5) * 0.003;
        const wingVibeX = Math.cos(this.time * this.persona.wingFreq * 1.2) * 0.002;

        this.vx += Math.cos(homingAngle) * 0.005 + Math.cos(this.wanderAngle) * 0.002 + wingVibeX;
        this.vy += Math.sin(homingAngle) * 0.0045 + Math.sin(this.wanderAngle) * 0.002 + wingVibeY;
        this.vx *= 0.98;
        this.vy *= 0.98;

        const maxLandingSpeed = dist > 40 ? (this.persona.speed * 0.9) : Math.max(0.04, dist * 0.006);
        const spd = Math.hypot(this.vx, this.vy);
        if (spd > maxLandingSpeed) {
          this.vx = (this.vx / spd) * maxLandingSpeed;
          this.vy = (this.vy / spd) * maxLandingSpeed;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (dist < 1.0) {
          this.state = "perched";
          this.x = spot.x;
          this.y = spot.y;
          this.vx = 0;
          this.vy = 0;

          const allPerched = fireflies.every(f => f.state === "perched");
          if (allPerched) {
            isFlockInFlight = false;
          }
        }
      } else if (this.state === "perched") {
        // Strictly anchored to the lantern silk position (swaying with host)
        this.x = spot.x;
        this.y = spot.y;
        this.vx = 0;
        this.vy = 0;
      }
    }

    render() {
      this.el.style.opacity = this.currentAlpha.toFixed(3);
      const scale = this.cfg.scale * (1.0 + (this.isFlashing ? 0.32 : 0));
      this.el.style.transform = `translate3d(${this.x.toFixed(1)}px, ${this.y.toFixed(1)}px, 0) scale(${scale.toFixed(2)})`;
    }
  }

  const fireflies = fireflyConfigs.map((cfg, idx) => new RealLanternFirefly(cfg, idx));

  // --- Natural Flock Startle, Hover & Organic Clustered Return Engine ---
  let isFlockInFlight = false;
  let isUserCurrentlyScrolling = false;
  let isUserHoveringLantern = false;
  let scrollIdleTimer = null;
  let hoverIdleTimer = null;

  // Startle ALL fireflies into flight (ONLY if currently perched on the lantern)
  function triggerFlockScatter(force = 0.8) {
    const perchedFireflies = fireflies.filter(f => f.state === "perched");
    // If no fireflies are sitting on the lantern, do nothing
    if (perchedFireflies.length === 0) return;

    isFlockInFlight = true;

    perchedFireflies.forEach((f, idx) => {
      // Natural organic launch stagger across gentle micro-waves
      const wave = idx % 3;
      const stagger = wave * 60 + Math.random() * 40;
      setTimeout(() => {
        if (f.state === "perched") {
          f.scatter(force);
        }
      }, stagger);
    });
  }

  // When scrolling stops, unhovered, or after dimming: return naturally in slow, organic clusters
  function scheduleFlockReturn() {
    const indices = [0, 1, 2, 3, 4, 5, 6, 7].sort(() => Math.random() - 0.5);

    indices.forEach((fIdx, rank) => {
      const f = fireflies[fIdx];
      let delayMs = 600;
      if (rank < 3) {
        // First small cluster begins lazy homing after ~0.6s - 1.4s
        delayMs = 600 + Math.random() * 800;
      } else if (rank < 6) {
        // Second cluster wanders a bit longer and begins homing after ~2.0s - 3.2s
        delayMs = 2000 + Math.random() * 1200;
      } else {
        // Last 2 fireflies take a scenic slow loop and return after ~3.8s - 5.2s
        delayMs = 3800 + Math.random() * 1400;
      }

      setTimeout(() => {
        if (!isUserCurrentlyScrolling && !isUserHoveringLantern && (f.state === "flutter" || f.state === "startled")) {
          f.initiateLanding();
        }
      }, delayMs);
    });
  }

  // --- Hover Interaction: Hovering on lantern scatters fireflies far into the air ---
  function handleLanternHoverEnter() {
    isUserHoveringLantern = true;
    clearTimeout(hoverIdleTimer);
    clearTimeout(scrollIdleTimer);

    const hasPerched = fireflies.some(f => f.state === "perched");
    if (hasPerched) {
      triggerFlockScatter(0.8);
    }
  }

  function handleLanternHoverLeave() {
    isUserHoveringLantern = false;
    clearTimeout(hoverIdleTimer);
    hoverIdleTimer = setTimeout(() => {
      if (!isUserCurrentlyScrolling && !isUserHoveringLantern) {
        scheduleFlockReturn();
      }
    }, 2200);
  }

  stage.addEventListener("mouseenter", handleLanternHoverEnter);
  stage.addEventListener("mouseleave", handleLanternHoverLeave);

  const lanternPods = stage.querySelectorAll(".lantern-pod");
  lanternPods.forEach(pod => {
    pod.addEventListener("mouseenter", handleLanternHoverEnter);
    pod.addEventListener("mouseleave", handleLanternHoverLeave);
  });

  // Global scatter trigger (called on lantern click / dimming off / theme toggle)
  window.scatterLanternFireflies = function (force = 0.8) {
    const hasPerched = fireflies.some(f => f.state === "perched");
    if (!hasPerched) return; // Strictly check if fireflies are on the lantern!

    isUserCurrentlyScrolling = true;
    triggerFlockScatter(force);
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer = setTimeout(() => {
      isUserCurrentlyScrolling = false;
      if (!isUserHoveringLantern) {
        scheduleFlockReturn();
      }
    }, 2200);
  };

  // Direct click trigger on lantern stage
  stage.addEventListener("click", () => {
    window.scatterLanternFireflies(0.8);
  });

  // Scroll listener: Checks if fireflies are on the lantern, then only on first scroll they scatter away
  let lastScrollPos = window.pageYOffset || document.documentElement.scrollTop || 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;
    const delta = Math.abs(currentScroll - lastScrollPos);
    lastScrollPos = currentScroll;

    if (delta > 1.2) {
      const hasPerched = fireflies.some(f => f.state === "perched");

      // Strictly trigger only if fireflies are on the lantern and this is the start of scrolling
      if (hasPerched && !isUserCurrentlyScrolling) {
        isUserCurrentlyScrolling = true;
        triggerFlockScatter(0.8);
      } else if (isFlockInFlight) {
        isUserCurrentlyScrolling = true;
      }

      clearTimeout(scrollIdleTimer);
      // When scroll stops for 2.2 seconds:
      scrollIdleTimer = setTimeout(() => {
        isUserCurrentlyScrolling = false;
        if (!isUserHoveringLantern) {
          scheduleFlockReturn();
        }
      }, 2200);
    }
  }, { passive: true });

  // Dedicated 60fps update loop (active & sparkling in both Light and Dark modes)
  function tick() {
    fireflies.forEach(f => {
      f.update();
      f.render();
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

// ==========================================================================
// AMBIENT BACKGROUND FIREFLIES (DARK MODE SKY PARTICLES)
// ==========================================================================

function initRoamingFireflies() {
  const canvas = document.getElementById("firefliesCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: -1000, y: -1000 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const ambientCount = 3;
  const ambientFireflies = [];

  class AmbientSpeck {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = initial ? Math.random() * width : (Math.random() < 0.5 ? -10 : width + 10);
      this.y = Math.random() * height;
      this.radius = 0.5 + Math.random() * 0.3;
      this.baseSpeed = 0.025 + Math.random() * 0.035;
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = (Math.random() - 0.5) * 0.002;
      this.vx = Math.cos(this.angle) * this.baseSpeed;
      this.vy = Math.sin(this.angle) * this.baseSpeed;
      this.blinkSpeed = 0.006 + Math.random() * 0.006;
      this.blinkPhase = Math.random() * Math.PI * 2;
    }

    update() {
      this.angle += (Math.random() - 0.5) * 0.008 + this.angleSpeed;
      this.vx += Math.cos(this.angle) * 0.0015;
      this.vy += Math.sin(this.angle) * 0.0015;
      this.vx *= 0.995;
      this.vy *= 0.995;

      const spd = Math.hypot(this.vx, this.vy);
      if (spd > 0.09) {
        this.vx = (this.vx / spd) * 0.09;
        this.vy = (this.vy / spd) * 0.09;
      }

      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 90 && dist > 0) {
        const force = (1 - dist / 90) * 0.12;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }

      this.x += this.vx;
      this.y += this.vy;

      if (this.x < -20) this.x = width + 15;
      if (this.x > width + 20) this.x = -15;
      if (this.y < -20) this.y = height + 15;
      if (this.y > height + 20) this.y = -15;

      this.blinkPhase += this.blinkSpeed;
    }

    draw() {
      ctx.save();
      const rawWave = Math.sin(this.blinkPhase);
      const blink = Math.pow(Math.max(0, rawWave), 2.0);
      const alpha = Math.max(0.05, Math.min(1, 0.06 + blink * 0.85));

      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2.8);
      grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.9})`);
      grad.addColorStop(0.4, `rgba(200, 223, 219, ${alpha * 0.5})`);
      grad.addColorStop(1, "rgba(51, 104, 160, 0)");

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 2.8, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
      ctx.shadowColor = "#c8dfdb";
      ctx.shadowBlur = 2.5;
      ctx.fill();

      ctx.restore();
    }
  }

  for (let i = 0; i < ambientCount; i++) {
    ambientFireflies.push(new AmbientSpeck());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (!isDark) {
      requestAnimationFrame(animate);
      return;
    }

    ambientFireflies.forEach(f => {
      f.update();
      f.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================================================
// CHEONGSACHORONG SILK LANTERNS PARALLAX & INERTIAL SCROLL ENGINE
// - 3-Tier Multi-Plane Depth Layers (Foreground, Midground, Background)
// - Inertial scroll pendulum tilt based on instantaneous scroll velocity
// - Liquid 60fps/120fps RAF interpolation with smooth lerping
// - Ambient Dark Mode Glow Field dynamic tracking
// ==========================================================================

function initLanternParallax() {
  const stage = document.querySelector(".lanterns-depth-stage");
  if (!stage) return;

  const podPrimary = stage.querySelector(".lantern-pod.pod-primary");
  const podMid = stage.querySelector(".lantern-pod.pod-midground");
  const podBg = stage.querySelector(".lantern-pod.pod-background");
  const glowField = stage.querySelector(".lantern-radiant-glow-field");

  if (!podPrimary && !podMid && !podBg) return;

  // Parallax configuration for each depth layer (Foreground, Midground, Background)
  const layers = [
    { el: podPrimary, factorY: 0.32 },
    { el: podMid, factorY: 0.18 },
    { el: podBg, factorY: 0.07 }
  ];

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  let targetScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
  let currentScrollY = targetScrollY;

  window.addEventListener("scroll", () => {
    targetScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
  }, { passive: true });

  function renderParallax() {
    // Smooth lerp scroll interpolation for buttery glide
    currentScrollY += (targetScrollY - currentScrollY) * 0.1;

    const heroSection = document.getElementById("hero");
    const heroHeight = heroSection ? heroSection.offsetHeight + 500 : 1400;

    // Render when within reasonable scroll range of hero
    if (currentScrollY <= heroHeight || targetScrollY <= heroHeight) {
      layers.forEach(({ el, factorY }) => {
        if (!el) return;
        const translateY = currentScrollY * factorY;
        el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      });

      if (glowField) {
        const glowTranslateY = currentScrollY * 0.22;
        glowField.style.transform = `translate(-50%, calc(-50% + ${glowTranslateY.toFixed(2)}px))`;
      }
    }

    requestAnimationFrame(renderParallax);
  }

  requestAnimationFrame(renderParallax);
}

// --- Initialize Everything ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initFilterTabs();
  renderProjects("all");
  initScrollReveal();
  initLanternSilkFireflies();
  initRoamingFireflies();
  initLanternParallax();

  if (window.lucide) {
    lucide.createIcons();
  }
});
