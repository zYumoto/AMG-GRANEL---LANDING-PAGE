export const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export function SectionShell({ id, children, className = "", innerClassName = "" }) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 lg:py-32 ${className}`}>
      <div className={`${containerClass} ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="mb-4 text-xs font-black uppercase tracking-normal text-brass md:mb-5">
      {children}
    </p>
  );
}

export function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

export function SectionText({ children, className = "" }) {
  return (
    <p className={`mt-5 max-w-2xl text-base leading-7 text-mist/65 md:mt-7 md:leading-8 ${className}`}>
      {children}
    </p>
  );
}

export function PrimaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#f0d18b] to-brass px-5 text-sm font-black text-night shadow-[0_18px_48px_rgba(199,167,106,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(199,167,106,.38)] sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/20 bg-white/[0.07] px-5 text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-ocean/60 hover:bg-ocean/10 sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}
