import { Menu } from "lucide-react";
import { useState } from "react";
import { navItems } from "../lib/content.js";
import { containerClass } from "./SectionShell.jsx";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/75 backdrop-blur-2xl">
      <nav
        className={`${containerClass} relative flex min-h-16 items-center justify-between gap-4 sm:min-h-20 lg:gap-8`}
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-brass/50 bg-gradient-to-br from-brass/20 to-ocean/10 text-xs font-black text-brass sm:h-12 sm:w-12 sm:text-sm">
            AMG
          </span>
          <span className="grid min-w-0">
            <strong className="max-w-[13rem] truncate text-sm font-extrabold text-white sm:max-w-none sm:text-base">
              Agência Marítima Granel
            </strong>
            <small className="hidden text-xs text-mist/60 sm:block">
              Santos, São Paulo, Brasil
            </small>
          </span>
        </a>

        <button
          type="button"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:border-ocean/50 hover:bg-ocean/10 sm:h-11 sm:w-11 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          <Menu size={20} />
          <span className="sr-only">Abrir menu</span>
        </button>

        <div
          id="menu-principal"
          className={`absolute left-4 right-4 top-full mt-3 rounded-lg border border-white/15 bg-night/95 p-4 shadow-premium backdrop-blur-2xl sm:left-6 sm:right-6 lg:static lg:mt-0 lg:flex lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            open ? "grid gap-4" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-bold text-mist/70 transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brass/50 bg-brass/10 px-4 text-sm font-extrabold text-white transition duration-300 hover:border-brass/80 hover:bg-brass/20"
          >
            Falar com a AMG
          </a>
        </div>
      </nav>
    </header>
  );
}
