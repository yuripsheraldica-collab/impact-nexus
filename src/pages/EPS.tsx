import { FileText, ClipboardCheck, Wallet, BarChart3 } from "lucide-react";
import { BrandPage } from "@/components/site/BrandPage";

const ecosystem = [
  { name: "Fundify", logo: "/logo-fundify.svg", desc: "Portal de transparência automatizado para prestação de contas.", tag: "Tecnologia" },
  { name: "CertSafe", logo: "/logo-certisafe.svg", desc: "Certificação em compliance e governança institucional.", tag: "Certificação" },
  { name: "Otimistas", logo: "/logo-otimistas.svg", desc: "Articulação institucional em Brasília para captação federal.", tag: "Articulação" },
  { name: "3S Marketing", logo: "/logo-3s.svg", desc: "Comunicação estratégica para o terceiro setor.", tag: "Comunicação" },
  { name: "Instituto Cataliza", logo: "/logo-cataliza.svg", desc: "Capacitação e formação de empreendedores sociais.", tag: "Formação" },
];

const EPS = () => (
  <BrandPage
    theme={{ primary: "#1d4ed8", primaryDark: "#1e40af", textDark: "#0b1530", bgSoft: "#F4F7FF", borderSoft: "#dbe4ff" }}
    content={{
      brandName: "Escritório de Projetos Sociais",
      logo: "/logo-azul.svg",
      tagline: "Gestão completa de projetos com recursos públicos.",
      metaTitle: "EPS — Escritório de Projetos Sociais | Grupo Cipriano Ayala",
      metaDescription: "Assessoria completa na gestão de recursos públicos: elaboração, aprovação, execução e prestação de contas.",
      eyebrow: "Nossa atuação",
      heroTitle: <>Da emenda à <em className="not-italic" style={{ color: "var(--bp-primary)" }}>prestação de contas</em>, com você em cada etapa.</>,
      heroDescription:
        "O EPS é o braço técnico do Grupo Cipriano Ayala para gestão de recursos públicos — elaboração de projetos, aprovação, execução e prestação de contas com total conformidade.",
      stats: [
        { value: "+R$1,5bi", label: "em recursos geridos" },
        { value: "+100", label: "instituições atendidas" },
        { value: "+15 anos", label: "de experiência técnica" },
        { value: "100%", label: "de aderência à lei" },
      ],
      atuacaoTitle: <>Projetos sociais com <span style={{ color: "var(--bp-primary)" }}>excelência técnica</span> e jurídica.</>,
      atuacaoDescription:
        "Cuidamos do ciclo completo: do diagnóstico inicial à entrega da prestação de contas final. Todo o processo é conduzido por equipe sênior com expertise em legislação, finanças públicas e gestão.",
      atuacaoBullets: [
        "Elaboração técnica de projetos para emendas e convênios",
        "Acompanhamento da execução físico-financeira",
        "Conformidade com TCU, CGU, TCEs e órgãos de controle",
        "Prestação de contas digital, transparente e auditável",
      ],
      atuacaoCards: [
        { Icon: FileText, label: "Projetos técnicos" },
        { Icon: ClipboardCheck, label: "Conformidade total" },
        { Icon: Wallet, label: "Execução financeira" },
        { Icon: BarChart3, label: "Prestação de contas" },
      ],
      servicesTitle: <>Tudo o que sua instituição precisa para <span style={{ color: "var(--bp-primary)" }}>captar e executar</span>.</>,
      servicesDescription: "Atuação ponta a ponta na gestão de recursos públicos para hospitais, OSCs e fundações.",
      services: [
        { n: "01", title: "Elaboração de Projetos", desc: "Construção técnica de projetos alinhados às prioridades de governo e às janelas de oportunidade.", tags: ["Emendas", "Convênios", "Editais"] },
        { n: "02", title: "Captação e Aprovação", desc: "Apoio na articulação e tramitação até a aprovação formal do recurso pelo órgão concedente.", tags: ["Articulação", "Tramitação"] },
        { n: "03", title: "Execução Físico-Financeira", desc: "Gestão de cronograma, compras, contratações e movimentação financeira de acordo com o plano aprovado.", tags: ["Compras", "Cronograma", "Financeiro"] },
        { n: "04", title: "Prestação de Contas", desc: "Estruturação de relatórios, evidências e documentação para análise dos órgãos de controle.", tags: ["Relatórios", "TCU", "CGU"] },
        { n: "05", title: "Compliance e Auditoria", desc: "Revisão preventiva, mitigação de riscos e suporte em auditorias externas e internas.", tags: ["Risco", "Auditoria"] },
        { n: "06", title: "Capacitação de Equipes", desc: "Treinamentos para equipes internas operarem com mais autonomia em projetos públicos.", tags: ["Treinamento"] },
      ],
      resultsTitle: <>Recursos que <span style={{ color: "var(--bp-primary)" }}>chegaram à ponta</span>.</>,
      cases: [
        { tag: "Hospital filantrópico", title: "R$ 22 milhões executados em UTI neonatal", desc: "Gestão integral do projeto — da emenda à entrega — com 100% de aprovação na prestação de contas.", metric: "R$22M", sub: "executados sem ressalvas" },
        { tag: "OSC nacional", title: "Convênio plurianual de R$ 8 milhões", desc: "Estruturação técnica e execução financeira de programa social com alcance em 12 estados.", metric: "12 estados", sub: "atendidos pelo programa" },
        { tag: "Fundação de saúde", title: "Reaprovação de prestação de contas histórica", desc: "Recuperação documental e técnica que reverteu glosas e regularizou a instituição perante o TCE.", metric: "0 glosas", sub: "após revisão técnica" },
        { tag: "Hospital regional", title: "Equipamentos médicos via emenda federal", desc: "Aquisição completa de equipamentos para centro cirúrgico em prazo recorde.", metric: "9 meses", sub: "do projeto à entrega" },
      ],
      methodTitle: <>Um método consolidado em <span style={{ color: "var(--bp-primary)" }}>mais de 15 anos</span>.</>,
      method: [
        { n: "01", title: "Diagnóstico", desc: "Mapeamento de necessidades e oportunidades alinhadas à instituição." },
        { n: "02", title: "Estruturação", desc: "Desenho técnico do projeto e do plano de trabalho." },
        { n: "03", title: "Aprovação", desc: "Apoio na tramitação e na formalização do convênio." },
        { n: "04", title: "Execução", desc: "Gestão financeira, compras e cronograma físico." },
        { n: "05", title: "Prestação de contas", desc: "Relatórios e evidências para os órgãos de controle." },
      ],
      ecosystemTitle: <>EPS conectado ao <span style={{ color: "var(--bp-primary)" }}>ecossistema GCA</span>.</>,
      ecosystemDescription: "Captação, transparência, certificação, comunicação e formação trabalhando juntos.",
      ecosystem,
      ctaTitle: <>Sua instituição pronta para <em className="not-italic">captar com segurança</em>.</>,
      ctaDescription: "Vamos conversar sobre como o EPS pode estruturar a gestão dos seus recursos públicos com excelência técnica e jurídica.",
      ctaPrimaryLabel: "Iniciar projeto com o EPS",
    }}
  />
);

export default EPS;
