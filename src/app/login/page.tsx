'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAuth } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()
  const { login, errorMessage, isLoading } = useAuth()

  const [form, setForm] = useState({
    username: '',
    password: '',
    error: '',
    isSubmitting: false,
    incorrectPassword: false,
  })

  const validate = () => {
    if (!form.username.trim()) return 'Bitte Benutzernamen eingeben.'
    if (!form.password) return 'Bitte Passwort eingeben.'
    if (form.incorrectPassword) return 'Falsches Passwort. Bitte versuche es erneut.'
    return ''
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value, error: '', incorrectPassword: false }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationError = validate()
    if (validationError) {
      setForm((current) => ({ ...current, error: validationError }))
      return
    }

    setForm((current) => ({ ...current, isSubmitting: true, error: '', incorrectPassword: false }))

    const success = await login(form.username.trim(), form.password)

    if (success) {
      router.push('/support')
      return
    }

    setForm((current) => ({
      ...current,
      error: errorMessage || 'Anmeldung fehlgeschlagen',
      incorrectPassword: true,
      isSubmitting: false,
    }))
  }

  return (
    <div className="authPage authPage--light">
      <div className="authCard authCard--light">
        <div className="authHeader">
          <h1 className="authTitle">Support</h1>
          <p className="authSubtitle">Bitte melde dich an, um das Support-Postfach zu nutzen</p>
        </div>

        <form onSubmit={handleSubmit} className="authForm">
          {form.error && <div className="formAlert formAlert--danger">{form.error}</div>}

          <div className="fieldGroup">
            <label htmlFor="username" className="fieldLabel">Benutzername</label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              required
              autoComplete="username"
              disabled={form.isSubmitting}
              className="fieldInput"
              placeholder="Dein Benutzername"
            />
          </div>

          <div className="fieldGroup">
            <label htmlFor="password" className="fieldLabel">Passwort</label>
            <input
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              required
              autoComplete="current-password"
              disabled={form.isSubmitting}
              className="fieldInput"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="primaryButton primaryButton--full" disabled={form.isSubmitting || isLoading}>
            {form.isSubmitting || isLoading ? 'Anmelden...' : 'Anmelden'}
          </button>
        </form>
      </div>
    </div>
  )
}
