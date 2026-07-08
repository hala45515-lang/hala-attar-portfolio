import { useState, type FormEvent } from 'react'
import { Reveal } from '../ui/Reveal'
import { sendContactEmail } from '../../lib/emailjs'
import styles from './Contact.module.css'

type Status = 'idle' | 'sending' | 'ok' | 'err'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    try {
      await sendContactEmail({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        message: String(data.get('message') ?? ''),
      })
      setStatus('ok')
      form.reset()
    } catch {
      setErrorMsg("Couldn't send. Email me directly at hala45515@gmail.com")
      setStatus('err')
    }
  }

  return (
    <section className="section" id="contact">
      <div className={styles.dots} />
      <div className="wrap">
        <Reveal className={styles.split}>
          <div className={styles.left}>
            <span className="eyebrow">Get in touch</span>
            <h2 className={styles.big}>
              Let's Build
              <br />
              <em className="grad-text">Something.</em>
            </h2>
            <p className={styles.sub}>
              Open to freelance projects, collaborations, and exciting opportunities. Let's talk.
            </p>
            <div className={styles.social}>
              <a href="mailto:hala45515@gmail.com" className={styles.chip}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                hala45515@gmail.com
              </a>
              <a
                href="https://github.com/hala45515-lang"
                target="_blank"
                rel="noopener"
                className={styles.chip}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48l-.01-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hala-attar-93a690214"
                target="_blank"
                rel="noopener"
                className={styles.chip}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.formCard}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" type="text" name="name" placeholder="Your name" required autoComplete="name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" name="message" rows={5} placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className={`btn btn--solid ${styles.submit}`} disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <span className={styles.spinner} />
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 16, height: 16 }}>
                    <path d="M22 2 11 13M22 2 15 22 11 13 2 9l20-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'ok' && (
                <div className={`${styles.formStatus} ${styles.ok}`}>✓ Message sent! I'll get back to you soon.</div>
              )}
              {status === 'err' && <div className={`${styles.formStatus} ${styles.errMsg}`}>✗ {errorMsg}</div>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
