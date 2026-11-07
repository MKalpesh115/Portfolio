import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  Code2,
} from 'lucide-react'
import { portfolio } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function getSocialIcon(label: string) {
  switch (label) {
    case 'GitHub':
      return Github
    case 'LinkedIn':
      return Linkedin
    case 'LeetCode':
      return Code2
    default:
      return null
  }
}

function Contact() {
  const [formNotice, setFormNotice] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormNotice(true)
  }

  return (
    <section className="content-section contact-section" id="contact">
      <div className="section-container">
        <SectionHeading
          index="5"
          title="Let's Build Something Intelligent."
          subtitle="Have an interesting problem to solve? Let's connect and explore how we can create something meaningful."
        />

        <div className="contact-layout">
          <motion.div
            className="contact-details"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="contact-details__intro">
              Have a project, opportunity, or an interesting idea? I’d be glad
              to hear from you.
            </p>

            <a className="contact-method" href={`mailto:${portfolio.email}`}>
              <span className="contact-method__icon">
                <Mail size={18} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="contact-method__copy">
                <span>EMAIL</span>
                <strong>{portfolio.email}</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <div className="contact-method contact-method--static">
              <span className="contact-method__icon">
                <Phone size={18} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="contact-method__copy">
                <span>PHONE</span>
                <strong>{portfolio.phone}</strong>
              </span>
            </div>

            <div className="contact-socials">
              <span className="contact-socials__label">FIND ME ELSEWHERE</span>
              <div className="contact-socials__links">
                {portfolio.socialLinks.map((social) => {
                  const Icon = getSocialIcon(social.label)
                  if (!Icon || !social.url) return null

                  return (
                    <a
                      className="contact-social-link"
                      href={social.url}
                      key={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                      {social.label}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          >
            <div className="contact-form__heading">
              <span>DROP A NOTE</span>
              <Send size={16} strokeWidth={1.6} aria-hidden="true" />
            </div>

            <label className="form-field" htmlFor="contact-name">
              <span>Name</span>
              <input
                autoComplete="name"
                id="contact-name"
                name="name"
                placeholder="Your name"
                required
              />
            </label>

            <label className="form-field" htmlFor="contact-email">
              <span>Email</span>
              <input
                autoComplete="email"
                id="contact-email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>

            <label className="form-field" htmlFor="contact-message">
              <span>Message</span>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about what you have in mind..."
                required
                rows={4}
              />
            </label>

            <button
              className="button button--primary contact-form__submit"
              type="submit"
            >
              Send message
              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </button>

            <p
              className={`contact-form__notice${formNotice ? ' contact-form__notice--active' : ''}`}
              role="status"
              aria-live="polite"
            >
              {formNotice
                ? `This form isn’t connected to a messaging service, so your message hasn’t been sent. Please email me at ${portfolio.email}.`
                : 'This form is not connected to a messaging service yet. Please email me directly to get in touch.'}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
