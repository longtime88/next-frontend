'use client'

export default function HomePage() {
  return (
    <div className="flex min-h-[78vh] w-full items-center justify-center py-8">
      <section className="mx-auto w-full max-w-[90rem] overflow-hidden rounded-none border border-slate-800/70 bg-slate-950/85 shadow-[0_32px_90px_rgba(2,6,23,0.7)]">
        <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/60 px-5 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">Produktanfrage</p>
        </div>

        <form className="space-y-8 p-8 sm:p-10 lg:p-16 xl:p-20">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-200">
              <span>Name</span>
              <input type="text" placeholder="Max Mustermann" className="fieldInput" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-200">
              <span>E-Mail</span>
              <input type="email" placeholder="name@email.de" className="fieldInput" />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-200">
              <span>Produkt</span>
              <input type="text" placeholder="Produktname oder Kategorie" className="fieldInput" />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-200">
              <span>Betreff</span>
              <input type="text" placeholder="Frage zum Produkt" className="fieldInput" />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-slate-200">
            <span>Deine Frage</span>
            <textarea
              className="fieldInput fieldInput--textarea"
              placeholder="Beschreibe dein Anliegen zur Produktanfrage..."
            />
          </label>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-500 px-4 py-3 text-base font-semibold text-slate-950 transition hover:bg-blue-400"
            >
              Anfrage senden
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
