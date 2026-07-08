import { motion } from 'framer-motion'
import { useCounter } from '../../hooks/useCounter'
import styles from './CircularProgress.module.css'

interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
  delay?: number
}

export function CircularProgress({ value, size = 64, strokeWidth = 4, color = 'var(--violet-3)', delay = 0 }: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - value / 100)
  const { ref: labelRef, value: animatedValue } = useCounter<HTMLSpanElement>(value, 1.3)

  return (
    <div className={styles.wrap} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, delay, ease: [0.22, 0.61, 0.36, 1] }}
        />
      </svg>
      <span ref={labelRef} className={styles.label}>
        {animatedValue}%
      </span>
    </div>
  )
}
