export const containerClass = "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8";

export function SectionShell({ id, children, className = "", innerClassName = "" }) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-24 lg:py-28 ${className}`}>
      <div className={`${containerClass} ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`mb-4 text-xs font-black uppercase tracking-normal text-cyan md:mb-5 ${className}`}>
      {children}
    </p>
  );
}

export function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`max-w-4xl text-3xl font-black uppercase leading-tight text-ink sm:text-5xl lg:text-6xl ${className}`}>
      {children}
    </h2>
  );
}

export function SectionText({ children, className = "" }) {
  return (
    <p className={`mt-5 max-w-2xl text-base leading-7 text-ink/65 md:mt-7 md:leading-8 ${className}`}>
      {children}
    </p>
  );
}

export function PrimaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-cyan px-5 text-sm font-black text-ink transition duration-300 hover:-translate-y-1 hover:bg-cyanLight sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-md border border-ink/15 bg-white px-5 text-sm font-black text-ink transition duration-300 hover:-translate-y-1 hover:border-cyan sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}


