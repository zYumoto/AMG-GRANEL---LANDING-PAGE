import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trustSignals } from "../lib/content.js";
import { fadeUp } from "../lib/motion.js";
import { Eyebrow, SectionHeading, SectionShell, SectionText } from "./SectionShell.jsx";

export function TrustSection() {
  return (
    <SectionShell id="confianca" className="bg-[#0b1826]">
      <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(340px,.88fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -7, scale: 1.01 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.07] p-6 shadow-premium backdrop-blur-2xl sm:p-7 lg:justify-self-start"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(40,182,200,.18),transparent_16rem),linear-gradient(135deg,rgba(199,167,106,.1),transparent_45%)]" />
          <div className="relative border-b border-white/10 pb-7">
            <span className="text-xs font-black uppercase tracking-normal text-brass">Sinal de confiança</span>
            <strong className="mt-3 block text-2xl font-black leading-tight text-white sm:text-4xl">
              Menos ruído. Mais clareza.
            </strong>
          </div>

          <ul className="relative mt-7 grid gap-5">
            {trustSignals.map((signal, index) => (
              <motion.li
                key={signal}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-3 text-sm leading-6 text-mist/75"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-ocean" size={18} />
                {signal}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <Eyebrow>Confiança operacional</Eyebrow>
          <SectionHeading>
            Uma relação de parceria construída em torno da pergunta essencial: posso confiar esta operação?
          </SectionHeading>
          <SectionText>
            Clientes marítimos precisam de localização, escopo, linguagem operacional e contato
            direto antes de iniciar uma conversa. A AMG apresenta esses sinais com sobriedade e
            confiança.
          </SectionText>
          <a
            href="#contato"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-black text-ocean transition duration-300 hover:text-cyan-200"
          >
            Iniciar uma conversa comercial
            <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </SectionShell>
  );
}
