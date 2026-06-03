export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1a1a1a]">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Prepared for Sintonia
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Stefano Borghini
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl">
          Web Developer & Digital Experiences focused on hospitality,
          tourism and modern web experiences.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-80">
            View Projects
          </button>

          <button className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white">
            Contact
          </button>
        </div>
      </section>
    </main>
  );
}