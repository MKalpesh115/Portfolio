import { Activity, Leaf, Map, ScanSearch, ShoppingBag, Sparkles } from 'lucide-react'

interface ProjectVisualProps {
  projectNumber: string
  title: string
}

function ProjectVisual({ projectNumber, title }: ProjectVisualProps) {
  const visual = {
    '01': (
      <>
        <div className="project-visual__map-grid" />
        <svg
          className="project-visual__contours"
          viewBox="0 0 640 280"
          fill="none"
        >
          <path d="M-20 177C63 137 77 219 152 183C229 146 218 74 298 104C382 136 391 205 467 179C542 154 549 77 660 98" />
          <path d="M-20 210C55 175 92 250 172 208C248 169 245 110 307 132C376 157 404 231 484 206C568 179 586 115 660 127" />
          <path d="M-20 143C69 102 83 180 136 152C207 116 224 47 294 75C367 104 371 174 455 148C531 125 559 48 660 67" />
          <path d="M-20 91C52 60 93 130 155 107C222 82 245 16 302 40C373 70 417 132 482 105C553 77 588 26 660 39" />
        </svg>
        <span className="project-visual__map-pin">
          <Map size={19} strokeWidth={1.3} aria-hidden="true" />
        </span>
        <span className="project-visual__map-tag">SENTINEL-2 · TIME SERIES</span>
        <span className="project-visual__map-coord">18° 31′ N / 73° 51′ E</span>
        <span className="project-visual__map-legend">
          <i />
          EXCAVATION SIGNATURE
        </span>
      </>
    ),
    '02': (
      <>
        <div className="project-visual__drone-grid" />
        <div className="project-visual__leaf-orbit project-visual__leaf-orbit--one" />
        <div className="project-visual__leaf-orbit project-visual__leaf-orbit--two" />
        <span className="project-visual__leaf">
          <Leaf size={52} strokeWidth={0.85} aria-hidden="true" />
        </span>
        <span className="project-visual__scan">
          <ScanSearch size={16} aria-hidden="true" />
          FIELD SCAN
        </span>
        <span className="project-visual__cnn">CNN / INFERENCE</span>
        <Sparkles
          className="project-visual__spark project-visual__spark--one"
          size={15}
          aria-hidden="true"
        />
        <Sparkles
          className="project-visual__spark project-visual__spark--two"
          size={11}
          aria-hidden="true"
        />
      </>
    ),
    '03': (
      <>
        <div className="project-visual__text-grid" />
        <span className="project-visual__language">मराठी · TEXT ANALYSIS</span>
        <div className="project-visual__review">
          <span className="project-visual__review-mark">“</span>
          <span className="project-visual__review-lines">
            <i />
            <i />
            <i />
          </span>
          <span className="project-visual__review-tag">REVIEW INPUT</span>
        </div>
        <div className="project-visual__tokens">
          <span>TEXT</span>
          <b>→</b>
          <span>TF-IDF</span>
          <b>→</b>
          <span>CLASS</span>
        </div>
        <span className="project-visual__nlp-icon">
          <Activity size={17} aria-hidden="true" />
          NLP PIPELINE
        </span>
      </>
    ),
    '04': (
      <>
        <div className="project-visual__chart-grid" />
        <div className="project-visual__chart-head">
          <span>SALES OVERVIEW</span>
          <ShoppingBag size={17} strokeWidth={1.4} aria-hidden="true" />
        </div>
        <div className="project-visual__chart">
          <span className="project-visual__chart-y">REVENUE</span>
          <svg viewBox="0 0 500 170" fill="none" aria-hidden="true">
            <path
              d="M0 139C42 127 48 112 86 119C127 127 129 93 169 100C208 107 220 65 254 76C293 88 309 54 341 61C380 69 393 31 428 43C460 53 478 25 500 18"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M0 139C42 127 48 112 86 119C127 127 129 93 169 100C208 107 220 65 254 76C293 88 309 54 341 61C380 69 393 31 428 43C460 53 478 25 500 18V170H0V139Z"
              fill="url(#chart-fill)"
              fillOpacity=".14"
            />
            <defs>
              <linearGradient id="chart-fill" x1="250" y1="18" x2="250" y2="170">
                <stop stopColor="currentColor" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <span className="project-visual__chart-x">ORDERS · CUSTOMERS · REGION</span>
        </div>
        <span className="project-visual__dashboard">POSTGRESQL / POWER BI</span>
      </>
    ),
  }[projectNumber]

  return (
    <div
      className={`project-visual project-visual--${projectNumber}`}
      role="img"
      aria-label={`Abstract ${title} project illustration`}
    >
      {visual}
    </div>
  )
}

export default ProjectVisual
