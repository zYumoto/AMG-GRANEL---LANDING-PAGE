import { motion } from "framer-motion";
import { Phone, Radio } from "lucide-react";
import { fadeUp } from "../lib/motion.js";
import { SectionHeading, SectionText, containerClass } from "./SectionShell.jsx";

export function CTASection() {
  return (
    <section id="contato" className="relative py-20 md:py-28 lg:py-32">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className={`${containerClass}`}
      >
        <div className="relative grid items-center gap-8 overflow-hidden rounded-lg border border-white/15 bg-white/[0.07] p-5 shadow-premium backdrop-blur-2xl sm:p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,390px)] lg:gap-14 xl:gap-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(40,182,200,.20),transparent_22rem),radial-gradient(circle_at_82%_50%,rgba(199,167,106,.17),transparent_20rem)]" />
          <div className="relative">
            <p className="mb-4 text-xs font-black uppercase tracking-normal text-brass">Contato</p>
            <SectionHeading className="max-w-4xl">
              Fale com a AMG sobre sua embarcação, escala ou operação portuária.
            </SectionHeading>
            <SectionText>
              Para demandas comerciais, coordenação operacional ou contato institucional, fale
              diretamente com o escritório em Santos.
            </SectionText>
          </div>

          <div className="relative grid gap-5 rounded-lg border border-white/10 bg-black/10 p-5 sm:p-6">
            <a href="tel:+551332212333" className="text-2xl font-black leading-none text-white sm:text-3xl">
              (13) 3221-2333
            </a>
            <address className="text-sm not-italic leading-7 text-mist/60">
              Rua General Câmara 139, Cj 94
              <br />
              Centro, Santos - SP
              <br />
              11010-906, Brasil
            </address>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="tel:+551332212333"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#f0d18b] to-brass px-5 text-sm font-black text-night transition duration-300 hover:-translate-y-1"
              >
                <Phone size={17} />
                Ligar para a AMG
              </a>
              <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-4 text-sm font-bold text-mist/60">
                <Radio size={17} className="text-ocean" />
                WhatsApp a confirmar
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
