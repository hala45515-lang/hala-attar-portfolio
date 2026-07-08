import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent } from 'react'
import heroPhoto from '../../assets/images/hala-photo-real.jpeg'
import { MagneticButton } from '../ui/MagneticButton'
import styles from './Hero.module.css'

const easeOut = [0.22, 0.61, 0.36, 1] as const

function useStagger(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: easeOut, delay },
  }
}

export function Hero() {
  const prefersReduced = useReducedMotion()
  const px = useMotionValue(50)
  const py = useMotionValue(50)
  const spotX = useSpring(px, { stiffness: 60, damping: 20 })
  const spotY = useSpring(py, { stiffness: 60, damping: 20 })
  const spotXPercent = useTransform(spotX, (v) => `${v}%`)
  const spotYPercent = useTransform(spotY, (v) => `${v}%`)

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - rect.left) / rect.width) * 100)
    py.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <header id="top" className={styles.hero} onMouseMove={handleMouseMove}>
      <motion.div
        className={styles.spotlight}
        style={{ '--spot-x': spotXPercent, '--spot-y': spotYPercent } as never}
      />
      <div className={styles.noise} />

      <div className={`wrap ${styles.grid}`}>
        <div className={styles.text}>
          <motion.div {...useStagger(0.1)} className={styles.kicker}>
            <span className="eyebrow">Portfolio · 2026</span>
          </motion.div>

          <motion.h1 {...useStagger(0.24)} className={styles.name}>
            HALA
            <br />
            <span className={styles.lineTwo}>ATTAR</span>
          </motion.h1>

          <motion.p {...useStagger(0.38)} className={styles.title}>
            Frontend Developer
          </motion.p>

          <motion.p {...useStagger(0.5)} className={styles.bio}>
            I build fast, beautiful, and thoughtful web experiences — turning ideas into clean,
            pixel-perfect interfaces.
          </motion.p>

          <motion.div {...useStagger(0.62)} className={styles.cta}>
            <MagneticButton>
              <a href="#projects" className="btn btn--solid">
                See My Work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://github.com/hala45515-lang"
                target="_blank"
                rel="noopener"
                className="btn btn--ghost"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48l-.01-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                </svg>
                GitHub
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className={styles.art}
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: easeOut, delay: 0.3 }}
        >
          <motion.div
            className={styles.glowPulse}
            animate={prefersReduced ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.06, 1] }}
            transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.div
            className={styles.ring}
            animate={prefersReduced ? undefined : { rotate: -360 }}
            transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className={`${styles.blob} ${styles.b1}`}
            animate={prefersReduced ? undefined : { rotate: 360 }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className={`${styles.blob} ${styles.b2}`}
            animate={prefersReduced ? undefined : { rotate: -360 }}
            transition={{ duration: 46, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className={`${styles.blob} ${styles.b3}`}
            animate={prefersReduced ? undefined : { rotate: 360 }}
            transition={{ duration: 34, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            className={styles.photoWrap}
            animate={prefersReduced ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          >
            <img src={heroPhoto} alt="Hala Attar — Frontend Developer" className={styles.photo} />
          </motion.div>
          <motion.span
            className={`${styles.sparkle} ${styles.sparkle1}`}
            animate={prefersReduced ? undefined : { opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
            transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, delay: 0.4 }}
          />
          <motion.span
            className={`${styles.sparkle} ${styles.sparkle2}`}
            animate={prefersReduced ? undefined : { opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
            transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity, delay: 1.6 }}
          />
          <motion.span
            className={styles.floatTag}
            animate={prefersReduced ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
          >
            // crafting interfaces
          </motion.span>
        </motion.div>
      </div>
    </header>
  )
}
