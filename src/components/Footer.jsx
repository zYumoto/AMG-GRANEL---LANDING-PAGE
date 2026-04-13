import { containerClass } from "./SectionShell.jsx";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#06101a] py-12 text-mist/55 md:py-14">
      <div className={`${containerClass} grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_1fr_1fr]`}>
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-lg border border-brass/50 bg-gradient-to-br from-brass/20 to-ocean/10 text-sm font-black text-brass">
              AMG
            </span>
            <span className="grid">
              <strong className="text-sm font-black text-white">Agência Marítima Granel</strong>
              <small>Santos, São Paulo, Brasil</small>
            </span>
          </a>
        </div>
        <div className="grid content-start gap-3 text-sm">
          <strong className="text-white">Navegação</strong>
          <a className="transition hover:text-white" href="#empresa">Empresa</a>
          <a className="transition hover:text-white" href="#servicos">Serviços</a>
          <a className="transition hover:text-white" href="#confianca">Confiança</a>
        </div>
        <div className="grid content-start gap-3 text-sm">
          <strong className="text-white">Contato</strong>
          <a className="transition hover:text-white" href="tel:+551332212333">(13) 3221-2333</a>
          <span>Rua General Câmara 139, Cj 94</span>
          <span>Centro, Santos - SP</span>
        </div>
      </div>
    </footer>
  );
}
