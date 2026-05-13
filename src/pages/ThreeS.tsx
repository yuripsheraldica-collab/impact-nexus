import { Megaphone, Camera, Globe2, Heart } from "lucide-react";
import { BrandPage } from "@/components/site/BrandPage";

const ecosystem = [
  { name: "EPS", logo: "/logo-azul.svg", desc: "Projetos com recursos públicos.", tag: "Projetos" },
  { name: "Fundify", logo: "/logo-fundify.svg", desc: "Captação digital e portal de transparência.", tag: "Tecnologia" },
  { name: "CertSafe", logo: "/logo-certisafe.svg", desc: "Certificação em compliance e governança.", tag: "Certificação" },
  { name: "Otimistas", logo: "/logo-otimistas.svg", desc: "Articulação institucional em Brasília.", tag: "Articulação" },
  { name: "Instituto Cataliza", logo: "/logo-cataliza.svg", desc: "Formação para lideranças sociais.", tag: "Formação" },
];

const ThreeS = () => (
  <BrandPage
    theme={{ primary: "#9333ea", primaryDark: "#7e22ce", textDark: "#21093d", bgSoft: "#FBF6FF", borderSoft: "#e9d6fb" }}
    content={{
      brandName: "3S Marketing",
      logo: "/logo-3s.svg",
      tagline: "Comunicação estratégica para o terceiro setor.",
      metaTitle: "3S Marketing — Comunicação para o terceiro setor | GCA",
      metaDescription: "3S Marketing: agência especializada em comunicação, branding e captação digital para o terceiro setor.",
      eyebrow: "Nossa atuação",
      heroTitle: <>Comunicação que <em className="not-italic" style={{ color: "var(--bp-primary)" }}>fortalece marcas</em> e gera doação.</>,
      heroDescription:
        "A 3S Marketing é a agência do GCA dedicada exclusivamente ao terceiro setor — branding, conteúdo, mídia e captação digital com o tom certo para causas sociais.",
      stats: [
        { value: "+120", label: "marcas sociais atendidas" },
        { value: "+R$30M", label: "captados em campanhas digitais" },
        { value: "+10mi", label: "pessoas alcançadas por ano" },
        { value: "100%", label: "foco no terceiro setor" },
      ],
      atuacaoTitle: <>Estratégia, criatividade e dados para <span style={{ color: "var(--bp-primary)" }}>causas que importam</span>.</>,
      atuacaoDescription:
        "Equipe sênior em branding, performance e conteúdo, com profundo entendimento da linguagem e dos limites éticos do setor social.",
      atuacaoBullets: [
        "Branding e posicionamento de marcas sociais",
        "Sites institucionais e landing pages de captação",
        "Mídia paga e SEO orientados a doação",
        "Conteúdo, vídeos e gestão de redes sociais",
      ],
      atuacaoCards: [
        { Icon: Megaphone, label: "Branding" },
        { Icon: Globe2, label: "Sites e SEO" },
        { Icon: Camera, label: "Conteúdo e vídeo" },
        { Icon: Heart, label: "Captação digital" },
      ],
      servicesTitle: <>Tudo o que sua causa precisa para <span style={{ color: "var(--bp-primary)" }}>ser vista e apoiada</span>.</>,
      servicesDescription: "Atuação 360º — da identidade da marca à campanha de doação que entrega resultado.",
      services: [
        { n: "01", title: "Branding & Identidade", desc: "Construção ou reposicionamento de marca, manuais, naming e narrativa.", tags: ["Marca", "Naming"] },
        { n: "02", title: "Sites e Landing Pages", desc: "Sites institucionais, hotsites de campanha e landing pages de captação.", tags: ["Site", "Landing"] },
        { n: "03", title: "Conteúdo e Redes Sociais", desc: "Planejamento editorial, produção e gestão de redes sociais.", tags: ["Social", "Conteúdo"] },
        { n: "04", title: "Vídeo e Documentário", desc: "Produção audiovisual com foco em causas e prestação de contas pública.", tags: ["Vídeo", "Documentário"] },
        { n: "05", title: "Mídia Paga", desc: "Campanhas de doação e awareness em Google, Meta e mídia programática.", tags: ["Ads", "Performance"] },
        { n: "06", title: "Assessoria e PR", desc: "Posicionamento institucional, relacionamento com imprensa e gestão de crises.", tags: ["Imprensa", "PR"] },
      ],
      resultsTitle: <>Marcas mais fortes, <span style={{ color: "var(--bp-primary)" }}>causas mais apoiadas</span>.</>,
      cases: [
        { tag: "Branding", title: "Reposicionamento de hospital filantrópico centenário", desc: "Nova marca, narrativa e site triplicaram a captação online em 1 ano.", metric: "3x", sub: "em captação online" },
        { tag: "Mídia", title: "Campanha de Pix com R$ 1,8M em doações", desc: "Performance + criativo geraram a maior captação digital da OSC parceira.", metric: "R$1,8M", sub: "em uma campanha" },
        { tag: "Conteúdo", title: "Documentário com mais de 2 milhões de views", desc: "Produção audiovisual contou a história de impacto da instituição.", metric: "+2M", sub: "de visualizações" },
        { tag: "Social", title: "Crescimento de 5x em base engajada", desc: "Estratégia editorial elevou a base de seguidores reais e engajados.", metric: "5x", sub: "mais base engajada" },
      ],
      methodTitle: <>Estratégia antes de criatividade, <span style={{ color: "var(--bp-primary)" }}>dados antes de achismo</span>.</>,
      method: [
        { n: "01", title: "Imersão", desc: "Mergulho na causa, no público e nos resultados desejados." },
        { n: "02", title: "Estratégia", desc: "Posicionamento, mensagens-chave e plano integrado." },
        { n: "03", title: "Criação", desc: "Produção criativa com tom adequado ao setor social." },
        { n: "04", title: "Mídia", desc: "Distribuição inteligente em canais próprios e pagos." },
        { n: "05", title: "Otimização", desc: "Análise contínua e ajustes orientados a resultado." },
      ],
      ecosystemTitle: <>3S integrada ao <span style={{ color: "var(--bp-primary)" }}>ecossistema GCA</span>.</>,
      ecosystemDescription: "Comunicação alinhada à captação, projetos, certificação e formação.",
      ecosystem,
      ctaTitle: <>Sua causa merece <em className="not-italic">ser contada com excelência</em>.</>,
      ctaDescription: "Vamos conversar sobre como a 3S Marketing pode amplificar sua marca e a sua captação digital.",
      ctaPrimaryLabel: "Iniciar projeto com a 3S",
    }}
  />
);

export default ThreeS;
