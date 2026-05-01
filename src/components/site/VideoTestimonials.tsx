import { useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: "Fv3m7NUsW1A",
    title: "Santa Casa de Sorocaba",
    subtitle: "Transformação na gestão hospitalar",
  },
  {
    id: "LYp5GAalvJ8",
    title: "Caso de sucesso",
    subtitle: "Captação e impacto social",
  },
  {
    id: "W6pSS5F-G-Q",
    title: "Depoimento institucional",
    subtitle: "Resultados com o Grupo Cipriano Ayala",
  },
  {
    id: "ATo_Lzo9zQ0",
    title: "Parceria estratégica",
    subtitle: "Eficiência e governança",
  },
];

export const VideoTestimonials = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="resultados" className="py-24 bg-background relative">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Provas sociais em vídeo</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight tracking-tight">
            Quem confia no Grupo, <span className="text-gradient">conta a própria história</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Veja depoimentos reais de instituições que transformaram seus resultados com nossas soluções.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videos.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActive(v.id)}
              className="group relative aspect-[9/12] rounded-2xl overflow-hidden card-elevated text-left animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
              aria-label={`Reproduzir ${v.title}`}
            >
              <img
                src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/40 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="h-16 w-16 rounded-full bg-white/95 grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 text-primary-deep fill-primary-deep ml-1" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <div className="font-display font-bold text-lg leading-tight">{v.title}</div>
                <div className="text-sm text-primary-foreground/80 mt-1">{v.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm grid place-items-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition-colors"
            onClick={() => setActive(null)}
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0`}
              title="Depoimento"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};
