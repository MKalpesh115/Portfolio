import { motion } from 'framer-motion'
import { ArrowUpRight, Lightbulb, Terminal, Trophy } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const achievementIcons = [Trophy, Lightbulb, Terminal]

function Achievements() {
  return (
    <section
      className="content-section achievements-section"
      id="achievements"
    >
      <div className="section-container">
        <SectionHeading
          index="4"
          title="Milestones That Matter"
          subtitle="Recognition earned through building, persistence, and problem-solving."
        />

        <div className="achievements-grid">
          {portfolio.achievements.map((achievement, index) => {
            const Icon = achievementIcons[index] ?? Trophy
            return (
              <motion.article
                className={`achievement-card${index === 1 ? ' achievement-card--patent' : ''}`}
                key={achievement.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.07,
                  ease: 'easeOut',
                }}
              >
                <div className="achievement-card__top">
                  <span className="achievement-card__icon">
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="achievement-card__index">
                    0{index + 1}
                  </span>
                </div>
                <div className="achievement-card__copy">
                  <span className="achievement-card__context">
                    {achievement.context}
                  </span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
                {achievement.link && (
                  <a
                    className="achievement-card__link"
                    href={achievement.link.url ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={achievement.link.label}
                  >
                    {achievement.link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
