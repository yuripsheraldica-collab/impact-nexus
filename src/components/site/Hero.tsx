import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero-team.jpg";
import heroImpact from "@/assets/hero-impact.jpg";
import heroBuilding from "@/assets/hero-building.jpg";

const metrics = [
  { value: "+R$ 2,5 bi", label: "em recursos captados" },
  { value: "+1.200", label: "projetos estruturados" },
  { value: "+450", label: "instituições atendidas" },
  { value: "+15 anos", label: "de experiência" },
  { value: "Brasil + Mundo", label: "atuação e expansão internacional" },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-mesh">
      {/* decorative blobs */}
      <div className="absolute -top-20 -right-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl animate-blob" />
      <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl animate-blob [animation-delay:3s]" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          {/* Copy */}
          <div className="animate-fade-in">
            <span className="eyebrow">Grupo Cipriano Ayala</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-[64px] leading-[1.05] mt-6 tracking-tight">
              Excelência e inovação{" "}
              <span className="text-gradient">para transformar instituições</span>{" "}
              e gerar impacto real.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Somos um ecossistema de soluções estratégicas para gestão pública e terceiro setor. Inteligência fiscal, captação, ESG e tecnologia em um só lugar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href="#solucoes">
                  Conheça nossas soluções
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="soft" size="xl">
                <a href="#contato">Fale com um especialista</a>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in [animation-delay:0.2s]">
            <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-soft bg-gradient-to-br from-secondary to-white">
              <img
                src={heroTeam}
                alt="Equipe Grupo Cipriano Ayala em reunião estratégica"
                className="absolute inset-0 w-full h-full object-cover"
                width={1280}
                height={960}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/30 via-transparent to-transparent" />
            </div>

            {/* Floating image left */}
            <div className="absolute -top-8 -left-8 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-8 border-white shadow-soft animate-float">
              <img src={heroImpact} alt="Impacto social" className="w-full h-full object-cover" loading="lazy" />
            </div>

            {/* Floating image bottom-right */}
            <div className="absolute -bottom-10 -right-6 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-8 border-white shadow-soft animate-float [animation-delay:2s]">
              <img src={heroBuilding} alt="Gestão pública" className="w-full h-full object-cover" loading="lazy" />
            </div>

            {/* Floating chip */}
            <div className="absolute top-6 right-6 glass rounded-full px-4 py-2 flex items-center gap-2 shadow-soft">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary-deep">Impacto desde 2009</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="card-elevated p-5 animate-fade-in"
              style={{ animationDelay: `${0.1 * i + 0.3}s` }}
            >
              <div className="font-display text-2xl md:text-[26px] font-bold text-gradient">{m.value}</div>
              <div className="mt-1 text-sm text-muted-foreground leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
