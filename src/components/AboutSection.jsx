import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Eyebrow, SectionHeading, SectionShell, SectionText } from "./SectionShell.jsx";
import { fadeUp } from "../lib/motion.js";

const aboutImage = "https://cdn.pixabay.com/photo/2021/11/15/18/38/container-6799046_1280.jpg";

export function AboutSection() {
  return (
    <SectionShell id="empresa" className="bg-night">
      <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.92fr)] lg:gap-16 xl:gap-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <Eyebrow>Empresa</Eyebrow>
          <SectionHeading className="max-w-3xl">
            Conhecimento portuário tradicional com ritmo operacional claro.
          </SectionHeading>
          <SectionText>
            A AMG atua no ambiente de agenciamento marítimo com um papel prático: conectar
            embarcação, terminal, autoridade e cliente com clareza em rotinas portuárias de alta
            responsabilidade.
          </SectionText>
          <SectionText className="mt-4 md:mt-5">
            A partir de Santos, a AMG comunica proximidade com as operações portuárias brasileiras
            e uma postura empresarial voltada a clientes que valorizam previsibilidade, contato
            direto e seriedade técnica.
          </SectionText>
        </motion.div>

        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -7, scale: 1.01 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] shadow-premium lg:justify-self-end"
        >
          <img className="h-[320px] w-full object-cover saturate-75 sm:h-[440px] lg:h-[520px]" src={aboutImage} alt="Navio porta-contêineres em terminal portuário" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(7,19,31,.9)),radial-gradient(circle_at_18%_20%,rgba(40,182,200,.24),transparent_18rem)]" />
          <figcaption className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 rounded-lg border border-white/15 bg-night/75 p-4 backdrop-blur-2xl sm:bottom-5 sm:left-5 sm:right-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-mist/55">Base operacional</span>
            <strong className="inline-flex items-start gap-2 text-sm leading-5 text-white sm:items-center">
              <MapPin size={16} className="text-brass" />
              Rua General Câmara 139, Santos/SP
            </strong>
          </figcaption>
        </motion.figure>
      </div>
    </SectionShell>
  );
}
