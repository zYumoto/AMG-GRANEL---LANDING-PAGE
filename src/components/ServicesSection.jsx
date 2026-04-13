import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import serviceContainersImage from "../assets/service-containers.jpg";
import serviceShipImage from "../assets/service-ship.jpg";
import { serviceHighlights, services } from "../lib/content.js";
import { fadeUp, stagger } from "../lib/motion.js";
import { Eyebrow, SectionHeading, SectionShell, SectionText } from "./SectionShell.jsx";

const serviceImages = [serviceContainersImage, serviceShipImage];

export function ServicesSection() {
  return (
    <SectionShell id="servicos" className="bg-[linear-gradient(180deg,#0d1018_0%,#1b2529_100%)] text-white">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }}>
          <Eyebrow>Serviços</Eyebrow>
          <SectionHeading className="text-white">Suporte marítimo de ponta a ponta.</SectionHeading>
          <SectionText className="text-white/68">
            Agenciamento, coordenação portuária, apoio documental e contato operacional reunidos em uma comunicação sóbria e direta.
          </SectionText>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase text-cyan transition duration-300 hover:text-cyanLight"
          >
            Solicitar contato
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.16 }}
          className="grid gap-4"
        >
          {services.map((service) => (
            <ServiceRow key={service.title} {...service} />
          ))}
        </motion.div>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        {serviceHighlights.map((highlight, index) => (
          <motion.article
            key={highlight.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid overflow-hidden rounded-md border border-white/12 bg-white text-ink shadow-premium md:grid-cols-[minmax(220px,.9fr)_1fr]"
          >
            <div className="h-64 bg-[linear-gradient(135deg,#dfe7e8,#8bb6bd)] md:h-full">
              <img className="h-full w-full object-cover object-bottom saturate-125 contrast-110" src={serviceImages[index]} alt="Operação portuária marítima" onError={(event) => { event.currentTarget.style.display = "none"; }} />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-3xl font-black uppercase leading-tight text-ink">{highlight.title}</h3>
              <p className="mt-5 text-sm font-bold leading-7 text-ink/60">{highlight.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

function ServiceRow({ icon: Icon, title, description }) {
  return (
    <motion.article variants={fadeUp} className="grid gap-4 rounded-md border border-white/15 bg-white/[0.08] p-5 text-white transition duration-300 hover:border-cyan hover:bg-white/[0.12] sm:grid-cols-[3rem_1fr] sm:p-6">
      <span className="grid h-12 w-12 place-items-center rounded-md bg-cyan text-ink">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="text-xl font-black uppercase leading-tight text-white">{title}</h3>
        <p className="mt-3 text-sm font-bold leading-7 text-white/62">{description}</p>
      </div>
    </motion.article>
  );
}







