import { ShieldCheck, BadgeCheck, Scale, Eye } from "lucide-react";
import { BrandPage } from "@/components/site/BrandPage";

const ecosystem = [
  { name: "EPS", logo: "/logo-azul.svg", desc: "Projetos com recursos públicos com excelência técnica.", tag: "Projetos" },
  { name: "Fundify", logo: "/logo-fundify.svg", desc: "Captação digital e portal de transparência automatizado.", tag: "Tecnologia" },
  { name: "Otimistas", logo: "/logo-otimistas.svg", desc: "Articulação institucional em Brasília.", tag: "Articulação" },
  { name: "3S Marketing", logo: "/logo-3s.svg", desc: "Comunicação estratégica para fortalecer a marca social.", tag: "Comunicação" },
  { name: "Instituto Cataliza", logo: "/logo-cataliza.svg", desc: "Formação para empreendedores e gestores sociais.", tag: "Formação" },
];

const Certisafe = () => (
  <BrandPage
    theme={{ primary: "#0891b2", primaryDark: "#0e7490", textDark: "#062a33", bgSoft: "#F0FBFD", borderSoft: "#bce6ef" }}
    content={{
      brandName: "CertSafe",
      logo: "/logo-certisafe.svg",
      tagline: "Certificação em compliance e governança.",
      metaTitle: "CertSafe — Certificação em compliance para o terceiro setor | GCA",
      metaDescription: "CertSafe: certificação em compliance, governança, ESG e idoneidade institucional.",
      eyebrow: "Nossa atuação",
      heroTitle: <>A certificação que <em className="not-italic" style={{ color: "var(--bp-primary)" }}>abre portas</em> para captar mais.</>,
      heroDescription:
        "CertSafe é a certificação independente que atesta a maturidade da sua organização em compliance, governança, ESG e transparência — credibilidade que se traduz em mais recursos.",
      stats: [
        { value: "6", label: "pilares avaliados" },
        { value: "+150", label: "instituições certificadas" },
        { value: "ISO", label: "metodologia internacional" },
        { value: "ESG", label: "incorporado à avaliação" },
      ],
      atuacaoTitle: <>Compliance, governança e ESG em <span style={{ color: "var(--bp-primary)" }}>uma certificação só</span>.</>,
      atuacaoDescription:
        "Avaliamos sua instituição em 6 pilares — Governança, Compliance, Financeiro, Operações, ESG e Transparência — entregando um selo público que comprova maturidade e idoneidade.",
      atuacaoBullets: [
        "Diagnóstico inicial gratuito da maturidade",
        "Avaliação independente em 6 pilares",
        "Selo público reconhecido por financiadores",
        "Plano de evolução com indicadores claros",
      ],
      atuacaoCards: [
        { Icon: ShieldCheck, label: "Compliance" },
        { Icon: Scale, label: "Governança" },
        { Icon: Eye, label: "Transparência" },
        { Icon: BadgeCheck, label: "Selo público" },
      ],
      servicesTitle: <>Certificação que se traduz em <span style={{ color: "var(--bp-primary)" }}>credibilidade real</span>.</>,
      servicesDescription: "Trilhas de certificação adaptadas ao porte e à maturidade de cada organização.",
      services: [
        { n: "01", title: "Diagnóstico de Maturidade", desc: "Análise inicial dos 6 pilares com plano de ação para evolução.", tags: ["Diagnóstico", "Plano"] },
        { n: "02", title: "Trilha de Certificação", desc: "Acompanhamento estruturado para alcance dos níveis Bronze, Prata e Ouro.", tags: ["Trilha", "Níveis"] },
        { n: "03", title: "Auditoria Independente", desc: "Avaliação externa com metodologia inspirada em padrões ISO e GRI.", tags: ["Auditoria", "ISO"] },
        { n: "04", title: "ESG para o Terceiro Setor", desc: "Estruturação de práticas e indicadores ESG aplicáveis a OSCs e hospitais.", tags: ["ESG", "Indicadores"] },
        { n: "05", title: "Recertificação Anual", desc: "Manutenção do selo com avaliação anual e melhoria contínua.", tags: ["Anual"] },
        { n: "06", title: "Conselho de Ética", desc: "Estruturação de canais de denúncia, código de ética e comitês.", tags: ["Ética", "Canal"] },
      ],
      resultsTitle: <>Mais credibilidade, <span style={{ color: "var(--bp-primary)" }}>mais captação</span>.</>,
      cases: [
        { tag: "Hospital filantrópico", title: "Certificação Ouro abriu acesso a editais corporativos", desc: "Após CertSafe Ouro, hospital aprovou 3 editais com grandes empresas.", metric: "3 editais", sub: "aprovados em 1 ano" },
        { tag: "OSC", title: "Captação corporativa cresceu 60%", desc: "Selo CertSafe trouxe credibilidade para área de novos negócios.", metric: "+60%", sub: "em captação corporativa" },
        { tag: "Fundação", title: "Estruturação de canal de denúncia em 90 dias", desc: "Implantação de governança ética com treinamento de toda a equipe.", metric: "90 dias", sub: "do projeto ao ar" },
        { tag: "Rede assistencial", title: "Avaliação ESG inédita no setor", desc: "Rede passou a reportar indicadores ESG anualmente para parceiros.", metric: "1ª", sub: "do segmento com selo" },
      ],
      methodTitle: <>Metodologia <span style={{ color: "var(--bp-primary)" }}>estruturada e reconhecida</span>.</>,
      method: [
        { n: "01", title: "Diagnóstico", desc: "Análise dos 6 pilares com pontuação base." },
        { n: "02", title: "Plano", desc: "Roadmap de evolução até a certificação." },
        { n: "03", title: "Implantação", desc: "Apoio à execução das melhorias prioritárias." },
        { n: "04", title: "Auditoria", desc: "Avaliação independente para concessão do selo." },
        { n: "05", title: "Manutenção", desc: "Recertificação anual e melhoria contínua." },
      ],
      ecosystemTitle: <>CertSafe conectada ao <span style={{ color: "var(--bp-primary)" }}>ecossistema GCA</span>.</>,
      ecosystemDescription: "Certificação que conversa com captação, projetos, transparência e comunicação.",
      ecosystem,
      ctaTitle: <>Sua instituição pronta para <em className="not-italic">ser certificada</em>.</>,
      ctaDescription: "Faça o diagnóstico inicial gratuito e descubra em qual nível CertSafe sua organização pode chegar.",
      ctaPrimaryLabel: "Solicitar diagnóstico",
    }}
  />
);

export default Certisafe;
