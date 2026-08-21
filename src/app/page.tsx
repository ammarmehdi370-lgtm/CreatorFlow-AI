export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-brand-200">CreatorFlow AI</p>
        <h1 className="text-4xl font-bold md:text-6xl">Turn ideas into videos.</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Guided production flow for idea, research, scripting, scenes, narration, captions, rendering, and export.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            'Idea to outline',
            'Script and scenes',
            'Voice, captions, render',
          ].map((step) => (
            <div key={step} className="rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-soft">
              <div className="mb-3 h-2 w-16 rounded-full bg-brand-500" />
              <h2 className="text-lg font-semibold">{step}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
