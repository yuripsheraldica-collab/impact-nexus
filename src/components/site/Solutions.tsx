import { ArrowUpRight } from "lucide-react";

const units = [
  {
    name: "INFIS",
    logo: "/logo-azul.svg",
    description: "Inteligência fiscal e estratégias para maximizar receitas públicas com eficiência.",
    href: "https://ciprianoayala.com.br/eps-nova/",
    accent: "from-blue-500/15 to-blue-500/0",
  },
  {
    name: "Fundify",
    logo: "/logo-fundify.svg",
    description: "Plataforma de captação de recursos e crowdfunding para projetos de impacto.",
    href: "https://ciprianoayala.com.br/fundify-2/",
    accent: "from-emerald-500/15 to-emerald-500/0",
  },
  {
    name: "Certisafe",
    logo: "/logo-certisafe.svg",
    description: "Certificações ESG e consultoria em compliance e governança institucional.",
    href: "https://ciprianoayala.com.br/certsafe-2/",
    accent: "from-cyan-500/15 to-cyan-500/0",
  },
  {
    name: "Instituto Cataliza",
    logo: "/logo-cataliza.svg",
    description: "Fomento à educação, pesquisa e inovação social para transformar realidades.",
    href: "https://ciprianoayala.com.br/instituto-cataliza/",
    accent: "from-violet-500/15 to-violet-500/0",
  },
  {
    name: "3s Marketing",
    logo: "/logo-3s.svg",
    description: "Comunicação estratégica para fortalecer marcas e gerar impacto.",
    href: "https://ciprianoayala.com.br/3s-marketing/",
    accent: "from-purple-500/15 to-purple-500/0",
  },
  {
    name: "Otimistas",
    logo: "/logo-otimistas.svg",
    description: "Atuação estratégica em Brasília para captação de recursos, articulação institucional e network de alto nível.",
    href: "#contato",
    accent: "from-orange-500/15 to-orange-500/0",
  },
];

export const Solutions = () => {
  return (
    <section id="solucoes" className="py-24 bg-surface relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <span className="eyebrow">Nosso ecossistema</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight tracking-tight">
              Soluções integradas para cada{" "}
              <span className="text-gradient">desafio da sua instituição</span>.
            </h2>
          </div>
          <a
            href="#unidades"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Conheça todas as unidades
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <div id="unidades" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {units.map((u, i) => (
            <a
              key={u.name}
              href={u.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden card-elevated p-6 flex flex-col animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${u.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative h-14 flex items-center">
                <img src={u.logo} alt={u.name} className="max-h-12 w-auto object-contain" loading="lazy" />
              </div>
              <h3 className="relative font-display font-bold text-xl mt-5 text-foreground">{u.name}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{u.description}</p>
              <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Saiba mais <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
