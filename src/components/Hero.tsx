import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'

function SocialLink({ label }: { label: 'GitHub' | 'LinkedIn' }) {
  const social = portfolio.socialLinks.find((item) => item.label === label)
  if (!social) return null

  const Icon = label === 'GitHub' ? Github : Linkedin
  const content = (
    <>
      <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight size={12} strokeWidth={1.7} aria-hidden="true" />
    </>
  )

  return (
    <a
      className="social-link"
      href={social.url ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="eyebrow-marker" />
            <span>AI &amp; DATA SCIENCE</span>
            <span className="eyebrow-divider">/</span>
            <span>{portfolio.location}</span>
          </motion.div>

          <motion.h1
            className="hero-heading"
            id="hero-heading"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
          >
            <motion.span
              className="hero-heading__line"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              Building Intelligent
            </motion.span>
            <motion.span
              className="hero-heading__line"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              Systems.
            </motion.span>
            <motion.span
              className="hero-heading__line hero-heading__line--accent"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              Turning Data
            </motion.span>
            <motion.span
              className="hero-heading__line hero-heading__line--accent"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              Into Impact<span className="hero-period">.</span>
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6 }}
          >
            {portfolio.introduction}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
          >
            <a className="button button--primary" href="#projects">
              Explore my projects
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              className="button button--quiet"
              href={`mailto:${portfolio.email}`}
            >
              Let’s connect
              <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.88 }}
          >
            <div className="hero-socials" aria-label="Social profiles">
              <SocialLink label="GitHub" />
              <span className="social-separator" aria-hidden="true">
                /
              </span>
              <SocialLink label="LinkedIn" />
            </div>
            <span className="hero-meta__note">
              B.Tech AI &amp; Data Science · Class of {portfolio.graduationYear}
            </span>
          </motion.div>
        </div>

        <motion.aside
          className="hero-art"
          aria-label="Abstract illustration of an AI signal becoming an insight"
          initial={{ opacity: 0, scale: 0.97, x: 12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
        >
          <div className="art-panel">
            <div className="art-panel__header">
              <span>FIELD NOTES</span>
              <span>01 — 04</span>
            </div>
            <div className="signal-visual" aria-hidden="true">
              <div className="signal-visual__grid" />
              <div className="signal-orbit signal-orbit--outer" />
              <div className="signal-orbit signal-orbit--middle" />
              <div className="signal-orbit signal-orbit--inner" />
              <div className="signal-crosshair signal-crosshair--horizontal" />
              <div className="signal-crosshair signal-crosshair--vertical" />
              <svg
                className="signal-path"
                viewBox="0 0 360 360"
                fill="none"
              >
                <path
                  d="M56 228C94 228 91 149 129 149C167 149 158 216 199 216C241 216 231 111 272 111C289 111 293 132 305 132"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeDasharray="3 7"
                />
              </svg>
              <span className="signal-node signal-node--one" />
              <span className="signal-node signal-node--two" />
              <span className="signal-node signal-node--three" />
              <div className="signal-core">
                <span className="signal-core__halo" />
                <Sparkles
                  size={25}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
                <span className="signal-core__label">ML</span>
              </div>
              <span className="signal-tag signal-tag--one">INPUT</span>
              <span className="signal-tag signal-tag--two">MODEL</span>
              <span className="signal-tag signal-tag--three">INSIGHT</span>
              <span className="signal-coord signal-coord--one">18° 31′ N</span>
              <span className="signal-coord signal-coord--two">73° 51′ E</span>
            </div>
            <div className="art-panel__footer">
              <span className="art-panel__signal" />
              <span>OBSERVE <b>→</b> MODEL <b>→</b> UNDERSTAND</span>
            </div>
          </div>
          <div className="art-caption">
            <span>FROM COMPLEXITY</span>
            <span className="art-caption__rule" />
            <span>TO CLARITY</span>
          </div>
        </motion.aside>

        <a className="hero-scroll" href="#projects">
          <span className="hero-scroll__icon">
            <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span>SCROLL TO EXPLORE</span>
        </a>

        <a
          className="hero-resume-link"
          href={portfolio.resumePath}
          download="Kalpesh-Mahadik-Resume.pdf"
        >
          <ArrowDownToLine size={14} strokeWidth={1.7} aria-hidden="true" />
          Download resume
        </a>
      </div>
      <div className="hero-index" aria-hidden="true">
        <MapPin size={11} strokeWidth={1.5} />
        <span>PUNE, INDIA</span>
      </div>
    </section>
  )
}

export default Hero
