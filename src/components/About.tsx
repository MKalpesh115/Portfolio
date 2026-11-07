import { motion } from 'framer-motion'
import { ArrowDownRight, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function About() {
  const { education } = portfolio

  return (
    <section className="content-section about-section" id="about">
      <div className="section-container">
        <SectionHeading
          index="1"
          title="Beyond the Code"
          subtitle="Curiosity, collaboration, and a drive to make technology useful."
        />

        <div className="about-layout">
          <motion.div
            className="about-copy"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            {portfolio.about.map((paragraph, index) => (
              <p
                className={index === 0 ? 'about-copy__lead' : undefined}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.aside
            className="about-aside"
            aria-label="Education and personal interests"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="about-visual">
              <div className="about-visual__grid" aria-hidden="true" />
              <div className="about-visual__orbit about-visual__orbit--outer" />
              <div className="about-visual__orbit about-visual__orbit--inner" />
              <div className="about-visual__center">
                <Sparkles size={25} strokeWidth={1.3} aria-hidden="true" />
                <span>IDEAS → IMPACT</span>
              </div>
              <span className="about-visual__label about-visual__label--top">
                LEARN
              </span>
              <span className="about-visual__label about-visual__label--right">
                BUILD
              </span>
              <span className="about-visual__label about-visual__label--bottom">
                GROW
              </span>
              <span className="about-visual__label about-visual__label--left">
                SHARE
              </span>
              <span className="about-visual__index">FIELD NOTE — 01</span>
            </div>

            <div className="education-card">
              <div className="education-card__icon">
                <GraduationCap size={19} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <div className="education-card__body">
                <span className="education-card__eyebrow">EDUCATION</span>
                <h3>{education.degree}</h3>
                <p>{education.institution}</p>
                <div className="education-card__meta">
                  <span>{education.years}</span>
                  <span className="education-card__divider" />
                  <span>CGPA {education.cgpa}</span>
                </div>
              </div>
              <ArrowDownRight
                className="education-card__arrow"
                size={17}
                aria-hidden="true"
              />
            </div>

            <div className="about-location">
              <MapPin size={14} strokeWidth={1.6} aria-hidden="true" />
              <span>BASED IN {portfolio.location.toUpperCase()}</span>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default About
