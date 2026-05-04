import { Linkedin, Facebook, Instagram, Mail, MapPin } from "lucide-react";

const navColumns = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "O Grupo", href: "#grupo" },
      { label: "Soluções", href: "#solucoes" },
      { label: "Resultados", href: "#resultados" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Unidades",
    links: [
      { label: "INFIS", href: "https://ciprianoayala.com.br/eps-nova/", external: true },
      { label: "Fundify", href: "https://ciprianoayala.com.br/fundify-2/", external: true },
      { label: "Certisafe", href: "https://ciprianoayala.com.br/certsafe-2/", external: true },
      { label: "Instituto Cataliza", href: "https://ciprianoayala.com.br/instituto-cataliza/", external: true },
      { label: "3s Marketing", href: "https://ciprianoayala.com.br/3s-marketing/", external: true },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Captação de recursos", href: "#solucoes" },
      { label: "Consultoria ESG", href: "#solucoes" },
      { label: "Compliance e gestão", href: "#solucoes" },
      { label: "Planejamento estratégico", href: "#solucoes" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="contato" className="bg-primary-deep text-primary-foreground pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-mesh" />
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[1.2fr_2fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white p-1.5 grid place-items-center">
                <img src="/logo-gca.svg" alt="GCA" className="h-full w-full" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold">Grupo</div>
                <div className="font-display font-bold -mt-1">Cipriano Ayala</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/80 leading-relaxed">
              Ecossistema de soluções estratégicas para gestão pública e terceiro setor, com foco em impacto social e transparência.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/grupociprianoayala/", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/grupociprianoayala/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/grupociprianoayala", label: "Facebook" },
                { Icon: Mail, href: "mailto:contato@ciprianoayala.com.br", label: "E-mail" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 grid place-items-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-semibold text-base mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...((l as any).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary-glow" />
                <a href="mailto:contato@ciprianoayala.com.br" className="text-primary-foreground/85 hover:text-primary-foreground">
                  contato@ciprianoayala.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
                <div className="text-primary-foreground/85">
                  <div className="font-semibold text-primary-foreground">Sorocaba — SP</div>
                  Av. Pres. Juscelino Kubitscheck de Oliveira, 888<br />Centro — 18035-060
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
                <div className="text-primary-foreground/85">
                  <div className="font-semibold text-primary-foreground">Brasília — DF</div>
                  SHN Quadra 1 Conj. A Bloco F Entrada A, Sala 713<br />Asa Norte — 70701-000
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Grupo Cipriano Ayala. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-foreground">Política de Privacidade</a>
            <a href="#" className="hover:text-primary-foreground">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
