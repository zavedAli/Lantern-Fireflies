/**
 * Aishika Das — Asian Heritage Glassmorphism UI/UX Developer Portfolio Script
 * Palette: #3368A0 (Deep Ocean Blue), #66A3BF (Slate Blue), #C8DFDB (Seafoam), #F2EFE7 (Warm Canvas)
 * Typography: Cormorant Garamond + Outfit | Asian Artisan Iconography
 */

const projectsData = [
  {
    id: "real-estate-web",
    title: "Real Estate Website",
    category: "featured",
    categoryLabel: "Featured Project",
    desc: "A modern property discovery and investment platform featuring interactive neighborhood map filters, 3D tour previews, sticky mortgage calculations, and clean architectural cards.",
    tags: ["Figma", "UI/UX Design", "Responsive Web", "Property Discovery"],
    figmaUrl: "https://www.figma.com/design/LfTSZibvzVQYyTkgMLe0a2/-Aishika--real-estate-FP?node-id=0-1&p=f&t=bqDFZfFJ33o4iP9V-0",
    metrics: [
      { number: "4.9/5", label: "User Usability Rating" },
      { number: "8+", label: "Responsive Breakpoints" },
      { number: "100%", label: "Custom Component Kit" }
    ],
    problem: "Real estate websites often overwhelm buyers with disorganized filters, low-resolution media, and clunky calculation forms.",
    solution: "Engineered a card-based visual discovery UI with dual list/map split view, sticky price calculators, and seamless direct agent booking.",
    process: "Conducted competitive benchmarking, built modular property card components with micro-interactions, and tested mobile search usability.",
    deliverables: ["Full Figma Design System", "High-Fidelity Desktop & Mobile Prototypes", "Custom Property Card Micro-Interactions", "Map & Filter Component System"]
  },
  {
    id: "fitness-gym-web",
    title: "Gym Website",
    category: "featured",
    categoryLabel: "Featured Project",
    desc: "High-energy fitness portal and gym membership platform with dynamic workout tracking, trainer scheduling, class reservations, and interactive telemetry widgets.",
    tags: ["Figma", "UI/UX Design", "Fitness & Gym", "Gamification"],
    figmaUrl: "https://www.figma.com/design/msXjKozJ8SaVMFzxzXv8f6/Fitness?t=bqDFZfFJ33o4iP9V-0",
    metrics: [
      { number: "52%", label: "Booking Conversion Boost" },
      { number: "15+", label: "Micro-animations" },
      { number: "Adaptive", label: "Tonal UI Themes" }
    ],
    problem: "Gym members found tracking class schedules and coach availability cumbersome on generic booking platforms.",
    solution: "Crafted a vibrant visual design with interactive calendar widgets, streak tracking badges, and one-tap spot reservations.",
    process: "Created user personas for casual gym-goers vs. athletes, designed quick-booking modal flows, and defined motion design guidelines.",
    deliverables: ["Full Figma Interactive Prototype", "Motion UI Specifications", "Trainer & Schedule Flow Kit", "Responsive Mobile Views"]
  },
  {
    id: "beauty-ecommerce",
    title: "Beauty Product Purchasing Website",
    category: "featured",
    categoryLabel: "Featured Project",
    desc: "An elegant, high-conversion e-commerce storefront for beauty & skincare products, featuring curated product grids, shade selectors, ingredients transparency, and quick-checkout funnels.",
    tags: ["Figma", "E-Commerce UX", "Beauty & Cosmetics", "Product Catalog"],
    figmaUrl: "https://www.figma.com/design/sQuvi3s9yoGOEu8DZFvW3D/Beauty-Products?t=bqDFZfFJ33o4iP9V-0",
    metrics: [
      { number: "4.9★", label: "Customer Experience Rating" },
      { number: "34%", label: "Checkout Funnel Gain" },
      { number: "100%", label: "Mobile-First Design" }
    ],
    problem: "Online beauty consumers often experience decision fatigue when navigating dense skincare inventories without clear ingredient guides and visual shade finders.",
    solution: "Crafted a clean, luxurious interface with tactile beauty swatch selectors, customer review carousels, and an instant add-to-bag sticky drawer.",
    process: "Benchmarked luxury cosmetic e-commerce experiences, structured visual hierarchy around high-res product photography, and tested rapid 2-step checkout flows in Figma.",
    deliverables: ["Full Figma Interactive Design File", "Product Detail Screen Flows", "Cart & Checkout UI System", "Mobile Responsive Views"]
  },
  {
    id: "mobile-signup",
    title: "Mobile Sign-Up Screen Design",
    category: "featured",
    categoryLabel: "Featured Project",
    desc: "A sleek, ergonomic mobile authentication and sign-up flow designed during internship at Codsoft, focusing on low user friction, social OAuth integrations, and micro-interactions.",
    tags: ["Figma", "Mobile UI/UX", "Onboarding Flow", "Authentication"],
    figmaUrl: "https://www.figma.com/design/bUgJfOME4DCJhtYaWkjhNo/Codsoft-1?t=bqDFZfFJ33o4iP9V-0",
    metrics: [
      { number: "95%", label: "Frictionless Flow Score" },
      { number: "3-Step", label: "Guided Registration" },
      { number: "<45s", label: "Avg Onboarding Time" }
    ],
    problem: "Complex multi-field mobile registration forms cause high drop-off rates and user fatigue during initial app onboarding.",
    solution: "Architected a progressive, step-by-step mobile sign-up screen with clear visual feedback, social login buttons, inline validation, and accessible password toggles.",
    process: "Analyzed mobile UX best practices, created ergonomic thumb-zone wireframes, and prototyped smooth micro-transitions for form input states in Figma.",
    deliverables: ["Figma Mobile UI Kit", "Authentication & Onboarding Flow", "Micro-interaction States", "Interactive Mobile Prototype"]
  },
  {
    id: "coffee-ecommerce",
    title: "Coffee Purchasing Website",
    category: "featured",
    categoryLabel: "Featured Project",
    desc: "Sensory-driven e-commerce experience for specialty coffee lovers, featuring bean roast flavor profiles, subscription builders, and brewing guides.",
    tags: ["Figma", "E-Commerce UX", "Specialty Coffee", "Subscription Flow"],
    figmaUrl: "https://www.figma.com/design/DYW7rclHZUxMPKznecC15G/coffee?t=bqDFZfFJ33o4iP9V-0",
    metrics: [
      { number: "38%", label: "Average Order Value Boost" },
      { number: "4.8★", label: "Checkout Usability Score" },
      { number: "12+", label: "Flavor Profile Radar Sets" }
    ],
    problem: "Online coffee buyers struggle to gauge aroma, acidity, and roast levels through plain thumbnail grids.",
    solution: "Created an interactive flavor profile selector and customizable recurring subscription box builder with warm, artisanal aesthetics.",
    process: "Researched sensory e-commerce patterns, designed visual flavor radar cards, and simplified the multi-step checkout funnel in Figma.",
    deliverables: ["Visual Identity & Moodboard", "Figma E-Commerce Prototype", "Checkout Flow Optimization Wireframes", "Subscription Builder UI"]
  },
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
    "beauty-ecommerce": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="beautyGrad" x1="0" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
            <stop stop-color="#c8dfdb" stop-opacity="0.35"/>
            <stop offset="1" stop-color="#66a3bf" stop-opacity="0.25"/>
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#beautyGrad)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <!-- Skincare Jar -->
        <rect x="55" y="95" width="80" height="75" rx="16" fill="${deep}"/>
        <rect x="50" y="80" width="90" height="18" rx="6" fill="${slate}"/>
        <circle cx="95" cy="130" r="14" fill="${seafoam}"/>
        <!-- Serum Dropper Bottle -->
        <rect x="165" y="65" width="50" height="105" rx="12" fill="rgba(200,223,219,0.7)" stroke="${deep}" stroke-width="1.5"/>
        <rect x="175" y="45" width="30" height="22" rx="4" fill="${deep}"/>
        <rect x="183" y="32" width="14" height="14" rx="3" fill="${slate}"/>
        <!-- Product Info Cards on Right -->
        <rect x="240" y="45" width="125" height="12" rx="4" fill="${deep}"/>
        <rect x="240" y="65" width="85" height="8" rx="3" fill="${slate}"/>
        <circle cx="248" cy="92" r="7" fill="#E8A598"/>
        <circle cx="268" cy="92" r="7" fill="#D98A72"/>
        <circle cx="288" cy="92" r="7" fill="#B35F48"/>
        <circle cx="308" cy="92" r="7" fill="#8C3F2B"/>
        <rect x="240" y="115" width="120" height="35" rx="8" fill="${deep}"/>
        <text x="255" y="137" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif">Add to Bag • $42</text>
        <rect x="240" y="160" width="100" height="6" rx="3" fill="rgba(200,223,219,0.9)"/>
      </svg>`,
    "mobile-signup": `
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="rgba(51,104,160,0.15)"/>
        <rect x="20" y="20" width="360" height="180" rx="14" fill="rgba(255,255,255,0.8)" stroke="rgba(255,255,255,0.95)" stroke-width="1.5"/>
        <!-- Phone Frame in Center -->
        <rect x="135" y="25" width="130" height="170" rx="16" fill="#ffffff" stroke="${deep}" stroke-width="2"/>
        <rect x="175" y="30" width="50" height="5" rx="2.5" fill="${deep}"/>
        <circle cx="160" cy="52" r="10" fill="rgba(200,223,219,0.8)"/>
        <rect x="178" y="47" width="60" height="6" rx="2" fill="${deep}"/>
        <rect x="178" y="56" width="40" height="4" rx="2" fill="${slate}"/>
        <!-- Form Inputs -->
        <rect x="148" y="70" width="104" height="16" rx="4" fill="rgba(200,223,219,0.4)" stroke="${slate}" stroke-width="1"/>
        <text x="156" y="82" fill="${slate}" font-size="8" font-family="sans-serif">user@domain.com</text>
        <rect x="148" y="92" width="104" height="16" rx="4" fill="rgba(200,223,219,0.4)" stroke="${slate}" stroke-width="1"/>
        <text x="156" y="104" fill="${slate}" font-size="8" font-family="sans-serif">••••••••••</text>
        <!-- Primary Button -->
        <rect x="148" y="115" width="104" height="18" rx="6" fill="${deep}"/>
        <text x="180" y="127" fill="#ffffff" font-size="8" font-weight="bold" font-family="sans-serif">Sign Up</text>
        <!-- Social Auth -->
        <circle cx="175" cy="148" r="8" fill="rgba(200,223,219,0.7)"/>
        <circle cx="200" cy="148" r="8" fill="rgba(200,223,219,0.7)"/>
        <circle cx="225" cy="148" r="8" fill="rgba(200,223,219,0.7)"/>
        <!-- Side Accent Cards -->
        <rect x="40" y="60" width="75" height="95" rx="10" fill="rgba(200,223,219,0.5)" stroke="rgba(255,255,255,0.9)" stroke-width="1"/>
        <rect x="52" y="75" width="50" height="6" rx="2" fill="${deep}"/>
        <rect x="52" y="88" width="40" height="4" rx="2" fill="${slate}"/>
        <rect x="285" y="60" width="75" height="95" rx="10" fill="rgba(200,223,219,0.5)" stroke="rgba(255,255,255,0.9)" stroke-width="1"/>
        <rect x="297" y="75" width="50" height="6" rx="2" fill="${deep}"/>
        <rect x="297" y="88" width="40" height="4" rx="2" fill="${slate}"/>
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

// --- Render Projects Carousel with Asian Emblems & Staggered Scroll Reveal ---
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
        ${p.figmaUrl ? `
          <a href="${p.figmaUrl}" target="_blank" rel="noopener noreferrer" class="project-figma-badge" onclick="event.stopPropagation();" title="View Figma File">
            <svg viewBox="0 0 38 57" width="11" height="16.5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>
            <span>Figma</span>
            <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        ` : ''}
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
          ${p.figmaUrl ? `
            <a href="${p.figmaUrl}" target="_blank" rel="noopener noreferrer" class="figma-link-action" onclick="event.stopPropagation();" title="Open Figma Prototype">
              <span>Figma ↗</span>
            </a>
          ` : `
            <span class="asian-icon" style="width:16px;height:16px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          `}
        </div>
      </div>
    </article>
  `).join('');

  // Setup Pagination Dots
  const dotsContainer = document.getElementById("carouselDots");
  if (dotsContainer) {
    dotsContainer.innerHTML = filtered.map((_, i) => `
      <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to project ${i + 1}"></button>
    `).join('');

    dotsContainer.querySelectorAll(".carousel-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        const idx = parseInt(dot.getAttribute("data-index"), 10);
        scrollCarouselToIndex(idx);
      });
    });
  }

  // Reset scroll & update counters
  container.scrollLeft = 0;
  updateCarouselState(0, filtered.length);

  // Setup Scroll & Touch Listeners on track
  setupCarouselScrollListener(filtered.length);

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

function getCardStepWidth() {
  const container = document.getElementById("projectsGrid");
  if (!container) return 340;
  const firstCard = container.querySelector(".glass-project-card");
  if (!firstCard) return 340;
  const gap = 24; // 1.5rem
  return firstCard.offsetWidth + gap;
}

function scrollCarouselToIndex(index) {
  const container = document.getElementById("projectsGrid");
  if (!container) return;
  const step = getCardStepWidth();
  container.scrollTo({
    left: index * step,
    behavior: "smooth"
  });
}

function updateCarouselState(activeIndex, totalCount) {
  const counter = document.getElementById("carouselCounter");
  if (counter) {
    const currentFormatted = String(Math.min(activeIndex + 1, totalCount)).padStart(2, "0");
    const totalFormatted = String(totalCount).padStart(2, "0");
    counter.textContent = `${currentFormatted} / ${totalFormatted}`;
  }

  // Update dots
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === activeIndex);
  });

  // Update nav buttons
  const prevBtn = document.getElementById("prevProjectBtn");
  const nextBtn = document.getElementById("nextProjectBtn");
  if (prevBtn) prevBtn.disabled = activeIndex <= 0;
  if (nextBtn) nextBtn.disabled = activeIndex >= totalCount - 1;
}

function setupCarouselScrollListener(totalCount) {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  let scrollTimeout;
  container.onscroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const step = getCardStepWidth();
      const activeIdx = Math.round(container.scrollLeft / step);
      updateCarouselState(Math.max(0, Math.min(activeIdx, totalCount - 1)), totalCount);
    }, 50);
  };
}

function initProjectCarouselControls() {
  const prevBtn = document.getElementById("prevProjectBtn");
  const nextBtn = document.getElementById("nextProjectBtn");
  const container = document.getElementById("projectsGrid");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (!container) return;
      const step = getCardStepWidth();
      container.scrollBy({ left: -step, behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!container) return;
      const step = getCardStepWidth();
      container.scrollBy({ left: step, behavior: "smooth" });
    });
  }
}

// --- Case Study Modal ---
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modalBody = document.getElementById("modalDynamicBody");
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-content-wrapper">
      <!-- Modal Top Bar -->
      <div class="modal-top-bar">
        <div class="modal-top-left">
          <span class="modal-badge-category">
            <svg class="modal-icon-star" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            ${project.categoryLabel || "Featured Project"}
          </span>
          <div class="modal-tags-inline">
            ${(project.tags || []).slice(0, 3).map(t => `<span class="modal-tag-chip">${t}</span>`).join('')}
          </div>
        </div>

        <div class="modal-top-actions">
          ${project.figmaUrl ? `
            <a href="${project.figmaUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn-figma" title="Inspect Figma Source File">
              <svg viewBox="0 0 38 57" width="11" height="16.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
              </svg>
              <span>Figma Canvas</span>
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          ` : ''}
          <button class="modal-close-pill" onclick="closeModal()" aria-label="Close modal" title="Close (Esc)">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Hero Header -->
      <div class="modal-hero-section">
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-summary">${project.desc}</p>
      </div>

      <!-- Key Results & Impact Grid -->
      <div class="modal-section">
        <div class="modal-section-header">
          <span class="modal-section-label">Key Results & Impact</span>
          <div class="modal-section-line"></div>
        </div>
        <div class="modal-metrics-grid">
          ${(project.metrics || []).map(m => `
            <div class="modal-metric-card">
              <div class="modal-metric-number">${m.number}</div>
              <div class="modal-metric-label">${m.label}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Problem & Solution Comparison Grid -->
      <div class="modal-section">
        <div class="modal-dual-grid">
          <div class="modal-card-challenge">
            <div class="modal-card-badge challenge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>The Challenge</span>
            </div>
            <p class="modal-card-text">${project.problem}</p>
          </div>

          <div class="modal-card-solution">
            <div class="modal-card-badge solution">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>The Solution</span>
            </div>
            <p class="modal-card-text">${project.solution}</p>
          </div>
        </div>
      </div>

      <!-- Methodology & Research Process -->
      <div class="modal-section">
        <div class="modal-section-header">
          <span class="modal-section-label">Design & Research Methodology</span>
          <div class="modal-section-line"></div>
        </div>
        <div class="modal-process-box">
          <div class="modal-process-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <p class="modal-process-text">${project.process}</p>
        </div>
      </div>

      <!-- Deliverables -->
      <div class="modal-section">
        <div class="modal-section-header">
          <span class="modal-section-label">Core Deliverables & Outputs</span>
          <div class="modal-section-line"></div>
        </div>
        <div class="modal-deliverables-grid">
          ${(project.deliverables || []).map(d => `
            <div class="modal-deliverable-item">
              <svg class="modal-deliverable-check" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${d}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Modal Footer Bar -->
      <div class="modal-footer-bar">
        <button class="btn btn-glass btn-sm" onclick="closeModal()">Dismiss</button>
        <div class="modal-footer-right">
          ${project.figmaUrl ? `
            <a href="${project.figmaUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-figma-footer" style="gap:0.45rem;">
              <svg viewBox="0 0 38 57" width="11" height="16.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
              </svg>
              <span>Inspect in Figma</span>
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          ` : ''}
          <a href="#contact" class="btn btn-primary btn-sm" onclick="closeModal()">Discuss Project</a>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
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
  try {
    sessionStorage.setItem("aishika_user_theme", nextTheme);
  } catch (e) {}
  updateThemeTooltips(nextTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
}

function initTheme() {
  // Clear any legacy dark-mode override stored in browser localStorage
  try {
    localStorage.removeItem("aishika_theme");
    localStorage.removeItem("aishika_theme_v2");
  } catch (e) {}

  const activeTheme = (typeof sessionStorage !== "undefined" && sessionStorage.getItem("aishika_user_theme")) || "light";
  setTheme(activeTheme);

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

function openGmailCompose() {
  const to = "aishikadas31@gmail.com";
  const subject = "UI/UX Design Opportunity - Aishika Das";
  const body = "Hi Aishika,\n\nI came across your design portfolio and would love to discuss an opportunity or project with you.\n\nDetails:\n- Company / Organization: \n- Project Scope / Role: \n- Timeline: \n\nLooking forward to connecting!\n\nBest regards,\n[Your Name]";
  
  const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const url = `https://mail.google.com/mail/?extsrc=mailto&url=${encodeURIComponent(mailtoUrl)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function openOutlookCompose() {
  const to = "aishikadas31@gmail.com";
  const subject = "UI/UX Design Opportunity - Aishika Das";
  const body = "Hi Aishika,\n\nI came across your design portfolio and would love to discuss an opportunity or project with you.\n\nDetails:\n- Company / Organization: \n- Project Scope / Role: \n- Timeline: \n\nLooking forward to connecting!\n\nBest regards,\n[Your Name]";
  
  const url = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function showToast(message) {
  const existing = document.querySelector(".toast-glass");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-glass";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.innerHTML = `
    <span class="toast-icon-wrap" style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;min-width:22px;border-radius:50%;background:rgba(46,229,157,0.22);border:1px solid rgba(46,229,157,0.55);color:#2ee59d;flex-shrink:0;">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#2ee59d" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" style="display:block;width:13px;height:13px;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
    <span class="toast-msg" style="color:#ffffff;font-size:0.88rem;font-weight:400;letter-spacing:0.02em;">${message}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px) scale(0.95)";
    setTimeout(() => toast.remove(), 350);
  }, 2400);
}

// --- Click outside modal to close & Escape key support ---
window.addEventListener("click", (e) => {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
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
  initProjectCarouselControls();
  initScrollReveal();
  initLanternSilkFireflies();
  initRoamingFireflies();
  initLanternParallax();

  if (window.lucide) {
    lucide.createIcons();
  }
});
