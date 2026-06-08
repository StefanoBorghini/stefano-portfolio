"use client";

import Image from "next/image";

import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1a1a1a]">
      <motion.section
   initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }} className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Prepared for B.F.M. S.r.l.
        </p>

        <h1 className="max-w-4xl text-6xl tracking-tight font-semibold leading-tight md:text-8xl">
          Stefano Borghini
        </h1>

         <p className="mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl">
         Frontend Developer • UX • Graphic • Performance
        </p>

        

        <div className="mt-10">
  <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-neutral-300 shadow-lg">
    <Image
      src="/projects/foto.jpg"
      alt="Stefano Borghini"
      fill
      className="object-cover"
    />
  </div>
</div>

        <div className="mt-10 flex gap-4">
          <a className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-80" href="#projects"> 
          View Projects
          
</a> 
             <a className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white"
  href="mailto:projects@stefanoborghinidesign.it"
> 
      
  Contact

       

          </a>
        </div>
      </motion.section>

     <motion.section
   initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}  id="projects" className="px-6 py-24">
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
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

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

    <a
  href="https://www.portovenere.com"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
  </div>

  {/* PORTOVENERE EXPERIENCES */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

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
      Curated hospitality experiences platform focused
on tourism, private experiences and luxury stays.
    </p>

     <a
  href="https://experiences.portovenere.com"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
  </div>

   {/* ALO'S */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

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
   <a
  href="https://aloscafe-usa.com/"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
    
  </div>

   {/* barcaioli portovenere */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/barcaioli.jpg"
        alt="barcaioli portovenere"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
     Cooperativa Barcaioli Portovenere
    </h3>

    <p className="mt-3 text-neutral-600">
      Tourism and boat experiences platform focused
on local exploration, excursions and hospitality.
    </p>

     <a
  href="https://barcaioliportovenere.com/"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
  </div>

    {/* schiffini */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/schiffini.jpg"
        alt="barcaioli portovenere"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
     Architetto Andrea Schiffini
    </h3>

    <p className="mt-3 text-neutral-600">
      Tourism and boat experiences platform focused
on local exploration, excursions and hospitality.
    </p>

     <a
  href="https://schiffiniarchitetto.it/"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
  </div>

    {/* maria cappellini */}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/maria.jpg"
        alt="barcaioli portovenere"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
     Lovely places to stay in Vernazza
    </h3>

    <p className="mt-3 text-neutral-600">
      Tourism and boat experiences platform focused
on local exploration, excursions and hospitality.
    </p>

     <a
  href="https://www.mariacapellini.com/"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
  </div>


    {/* briselli*/}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/briselli.jpg"
        alt="barcaioli portovenere"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
     Lovely places to stay in Vernazza
    </h3>

    <p className="mt-3 text-neutral-600">
      Tourism and boat experiences platform focused
on local exploration, excursions and hospitality.
    </p>

     <a
  href="https://www.andreabriselli.com/"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
  </div>

{/* https://salimbene.store/*/}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/carlo.jpg"
        alt="barcaioli portovenere"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
     Lovely places to stay in Vernazza
    </h3>

    <p className="mt-3 text-neutral-600">
      Tourism and boat experiences platform focused
on local exploration, excursions and hospitality.
    </p>

     <a
  href="https://salimbene.store/"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
  </div>

{/* https://www.crilaspezia.it//*/}
  <div className="group overflow-hidden rounded-[32px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">

    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
      <Image
        src="/projects/cri.jpg"
        alt="barcaioli portovenere"
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    <h3 className="mt-6 text-2xl font-semibold">
     Lovely places to stay in Vernazza
    </h3>

    <p className="mt-3 text-neutral-600">
      Tourism and boat experiences platform focused
on local exploration, excursions and hospitality.
    </p>

     <a
  href="https://www.crilaspezia.it/"
  target="_blank"
  className="mt-4 inline-flex text-sm text-neutral-500 transition hover:text-black" rel="noopener noreferrer"
>
  Visit Website →
</a>
  </div>
</div>


  </div>
</motion.section>

<motion.section
   initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}  className="px-6 py-24">
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
</motion.section>

<footer className="px-6 pb-12 pt-24 text-center text-sm text-neutral-500">
  Prepared exclusively for B.F.M. S.r.l.
</footer>

    </main>
  );
}