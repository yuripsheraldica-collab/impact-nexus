const milestones = [
  { year: "2009", title: "Início da jornada", desc: "Nasce o Cipriano Ayala com foco em gestão pública." },
  { year: "2014", title: "Expansão de atuação", desc: "Novas soluções e a criação do INFIS em inteligência fiscal." },
  { year: "2018", title: "Ecossistema nasce", desc: "Integramos novas unidades e ampliamos nosso impacto." },
  { year: "2022", title: "Reconhecimento", desc: "Cases de sucesso e presença nacional consolidada." },
  { year: "2024+", title: "Novos horizontes", desc: "Internacionalização e tecnologia a serviço do impacto." },
];

export const Timeline = () => {
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

        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative z-10 mx-auto md:mx-0 h-12 w-12 rounded-full bg-gradient-primary grid place-items-center shadow-glow">
                  <span className="h-3 w-3 rounded-full bg-white" />
                </div>
                <div className="mt-5 font-display font-bold text-2xl text-primary-deep">{m.year}</div>
                <div className="mt-1 font-semibold text-foreground">{m.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
