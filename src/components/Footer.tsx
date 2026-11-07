import { ArrowUpRight, Code2, Github, Linkedin } from 'lucide-react'
import { portfolio } from '../data/portfolio'

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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            {portfolio.monogram}
          </span>
          <span className="footer-brand__text">
            <strong>{portfolio.name}</strong>
            <span>AI/ML Engineer | Data Science</span>
          </span>
        </a>

        <nav className="footer-socials" aria-label="Social links">
          {portfolio.socialLinks.map((social) => {
            const Icon = getSocialIcon(social.label)
            if (!Icon || !social.url) return null

            return (
              <a
                className="footer-social-link"
                href={social.url}
                key={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={15} strokeWidth={1.6} aria-hidden="true" />
                <span>{social.label}</span>
                <ArrowUpRight size={11} aria-hidden="true" />
              </a>
            )
          })}
        </nav>

        <span className="footer-copyright">
          © {new Date().getFullYear()} {portfolio.name}
        </span>
      </div>
    </footer>
  )
}

export default Footer
