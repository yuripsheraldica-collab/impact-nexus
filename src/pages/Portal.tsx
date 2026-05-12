import { ArrowRight, BarChart3, Lock, Headphones, ShieldCheck, FolderKanban, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const dashboardFeatures = [
  { icon: BarChart3, label: "Relatórios personalizados em tempo real" },
  { icon: FolderKanban, label: "Gestão de projetos e indicadores de impacto" },
  { icon: ShieldCheck, label: "Compliance, segurança e auditoria" },
];

const clienteFeatures = [
  { icon: Lock, label: "Acesso seguro e personalizado" },
  { icon: Headphones, label: "Suporte dedicado e atendimento prioritário" },
  { icon: Zap, label: "Documentos, contratos e relatórios em um só lugar" },
];

const Portal = () => {
  return (
    <div className="min-h-screen bg-background bg-mesh">
      {/* Top bar */}
      <header className="container-custom flex items-center justify-between py-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo-gca.svg" alt="Grupo Cipriano Ayala" className="h-11 w-11 transition-transform group-hover:scale-105" />
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground">Grupo</div>
            <div className="font-display font-bold -mt-1 text-primary-deep">Cipriano Ayala</div>
          </div>
        </Link>
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
          <ArrowLeft className="h-4 w-4" /> Voltar ao site
        </Link>
      </header>

      <main className="container-custom py-10 lg:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <span className="eyebrow">Acesso exclusivo</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight tracking-tight">
            Bem-vindo ao seu <span className="text-gradient">portal GCA</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Escolha por onde deseja entrar: acompanhe indicadores no Dashboard ou acesse sua Área do Cliente para documentos, contratos e suporte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Dashboard */}
          <div className="card-elevated p-8 lg:p-10 flex flex-col animate-fade-in">
            <span className="eyebrow">Dashboard</span>
            <h2 className="font-display font-bold text-3xl mt-4 leading-tight">
              Indicadores e <span className="text-gradient">decisões estratégicas</span>
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Plataforma exclusiva com dados em tempo real, KPIs de captação, projetos estruturados e métricas de impacto institucional. Tudo com a transparência e a segurança que sua instituição precisa.
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              {dashboardFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="h-8 w-8 grid place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <f.icon className="h-4 w-4" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
              <a href="https://yuripsheraldica-collab.github.io/portal-gca/" target="_blank" rel="noopener noreferrer">
                Acessar Dashboard <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Área do cliente */}
          <div className="card-elevated p-8 lg:p-10 flex flex-col animate-fade-in [animation-delay:0.1s] relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
            <span className="eyebrow">Área do Cliente</span>
            <h2 className="font-display font-bold text-3xl mt-4 leading-tight">
              Tudo o que você precisa, <span className="text-gradient">em um só lugar</span>
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Sua área exclusiva para gerenciar contratos, baixar relatórios, acompanhar projetos em andamento e contar com atendimento prioritário do time GCA, sempre que precisar.
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              {clienteFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="h-8 w-8 grid place-items-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <f.icon className="h-4 w-4" />
                  </span>
                  {f.label}
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
              <Link to="/">
                Acessar Área do Cliente <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 text-center text-sm text-muted-foreground">
          Ainda não é cliente?{" "}
          <Link to="/#contato" className="text-primary font-semibold hover:underline">
            Fale com um especialista
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Portal;
