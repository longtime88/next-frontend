import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'WorkoutApp',
  description: 'WorkoutApp dashboard and support inbox',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="flex min-h-screen w-full bg-slate-950">
          <Header />
          <main className="flex min-h-screen min-w-0 flex-1 items-center justify-center py-8">
            <div className="container flex justify-center">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
