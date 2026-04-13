import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import aboutImage from "../assets/about-terminal.jpg";
import { trustSignals } from "../lib/content.js";
import { fadeUp } from "../lib/motion.js";
import { Eyebrow, SectionHeading, SectionShell, SectionText } from "./SectionShell.jsx";

export function AboutSection() {
  return (
    <SectionShell id="empresa" className="bg-ink text-white">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.95fr)] lg:gap-16 xl:gap-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }}>
          <Eyebrow>Empresa</Eyebrow>
          <SectionHeading className="text-white">Presença local para decisões marítimas sérias.</SectionHeading>
          <SectionText className="text-white/68">
            A AMG atua no ambiente de agenciamento marítimo conectando embarcação, terminal, autoridade e cliente com clareza em rotinas portuárias de alta responsabilidade.
          </SectionText>
          <SectionText className="mt-4 text-white/68 md:mt-5">
            A partir de Santos, a empresa comunica proximidade com as operações portuárias brasileiras e uma postura voltada a previsibilidade, contato direto e seriedade técnica.
          </SectionText>

          <ul className="mt-8 grid gap-4">
            {trustSignals.map((signal) => (
              <li key={signal} className="flex gap-3 text-sm font-bold leading-6 text-white/74">
                <CheckCircle2 className="mt-0.5 shrink-0 text-cyan" size={18} />
                {signal}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="relative overflow-hidden rounded-md border border-white/15 bg-white/5 shadow-premium"
        >
          <div className="h-[340px] bg-[linear-gradient(135deg,#dfe7e8,#6e878c)] sm:h-[470px] lg:h-[560px]">
            <img className="h-full w-full object-cover" src={aboutImage} alt="Navio porta-contêineres em terminal portuário" onError={(event) => { event.currentTarget.style.display = "none"; }} />
          </div>
          <figcaption className="absolute bottom-0 left-0 right-0 border-t border-white/12 bg-ink/88 p-5 text-white backdrop-blur-xl sm:p-6">
            <span className="text-xs font-black uppercase text-cyan">Base operacional</span>
            <strong className="mt-3 flex items-start gap-2 text-sm leading-6 text-white sm:items-center">
              <MapPin size={16} className="mt-1 shrink-0 text-cyan sm:mt-0" />
              Rua General Câmara 139, Cj 94, Santos/SP
            </strong>
          </figcaption>
        </motion.figure>
      </div>
    </SectionShell>
  );
}





