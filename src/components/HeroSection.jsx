import { motion } from "framer-motion";
import { Activity, ArrowRight, Ship } from "lucide-react";
import { fadeUp } from "../lib/motion.js";
import { PrimaryButton, SecondaryButton, containerClass } from "./SectionShell.jsx";

const heroImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shipping_containers_in_a_port_%28Unsplash%29.jpg/2560px-Shipping_containers_in_a_port_%28Unsplash%29.jpg";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 lg:min-h-screen lg:pt-36">
      <img
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-55 saturate-75"
        src={heroImage}
        alt="Operação portuária com contêineres e navios"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,31,.98),rgba(7,19,31,.83)_48%,rgba(7,19,31,.55)),linear-gradient(180deg,rgba(7,19,31,.2),#07131f_92%)]" />
      <div className="absolute left-[6%] top-32 h-[34rem] w-[34rem] rounded-full bg-ocean/20 blur-3xl" />
      <div className={`${containerClass} relative z-10 grid min-h-[auto] items-center gap-10 pb-16 md:gap-12 md:pb-20 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[minmax(0,1fr)_minmax(360px,430px)] lg:gap-16 xl:gap-20`}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs font-black uppercase tracking-normal text-brass">
            Agência marítima em Santos
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Precisão portuária para operações marítimas de alta responsabilidade.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-mist/75 md:mt-7 md:text-lg md:leading-8">
            A Agência Marítima Granel - AMG apoia escalas de embarcações, interfaces portuárias
            e coordenação operacional para negócios marítimos sérios no Brasil.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9">
            <PrimaryButton href="#contato" className="group">
              Falar com a equipe
              <ArrowRight className="transition duration-300 group-hover:translate-x-1" size={17} />
            </PrimaryButton>
            <SecondaryButton href="#servicos">Ver serviços</SecondaryButton>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5 md:mt-7">
            {["Base em Santos", "Suporte de agência", "Coordenação portuária"].map((pill) => (
              <span
                key={pill}
                className="rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-extrabold text-mist/75 backdrop-blur-xl"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -8, scale: 1.015 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative w-full overflow-hidden rounded-lg border border-white/15 bg-white/[0.08] p-5 shadow-premium backdrop-blur-2xl sm:p-6 lg:justify-self-end"
          aria-label="Painel operacional"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(40,182,200,.26),transparent_15rem),linear-gradient(135deg,rgba(255,255,255,.14),transparent_40%)]" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-sm text-mist/55">Comando operacional</span>
              <strong className="inline-flex items-center gap-2 text-sm text-brass">
                <i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_0_7px_rgba(110,231,183,.12),0_0_22px_rgba(110,231,183,.6)]" />
                Base Santos
              </strong>
            </div>

            <div className="mb-3 rounded-lg border border-white/15 bg-black/15 p-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <span className="text-sm text-mist/55">Status da escala</span>
                  <strong className="mt-2 block text-2xl font-black text-white">Alinhado</strong>
                </div>
                <div className="flex h-14 items-end gap-1.5">
                  {[22, 38, 30, 50].map((height, index) => (
                    <motion.i
                      key={height}
                      className="w-2 rounded-full bg-gradient-to-t from-ocean to-cyan-200 shadow-[0_0_18px_rgba(40,182,200,.38)]"
                      style={{ height }}
                      animate={{ scaleY: [0.82, 1, 0.82], opacity: [0.75, 1, 0.75] }}
                      transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.18 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {[
              ["01", "Chegada da embarcação e interface portuária"],
              ["02", "Coordenação com terminais, autoridades e parceiros"],
              ["03", "Suporte à saída e reporte operacional"]
            ].map(([number, text]) => (
              <div key={number} className="grid grid-cols-[34px_1fr] gap-3 border-b border-white/10 py-4 last:border-b-0 sm:grid-cols-[38px_1fr] sm:gap-4">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-ocean/15 text-xs font-black text-ocean">
                  {number}
                </span>
                <p className="m-0 text-sm leading-6 text-mist/80">{text}</p>
              </div>
            ))}

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Metric icon={Ship} value="3" label="interfaces centrais" />
              <Metric icon={Activity} value="1" label="contato direto" />
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function Metric({ icon: Icon, value, label }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
      <Icon className="mb-3 text-ocean" size={18} />
      <strong className="block text-2xl font-black leading-none text-white">{value}</strong>
      <span className="mt-2 block text-xs text-mist/50">{label}</span>
    </div>
  );
}
