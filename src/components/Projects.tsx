import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import ProjectVisual from './ProjectVisual'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-container">
        <SectionHeading
          index="2"
          title="Things I've Built"
          subtitle="Turning ideas into intelligent, data-driven applications."
        />

        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <motion.article
              className={`project-card${index === 0 ? ' project-card--featured' : ''}${project.award ? ' project-card--patented' : ''}`}
              key={project.number}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.48,
                delay: index === 0 ? 0 : (index % 2) * 0.08,
                ease: 'easeOut',
              }}
            >
              <div className="project-card__visual-wrap">
                <ProjectVisual
                  projectNumber={project.number}
                  title={project.title}
                />
                <span className="project-card__number">
                  PROJECT / {project.number}
                </span>
                {project.award && (
                  <span className="project-card__award">
                    <span aria-hidden="true">✳</span> {project.award}
                  </span>
                )}
              </div>

              <div className="project-card__content">
                <div className="project-card__eyebrow">{project.category}</div>
                <h3>{project.title}</h3>
                <div className="project-card__description">
                  {project.description.split('\n\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div
                  className="project-card__technologies"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-card__actions">
                  {project.repository.url && (
                    <a
                      className="project-card__link"
                      href={project.repository.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} strokeWidth={1.7} aria-hidden="true" />
                      View repository
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </a>
                  )}
                  <span className="project-card__action-note">
                    SOURCE CODE
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
