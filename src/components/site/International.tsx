import { Globe2, Handshake, BookOpen, Sparkles } from "lucide-react";

const items = [
  { icon: Handshake, title: "Parcerias internacionais" },
  { icon: Globe2, title: "Projetos globais" },
  { icon: BookOpen, title: "Troca de conhecimento" },
  { icon: Sparkles, title: "Impacto sem fronteiras" },
];

export const International = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div className="animate-fade-in">
            <span className="eyebrow">Internacionalização</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight tracking-tight">
              Levando nossa excelência <span className="text-gradient">além das fronteiras</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Atuamos em parceria com organizações internacionais para ampliar oportunidades, compartilhar conhecimento e gerar impacto global.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {items.map((it) => (
                <div key={it.title} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-[var(--shadow-sm)]">
                  <span className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{it.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Globe visual */}
          <div className="relative aspect-square max-w-[520px] mx-auto animate-scale-in">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
            <div className="relative w-full h-full rounded-full border-2 border-dashed border-primary/30 grid place-items-center">
              <div className="w-3/4 h-3/4 rounded-full border-2 border-dashed border-primary/30 grid place-items-center animate-[spin_40s_linear_infinite]">
                <Globe2 className="h-32 w-32 text-primary" strokeWidth={1.2} />
              </div>
              {/* Dots */}
              {[
                { t: "10%", l: "20%" },
                { t: "30%", l: "85%" },
                { t: "70%", l: "10%" },
                { t: "80%", l: "70%" },
                { t: "50%", l: "50%" },
              ].map((d, i) => (
                <span
                  key={i}
                  className="absolute h-3 w-3 rounded-full bg-accent shadow-glow animate-float"
                  style={{ top: d.t, left: d.l, animationDelay: `${i * 0.6}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
