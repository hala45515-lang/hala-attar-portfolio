import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { testimonials } from '../../data/testimonials'
import styles from './Testimonials.module.css'

const AUTO_ADVANCE_MS = 6000

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  function go(newIndex: number, dir: number) {
    setDirection(dir)
    setIndex((newIndex + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => go(index + 1, 1), AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -80) go(index + 1, 1)
    else if (info.offset.x > 80) go(index - 1, -1)
  }

  const current = testimonials[index]

  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <SectionHeading
          eyebrow="Kind words"
          title={
            <>
              What people <em>say</em>
            </>
          }
        />

        <Reveal className={styles.carousel}>
          <div className={styles.viewport}>
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                className={styles.card}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <span className={styles.quoteMark}>“</span>
                <blockquote className={styles.quote}>{current.quote}</blockquote>
                <figcaption className={styles.meta}>
                  <span className={styles.avatar} style={{ background: current.avatarColor }}>
                    {current.initials}
                  </span>
                  <span className={styles.metaText}>
                    <span className={styles.name}>{current.name}</span>
                    <span className={styles.role}>{current.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={i === index ? styles.dotActive : styles.dot}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => go(i, i > index ? 1 : -1)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
