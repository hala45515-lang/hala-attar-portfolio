import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useCounter } from '../../hooks/useCounter'
import { skills } from '../../data/skills'
import { moreProjects } from '../../data/projects'
import styles from './About.module.css'

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCounter<HTMLSpanElement>(target)
  return (
    <div className={styles.stat}>
      <span ref={ref} className={styles.statNumber}>
        {value}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export function About() {
  const projectsCount = moreProjects.length + 1
  const skillsCount = skills.length

  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHeading
          eyebrow="Who I am"
          title={
            <>
              About <em>me</em>
            </>
          }
        />

        <div className={styles.grid}>
          <Reveal className={styles.bio} delay={0.1}>
            <p>
              I build interfaces that feel as good as they look. As a frontend developer, I focus
              on the details — smooth interactions, clean layouts, and code that scales — using
              React, Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p>
              I love projects that mix creativity with structure, from e-commerce sites to
              internal tools, and I'm always exploring new ways to make the web feel a little more
              delightful.
            </p>
          </Reveal>

          <Reveal className={styles.stats} delay={0.25}>
            <Stat target={projectsCount} suffix="+" label="Projects Shipped" />
            <Stat target={skillsCount} suffix="" label="Core Technologies" />
            <Stat target={100} suffix="%" label="Pixel-Perfect Focus" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
