'use client'

import Link from 'next/link'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className="support-form-screen">
      <div className={styles.page}>
        <nav className={styles.authActions} aria-label="Konto">
          <Link className={styles.loginButton} href="/login">Anmelden</Link>
          <Link className={styles.registerButton} href="/register">Registrieren</Link>
        </nav>

        <section className={styles.intro} aria-labelledby="support-title">
          <div className={styles.introContent}>
            <p className={styles.eyebrow}><span />Persönlicher Support</p>
            <h1 id="support-title">Noch Fragen? Schreib uns.</h1>
            <p className={styles.introCopy}>
              Beschreibe kurz dein Anliegen. Je mehr Details du uns gibst, desto schneller können wir helfen.
            </p>

            <div className={styles.supportDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <span>
                  <strong>Schnelle Antwort</strong>
                  <small>In der Regel innerhalb von 24 Stunden</small>
                </span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 18.5 5.8 15A7.5 7.5 0 1 1 9 18.2L5 18.5Z" />
                    <path d="M8.5 10.5h7M8.5 13.5h4" />
                  </svg>
                </span>
                <span>
                  <strong>Echte Menschen</strong>
                  <small>Persönlich, verständlich und lösungsorientiert</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formPanel} aria-labelledby="form-title">
          <header className={styles.formHeader}>
            <p>Kontaktformular</p>
            <h2 id="form-title">Support-Anfrage senden</h2>
          </header>

          <form className={styles.form}>
            <label className={styles.field}>
              <span>Name</span>
              <input type="text" name="name" placeholder="Max Mustermann" required />
            </label>
            <label className={styles.field}>
              <span>E-Mail</span>
              <input type="email" name="email" placeholder="max@beispiel.de" required />
            </label>
            <label className={styles.field}>
              <span>Thema</span>
              <select name="topic" defaultValue="" required>
                <option value="" disabled>Bitte auswählen</option>
                <option value="account">Konto &amp; Zugang</option>
                <option value="billing">Abrechnung</option>
                <option value="technical">Technische Hilfe</option>
                <option value="other">Sonstiges</option>
              </select>
            </label>
            <label className={styles.field}>
              <span>Wie können wir helfen?</span>
              <textarea
                name="message"
                placeholder="Beschreibe dein Anliegen möglichst genau …"
                required
              />
            </label>

            <p className={styles.privacyNote}>
              Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zur Bearbeitung zu.
            </p>
            <button className={styles.submitButton} type="submit">
              Anfrage senden
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h11M10 5l5 5-5 5" />
              </svg>
            </button>
          </form>
        </section>

        <footer className={styles.footer}>© 2025 Nexa <span>·</span> Datenschutz <span>·</span> Impressum</footer>
      </div>
    </div>
  )
}
