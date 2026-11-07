import { motion } from 'framer-motion'

interface SectionHeadingProps {
  index: string
  title: string
  subtitle: string
}

function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="section-heading"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="section-heading__eyebrow">
        <span className="eyebrow-marker" />
        <span>0{index} / PORTFOLIO</span>
      </div>
      <h2 className="section-heading__title">{title}</h2>
      <p className="section-heading__subtitle">{subtitle}</p>
    </motion.div>
  )
}

export default SectionHeading
