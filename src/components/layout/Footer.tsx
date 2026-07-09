import { SiWhatsapp } from 'react-icons/si'
import { Reveal } from '../ui/Reveal'
import { MagneticButton } from '../ui/MagneticButton'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.foot}>
      <div className="wrap">
        <Reveal className={styles.cta}>
          <span className={styles.ctaText}>Have a project? Let's talk</span>
          <MagneticButton>
            <a
              href="https://wa.me/905313869483"
              target="_blank"
              rel="noopener"
              className={styles.whatsapp}
            >
              <SiWhatsapp />
              +90 531 386 94 83
            </a>
          </MagneticButton>
        </Reveal>

        <div className={styles.inner}>
          <button className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <MagneticButton>
              <span className={styles.topCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </MagneticButton>
          </button>

          <p>© 2026 Hala Attar — Frontend Developer</p>
          <p>
            <a href="mailto:hala45515@gmail.com">hala45515@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
