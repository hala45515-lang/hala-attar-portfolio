import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'

const SESSION_KEY = 'hala-portfolio-seen-intro'
const easeOut = [0.22, 0.61, 0.36, 1] as const

function shouldShowIntro() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return sessionStorage.getItem(SESSION_KEY) !== '1'
}

export function Preloader() {
  const [show, setShow] = useState(shouldShowIntro)

  // Runs once per mount (and safely twice under React StrictMode dev —
  // each run gets its own fresh timer, so the double-invoke can't leave
  // the preloader stuck without an active hide-timer).
  useEffect(() => {
    if (!show) return

    sessionStorage.setItem(SESSION_KEY, '1')
    const timer = setTimeout(() => setShow(false), 1600)
    return () => clearTimeout(timer)
  }, [show])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = show ? 'hidden' : previousOverflow
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: easeOut } }}
        >
          <div className={styles.center}>
            <motion.span
              className={styles.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              HALA ATTAR
            </motion.span>
            <div className={styles.barTrack}>
              <motion.div
                className={styles.barFill}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: easeOut, delay: 0.15 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
