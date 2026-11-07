import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownToLine, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    const sections = portfolio.navigation
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)
    let previousScrollY = window.scrollY

    const updateActiveSection = () => {
      const headerOffset =
        document.querySelector('.site-header')?.getBoundingClientRect().height ??
        82
      const current = sections.reduce<HTMLElement | undefined>(
        (active, section) =>
          section.getBoundingClientRect().top <= headerOffset + 80
            ? section
            : active,
        sections[0],
      )

      if (current) setActiveSection(current.id)
    }

    const handleScroll = () => {
      if (window.scrollY === previousScrollY) return
      previousScrollY = window.scrollY
      updateActiveSection()
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const navigateToSection = (href: string) => {
    const section = document.getElementById(href.slice(1))
    if (!section) return

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'instant'
      : 'smooth'

    setActiveSection(section.id)
    section.scrollIntoView({ behavior, block: 'start' })
    if (window.location.hash !== href) {
      window.history.pushState(null, '', href)
    }
    closeMenu()
  }

  return (
    <header
      className={`site-header${isScrolled ? ' site-header--scrolled' : ''}${isMenuOpen ? ' site-header--menu-open' : ''}`}
    >
      <div className="nav-shell">
        <a
          className="brand"
          href="#home"
          aria-label={`${portfolio.name}, home`}
          onClick={(event) => {
            event.preventDefault()
            navigateToSection('#home')
          }}
        >
          <span className="brand-mark" aria-hidden="true">
            {portfolio.monogram}
          </span>
          <span className="brand-label">
            <span>{portfolio.name}</span>
            <span className="brand-label__caption">AI / DATA SCIENCE</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {portfolio.navigation.map((item) => (
            <a
              className="nav-link"
              href={item.href}
              key={item.label}
              aria-current={
                item.href === `#${activeSection}` ? 'page' : undefined
              }
              onClick={(event) => {
                event.preventDefault()
                navigateToSection(item.href)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-resume"
          href={portfolio.resumePath}
          download="Kalpesh-Mahadik-Resume.pdf"
        >
          <span>Resume</span>
          <ArrowDownToLine size={15} strokeWidth={1.8} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={21} strokeWidth={1.7} aria-hidden="true" />
          ) : (
            <Menu size={21} strokeWidth={1.7} aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {portfolio.navigation.map((item, index) => (
              <motion.a
                className="mobile-nav__link"
                href={item.href}
                key={item.label}
                onClick={(event) => {
                  event.preventDefault()
                  navigateToSection(item.href)
                }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.025, duration: 0.18 }}
                aria-current={
                  item.href === `#${activeSection}` ? 'page' : undefined
                }
              >
                <span className="mobile-nav__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.label}
              </motion.a>
            ))}
            <a
              className="mobile-nav__resume"
              href={portfolio.resumePath}
              download="Kalpesh-Mahadik-Resume.pdf"
              onClick={closeMenu}
            >
              Download resume
              <ArrowDownToLine size={16} aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
