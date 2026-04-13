import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../lib/content.js";
import { containerClass } from "./SectionShell.jsx";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 text-white backdrop-blur-xl">
      <nav
        className={`${containerClass} flex min-h-20 items-end justify-between gap-5 py-4 lg:min-h-24`}
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="flex min-w-0 items-end gap-3 pb-1">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-cyan text-sm font-black text-ink">
            AMG
          </span>
          <span className="grid min-w-0 leading-none">
            <strong className="truncate text-sm font-black uppercase text-white sm:text-base">
              Agência Marítima Granel
            </strong>
            <small className="mt-1 hidden text-xs font-bold text-white/55 sm:block">
              Santos, São Paulo, Brasil
            </small>
          </span>
        </a>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-white/20 bg-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Abrir menu</span>
        </button>

        <div
          id="menu-principal"
          className={`absolute left-5 right-5 top-full mt-3 rounded-md border border-white/15 bg-ink p-4 shadow-premium lg:static lg:mt-0 lg:flex lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            open ? "grid gap-4" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-black text-white/70 transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-4 text-sm font-black text-ink transition duration-300 hover:bg-cyan"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}


