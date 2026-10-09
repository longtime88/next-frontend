'use client'

import { useCallback, useEffect, useState } from 'react'

const apiBase = () => process.env.NEXT_PUBLIC_API_BASE || ''

interface User {
  username: string
  id: number
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string>(() =>
    typeof window === 'undefined' ? '' : (localStorage.getItem('token') ?? '')
  )
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const persistToken = useCallback((nextToken: string) => {
    setToken(nextToken)

    if (typeof window === 'undefined') {
      return
    }

    if (nextToken) {
      localStorage.setItem('token', nextToken)
    } else {
      localStorage.removeItem('token')
    }
  }, [])

  const fetchUser = useCallback(async (tokenValue = token) => {
    if (!tokenValue) {
      return
    }

    try {
      const response = await fetch(`${apiBase()}/auth/me`, {
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      })

      if (!response.ok) {
        throw new Error('Unauthorized')
      }

      const data: User = await response.json()
      setUser(data)
    } catch {
      setUser(null)
      persistToken('')
    }
  }, [token, persistToken])

  useEffect(() => {
    if (token) {
      // Session restore: loading the user for an existing token (e.g. after a
      // page reload) has no event handler to live in, so an effect is the
      // correct place (react.dev/learn/synchronizing-with-effects#fetching-data).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchUser(token)
    }
  }, [token, fetchUser])

  const login = async (username: string, password: string) => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch(`${apiBase()}/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ username, password }),
      })

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}))
        throw new Error(errorBody.detail || 'Anmeldung fehlgeschlagen')
      }

      const data = await response.json()
      persistToken(data.access_token)
      await fetchUser(data.access_token)
      return true
    } catch (error: unknown) {
      setErrorMessage((error instanceof Error && error.message) || 'Anmeldung fehlgeschlagen')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (username: string, password: string) => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch(`${apiBase()}/auth/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}))
        throw new Error(errorBody.detail || 'Registrierung fehlgeschlagen')
      }

      return await login(username, password)
    } catch (error: unknown) {
      setErrorMessage((error instanceof Error && error.message) || 'Registrierung fehlgeschlagen')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    persistToken('')
  }

  return {
    user,
    token,
    errorMessage,
    isLoading,
    login,
    register,
    logout,
    fetchUser,
  }
}
