import { navItems, services } from "../lib/content.js";
import { containerClass } from "./SectionShell.jsx";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper py-14 text-ink md:py-16">
      <div className={`${containerClass} grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_1fr_1.35fr]`}>
        <div>
          <a href="#inicio" className="inline-flex items-end gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-md bg-cyan text-sm font-black text-ink">
              AMG
            </span>
            <span className="grid">
              <strong className="text-sm font-black uppercase text-ink">Agência Marítima Granel</strong>
              <small className="mt-1 text-xs font-bold text-ink/58">Santos, São Paulo, Brasil</small>
            </span>
          </a>
          <p className="mt-6 max-w-sm text-sm font-bold leading-7 text-ink/62">
            Agenciamento marítimo, coordenação portuária e suporte operacional para embarcações em praças brasileiras.
          </p>
        </div>

        <div className="grid content-start gap-3 text-sm">
          <strong className="mb-2 text-xs font-black uppercase text-ink">Navegação</strong>
          {navItems.map((item) => (
            <a key={item.href} className="font-bold text-ink/68 transition hover:text-cyan" href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="font-bold text-ink/68 transition hover:text-cyan" href="#contato">Contato</a>
        </div>

        <div className="grid content-start gap-3 text-sm">
          <strong className="mb-2 text-xs font-black uppercase text-ink">Serviços</strong>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {services.map((service) => (
              <a key={service.title} className="font-bold text-ink/68 transition hover:text-cyan" href="#servicos">
                {service.title}
              </a>
            ))}
          </div>
          <div className="mt-5 grid gap-2 border-t border-ink/10 pt-5 text-ink/62">
            <a className="font-black text-cyan transition hover:text-ink" href="tel:+551332212333">
              (13) 3221-2333
            </a>
            <span>Rua General Câmara 139, Cj 94</span>
            <span>Centro, Santos - SP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
