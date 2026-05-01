import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import founder from "@/assets/founder.png";

export const Founder = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image card */}
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-accent opacity-20 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 aspect-[4/5] shadow-soft">
              <img
                src={founder}
                alt="Cipriano Ayala — fundador"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">Fundador & CEO</div>
                <div className="font-display font-bold text-xl text-primary-deep">Cipriano Ayala</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in [animation-delay:0.15s]">
            <span className="eyebrow">Nosso fundador</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 tracking-tight">Cipriano Ayala</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Empresário, consultor e visionário, Cipriano Ayala dedica sua trajetória a transformar a gestão pública e o terceiro setor no Brasil. Com mais de 15 anos de experiência, lidera um ecossistema que une estratégia, inovação e propósito para gerar impacto real.
            </p>

            <div className="relative mt-8 p-7 rounded-2xl bg-card border border-border shadow-soft">
              <Quote className="absolute -top-4 left-7 h-8 w-8 text-primary bg-card p-1.5 rounded-full" />
              <p className="text-foreground/90 leading-relaxed italic">
                "Acreditamos que uma gestão <strong className="text-primary-deep not-italic">inteligente e transparente</strong> é a chave para transformar recursos em <strong className="text-primary-deep not-italic">oportunidades</strong> e pessoas em protagonistas de suas histórias."
              </p>
              <div className="mt-4 font-display font-semibold text-primary-deep">— Cipriano Ayala</div>
            </div>

            <Button asChild variant="hero" size="lg" className="mt-8">
              <a href="#contato">
                Conheça sua história <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
