import { motion } from "framer-motion";
import { ArrowRight, Phone, Radio } from "lucide-react";
import ctaImage from "../assets/cta-ship.jpg";
import { fadeUp } from "../lib/motion.js";
import { SectionHeading, SectionText, containerClass } from "./SectionShell.jsx";

export function CTASection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[linear-gradient(115deg,#232724_0%,#0d1018_100%)] py-24 text-white md:py-32">
      <img className="absolute inset-0 h-full w-full object-cover object-center opacity-35" src={ctaImage} alt="Navio em operação no porto" onError={(event) => { event.currentTarget.style.display = "none"; }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,16,24,.88),rgba(13,16,24,.72)_55%,rgba(13,16,24,.46))]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className={`${containerClass} relative z-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:gap-16`}
      >
        <div>
          <p className="mb-4 text-xs font-black uppercase text-cyan">Contato</p>
          <SectionHeading className="text-white">
            Fale com a AMG sobre sua embarcação, escala ou operação portuária.
          </SectionHeading>
          <SectionText className="text-white/68">
            Para demandas comerciais, coordenação operacional ou contato institucional, fale diretamente com o escritório em Santos.
          </SectionText>
        </div>

        <div className="grid gap-5 border-l border-white/20 pl-6">
          <a href="tel:+551332212333" className="text-3xl font-black leading-none text-white sm:text-4xl">
            (13) 3221-2333
          </a>
          <address className="text-sm font-bold not-italic leading-7 text-white/62">
            Rua General Câmara 139, Cj 94
            <br />
            Centro, Santos - SP
            <br />
            11010-906, Brasil
          </address>
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <a
              href="tel:+551332212333"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan px-5 text-sm font-black uppercase text-ink transition duration-300 hover:-translate-y-1 hover:bg-cyanLight"
            >
              <Phone size={17} />
              Ligar para a AMG
            </a>
            <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 text-sm font-bold text-white/65">
              <Radio size={17} className="text-cyan" />
              WhatsApp a confirmar
            </span>
          </div>
          <a href="#inicio" className="inline-flex items-center gap-2 text-xs font-black uppercase text-cyan hover:text-cyanLight">
            Voltar ao início
            <ArrowRight size={15} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}





