import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "../lib/content.js";
import { fadeUp, stagger } from "../lib/motion.js";
import { Eyebrow, SectionHeading, SectionShell, SectionText } from "./SectionShell.jsx";

export function TrustSection() {
  return (
    <SectionShell id="categorias" className="bg-[linear-gradient(180deg,#eef4f6_0%,#dfe8eb_100%)] text-ink">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }}>
        <Eyebrow>Atuação</Eyebrow>
        <SectionHeading>Rotinas críticas da escala em um fluxo claro.</SectionHeading>
        <SectionText>
          A estrutura da AMG organiza o atendimento por frentes operacionais, ajudando decisores B2B a entender rapidamente onde a agência atua.
        </SectionText>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.16 }}
        className="mt-10 grid gap-px overflow-hidden rounded-md border border-ink/15 bg-ink/15 shadow-glass md:grid-cols-2 xl:grid-cols-4"
      >
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </motion.div>
    </SectionShell>
  );
}

function CategoryCard({ icon: Icon, title, description }) {
  return (
    <motion.article variants={fadeUp} className="group min-h-[260px] bg-paper/95 p-6 transition duration-300 hover:bg-white sm:p-7">
      <div className="flex h-full flex-col justify-between gap-8">
        <Icon className="text-cyan" size={34} strokeWidth={1.7} />
        <div>
          <h3 className="text-2xl font-black uppercase leading-tight text-ink">{title}</h3>
          <p className="mt-4 text-sm font-bold leading-7 text-ink/58">{description}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase text-ink transition duration-300 group-hover:text-cyan">
            Entender frente
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}



