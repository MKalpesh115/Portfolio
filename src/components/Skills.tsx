import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Code2,
  Languages,
  Server,
  Wrench,
  Workflow,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const categoryIcons = [
  Code2,
  BrainCircuit,
  Languages,
  Server,
  Wrench,
  Workflow,
]

function Skills() {
  return (
    <section className="content-section skills-section" id="skills">
      <div className="section-container">
        <SectionHeading
          index="3"
          title="Tools of My Trade"
          subtitle="Technologies I use to turn data into intelligent solutions."
        />

        <div className="skills-grid">
          {portfolio.skillGroups.map((group, index) => {
            const Icon = categoryIcons[index] ?? Code2
            return (
              <motion.article
                className="skill-card"
                key={group.name}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.42,
                  delay: (index % 3) * 0.06,
                  ease: 'easeOut',
                }}
              >
                <div className="skill-card__head">
                  <span className="skill-card__icon">
                    <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="skill-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3>{group.name}</h3>
                <div className="skill-card__list">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
        <p className="skills-footnote">
          A toolkit that keeps growing with every problem I take on.
        </p>
      </div>
    </section>
  )
}

export default Skills
