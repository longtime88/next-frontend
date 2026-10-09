'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuth } from '@/lib/auth'

export default function RegisterPage() {
  const router = useRouter()
  const { register, errorMessage, isLoading } = useAuth()

  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    error: '',
    isSubmitting: false,
  })

  const validate = () => {
    if (!form.username.trim()) return 'Bitte Benutzernamen eingeben.'
    if (form.username.length < 3) return 'Benutzername muss mindestens 3 Zeichen haben.'
    if (!form.password) return 'Bitte Passwort eingeben.'
    if (form.password.length < 6) return 'Passwort muss mindestens 6 Zeichen haben.'
    if (form.password !== form.confirmPassword) return 'Passwörter stimmen nicht überein.'
    return ''
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value, error: '' }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationError = validate()
    if (validationError) {
      setForm((current) => ({ ...current, error: validationError }))
      return
    }

    setForm((current) => ({ ...current, isSubmitting: true, error: '' }))

    const success = await register(form.username.trim(), form.password)

    if (success) {
      router.push('/')
      return
    }

    setForm((current) => ({
      ...current,
      error: errorMessage || 'Registrierung fehlgeschlagen',
      isSubmitting: false,
    }))
  }

  return (
    <div className="authPage authPage--dark">
      <div className="authCard authCard--dark">
        <div className="authHeader">
          <h1 className="authTitle authTitle--dark">WorkoutApp</h1>
          <p className="authSubtitle authSubtitle--dark">Erstelle dein Konto</p>
        </div>

        <form onSubmit={handleSubmit} className="authForm">
          {form.error && <div className="formAlert formAlert--danger-dark">{form.error}</div>}

          <div className="fieldGroup">
            <label htmlFor="username" className="fieldLabel fieldLabel--dark">Benutzername</label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              required
              autoComplete="username"
              disabled={form.isSubmitting}
              className="fieldInput fieldInput--dark"
              placeholder="Dein Benutzername"
            />
          </div>

          <div className="fieldGroup">
            <label htmlFor="password" className="fieldLabel fieldLabel--dark">Passwort</label>
            <input
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              required
              autoComplete="new-password"
              minLength={6}
              disabled={form.isSubmitting}
              className="fieldInput fieldInput--dark"
              placeholder="••••••••"
            />
          </div>

          <div className="fieldGroup">
            <label htmlFor="confirmPassword" className="fieldLabel fieldLabel--dark">Passwort bestätigen</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              type="password"
              required
              autoComplete="new-password"
              minLength={6}
              disabled={form.isSubmitting}
              className="fieldInput fieldInput--dark"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="primaryButton primaryButton--dark primaryButton--full" disabled={form.isSubmitting || isLoading}>
            {form.isSubmitting || isLoading ? 'Registrieren...' : 'Registrieren'}
          </button>

          <p className="authFooterText">
            Hast du schon ein Konto?{' '}
            <Link href="/login" className="authLink">
              Anmelden
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
