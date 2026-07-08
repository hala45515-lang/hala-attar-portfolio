import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState, type MouseEvent } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { featuredProject, moreProjects, type MoreProject } from '../../data/projects'
import styles from './Projects.module.css'

const GITHUB_ICON_PATH =
  'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48l-.01-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z'

function MoreProjectCard({ project }: { project: MoreProject }) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const springConfig = { stiffness: 220, damping: 22 }
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), springConfig)
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), springConfig)

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener"
      className={styles.card}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className={styles.cardImg}>
        <img src={project.image} alt={`${project.title} preview`} />
        <span className={styles.cardNo}>{project.no}</span>
        <span className={styles.cardView}>
          View Live
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <div className={styles.cardBody}>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className={styles.cardTags}>
          {project.tags.split(' / ').map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className={styles.cardLink}>
          Live <span>→</span>
        </span>
      </div>
    </motion.a>
  )
}

export function Projects() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % featuredProject.tabs.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  function handleTabClick(index: number) {
    setActiveTab(index)
  }

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects &amp; <em>builds</em>
            </>
          }
        />

        <Reveal className={styles.featured}>
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <div className={styles.dots}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yel}`} />
                <span className={`${styles.dot} ${styles.grn}`} />
              </div>
              <span className={styles.url}>{featuredProject.tabs[activeTab].url}</span>
            </div>

            <div className={styles.tabs}>
              {featuredProject.tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  className={i === activeTab ? styles.tabActive : styles.tab}
                  onClick={() => handleTabClick(i)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={styles.screen}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={featuredProject.tabs[activeTab].image}
                  alt={`${featuredProject.title} — ${featuredProject.tabs[activeTab].label}`}
                  className={styles.screenImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className={styles.info}>
            <span className={styles.badge}>{featuredProject.badge}</span>
            <h3 className={styles.title}>{featuredProject.title}</h3>
            <p className={styles.desc}>{featuredProject.description}</p>
            <div className={styles.tagList}>
              {featuredProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={featuredProject.link} target="_blank" rel="noopener" className="btn btn--dark">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                <path d={GITHUB_ICON_PATH} />
              </svg>
              {featuredProject.linkLabel}
              &nbsp;<span style={{ opacity: 0.5, fontSize: 13 }}>· {featuredProject.linkNote}</span>
            </a>
          </div>
        </Reveal>

        <div className={styles.more}>
          <Reveal className={styles.moreHead}>
            <h3>More Work</h3>
            <span className={styles.count}>[ {String(moreProjects.length).padStart(2, '0')} / live ]</span>
          </Reveal>

          <StaggerGroup className={styles.grid}>
            {moreProjects.map((project) => (
              <StaggerItem key={project.no}>
                <MoreProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
