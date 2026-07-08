import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'
import { processSteps } from '../../data/process'
import styles from './Process.module.css'

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHeading
          eyebrow="How I work"
          title={
            <>
              My <em>process</em>
            </>
          }
          description="A straightforward path from idea to shipped product, repeated for every project."
        />

        <div className={styles.steps} ref={containerRef}>
          <div className={styles.lineTrack}>
            <motion.div className={styles.lineFill} style={{ scaleX: lineScale }} />
          </div>

          <StaggerGroup className={styles.grid}>
            {processSteps.map((step) => (
              <StaggerItem key={step.no}>
                <div className={styles.step}>
                  <span className={styles.no}>{step.no}</span>
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.desc}>{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
