import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
  as?: 'div' | 'span'
}

const easeOut = [0.22, 0.61, 0.36, 1] as const

export function Reveal({ children, delay = 0, y = 34, duration = 0.9, className, as = 'div' }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, delay, ease: easeOut } },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}

interface StaggerGroupProps {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
}

export function StaggerGroup({ children, className, stagger = 0.09, delayChildren = 0 }: StaggerGroupProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, y = 28 }: { children: ReactNode; className?: string; y?: number }) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}
