import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import styles from './Marquee.module.css'

interface MarqueeProps {
  children: ReactNode
  direction?: 'left' | 'right'
  duration?: number
  className?: string
}

export function Marquee({ children, direction = 'left', duration = 26, className }: MarqueeProps) {
  const prefersReduced = useReducedMotion()

  return (
    <div className={`${styles.track} ${className ?? ''}`}>
      <motion.div
        className={styles.inner}
        animate={prefersReduced ? undefined : { x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
