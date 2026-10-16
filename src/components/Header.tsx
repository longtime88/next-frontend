'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth'

export function Header() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  if (pathname === '/') {
    return null
  }

  return (
    <header className="sticky top-0 z-50 flex h-screen w-20 shrink-0 flex-col border-r border-blue-700 bg-blue-600 text-white shadow-xl">
      <div className="flex h-full flex-col px-2 py-5">
        <Link href="/" className="text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
          Support
        </Link>

        <nav className="mt-auto flex flex-col items-center gap-2">
          {user ? (
            <>
              <span className="w-full truncate rounded-lg border border-blue-400 bg-blue-700 px-1 py-2 text-center text-[10px] text-white">
                {user.username}
              </span>
              <button
                type="button"
                className="w-full rounded-lg border border-blue-300 bg-blue-700 px-1 py-2 text-center text-[10px] font-medium text-white transition hover:bg-blue-800"
                onClick={logout}
              >
                Abmelden
              </button>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="w-full rounded-lg bg-white px-1 py-2 text-center text-[10px] font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Registrieren
              </Link>
              <Link
                href="/login"
                className="w-full rounded-lg border border-blue-300 bg-blue-700 px-1 py-2 text-center text-[10px] font-medium text-white transition hover:bg-blue-800"
              >
                Anmelden
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
