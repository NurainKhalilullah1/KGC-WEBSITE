'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'motion/react';
import {
  HERO_IMAGE,
  IMPACT_METRICS,
  PROJECTS,
  SKILL_GROUPS,
  CAREER_TIMELINE,
  SOCIAL_PROFILES,
  DisciplineCategory,
  ProjectItem,
} from '@/lib/portfolio-data';

const FILTER_OPTIONS: { id: DisciplineCategory; label: string }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'design', label: 'Product Design' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'motion', label: 'Motion' },
  { id: 'ai', label: 'AI' },
];

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
    },
  },
};

const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardFadeVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT_EXPO,
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.2,
    },
  },
};

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState<DisciplineCategory>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'architecture'>('overview');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [expandedRoleId, setExpandedRoleId] = useState<string>(CAREER_TIMELINE[0].id);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Product Design & Frontend');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const contactEmail = 'temitopenurain9@gmail.com';

  // Filter projects
  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openProjectModal = (project: ProjectItem) => {
    setModalTab('overview');
    setActiveProject(project);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }
  };

  const handleContactSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError('Please fill in your name, email address, and project message.');
      return;
    }
    if (!email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const resetContactForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111110]">
      {/* Top Navigation Bar — Strict 3-Zone Contract with Initial Fade */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E5E0D8] no-print"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="font-serif-display text-xl md:text-2xl font-semibold tracking-tight text-[#111110] whitespace-nowrap shrink-0"
          >
            Temitope Nurain
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-[#4A4845]">
            <a
              href="#work"
              className="hover:text-[#111110] transition-colors whitespace-nowrap shrink-0"
            >
              Work
            </a>
            <a
              href="#about"
              className="hover:text-[#111110] transition-colors whitespace-nowrap shrink-0"
            >
              Biography
            </a>
            <a
              href="#skills"
              className="hover:text-[#111110] transition-colors whitespace-nowrap shrink-0"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-[#111110] transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#111110] rounded-xl hover:bg-[#D9381E] transition-colors whitespace-nowrap shrink-0"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.header>

      <main className="no-print">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Typography & Actions */}
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col justify-between py-2"
            >
              <div className="space-y-6">
                <motion.h1
                  variants={fadeUpVariant}
                  className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.08] text-[#111110]"
                  style={{ textWrap: 'balance' }}
                >
                  Designing products, engineering interfaces, and crafting motion & AI experiences.
                </motion.h1>
                <motion.p
                  variants={fadeUpVariant}
                  className="text-lg md:text-xl text-[#4A4845] leading-relaxed max-w-2xl"
                >
                  I am a multidisciplinary Product Designer, Frontend Developer, Motion Graphic
                  Designer, and AI Enthusiast building clear, expressive digital products from first
                  sketch to production code.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUpVariant}
                className="pt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#work"
                  className="px-6 py-3.5 text-base font-medium text-white bg-[#D9381E] rounded-xl hover:bg-[#B82D16] transition-colors whitespace-nowrap shrink-0"
                >
                  Explore Selected Work
                </a>
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="px-6 py-3.5 text-base font-medium text-[#111110] bg-[#F3EFEA] border border-[#E5E0D8] rounded-xl hover:bg-[#E8E2DA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  View Resume
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT_EXPO }}
              className="lg:col-span-5"
            >
              <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[340px] rounded-2xl overflow-hidden bg-[#F3EFEA] border border-[#E5E0D8]">
                <Image
                  src={HERO_IMAGE}
                  alt="Minimalist architectural and product design studio workspace"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Full-Width 4-Column Impact Strip Below Split */}
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 pt-10 border-t border-[#E5E0D8] grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {IMPACT_METRICS.map((metric) => (
              <motion.div key={metric.label} variants={cardFadeVariant} className="space-y-1">
                <p className="font-serif-display text-3xl md:text-4xl font-semibold text-[#111110] tabular-nums">
                  {metric.value}
                </p>
                <p className="text-base text-[#4A4845]">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Selected Works Section */}
        <section id="work" className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-[#E5E0D8]">
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <motion.div variants={fadeUpVariant}>
              <h2
                className="font-serif-display text-3xl md:text-4xl font-semibold tracking-tight text-[#111110]"
                style={{ textWrap: 'balance' }}
              >
                Selected Works
              </h2>
              <p className="mt-2 text-base md:text-lg text-[#4A4845] max-w-xl">
                Case studies spanning design systems, frontend architecture, kinetic motion, and
                generative AI interfaces.
              </p>
            </motion.div>

            {/* Interactive Category Filter Buttons */}
            <motion.div
              variants={fadeUpVariant}
              role="tablist"
              aria-label="Filter projects by discipline"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F3EFEA] rounded-xl border border-[#E5E0D8] self-start"
            >
              {FILTER_OPTIONS.map((option) => {
                const isActive = selectedCategory === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(option.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#111110] text-white'
                        : 'text-[#4A4845] hover:text-[#111110]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Clean 2-Column Project Showcase Grid with Scroll & Filter Fade */}
          <motion.div
            layout
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  variants={cardFadeVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  onClick={() => openProjectModal(project)}
                  className="group cursor-pointer rounded-2xl bg-[#F3EFEA] border border-[#E5E0D8] overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative w-full aspect-[16/10] bg-[#E8E2DA] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-7 md:p-8 flex flex-col flex-1 justify-between space-y-6">
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-[#D9381E]">{project.categoryLabel}</p>
                      <h3 className="font-serif-display text-2xl font-semibold text-[#111110] group-hover:text-[#D9381E] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-base text-[#4A4845] leading-relaxed">{project.summary}</p>
                    </div>

                    <div className="pt-2">
                      <span className="inline-block text-sm font-medium text-[#111110] underline underline-offset-4 group-hover:text-[#D9381E] transition-colors">
                        Read Case Study
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Biography & Interactive Career Timeline Section */}
        <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Biography Narrative */}
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5 space-y-6"
            >
              <motion.h2
                variants={fadeUpVariant}
                className="font-serif-display text-3xl md:text-4xl font-semibold tracking-tight text-[#111110]"
                style={{ textWrap: 'balance' }}
              >
                Biography
              </motion.h2>
              <motion.div
                variants={fadeUpVariant}
                className="space-y-4 text-base md:text-lg text-[#4A4845] leading-relaxed"
              >
                <p>
                  My work sits at the intersection of product design, frontend engineering, motion
                  graphics, and applied AI. Rather than treating visual design, motion, and code as
                  separate handoffs, I approach them as a single continuous craft.
                </p>
                <p>
                  Whether architecting a multi-product design system, writing accessible React and
                  Next.js interfaces, choreographing 3D and kinetic motion systems, or prototyping
                  generative AI workflows, my focus remains constant: clarity, speed, and human
                  comprehension.
                </p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="px-5 py-3 text-sm font-medium text-white bg-[#111110] rounded-xl hover:bg-[#D9381E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Open Printable Resume
                </button>
              </motion.div>
            </motion.div>

            {/* Interactive Career Timeline */}
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7 space-y-6"
            >
              <motion.h3
                variants={fadeUpVariant}
                className="font-serif-display text-2xl font-semibold text-[#111110]"
              >
                Experience & Career Timeline
              </motion.h3>
              <div className="space-y-4">
                {CAREER_TIMELINE.map((item) => {
                  const isExpanded = expandedRoleId === item.id;
                  return (
                    <motion.div
                      key={item.id}
                      variants={cardFadeVariant}
                      className="rounded-2xl bg-[#F3EFEA] border border-[#E5E0D8] p-6 md:p-7 transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedRoleId(isExpanded ? '' : item.id)}
                        className="w-full text-left flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 cursor-pointer"
                      >
                        <div>
                          <h4 className="font-serif-display text-xl font-semibold text-[#111110]">
                            {item.role}
                          </h4>
                          <p className="text-base text-[#4A4845] mt-1">{item.organization}</p>
                        </div>
                        <span className="text-sm font-medium text-[#4A4845] tabular-nums whitespace-nowrap shrink-0">
                          {item.period}
                        </span>
                      </button>

                      <p className="mt-4 text-base text-[#4A4845] leading-relaxed">
                        {item.summary}
                      </p>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                            className="mt-5 pt-5 border-t border-[#E5E0D8] space-y-2.5"
                          >
                            {item.highlights.map((highlight) => (
                              <p key={highlight} className="text-sm md:text-base text-[#111110]">
                                {highlight}
                              </p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills & Capabilities Section */}
        <section id="skills" className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-[#E5E0D8]">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 max-w-2xl"
          >
            <h2
              className="font-serif-display text-3xl md:text-4xl font-semibold tracking-tight text-[#111110]"
              style={{ textWrap: 'balance' }}
            >
              Skills & Capabilities
            </h2>
            <p className="mt-2 text-base md:text-lg text-[#4A4845]">
              Four core disciplines combined to take products from initial concept to polished
              release.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SKILL_GROUPS.map((group) => (
              <motion.div
                key={group.title}
                variants={cardFadeVariant}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                className="rounded-2xl bg-[#F3EFEA] border border-[#E5E0D8] p-7 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <h3 className="font-serif-display text-2xl font-semibold text-[#111110]">
                    {group.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#4A4845] leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E5E0D8] space-y-2.5">
                  {group.capabilities.map((capability) => (
                    <p key={capability} className="text-sm font-medium text-[#111110]">
                      {capability}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact & Professional Profiles Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Contact & Profiles */}
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5 flex flex-col justify-between space-y-10"
            >
              <div className="space-y-6">
                <motion.h2
                  variants={fadeUpVariant}
                  className="font-serif-display text-3xl md:text-4xl font-semibold tracking-tight text-[#111110]"
                  style={{ textWrap: 'balance' }}
                >
                  Let’s build something meaningful together.
                </motion.h2>
                <motion.p
                  variants={fadeUpVariant}
                  className="text-base md:text-lg text-[#4A4845] leading-relaxed"
                >
                  Available for product design leadership, frontend architecture, motion direction,
                  and AI interface collaborations.
                </motion.p>

                <motion.div variants={fadeUpVariant} className="pt-2 space-y-3">
                  <p className="text-base font-medium text-[#111110]">{contactEmail}</p>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-4 py-2.5 text-sm font-medium text-[#111110] bg-[#F3EFEA] border border-[#E5E0D8] rounded-xl hover:bg-[#E8E2DA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {emailCopied ? 'Email Address Copied' : 'Copy Email Address'}
                  </button>
                </motion.div>
              </div>

              {/* Professional Profile Links */}
              <motion.div
                variants={fadeUpVariant}
                className="space-y-4 pt-6 border-t border-[#E5E0D8]"
              >
                <h3 className="font-serif-display text-xl font-semibold text-[#111110]">
                  Professional Profiles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SOCIAL_PROFILES.map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-[#F3EFEA] border border-[#E5E0D8] hover:border-[#111110] transition-colors block"
                    >
                      <p className="font-medium text-[#111110]">{profile.name}</p>
                      <p className="text-sm text-[#4A4845] mt-0.5 truncate">{profile.handle}</p>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Clean Contact Form */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl bg-[#F3EFEA] border border-[#E5E0D8] p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                      className="py-12 space-y-6"
                    >
                      <h3 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#111110]">
                        Message Received
                      </h3>
                      <p className="text-base text-[#4A4845] leading-relaxed max-w-lg">
                        Thank you for reaching out, {name}. Your inquiry regarding{' '}
                        <span className="text-[#111110] font-medium">{scope}</span> has been
                        recorded and I will respond shortly.
                      </p>
                      <button
                        type="button"
                        onClick={resetContactForm}
                        className="px-5 py-3 text-sm font-medium text-white bg-[#111110] rounded-xl hover:bg-[#D9381E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleContactSubmit}
                      className="space-y-6"
                      noValidate
                    >
                      <h3 className="font-serif-display text-2xl font-semibold text-[#111110]">
                        Send an Inquiry
                      </h3>

                      {formError && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          role="alert"
                          className="p-4 rounded-xl bg-[#FAF8F5] border border-[#D9381E] text-sm text-[#D9381E] font-medium"
                        >
                          {formError}
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-name"
                            className="block text-sm font-medium text-[#111110]"
                          >
                            Your Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Adaeze Okafor"
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-[#111110] placeholder:text-[#8C8881] focus:outline-none focus:border-[#111110]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="contact-email"
                            className="block text-sm font-medium text-[#111110]"
                          >
                            Email Address
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-[#111110] placeholder:text-[#8C8881] focus:outline-none focus:border-[#111110]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="contact-scope"
                          className="block text-sm font-medium text-[#111110]"
                        >
                          Area of Collaboration
                        </label>
                        <select
                          id="contact-scope"
                          value={scope}
                          onChange={(e) => setScope(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-[#111110] focus:outline-none focus:border-[#111110]"
                        >
                          <option value="Product Design & Frontend">
                            Product Design & Frontend
                          </option>
                          <option value="Design Systems Architecture">
                            Design Systems Architecture
                          </option>
                          <option value="Motion Graphics & 3D Direction">
                            Motion Graphics & 3D Direction
                          </option>
                          <option value="AI Product Prototyping">AI Product Prototyping</option>
                          <option value="Full-Time / Advisory Role">
                            Full-Time / Advisory Role
                          </option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-medium text-[#111110]"
                        >
                          Project Details
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Share a brief overview of your project, timeline, and goals..."
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E0D8] text-[#111110] placeholder:text-[#8C8881] focus:outline-none focus:border-[#111110] resize-y"
                        />
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-3.5 text-base font-medium text-white bg-[#D9381E] rounded-xl hover:bg-[#B82D16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Send Message
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Clean Minimal Footer with Scroll Fade */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 md:px-10 py-12 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[#4A4845] no-print"
      >
        <p>© {new Date().getFullYear()} Temitope Nurain. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-6">
          {SOCIAL_PROFILES.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111110] transition-colors whitespace-nowrap"
            >
              {profile.name}
            </a>
          ))}
        </div>
      </motion.footer>

      {/* Case Study & Architecture Reader Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="project-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-8 overflow-y-auto no-print"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 space-y-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-6 border-b border-[#E5E0D8] pb-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#D9381E]">
                    {activeProject.categoryLabel}
                  </p>
                  <h2
                    id="modal-project-title"
                    className="font-serif-display text-2xl md:text-4xl font-semibold text-[#111110]"
                  >
                    {activeProject.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-sm font-medium text-[#111110] bg-[#F3EFEA] border border-[#E5E0D8] rounded-xl hover:bg-[#E8E2DA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Close
                </button>
              </div>

              {/* Modal View Switcher */}
              <div className="flex items-center gap-2 p-1.5 bg-[#F3EFEA] rounded-xl border border-[#E5E0D8] w-fit">
                <button
                  type="button"
                  onClick={() => setModalTab('overview')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    modalTab === 'overview'
                      ? 'bg-[#111110] text-white'
                      : 'text-[#4A4845] hover:text-[#111110]'
                  }`}
                >
                  Case Study Overview
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab('architecture')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    modalTab === 'architecture'
                      ? 'bg-[#111110] text-white'
                      : 'text-[#4A4845] hover:text-[#111110]'
                  }`}
                >
                  System & Motion Architecture
                </button>
              </div>

              <AnimatePresence mode="wait">
                {modalTab === 'overview' ? (
                  <motion.div
                    key="overview-tab"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                    className="space-y-8"
                  >
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#F3EFEA] border border-[#E5E0D8]">
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 rounded-xl bg-[#F3EFEA] border border-[#E5E0D8] space-y-2">
                        <h3 className="font-serif-display text-lg font-semibold text-[#111110]">
                          Challenge
                        </h3>
                        <p className="text-sm md:text-base text-[#4A4845] leading-relaxed">
                          {activeProject.challenge}
                        </p>
                      </div>
                      <div className="p-6 rounded-xl bg-[#F3EFEA] border border-[#E5E0D8] space-y-2">
                        <h3 className="font-serif-display text-lg font-semibold text-[#111110]">
                          Approach
                        </h3>
                        <p className="text-sm md:text-base text-[#4A4845] leading-relaxed">
                          {activeProject.approach}
                        </p>
                      </div>
                      <div className="p-6 rounded-xl bg-[#F3EFEA] border border-[#E5E0D8] space-y-2">
                        <h3 className="font-serif-display text-lg font-semibold text-[#111110]">
                          Outcome
                        </h3>
                        <p className="text-sm md:text-base text-[#4A4845] leading-relaxed">
                          {activeProject.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-[#F3EFEA] border border-[#E5E0D8] space-y-4">
                      <h3 className="font-serif-display text-lg font-semibold text-[#111110]">
                        Key Deliverables
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeProject.deliverables.map((item) => (
                          <p key={item} className="text-sm md:text-base text-[#111110] font-medium">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="architecture-tab"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                    className="space-y-6"
                  >
                    <p className="text-base text-[#4A4845]">
                      End-to-end architectural flow from design foundation to production delivery.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {activeProject.architecture.map((step, index) => (
                        <div
                          key={step.stage}
                          className="p-6 rounded-xl bg-[#F3EFEA] border border-[#E5E0D8] space-y-2"
                        >
                          <p className="text-xs font-medium text-[#D9381E] tabular-nums">
                            Step 0{index + 1} — {step.stage}
                          </p>
                          <h3 className="font-serif-display text-xl font-semibold text-[#111110]">
                            {step.title}
                          </h3>
                          <p className="text-sm md:text-base text-[#4A4845] leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Modal Footer Actions */}
              <div className="pt-6 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm font-medium text-white bg-[#D9381E] rounded-xl hover:bg-[#B82D16] transition-colors whitespace-nowrap shrink-0"
                  >
                    Visit Live Project
                  </a>
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm font-medium text-[#111110] bg-[#F3EFEA] border border-[#E5E0D8] rounded-xl hover:bg-[#E8E2DA] transition-colors whitespace-nowrap shrink-0"
                  >
                    Source Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Printable Resume / CV Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            key="resume-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-resume-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.99 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="bg-[#FAF8F5] border border-[#E5E0D8] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 space-y-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E5E0D8] pb-6">
                <div>
                  <h2
                    id="modal-resume-title"
                    className="font-serif-display text-3xl font-semibold text-[#111110]"
                  >
                    Temitope Nurain
                  </h2>
                  <p className="text-base text-[#4A4845] mt-1">
                    Product Designer, Frontend Developer, Motion Graphic Designer & AI Enthusiast
                  </p>
                </div>
                <div className="flex items-center gap-3 no-print">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#D9381E] rounded-xl hover:bg-[#B82D16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Print / Save PDF
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-[#111110] bg-[#F3EFEA] border border-[#E5E0D8] rounded-xl hover:bg-[#E8E2DA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif-display text-xl font-semibold text-[#111110]">
                  Experience
                </h3>
                <div className="space-y-6">
                  {CAREER_TIMELINE.map((role) => (
                    <div
                      key={role.id}
                      className="space-y-2 pb-6 border-b border-[#E5E0D8] last:border-b-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h4 className="font-serif-display text-lg font-semibold text-[#111110]">
                          {role.role} — {role.organization}
                        </h4>
                        <span className="text-sm text-[#4A4845] tabular-nums">{role.period}</span>
                      </div>
                      <p className="text-sm text-[#4A4845]">{role.summary}</p>
                      <div className="space-y-1.5 pt-2">
                        {role.highlights.map((h) => (
                          <p key={h} className="text-sm text-[#111110]">
                            {h}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-t border-[#E5E0D8] pt-6">
                <h3 className="font-serif-display text-xl font-semibold text-[#111110]">
                  Core Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SKILL_GROUPS.map((group) => (
                    <div
                      key={group.title}
                      className="p-4 rounded-xl bg-[#F3EFEA] border border-[#E5E0D8]"
                    >
                      <p className="font-serif-display font-semibold text-[#111110]">
                        {group.title}
                      </p>
                      <p className="text-sm text-[#4A4845] mt-1">
                        {group.capabilities.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
