import { useEffect, useRef, useState } from "react";
import { Rocket, Building2, MapPin, TrendingUp, Award, Layers, Globe2 } from "lucide-react";

const milestones = [
  { year: "2016", title: "O início da jornada", desc: "Atuação na Santa Casa de Tietê com captação de recursos, gestão de emendas parlamentares e estruturação de projetos públicos para instituições filantrópicas.", icon: Rocket },
  { year: "2018", title: "Nascimento da empresa", desc: "Abertura da empresa com serviços especializados para hospitais filantrópicos, focando na execução de projetos financiados por emendas parlamentares federais.", icon: Building2 },
  { year: "2020", title: "Dedicação integral e mudança para Sorocaba", desc: "Cipriano passa a atuar integralmente como empresário. A mudança para Sorocaba aproxima a empresa dos clientes na Região Metropolitana.", icon: MapPin },
  { year: "2021", title: "Expansão e autoridade no setor", desc: "Crescimento com participação ativa em eventos da FEHOSP, palestras, cursos e capacitações sobre gestão de recursos públicos no terceiro setor.", icon: TrendingUp },
  { year: "2024", title: "Consolidação nacional", desc: "Mais de 100 clientes atendidos e R$ 1,5 bilhão em projetos gerenciados. Nova sede própria na Avenida JK, no Centro de Sorocaba.", icon: Award },
  { year: "2025", title: "Nasce o Grupo Cipriano Ayala", desc: "Ecossistema de empresas e soluções para o terceiro setor: Otimistas, 3S Marketing, Instituto Cataliza, CertSafe e Fundify.", icon: Layers },
  { year: "2026", title: "Início da internacionalização", desc: "Expansão internacional, levando metodologia, experiência e visão de impacto para além das fronteiras brasileiras.", icon: Globe2 },
];

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const scrolled = Math.min(Math.max(vh - rect.top, 0), total);
      const p = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(p);
      setActiveIndex(Math.floor(p * milestones.length) - 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="grupo" className="py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">Nossa história</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight tracking-tight">
            Uma trajetória construída com{" "}
            <span className="text-gradient">propósito e visão de futuro</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Ao longo dos anos, fortalecemos nossa atuação, expandindo fronteiras e impactando milhares de vidas por meio de uma gestão ética, transparente e inovadora.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Desktop: horizontal animated line */}
          <div className="hidden md:block absolute left-0 right-0 top-6 h-1 rounded-full bg-border overflow-hidden">
            <div
              className="h-full bg-gradient-primary transition-[width] duration-300 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          {/* Mobile: vertical animated line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 rounded-full bg-border overflow-hidden">
            <div
              className="w-full bg-gradient-primary transition-[height] duration-300 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-10 md:gap-6">
            {milestones.map((m, i) => {
              const isActive = i <= activeIndex;
              const Icon = m.icon;
              return (
                <div
                  key={m.year}
                  className="relative pl-20 md:pl-0 transition-all duration-700"
                  style={{
                    opacity: isActive ? 1 : 0.35,
                    transform: isActive ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <div
                    className={`absolute md:relative left-0 md:left-auto top-0 z-10 h-12 w-12 rounded-full grid place-items-center transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-primary shadow-glow scale-110"
                        : "bg-card border-2 border-border"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors ${
                        isActive ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                    />
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    )}
                  </div>
                  <div className="mt-0 md:mt-5 font-display font-bold text-2xl text-primary-deep">{m.year}</div>
                  <div className="mt-1 font-semibold text-foreground">{m.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
