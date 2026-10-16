'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="-my-8 flex min-h-screen w-full items-center bg-[#f4f7f5] text-[#25332e]">
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-7 px-4 py-5 sm:px-5 md:px-8 md:py-12 min-[851px]:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
        <nav className="col-span-full mb-[-4px] flex justify-end gap-2.5 min-[851px]:mb-[-12px]" aria-label="Konto">
          <Link
            className="inline-flex min-h-[42px] items-center justify-center rounded-[11px] border border-[#d4dfd8] px-4 text-[0.88rem] font-semibold text-[#254437] transition hover:border-[#a9c5b5] hover:bg-[#eaf2ed] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#176b5038]"
            href="/login"
          >
            Anmelden
          </Link>
          <Link
            className="inline-flex min-h-[42px] items-center justify-center rounded-[11px] border border-[#176b50] bg-[#176b50] px-4 text-[0.88rem] font-semibold text-white transition hover:-translate-y-px hover:border-[#10583f] hover:bg-[#10583f] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#176b5038]"
            href="/register"
          >
            Registrieren
          </Link>
        </nav>

        <section className="flex min-h-full items-center overflow-hidden rounded-[22px] bg-[#123d31] px-11 py-[52px] text-[#f7faf8] max-[850px]:min-h-0 max-[850px]:rounded-[18px] max-[850px]:px-8 max-[850px]:py-9 max-[520px]:px-6 max-[520px]:py-[30px]" aria-labelledby="support-title">
          <div className="w-full">
            <p className="mb-[22px] flex items-center gap-2.5 text-[0.82rem] font-semibold text-[#b7dfcd] max-[850px]:mb-[18px]">
              <span className="size-2 rounded-full bg-[#78c6a2]" />Persönlicher Support
            </p>
            <h1 id="support-title" className="max-w-[12ch] text-[3.1rem] leading-[1.08] font-semibold tracking-[0px] text-balance max-[850px]:text-[2.65rem] max-[520px]:text-[2.25rem]">
              Noch Fragen? Schreib uns.
            </h1>
            <p className="mt-5 max-w-[38ch] text-base leading-[1.7] text-[#d3e3dc]">
              Beschreibe kurz dein Anliegen. Je mehr Details du uns gibst, desto schneller können wir helfen.
            </p>

            <div className="mt-[38px] grid gap-5 max-[850px]:mt-7 max-[850px]:grid-cols-2 max-[520px]:mt-[26px] max-[520px]:grid-cols-1 max-[520px]:gap-4">
              <div className="flex items-center gap-3.5">
                <span className="grid size-[42px] flex-none place-items-center rounded-[13px] border border-[#dff2e926] text-[#b7dfcd]" aria-hidden="true">
                  <svg className="size-[21px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <span>
                  <strong className="block text-[0.92rem] font-semibold">Schnelle Antwort</strong>
                  <small className="mt-1 block text-[0.78rem] leading-[1.45] text-[#c4d9d0]">In der Regel innerhalb von 24 Stunden</small>
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="grid size-[42px] flex-none place-items-center rounded-[13px] border border-[#dff2e926] text-[#b7dfcd]" aria-hidden="true">
                  <svg className="size-[21px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 18.5 5.8 15A7.5 7.5 0 1 1 9 18.2L5 18.5Z" />
                    <path d="M8.5 10.5h7M8.5 13.5h4" />
                  </svg>
                </span>
                <span>
                  <strong className="block text-[0.92rem] font-semibold">Echte Menschen</strong>
                  <small className="mt-1 block text-[0.78rem] leading-[1.45] text-[#c4d9d0]">Persönlich, verständlich und lösungsorientiert</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[22px] border border-[#e1e7e3] bg-white p-[38px] shadow-[0_16px_48px_rgba(30,54,43,0.05)] max-[850px]:rounded-[18px] max-[850px]:p-[30px] max-[520px]:px-5 max-[520px]:py-[26px]" aria-labelledby="form-title">
          <header>
            <p className="mb-[9px] text-[0.78rem] font-bold tracking-[0.06em] text-[#35775e] uppercase">Kontaktformular</p>
            <h2 id="form-title" className="text-[1.75rem] leading-[1.2] font-semibold text-[#21342c] max-[520px]:text-2xl">Support-Anfrage senden</h2>
          </header>

          <form className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 max-[520px]:mt-[23px] max-[520px]:grid-cols-1 max-[520px]:gap-[18px]">
            <label className="flex min-w-0 flex-col gap-2 text-[0.88rem] font-semibold text-[#293a32]">
              <span>Name</span>
              <input className="h-[50px] w-full rounded-xl border border-[#dce4df] bg-[#fbfcfb] px-[14px] text-[0.94rem] font-normal text-[#24342d] outline-none transition placeholder:text-[#9aa6a0] focus:border-[#398368] focus:ring-2 focus:ring-[#398368]/15" type="text" name="name" placeholder="Max Mustermann" required />
            </label>
            <label className="flex min-w-0 flex-col gap-2 text-[0.88rem] font-semibold text-[#293a32]">
              <span>E-Mail</span>
              <input className="h-[50px] w-full rounded-xl border border-[#dce4df] bg-[#fbfcfb] px-[14px] text-[0.94rem] font-normal text-[#24342d] outline-none transition placeholder:text-[#9aa6a0] focus:border-[#398368] focus:ring-2 focus:ring-[#398368]/15" type="email" name="email" placeholder="max@beispiel.de" required />
            </label>
            <label className="col-span-2 flex min-w-0 flex-col gap-2 text-[0.88rem] font-semibold text-[#293a32] max-[520px]:col-span-1">
              <span>Thema</span>
              <select className="h-[50px] w-full rounded-xl border border-[#dce4df] bg-[#fbfcfb] px-[14px] text-[0.94rem] font-normal text-[#24342d] outline-none transition focus:border-[#398368] focus:ring-2 focus:ring-[#398368]/15" name="topic" defaultValue="" required>
                <option value="" disabled>Bitte auswählen</option>
                <option value="account">Konto &amp; Zugang</option>
                <option value="billing">Abrechnung</option>
                <option value="technical">Technische Hilfe</option>
                <option value="other">Sonstiges</option>
              </select>
            </label>
            <label className="col-span-2 flex min-w-0 flex-col gap-2 text-[0.88rem] font-semibold text-[#293a32] max-[520px]:col-span-1">
              <span>Wie können wir helfen?</span>
              <textarea
                className="min-h-[146px] w-full resize-y rounded-xl border border-[#dce4df] bg-[#fbfcfb] p-[14px] text-[0.94rem] leading-6 font-normal text-[#24342d] outline-none transition placeholder:text-[#9aa6a0] focus:border-[#398368] focus:ring-2 focus:ring-[#398368]/15"
                name="message"
                placeholder="Beschreibe dein Anliegen möglichst genau …"
                required
              />
            </label>

            <p className="col-span-2 max-w-[48ch] text-[0.8rem] leading-[1.55] text-[#78847e] max-[520px]:col-span-1">
              Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zur Bearbeitung zu.
            </p>
            <button className="col-span-2 flex min-h-[54px] items-center justify-center gap-3 rounded-[13px] border-0 bg-[#176b50] text-[0.98rem] font-bold text-white transition hover:-translate-y-px hover:bg-[#10583f] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#176b5047] max-[520px]:col-span-1" type="submit">
              Anfrage senden
              <svg className="size-[19px]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 10h11M10 5l5 5-5 5" />
              </svg>
            </button>
          </form>
        </section>

        <footer className="col-span-full flex items-center gap-[9px] px-1 pt-2.5 text-[0.8rem] text-[#76817b] max-[520px]:flex-wrap max-[520px]:gap-1.5 max-[520px]:text-[0.74rem]">© 2025 Nexa <span className="text-[#a3ada7]">·</span> Datenschutz <span className="text-[#a3ada7]">·</span> Impressum</footer>
      </div>
    </div>
  )
}
