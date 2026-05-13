import { Coins, Globe2, LineChart, Users } from "lucide-react";
import { BrandPage } from "@/components/site/BrandPage";

const ecosystem = [
  { name: "EPS", logo: "/logo-azul.svg", desc: "Elaboração e execução de projetos com recursos públicos.", tag: "Projetos" },
  { name: "CertSafe", logo: "/logo-certisafe.svg", desc: "Certificação em compliance para captar com mais credibilidade.", tag: "Certificação" },
  { name: "Otimistas", logo: "/logo-otimistas.svg", desc: "Articulação institucional em Brasília.", tag: "Articulação" },
  { name: "3S Marketing", logo: "/logo-3s.svg", desc: "Comunicação digital e captação online.", tag: "Comunicação" },
  { name: "Instituto Cataliza", logo: "/logo-cataliza.svg", desc: "Capacitação de empreendedores sociais.", tag: "Formação" },
];

const Fundify = () => (
  <BrandPage
    theme={{ primary: "#059669", primaryDark: "#047857", textDark: "#062c20", bgSoft: "#F1FBF6", borderSoft: "#c7eed9" }}
    content={{
      brandName: "Fundify",
      logo: "/logo-fundify.svg",
      tagline: "Tecnologia para captação e transparência.",
      metaTitle: "Fundify — Captação e transparência para o terceiro setor | GCA",
      metaDescription: "Fundify: plataforma de captação, crowdfunding e portal de transparência automatizado.",
      eyebrow: "Nossa atuação",
      heroTitle: <>Tecnologia para <em className="not-italic" style={{ color: "var(--bp-primary)" }}>captar mais</em> e prestar contas com confiança.</>,
      heroDescription:
        "Fundify é a plataforma do GCA para captação digital e transparência. Crowdfunding para causas, doações recorrentes e portal de transparência automático em conformidade com TCU, CGU e TCEs.",
      stats: [
        { value: "+R$50M", label: "captados em campanhas digitais" },
        { value: "+200", label: "instituições conectadas" },
        { value: "100%", label: "transparência automatizada" },
        { value: "24/7", label: "operação na nuvem" },
      ],
      atuacaoTitle: <>Doações, transparência e dados — em <span style={{ color: "var(--bp-primary)" }}>uma plataforma só</span>.</>,
      atuacaoDescription:
        "Fundify une o que toda instituição social precisa: ferramentas para arrecadar com público amplo e um portal de transparência que se atualiza sozinho com base nos dados da execução.",
      atuacaoBullets: [
        "Páginas de campanha customizadas para cada causa",
        "Doações recorrentes via Pix, cartão e boleto",
        "Portal de transparência automatizado",
        "Painéis com indicadores em tempo real",
      ],
      atuacaoCards: [
        { Icon: Coins, label: "Captação digital" },
        { Icon: Globe2, label: "Portal público" },
        { Icon: LineChart, label: "Dados em tempo real" },
        { Icon: Users, label: "Comunidade engajada" },
      ],
      servicesTitle: <>Plataforma completa para <span style={{ color: "var(--bp-primary)" }}>captar e prestar contas</span>.</>,
      servicesDescription: "Tudo o que uma instituição social precisa para operar com tecnologia de ponta e transparência total.",
      services: [
        { n: "01", title: "Crowdfunding", desc: "Campanhas para projetos específicos, com landing pages, vídeos e gestão de doadores.", tags: ["Campanhas", "Pix", "Cartão"] },
        { n: "02", title: "Doação Recorrente", desc: "Programa de mantenedores com cobrança automática e dashboard de retenção.", tags: ["Recorrência", "CRM"] },
        { n: "03", title: "Portal de Transparência", desc: "Publicação automatizada de receitas, despesas, projetos e prestação de contas.", tags: ["TCU", "CGU", "Pública"] },
        { n: "04", title: "BI e Dashboards", desc: "Painéis estratégicos para conselhos, doadores e órgãos de controle.", tags: ["BI", "Indicadores"] },
        { n: "05", title: "Integrações", desc: "API e conectores para ERP, contabilidade e sistemas internos.", tags: ["API", "ERP"] },
        { n: "06", title: "Suporte e onboarding", desc: "Equipe dedicada para implantar a plataforma e treinar sua equipe.", tags: ["Implantação"] },
      ],
      resultsTitle: <>Mais doadores, <span style={{ color: "var(--bp-primary)" }}>mais transparência</span>.</>,
      cases: [
        { tag: "Hospital", title: "Campanha de Pix arrecadou R$ 1,2M em 60 dias", desc: "Estratégia digital e plataforma Fundify dobraram a base de doadores recorrentes.", metric: "R$1,2M", sub: "em 60 dias" },
        { tag: "OSC", title: "Portal de transparência online em 2 semanas", desc: "Publicação automática de receitas, despesas e projetos integrada ao ERP.", metric: "2 sem.", sub: "do contrato ao ar" },
        { tag: "Fundação", title: "Mantenedores cresceram 4x em 12 meses", desc: "Programa de doação recorrente com automação de cobrança e relacionamento.", metric: "4x", sub: "mais mantenedores" },
        { tag: "Rede de hospitais", title: "Indicadores unificados em dashboard único", desc: "Painel consolidado para conselho diretor e órgãos de controle.", metric: "1 painel", sub: "para toda a rede" },
      ],
      methodTitle: <>Implantação <span style={{ color: "var(--bp-primary)" }}>guiada do início ao fim</span>.</>,
      method: [
        { n: "01", title: "Diagnóstico", desc: "Entendimento da realidade de captação e transparência da instituição." },
        { n: "02", title: "Configuração", desc: "Setup da plataforma com identidade visual e dados da instituição." },
        { n: "03", title: "Integrações", desc: "Conexões com ERP, contabilidade e meios de pagamento." },
        { n: "04", title: "Lançamento", desc: "Go-live de campanhas e portal com acompanhamento dedicado." },
        { n: "05", title: "Evolução", desc: "Otimização contínua com base em dados e novas funcionalidades." },
      ],
      ecosystemTitle: <>Fundify integrada ao <span style={{ color: "var(--bp-primary)" }}>ecossistema GCA</span>.</>,
      ecosystemDescription: "Captação, projetos, certificação, comunicação e formação em uma única jornada.",
      ecosystem,
      ctaTitle: <>Pronto para captar com <em className="not-italic">tecnologia de verdade</em>?</>,
      ctaDescription: "Conheça a Fundify e veja como sua instituição pode escalar a captação digital e a transparência.",
      ctaPrimaryLabel: "Conhecer a plataforma",
    }}
  />
);

export default Fundify;
