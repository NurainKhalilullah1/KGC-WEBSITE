export type DisciplineCategory = 'all' | 'design' | 'frontend' | 'motion' | 'ai';

export interface ArchitectureStep {
  stage: string;
  title: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<DisciplineCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  image: string;
  featured?: boolean;
  challenge: string;
  approach: string;
  outcome: string;
  architecture: ArchitectureStep[];
  deliverables: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface CareerMilestone {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  capabilities: string[];
}

export interface SocialProfile {
  name: string;
  handle: string;
  url: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_creative_showcase_1794055223242.jpg';

export const IMPACT_METRICS = [
  { value: '6+ Years', label: 'Multidisciplinary Craft' },
  { value: '35+ Products', label: 'Designed & Engineered' },
  { value: '120+ Assets', label: 'Motion & Interactive Systems' },
  { value: '4 Core Pillars', label: 'Design, Frontend, Motion & AI' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'systema-modula',
    title: 'Systema Modula Design Language',
    category: 'design',
    categoryLabel: 'Product Design',
    summary:
      'A multi-brand design system and component architecture unifying 18 product surfaces across web and mobile.',
    image: '/src/assets/images/project_design_system_1794055225210.jpg',
    featured: true,
    challenge:
      'Distributed product squads were shipping inconsistent interfaces with duplicated tokens, slowing feature delivery and fracturing brand trust.',
    approach:
      'Architected a semantic design token pipeline from Figma variables directly into React and Tailwind primitives, paired with interactive motion guidelines.',
    outcome:
      'Reduced UI implementation time by 48% across six engineering teams and achieved 99.4% WCAG AA accessibility compliance.',
    architecture: [
      {
        stage: 'Foundation',
        title: 'Semantic Token Graph',
        detail: 'Color, typography, and spacing tokens mapped from Figma variables to JSON schemas.',
      },
      {
        stage: 'Compiler',
        title: 'Automated Style Pipeline',
        detail: 'Transforms design tokens into typed CSS variables and accessible React primitives.',
      },
      {
        stage: 'Choreography',
        title: 'Motion Curves & States',
        detail: 'Standardized spring physics and compositor transitions for interactive components.',
      },
      {
        stage: 'Consumption',
        title: 'Unified Product Surfaces',
        detail: 'Versioned package consumed by 18 web applications with visual regression checks.',
      },
    ],
    deliverables: [
      'Design Token Architecture',
      '64 Accessible UI Components',
      'Interactive Documentation Portal',
      'Figma Component Library',
    ],
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'atelier-canvas-ai',
    title: 'Atelier Generative AI Workspace',
    category: 'ai',
    categoryLabel: 'AI Exploration',
    summary:
      'A node-based creative co-pilot that blends prompt engineering, style transfer, and real-time layout synthesis for product teams.',
    image: '/src/assets/images/project_ai_canvas_1794055227819.jpg',
    featured: true,
    challenge:
      'Designers struggled with linear chat interfaces when exploring visual directions, losing context across multiple iterations and style variations.',
    approach:
      'Designed and built an infinite spatial canvas where prompts, reference frames, and multimodal AI outputs connect as reusable visual graphs.',
    outcome:
      'Accelerated concept exploration cycles by 3.2x during early product discovery workshops.',
    architecture: [
      {
        stage: 'Input Layer',
        title: 'Multimodal Prompt & Reference Nodes',
        detail: 'Captures text intent, brand palettes, and wireframe sketches on an infinite canvas.',
      },
      {
        stage: 'Orchestration',
        title: 'Context Graph Router',
        detail: 'Synthesizes connected upstream nodes into structured multimodal model calls.',
      },
      {
        stage: 'Streaming UI',
        title: 'Progressive Canvas Renderer',
        detail: 'Streams generated variations directly into spatial frames with zero layout jump.',
      },
      {
        stage: 'Export',
        title: 'Production Asset Handoff',
        detail: 'Exports selected directions as clean SVG vectors, style tokens, and React code.',
      },
    ],
    deliverables: [
      'Spatial Node Canvas UI',
      'Streaming Multimodal Pipeline',
      'Interactive Prompt Graph',
      'Real-time Collaborative State',
    ],
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'nova-spatial-web',
    title: 'Nova Architectural Web Engine',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    summary:
      'High-frame-rate editorial web platform engineered with Next.js, custom layout choreography, and responsive fluid typography.',
    image: '/src/assets/images/project_frontend_engine_1794055226552.jpg',
    challenge:
      'Media-heavy architectural portfolios suffered from layout shifts, sluggish page transitions, and poor mobile responsiveness.',
    approach:
      'Engineered a zero-layout-shift grid engine with hardware-accelerated view transitions, progressive image decoding, and strict typographic rhythm.',
    outcome:
      'Sustained 100 Lighthouse performance scores and increased average session duration by 64%.',
    architecture: [
      {
        stage: 'Server Layer',
        title: 'Edge Server Components',
        detail: 'Pre-renders structured editorial layouts and critical typography at the edge.',
      },
      {
        stage: 'Layout Engine',
        title: 'Responsive Grid Matrix',
        detail: 'Fluid CSS Grid container queries adapting seamlessly from mobile to 1440px+.',
      },
      {
        stage: 'Transition Layer',
        title: 'Compositor View Transitions',
        detail: '60fps shared-element transitions using transform and opacity.',
      },
      {
        stage: 'Delivery',
        title: 'Adaptive Media Pipeline',
        detail: 'Responsive AVIF/WebP delivery with resilient fallback states.',
      },
    ],
    deliverables: [
      'Next.js App Router Architecture',
      'Fluid Grid System',
      'Custom View Transitions',
      'Performance Optimization',
    ],
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'kinetix-identity-reel',
    title: 'Kinetix 3D Motion Identity',
    category: 'motion',
    categoryLabel: 'Motion Graphics',
    summary:
      'Sculptural 3D motion system and kinetic typography package created for flagship developer conferences and digital broadcasts.',
    image: '/src/assets/images/project_motion_reel_1794055226764.jpg',
    challenge:
      'Conference broadcasts needed a cohesive motion language capable of scaling across keynote screens, web teasers, and speaker intros.',
    approach:
      'Crafted a procedural motion system combining tactile ceramic/glass 3D geometry with kinetic serif and sans-serif typography.',
    outcome:
      'Deployed across 40+ stage segments and interactive web headers with unified visual rhythm.',
    architecture: [
      {
        stage: 'Direction',
        title: 'Kinetic Storyboard & Timing',
        detail: 'Established rhythmic pacing, easing curves, and typographic lockups.',
      },
      {
        stage: '3D Simulation',
        title: 'Procedural Geometry & Lighting',
        detail: 'Physically based matte ceramic and glass shaders with studio rim lighting.',
      },
      {
        stage: 'Web Integration',
        title: 'Interactive Lottie & WebGL Loops',
        detail: 'Exported lightweight state-driven motion assets for interactive web triggers.',
      },
      {
        stage: 'Broadcast',
        title: 'Keynote & Digital Package',
        detail: 'Delivered 4K stage visuals, lower thirds, and responsive web hero reels.',
      },
    ],
    deliverables: [
      '3D Art Direction',
      'Kinetic Typography System',
      'Interactive Web Motion Assets',
      'Keynote Broadcast Package',
    ],
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Product Design',
    description:
      'End-to-end product thinking from user research and information architecture to scalable design systems.',
    capabilities: [
      'Design Systems & Token Architecture',
      'Interaction & UX Strategy',
      'Rapid Prototyping & Wireframing',
      'Design Critiques & Usability Testing',
    ],
  },
  {
    title: 'Frontend Development',
    description:
      'Production-grade interface engineering focused on speed, accessibility, and fluid responsiveness.',
    capabilities: [
      'React, Next.js & TypeScript',
      'Tailwind CSS & Modern CSS Grid',
      'Accessible Component Libraries',
      'Web Performance & Core Web Vitals',
    ],
  },
  {
    title: 'Motion Graphics',
    description:
      'Intentional choreography that clarifies spatial relationships, state changes, and brand storytelling.',
    capabilities: [
      'UI Motion & Micro-interactions',
      'Kinetic Typography & Title Design',
      '3D Visual Direction & Lighting',
      'Interactive Web Animation (Motion)',
    ],
  },
  {
    title: 'AI & Creative Tech',
    description:
      'Designing and prototyping human-centered interfaces for generative workflows and intelligent tools.',
    capabilities: [
      'AI UX Patterns & Generative Canvases',
      'LLM & Multimodal API Integration',
      'Prompt Engineering & Workflow Design',
      'Rapid AI Concept Prototyping',
    ],
  },
];

export const CAREER_TIMELINE: CareerMilestone[] = [
  {
    id: 'lead-product-creative',
    role: 'Senior Product Designer & Frontend Engineer',
    organization: 'Studio Monolith & Independent Practice',
    period: '2024 — Present',
    summary:
      'Leading product design, frontend architecture, and AI interface explorations for technology startups and creative platforms.',
    highlights: [
      'Architected cross-platform design systems and Next.js component libraries adopted by 15+ product engineers.',
      'Designed and built spatial AI prototyping interfaces that reduced concept-to-production cycles by over 50%.',
      'Directed motion identity systems and interactive web launches for developer communities and product releases.',
    ],
  },
  {
    id: 'product-motion-engineer',
    role: 'Product Designer & Motion Developer',
    organization: 'Kinetix Digital Labs',
    period: '2022 — 2024',
    summary:
      'Bridged the gap between visual design, motion choreography, and production React engineering.',
    highlights: [
      'Spearheaded the redesign of flagship SaaS workflows, lifting task completion rates from 68% to 91%.',
      'Built a reusable motion primitive library ensuring 60fps transitions across desktop and mobile web.',
      'Partnered with engineering leads to establish zero-regression visual QA and accessibility standards.',
    ],
  },
  {
    id: 'frontend-visual-designer',
    role: 'Frontend Developer & Visual Designer',
    organization: 'Origin Creative Collective',
    period: '2020 — 2022',
    summary:
      'Crafted responsive web applications, interactive event platforms, and brand systems.',
    highlights: [
      'Engineered high-traffic event and community platforms with clean component grids and bold typography.',
      'Created interactive showreels, 3D visual assets, and responsive landing experiences.',
    ],
  },
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: 'GitHub',
    handle: 'github.com/temitopenurain',
    url: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/temitopenurain',
    url: 'https://linkedin.com',
  },
  {
    name: 'Behance',
    handle: 'behance.net/temitopenurain',
    url: 'https://behance.net',
  },
  {
    name: 'X (Twitter)',
    handle: 'x.com/temitopenurain',
    url: 'https://x.com',
  },
];
