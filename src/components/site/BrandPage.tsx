import { useEffect, ComponentType } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Trophy } from "lucide-react";
import { Footer } from "@/components/site/Footer";

export type BrandTheme = {
  primary: string; // hex
  primaryDark: string;
  textDark: string; // base dark text
  bgSoft: string; // page bg
  borderSoft: string; // border tint class hex
};

export type BrandContent = {
  brandName: string;
  logo: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: React.ReactNode;
  heroDescription: string;
  stats: { value: string; label: string }[];
  atuacaoTitle: React.ReactNode;
  atuacaoDescription: string;
  atuacaoBullets: string[];
  atuacaoCards: { Icon: ComponentType<{ className?: string }>; label: string }[];
  servicesTitle: React.ReactNode;
  servicesDescription: string;
  services: { n: string; title: string; desc: string; tags: string[] }[];
  resultsTitle: React.ReactNode;
  cases: { tag: string; title: string; desc: string; metric: string; sub: string }[];
  methodTitle: React.ReactNode;
  method: { n: string; title: string; desc: string }[];
  ecosystemTitle: React.ReactNode;
  ecosystemDescription: string;
  ecosystem: { name: string; logo: string; desc: string; tag: string }[];
  ctaTitle: React.ReactNode;
  ctaDescription: string;
  ctaPrimaryLabel: string;
};

const navItems = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Método", href: "#metodo" },
  { label: "Ecossistema", href: "#ecossistema" },
];

export const BrandPage = ({ theme, content }: { theme: BrandTheme; content: BrandContent }) => {
  useEffect(() => {
    document.title = content.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", content.metaDescription);
  }, [content.metaTitle, content.metaDescription]);

  const css = {
    "--bp-primary": theme.primary,
    "--bp-primary-dark": theme.primaryDark,
    "--bp-text": theme.textDark,
    "--bp-bg": theme.bgSoft,
    "--bp-border": theme.borderSoft,
  } as React.CSSProperties;

  return (
    <div style={css} className="min-h-screen" data-brand>
      <style>{`
        [data-brand] { background: var(--bp-bg); color: var(--bp-text); }
        [data-brand] .bp-primary { color: var(--bp-primary); }
        [data-brand] .bp-bg-primary { background: var(--bp-primary); }
        [data-brand] .bp-border { border-color: var(--bp-border); }
        [data-brand] .bp-text-soft { color: color-mix(in srgb, var(--bp-text) 75%, transparent); }
        [data-brand] .bp-text-mid { color: color-mix(in srgb, var(--bp-text) 85%, transparent); }
        [data-brand] .bp-soft-bg { background: color-mix(in srgb, var(--bp-primary) 8%, white); }
        [data-brand] .bp-pill-bg { background: color-mix(in srgb, var(--bp-primary) 10%, white); color: var(--bp-primary); }
        [data-brand] .bp-cta-grad { background: linear-gradient(135deg, var(--bp-primary), color-mix(in srgb, var(--bp-primary) 70%, white)); }
        [data-brand] .bp-glow { background: radial-gradient(ellipse at top, color-mix(in srgb, var(--bp-primary) 20%, transparent), transparent 60%); }
      `}</style>

      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl border-b bp-border">
        <div className="container-custom h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={content.logo} alt={content.brandName} className="h-9 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="px-4 py-2 text-sm font-medium bp-text-soft hover:bp-primary transition-colors">
                {i.label}
              </a>
            ))}
          </nav>
          <a href="#cta" className="hidden lg:inline-flex items-center gap-2 rounded-full bp-bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-all">
            Começar projeto <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bp-glow" />
        <div className="container-custom text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border bp-border px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bp-primary shadow-sm">
            <img src={content.logo} alt="" className="h-4 w-auto" />
            {content.brandName} · Grupo Cipriano Ayala
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl mt-8 leading-[1.05] tracking-tight">{content.heroTitle}</h1>
          <p className="mt-8 text-lg md:text-xl bp-text-soft max-w-3xl mx-auto leading-relaxed">{content.heroDescription}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-full bp-bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-all">
              Falar com a equipe <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-full border bp-border bg-white px-7 py-3.5 text-sm font-semibold bp-primary hover:bp-soft-bg transition-all">
              Conhecer a atuação
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {content.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl bp-primary">{s.value}</div>
                <div className="mt-2 text-xs md:text-sm bp-text-soft leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATUAÇÃO */}
      <section id="atuacao" className="py-24 bg-white border-y bp-border">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] bp-primary">
              <span className="h-px w-8 bp-bg-primary" /> 01 — {content.eyebrow}
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">{content.atuacaoTitle}</h2>
            <p className="mt-6 bp-text-soft leading-relaxed">{content.atuacaoDescription}</p>
            <ul className="mt-8 space-y-4">
              {content.atuacaoBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 bp-primary mt-0.5 shrink-0" />
                  <span className="bp-text-mid">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              {content.atuacaoCards.map(({ Icon, label }) => (
                <div key={label} className="aspect-square rounded-3xl bg-white border bp-border shadow-lg p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                  <Icon className="h-10 w-10 bp-primary" />
                  <div className="font-display font-bold text-lg">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] bp-primary">
              <span className="h-px w-8 bp-bg-primary" /> 02 — Serviços
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">{content.servicesTitle}</h2>
            <p className="mt-6 bp-text-soft leading-relaxed">{content.servicesDescription}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.services.map((s) => (
              <article key={s.n} className="group rounded-3xl bg-white border bp-border p-7 hover:shadow-xl transition-all">
                <div className="text-xs font-bold tracking-widest bp-primary">{s.n}</div>
                <h3 className="font-display font-bold text-xl mt-3 leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm bp-text-soft leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="inline-flex items-center text-[11px] font-semibold rounded-full bp-pill-bg px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-24 bg-white border-y bp-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] bp-primary">
              <span className="h-px w-8 bp-bg-primary" /> 03 — Resultados
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">{content.resultsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {content.cases.map((c) => (
              <article key={c.title} className="rounded-3xl border bp-border p-7 bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider bp-primary">{c.tag}</span>
                  <Trophy className="h-4 w-4 bp-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mt-4 leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm bp-text-soft leading-relaxed">{c.desc}</p>
                <div className="mt-6 flex items-baseline gap-3 border-t bp-border pt-5">
                  <div className="font-display font-bold text-3xl bp-primary">{c.metric}</div>
                  <div className="text-sm bp-text-soft">{c.sub}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] bp-primary">
              <span className="h-px w-8 bp-bg-primary" /> 04 — Método
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">{content.methodTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {content.method.map((m) => (
              <div key={m.n} className="rounded-2xl bg-white border bp-border p-6 hover:-translate-y-1 transition-transform">
                <div className="text-xs font-bold tracking-widest bp-primary">{m.n}</div>
                <h3 className="font-display font-bold text-base mt-3 leading-snug">{m.title}</h3>
                <p className="mt-2 text-xs bp-text-soft leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section id="ecossistema" className="py-24 bg-white border-t bp-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] bp-primary">
              <span className="h-px w-8 bp-bg-primary" /> 05 — Ecossistema
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">{content.ecosystemTitle}</h2>
            <p className="mt-6 bp-text-soft leading-relaxed">{content.ecosystemDescription}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {content.ecosystem.map((e) => (
              <div key={e.name} className="rounded-2xl border bp-border bg-white p-5 hover:shadow-lg transition-all">
                <div className="h-12 flex items-center">
                  <img src={e.logo} alt={e.name} className="max-h-10 w-auto object-contain" loading="lazy" />
                </div>
                <div className="mt-4 font-display font-bold">{e.name}</div>
                <p className="mt-1 text-xs bp-text-soft leading-relaxed">{e.desc}</p>
                <span className="mt-3 inline-flex text-[10px] font-bold uppercase tracking-wider bp-primary">{e.tag}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="/" className="inline-flex items-center gap-2 bp-primary font-semibold hover:gap-3 transition-all">
              Conhecer o ecossistema completo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 bp-cta-grad text-white">
        <div className="container-custom text-center max-w-3xl">
          <Sparkles className="h-10 w-10 mx-auto opacity-80" />
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-6 leading-tight">{content.ctaTitle}</h2>
          <p className="mt-6 text-white/90 text-lg leading-relaxed">{content.ctaDescription}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold bp-primary hover:opacity-90 transition-all shadow-lg">
              {content.ctaPrimaryLabel} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all">
              Conhecer o Grupo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
