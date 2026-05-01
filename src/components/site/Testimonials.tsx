import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Com o apoio do Grupo Cipriano Ayala, conseguimos ampliar nossa capacidade de investir e transformar a realidade da nossa cidade.",
    name: "Prefeitura Municipal",
    role: "Cliente INFIS",
  },
  {
    quote: "A plataforma Fundify foi essencial para tirarmos nosso projeto do papel e alcançarmos nossos objetivos.",
    name: "ONG Educar",
    role: "Cliente Fundify",
  },
  {
    quote: "A Certisafe nos ajudou a conquistar a certificação ESG, elevando nossa credibilidade e impacto.",
    name: "Instituto Social",
    role: "Cliente Certisafe",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">O impacto que nos move</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 tracking-tight leading-tight">
            Histórias reais de <span className="text-gradient">transformação</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-elevated p-7 flex flex-col animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="h-7 w-7 text-primary" />
              <p className="mt-4 text-foreground/90 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold text-primary-deep">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl p-7 bg-gradient-primary text-primary-foreground shadow-glow flex flex-col animate-fade-in [animation-delay:0.4s]">
            <h3 className="font-display font-bold text-2xl leading-tight">
              Vamos transformar juntos a gestão da sua instituição?
            </h3>
            <p className="mt-3 text-primary-foreground/90 text-sm leading-relaxed flex-1">
              Fale com nossos especialistas e descubra como podemos gerar mais impacto e resultados.
            </p>
            <Button asChild variant="secondary" className="mt-6 self-start">
              <a href="#contato">
                Fale com um especialista <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
