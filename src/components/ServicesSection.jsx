import { motion } from "framer-motion";
import { Eyebrow, SectionHeading, SectionShell, SectionText } from "./SectionShell.jsx";
import { services } from "../lib/content.js";
import { fadeUp, stagger } from "../lib/motion.js";

export function ServicesSection() {
  return (
    <SectionShell
      id="servicos"
      className="bg-[linear-gradient(180deg,#07131f_0%,#0a1b2b_52%,#07131f_100%)]"
    >
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <Eyebrow>Serviços</Eyebrow>
        <SectionHeading>
          Suporte de agenciamento marítimo para cada ponto crítico da escala.
        </SectionHeading>
        <SectionText>
          Suporte direto às rotinas que determinam se uma escala portuária avança com clareza,
          tempo correto e coordenação adequada.
        </SectionText>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="mt-10 grid items-stretch gap-4 sm:mt-12 md:grid-cols-2 md:gap-5 xl:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </motion.div>
    </SectionShell>
  );
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -9, scale: 1.015 }}
      className="group relative flex h-full min-h-[230px] overflow-hidden rounded-lg border border-white/15 bg-white/[0.07] p-6 shadow-glass backdrop-blur-2xl transition duration-300 hover:border-ocean/45 hover:shadow-[0_34px_100px_rgba(0,0,0,.48),0_0_70px_rgba(40,182,200,.13)] sm:min-h-[260px] sm:p-7"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(255,255,255,.16),transparent_36%,rgba(40,182,200,.08))]" />
      <div className="relative flex h-full flex-col">
        <span className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-ocean/30 bg-ocean/10 text-ocean transition duration-300 group-hover:border-ocean/60 group-hover:shadow-[0_0_38px_rgba(40,182,200,.18)] sm:mb-6">
          <Icon size={22} strokeWidth={1.75} />
        </span>
        <h3 className="text-lg font-black text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-mist/62">{description}</p>
      </div>
    </motion.article>
  );
}
