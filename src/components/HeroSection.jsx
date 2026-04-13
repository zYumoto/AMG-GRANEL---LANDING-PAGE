import { motion } from "framer-motion";
import { ArrowRight, Ship } from "lucide-react";
import { portSignals } from "../lib/content.js";
import { fadeUp, stagger } from "../lib/motion.js";
import heroImage from "../assets/hero-port.jpg";
import { PrimaryButton, SecondaryButton, containerClass } from "./SectionShell.jsx";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[linear-gradient(115deg,#2f3430_0%,#171a1d_58%,#0d1018_100%)] pt-24 text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center opacity-85"
        src={heroImage}
        alt="Operação portuária com contêineres e navios"
        onError={(event) => { event.currentTarget.style.display = "none"; }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,16,24,.84),rgba(13,16,24,.58)_50%,rgba(13,16,24,.18)),linear-gradient(180deg,rgba(13,16,24,.04),rgba(13,16,24,.72)_100%)]" />

      <div className={`${containerClass} relative z-10 grid min-h-[calc(100vh-6rem)] items-end pb-10 pt-24 md:pb-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14`}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          className="pb-8 lg:pb-12"
        >
          <p className="mb-5 text-xs font-black uppercase tracking-normal text-cyan">
            Agência marítima em Santos
          </p>
          <h1 className="max-w-5xl text-5xl font-black uppercase leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Precisão portuária para operações marítimas.
          </h1>
          <p className="mt-7 max-w-2xl text-base font-bold leading-7 text-white/76 md:text-lg md:leading-8">
            A AMG apoia escalas de embarcações, interfaces portuárias e coordenação operacional para negócios marítimos no Brasil.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="#contato" className="group">
              Falar com a equipe
              <ArrowRight className="transition duration-300 group-hover:translate-x-1" size={17} />
            </PrimaryButton>
            <SecondaryButton href="#categorias">Ver atuação</SecondaryButton>
          </div>
        </motion.div>

        <motion.aside
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-8 grid gap-3 border-l border-white/20 pl-5 lg:mb-14"
          aria-label="Resumo operacional"
        >
          {[
            ["01", "Base principal em Santos"],
            ["02", "Rede em praças portuárias"],
            ["03", "Contato operacional direto"]
          ].map(([number, text]) => (
            <motion.div key={number} variants={fadeUp} className="flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-xs font-black text-ink">
                {number}
              </span>
              <strong className="text-sm uppercase leading-5 text-white/78">{text}</strong>
            </motion.div>
          ))}
        </motion.aside>
      </div>

      <div className="relative z-10 border-y border-white/12 bg-white text-ink">
        <div className={`${containerClass} grid gap-4 py-5 md:grid-cols-[12rem_1fr] md:items-center`}>
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-ink/60">
            <Ship size={16} className="text-cyan" />
            Praças atendidas
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {portSignals.map((port) => (
              <span key={port} className="rounded-md border border-ink/10 px-3 py-3 text-center text-xs font-black uppercase text-ink/72">
                {port}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






