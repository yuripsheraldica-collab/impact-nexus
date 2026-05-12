import { useEffect } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Target, Handshake, Network, Building2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const stats = [
  { value: "+15", label: "anos de articulação institucional em Brasília" },
  { value: "+R$2bi", label: "em recursos viabilizados para o terceiro setor" },
  { value: "+300", label: "instituições atendidas em todo o país" },
  { value: "100%", label: "foco em causas de impacto social" },
];

const services = [
  {
    n: "01",
    title: "Captação de Recursos Públicos",
    desc: "Articulação direta com ministérios, secretarias e parlamentares para viabilizar emendas, convênios e recursos federais para sua organização.",
    tags: ["Emendas", "Convênios", "Federal"],
  },
  {
    n: "02",
    title: "Articulação Institucional em Brasília",
    desc: "Presença física e estratégica nos principais corredores de decisão da capital federal — Congresso, ministérios e órgãos reguladores.",
    tags: ["Congresso", "Ministérios", "Reguladores"],
  },
  {
    n: "03",
    title: "Network de Alto Nível",
    desc: "Acesso a uma rede consolidada de tomadores de decisão, lideranças políticas e gestores públicos comprometidos com causas sociais.",
    tags: ["Network", "Lideranças", "Gestores"],
  },
  {
    n: "04",
    title: "Inteligência Política e Regulatória",
    desc: "Monitoramento de agendas, pautas e oportunidades — antecipando movimentos que impactam o terceiro setor e a saúde filantrópica.",
    tags: ["Monitoramento", "Agenda", "Pautas"],
  },
  {
    n: "05",
    title: "Estruturação de Projetos Estratégicos",
    desc: "Apoio na construção de projetos alinhados às prioridades de governo e às janelas de oportunidade legislativas e orçamentárias.",
    tags: ["Projetos", "Orçamento", "Estratégia"],
  },
];

const cases = [
  { tag: "Captação", title: "R$ 18 milhões em emendas viabilizadas para hospital filantrópico", desc: "Articulação coordenada com bancada estadual garantiu execução plena do recurso em ano fiscal único.", metric: "R$18M", sub: "em emendas executadas" },
  { tag: "Convênio", title: "Aprovação de convênio federal de R$ 6 milhões para OSC nacional", desc: "Estruturação técnica e articulação ministerial resultaram em parceria plurianual com o governo federal.", metric: "R$6M", sub: "em convênio plurianual" },
  { tag: "Articulação", title: "Audiência ministerial estratégica em 7 dias", desc: "Mobilização rápida da rede Otimistas garantiu acesso direto à secretaria executiva para pauta urgente.", metric: "7 dias", sub: "do contato à audiência" },
  { tag: "Regulação", title: "Inclusão de categoria filantrópica em portaria nacional", desc: "Atuação técnica e política assegurou reconhecimento de hospitais filantrópicos em programa federal.", metric: "1 portaria", sub: "publicada com a categoria" },
];

const method = [
  { n: "01", title: "Diagnóstico estratégico", desc: "Mapeamento das prioridades da organização, oportunidades em aberto e janelas políticas favoráveis." },
  { n: "02", title: "Plano de articulação", desc: "Definição de stakeholders prioritários, cronograma e abordagens personalizadas para cada interlocutor." },
  { n: "03", title: "Execução em Brasília", desc: "Atuação presencial nos órgãos, audiências e reuniões — representando os interesses da sua instituição." },
  { n: "04", title: "Monitoramento contínuo", desc: "Acompanhamento da tramitação, prestação de contas e relatórios periódicos com transparência total." },
  { n: "05", title: "Integração ao ecossistema GCA", desc: "Conexão com EPS, Fundify e CertSafe para execução técnica, transparência e certificação dos recursos captados." },
];

const ecosystem = [
  { name: "EPS", logo: "/logo-azul.svg", desc: "Escritório de Projetos Sociais. Elaboração, execução e prestação de contas.", tag: "Projetos" },
  { name: "Fundify", logo: "/logo-fundify.svg", desc: "Portal de transparência automatizado. Conformidade com TCU, CGU e TCEs.", tag: "Tecnologia" },
  { name: "CertSafe", logo: "/logo-certisafe.svg", desc: "Certificação em 6 pilares. Idoneidade e credibilidade para captar com mais força.", tag: "Certificação" },
  { name: "3S Marketing", logo: "/logo-3s.svg", desc: "Agência especializada no terceiro setor. Sites, redes e captação digital.", tag: "Comunicação" },
  { name: "Instituto Cataliza", logo: "/logo-cataliza.svg", desc: "Capacitação de empreendedores sociais. Da ideia à organização pronta para captar.", tag: "Formação" },
];

const navItems = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Método", href: "#metodo" },
  { label: "Ecossistema", href: "#ecossistema" },
];

const Otimistas = () => {
  useEffect(() => {
    document.title = "Otimistas — Articulação institucional em Brasília | Grupo Cipriano Ayala";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Otimistas: captação de recursos públicos, articulação em Brasília e network de alto nível para o terceiro setor.");
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F2] text-[#1a0f08]">
      {/* Sub-header / brand bar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl border-b border-orange-100">
        <div className="container-custom h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src="/logo-otimistas.svg" alt="Otimistas" className="h-9 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="px-4 py-2 text-sm font-medium text-[#3a1f0a]/80 hover:text-[#FF7A1A] transition-colors">
                {i.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-[#e86a0a] transition-all"
          >
            Começar projeto <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(255,122,26,0.18),_transparent_60%)]" />
        <div className="absolute -top-32 -right-40 w-[40rem] h-[40rem] rounded-full bg-orange-300/20 blur-3xl -z-10" />
        <div className="container-custom text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-orange-200 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#FF7A1A] shadow-sm">
            <img src="/logo-otimistas.svg" alt="" className="h-4 w-auto" />
            Otimistas · Grupo Cipriano Ayala
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl mt-8 leading-[1.05] tracking-tight">
            Articulação que faz <em className="not-italic text-[#FF7A1A]">recursos chegarem</em> onde mais importa.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#3a1f0a]/75 max-w-3xl mx-auto leading-relaxed">
            A Otimistas é o braço de articulação institucional do Grupo Cipriano Ayala em Brasília.
            Captação de recursos públicos, network de alto nível e presença estratégica nos corredores de decisão do país.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7A1A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-[#e86a0a] transition-all">
              Falar com a equipe <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#FF7A1A] hover:bg-orange-50 transition-all">
              Conhecer a atuação
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl text-[#FF7A1A]">{s.value}</div>
                <div className="mt-2 text-xs md:text-sm text-[#3a1f0a]/70 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATUAÇÃO */}
      <section id="atuacao" className="py-24 bg-white border-y border-orange-100">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF7A1A]">
              <span className="h-px w-8 bg-[#FF7A1A]" /> 01 — Nossa atuação
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">
              Quando a articulação certa acontece, <span className="text-[#FF7A1A]">o impacto se multiplica</span>.
            </h2>
            <p className="mt-6 text-[#3a1f0a]/75 leading-relaxed">
              Em Brasília, decisões de bilhões de reais são tomadas todos os dias. A Otimistas garante que sua organização
              esteja na sala certa, na hora certa, com a abordagem certa — transformando agendas políticas em recursos
              executados para causas reais.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Acesso direto a tomadores de decisão em Brasília",
                "Equipe sênior com trajetória no setor público",
                "Network construído ao longo de mais de 15 anos",
                "Integração com todo o ecossistema GCA",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#FF7A1A] mt-0.5 shrink-0" />
                  <span className="text-[#3a1f0a]/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/40 to-orange-100/0 rounded-3xl blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { Icon: Target, label: "Foco estratégico" },
                { Icon: Handshake, label: "Articulação direta" },
                { Icon: Network, label: "Rede consolidada" },
                { Icon: Building2, label: "Presença em Brasília" },
              ].map(({ Icon, label }) => (
                <div key={label} className="aspect-square rounded-3xl bg-white border border-orange-100 shadow-lg shadow-orange-500/5 p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                  <Icon className="h-10 w-10 text-[#FF7A1A]" />
                  <div className="font-display font-bold text-lg text-[#1a0f08]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-[#FFF8F2]">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF7A1A]">
              <span className="h-px w-8 bg-[#FF7A1A]" /> 02 — O que a Otimistas faz por você
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">
              Articulação completa para quem precisa <span className="text-[#FF7A1A]">de resultado real</span>.
            </h2>
            <p className="mt-6 text-[#3a1f0a]/75 leading-relaxed">
              Da identificação da oportunidade à execução do recurso — tudo conduzido por quem conhece os caminhos de Brasília.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article key={s.n} className="group rounded-3xl bg-white border border-orange-100 p-7 hover:border-[#FF7A1A] hover:shadow-xl hover:shadow-orange-500/10 transition-all">
                <div className="text-xs font-bold tracking-widest text-[#FF7A1A]">{s.n}</div>
                <h3 className="font-display font-bold text-xl mt-3 leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-[#3a1f0a]/75 leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="inline-flex items-center text-[11px] font-semibold rounded-full bg-orange-50 text-[#FF7A1A] px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-24 bg-white border-y border-orange-100">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF7A1A]">
              <span className="h-px w-8 bg-[#FF7A1A]" /> 03 — Resultados que comprovam
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">
              Articulação que se traduz em <span className="text-[#FF7A1A]">recursos executados</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {cases.map((c) => (
              <article key={c.title} className="rounded-3xl border border-orange-100 p-7 bg-gradient-to-br from-white to-orange-50/40 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FF7A1A]">{c.tag}</span>
                  <Trophy className="h-4 w-4 text-[#FF7A1A]" />
                </div>
                <h3 className="font-display font-bold text-xl mt-4 leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-[#3a1f0a]/75 leading-relaxed">{c.desc}</p>
                <div className="mt-6 flex items-baseline gap-3 border-t border-orange-100 pt-5">
                  <div className="font-display font-bold text-3xl text-[#FF7A1A]">{c.metric}</div>
                  <div className="text-sm text-[#3a1f0a]/70">{c.sub}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="py-24 bg-[#FFF8F2]">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF7A1A]">
              <span className="h-px w-8 bg-[#FF7A1A]" /> 04 — Como atuamos
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">
              Um método estruturado para <span className="text-[#FF7A1A]">articulação de impacto</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {method.map((m) => (
              <div key={m.n} className="rounded-2xl bg-white border border-orange-100 p-6 hover:-translate-y-1 transition-transform">
                <div className="text-xs font-bold tracking-widest text-[#FF7A1A]">{m.n}</div>
                <h3 className="font-display font-bold text-base mt-3 leading-snug">{m.title}</h3>
                <p className="mt-2 text-xs text-[#3a1f0a]/70 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section id="ecossistema" className="py-24 bg-white border-t border-orange-100">
        <div className="container-custom">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF7A1A]">
              <span className="h-px w-8 bg-[#FF7A1A]" /> 05 — Ecossistema
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight">
              Sua organização no centro de um <span className="text-[#FF7A1A]">ecossistema completo</span>.
            </h2>
            <p className="mt-6 text-[#3a1f0a]/75 leading-relaxed">
              A Otimistas trabalha integrada às demais unidades do Grupo Cipriano Ayala — captação, execução, transparência, certificação e comunicação em um só lugar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {ecosystem.map((e) => (
              <div key={e.name} className="rounded-2xl border border-orange-100 bg-white p-5 hover:border-[#FF7A1A] hover:shadow-lg transition-all">
                <div className="h-12 flex items-center">
                  <img src={e.logo} alt={e.name} className="max-h-10 w-auto object-contain" loading="lazy" />
                </div>
                <div className="mt-4 font-display font-bold">{e.name}</div>
                <p className="mt-1 text-xs text-[#3a1f0a]/70 leading-relaxed">{e.desc}</p>
                <span className="mt-3 inline-flex text-[10px] font-bold uppercase tracking-wider text-[#FF7A1A]">{e.tag}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="/" className="inline-flex items-center gap-2 text-[#FF7A1A] font-semibold hover:gap-3 transition-all">
              Conhecer o ecossistema completo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 bg-gradient-to-br from-[#FF7A1A] to-[#ff9347] text-white">
        <div className="container-custom text-center max-w-3xl">
          <Sparkles className="h-10 w-10 mx-auto opacity-80" />
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-6 leading-tight">
            Sua causa merece <em className="not-italic">chegar mais longe</em>.
          </h2>
          <p className="mt-6 text-white/85 text-lg leading-relaxed">
            Vamos conversar sobre como a articulação certa em Brasília pode transformar oportunidades em recursos reais para sua organização.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#FF7A1A] hover:bg-orange-50 transition-all shadow-lg">
              Iniciar projeto de articulação <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all">
              Conhecer o Grupo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Otimistas;
