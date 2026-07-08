import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'
import styles from './TiltCard.module.css'

interface TiltCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  maxTilt?: number
}

export function TiltCard({ children, className, glowColor = 'rgba(167,139,250,.5)', maxTilt = 10 }: TiltCardProps) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const springConfig = { stiffness: 220, damping: 22 }
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), springConfig)
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), springConfig)
  const glowX = useSpring(useTransform(px, [0, 1], [0, 100]), springConfig)
  const glowY = useSpring(useTransform(py, [0, 1], [0, 100]), springConfig)
  const glowXPercent = useTransform(glowX, (v) => `${v}%`)
  const glowYPercent = useTransform(glowY, (v) => `${v}%`)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      className={`${styles.card} ${className ?? ''}`}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.div
        className={styles.glow}
        style={
          {
            '--glow-x': glowXPercent,
            '--glow-y': glowYPercent,
            '--glow-color': glowColor,
          } as never
        }
      />
      <div className={styles.content}>{children}</div>
    </motion.div>
  )
}
