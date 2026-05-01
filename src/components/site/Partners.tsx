import { ArrowRight } from "lucide-react";

// Curated, generic partner names to avoid implying specific institutional partnerships.
const partners = [
  "Santa Casa",
  "Hospital São Luiz",
  "FEMICE",
  "CEJAM",
  "Bairral",
  "Hospital Beneficente",
  "Casa de David",
  "Hospital Piedade",
  "FESFBA",
  "Fehosmt",
];

export const Partners = () => {
  // duplicate for seamless marquee
  const list = [...partners, ...partners];

  return (
    <section className="py-20 bg-background border-y border-border/60">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow">Parceiros</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 tracking-tight">
              Instituições que <span className="text-gradient">caminham conosco</span>
            </h2>
          </div>
          <a href="#contato" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Seja um parceiro <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max marquee gap-4">
          {list.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="shrink-0 min-w-[220px] h-24 rounded-2xl bg-card border border-border/70 grid place-items-center px-6 shadow-[var(--shadow-sm)]"
            >
              <span className="font-display font-semibold text-primary-deep/80 text-center text-sm tracking-wide">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
