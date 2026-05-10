import { Check, ArrowRight, ShieldCheck, BarChart3, FolderKanban, Lock, Headphones, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboard from "@/assets/dashboard.jpg";
import clientArea from "@/assets/client-area.jpg";

const dashboardItems = [
  { icon: BarChart3, label: "Relatórios personalizados" },
  { icon: FolderKanban, label: "Indicadores de impacto" },
  { icon: ShieldCheck, label: "Gestão de projetos" },
  { icon: Lock, label: "Segurança e compliance" },
];
const clientItems = [
  { icon: Lock, label: "Acesso seguro" },
  { icon: Headphones, label: "Suporte dedicado" },
  { icon: Zap, label: "Agilidade nos processos" },
];

export const Platform = () => {
  return (
    <section id="resultados" className="py-24 bg-surface">
      <div className="container-custom grid lg:grid-cols-2 gap-8">
        {/* Dashboard card */}
        <div className="card-elevated overflow-hidden p-8 animate-fade-in">
          <span className="eyebrow">Tecnologia e transparência</span>
          <h3 className="font-display font-bold text-3xl mt-4 leading-tight">
            Dashboard inteligente para <span className="text-gradient">decisões estratégicas</span>.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Acompanhe indicadores, projetos, captações e resultados em tempo real com nossa plataforma exclusiva.
          </p>
          <ul className="mt-5 space-y-2.5">
            {dashboardItems.map((it) => (
              <li key={it.label} className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="h-7 w-7 grid place-items-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                {it.label}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl overflow-hidden border border-border bg-secondary/40">
            <img src={dashboard} alt="Dashboard" className="w-full h-56 object-cover" loading="lazy" />
          </div>
          <Button asChild variant="soft" className="mt-6">
            <a href="/portal">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Client area card */}
        <div className="card-elevated overflow-hidden p-8 animate-fade-in [animation-delay:0.1s]">
          <span className="eyebrow">Área do cliente</span>
          <h3 className="font-display font-bold text-3xl mt-4 leading-tight">
            Tudo o que você precisa, <span className="text-gradient">em um só lugar</span>.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Sua área exclusiva com documentos, contratos, relatórios e atendimento prioritário.
          </p>
          <ul className="mt-5 space-y-2.5">
            {clientItems.map((it) => (
              <li key={it.label} className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="h-7 w-7 grid place-items-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                {it.label}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl overflow-hidden border border-border bg-secondary/40">
            <img src={clientArea} alt="Área do cliente" className="w-full h-56 object-cover" loading="lazy" />
          </div>
          <Button asChild variant="hero" className="mt-6">
            <a href="/portal">
              Acessar minha área <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
