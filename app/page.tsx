import Image from "next/image";


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

     <section className="px-6 py-24">
  <div className="mx-auto max-w-6xl">


<div className="mb-16">
  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
    Selected Works
  </p>

  <h2 className="text-4xl font-semibold md:text-5xl">
    Projects & Digital Experiences
  </h2>
</div>

<div className="grid gap-8 md:grid-cols-2">

  {/* PORTOVENERE */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/portovenere.jpg"
        alt="Portovenere"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      Portovenere.com
    </h3>

    <p className="mt-3 text-neutral-600">
      Tourism platform focused on hospitality, experiences
      and local discovery.
    </p>
  </div>

  {/* PORTOVENERE EXPERIENCES */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/experiences.jpg"
        alt="Portovenere Experiences"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      Portovenere Experiences
    </h3>

    <p className="mt-3 text-neutral-600">
      Shopify e-commerce for motorcycle accessories,
      gear and premium products.
    </p>
  </div>

   {/* ALO'S */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/alos.jpg"
        alt="Alo's Café"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
      Alo's Café
    </h3>

    <p className="mt-3 text-neutral-600">
      Shopify e-commerce for motorcycle accessories,
      gear and premium products.
    </p>
  </div>

   {/* Lovely places to stay in Vernazza */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/maria.jpg"
        alt="Alo's Café"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
     Lovely places to stay in Vernazza
    </h3>

    <p className="mt-3 text-neutral-600">
      Shopify e-commerce for motorcycle accessories,
      gear and premium products.
    </p>
  </div>

</div>


  </div>
</section>

<section className="px-6 py-24">
  <div className="mx-auto max-w-4xl">
    
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
      Approach
    </p>

    <h2 className="text-4xl font-semibold md:text-5xl">
      Modern web experiences focused on usability,
      performance and clean design.
    </h2>

    <p className="mt-8 text-lg leading-relaxed text-neutral-600">
      Over the years I collaborated on tourism platforms,
      e-commerce websites and digital projects for local
      businesses, organizations and hospitality brands.
      My approach combines practical problem solving,
      modern frontend development and user-focused design.
    </p>
  </div>
</section>

<footer className="px-6 pb-12 pt-24 text-center text-sm text-neutral-500">
  Prepared exclusively for Sintonia — 2026
</footer>

    </main>
  );
}