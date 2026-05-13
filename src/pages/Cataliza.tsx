import { GraduationCap, Lightbulb, Users, Sprout } from "lucide-react";
import { BrandPage } from "@/components/site/BrandPage";

const ecosystem = [
  { name: "EPS", logo: "/logo-azul.svg", desc: "Projetos sociais com recursos públicos.", tag: "Projetos" },
  { name: "Fundify", logo: "/logo-fundify.svg", desc: "Plataforma de captação e transparência.", tag: "Tecnologia" },
  { name: "CertSafe", logo: "/logo-certisafe.svg", desc: "Certificação em compliance e governança.", tag: "Certificação" },
  { name: "Otimistas", logo: "/logo-otimistas.svg", desc: "Articulação institucional em Brasília.", tag: "Articulação" },
  { name: "3S Marketing", logo: "/logo-3s.svg", desc: "Comunicação estratégica para o setor social.", tag: "Comunicação" },
];

const Cataliza = () => (
  <BrandPage
    theme={{ primary: "#7c3aed", primaryDark: "#6d28d9", textDark: "#1a0f2e", bgSoft: "#F8F4FF", borderSoft: "#e2d6fa" }}
    content={{
      brandName: "Instituto Cataliza",
      logo: "/logo-cataliza.svg",
      tagline: "Educação, pesquisa e inovação social.",
      metaTitle: "Instituto Cataliza — Formação e inovação social | GCA",
      metaDescription: "Instituto Cataliza: formação, pesquisa e inovação para empreendedores sociais e organizações do terceiro setor.",
      eyebrow: "Nossa atuação",
      heroTitle: <>Da ideia à <em className="not-italic" style={{ color: "var(--bp-primary)" }}>organização pronta</em> para captar e transformar.</>,
      heroDescription:
        "O Instituto Cataliza é o braço de educação e inovação social do Grupo Cipriano Ayala — formando lideranças, fortalecendo organizações e produzindo conhecimento aplicável ao terceiro setor.",
      stats: [
        { value: "+2.000", label: "pessoas formadas" },
        { value: "+50", label: "organizações apoiadas" },
        { value: "+30", label: "pesquisas publicadas" },
        { value: "100%", label: "foco em impacto social" },
      ],
      atuacaoTitle: <>Conhecimento aplicado para <span style={{ color: "var(--bp-primary)" }}>transformar realidades</span>.</>,
      atuacaoDescription:
        "Formação executiva, mentoria e pesquisa aplicada — conectando teoria, prática e impacto para gestores e empreendedores sociais.",
      atuacaoBullets: [
        "Programas de formação para lideranças sociais",
        "Mentorias para empreendedores de impacto",
        "Pesquisa aplicada ao terceiro setor",
        "Cursos abertos e in-company",
      ],
      atuacaoCards: [
        { Icon: GraduationCap, label: "Formação" },
        { Icon: Users, label: "Mentoria" },
        { Icon: Lightbulb, label: "Inovação" },
        { Icon: Sprout, label: "Impacto social" },
      ],
      servicesTitle: <>Trilhas de aprendizado para <span style={{ color: "var(--bp-primary)" }}>todo o ciclo de vida</span> de uma OSC.</>,
      servicesDescription: "Programas estruturados em níveis para empreendedores, gestores e conselhos.",
      services: [
        { n: "01", title: "Formação Executiva", desc: "Programa para gestores de OSCs, fundações e hospitais filantrópicos.", tags: ["Executivo", "Gestão"] },
        { n: "02", title: "Trilha do Empreendedor Social", desc: "Da ideia à organização legalmente constituída e pronta para captar.", tags: ["Trilha", "Constituição"] },
        { n: "03", title: "Mentoria 1:1", desc: "Acompanhamento individual com mentores experientes do setor.", tags: ["1:1", "Mentor"] },
        { n: "04", title: "Cursos Abertos", desc: "Capacitações curtas em captação, governança, projetos e ESG.", tags: ["Cursos", "Aberto"] },
        { n: "05", title: "Programas In-Company", desc: "Capacitações sob medida para a equipe interna da sua organização.", tags: ["In-company"] },
        { n: "06", title: "Pesquisa Aplicada", desc: "Estudos e publicações sobre tendências e práticas do terceiro setor.", tags: ["Pesquisa", "Publicação"] },
      ],
      resultsTitle: <>Lideranças formadas, <span style={{ color: "var(--bp-primary)" }}>causas fortalecidas</span>.</>,
      cases: [
        { tag: "Trilha", title: "30 novos empreendedores sociais formados", desc: "Programa de 12 meses com mentoria e acompanhamento até a primeira captação.", metric: "30", sub: "novos empreendedores" },
        { tag: "Pesquisa", title: "Estudo nacional sobre captação no terceiro setor", desc: "Publicação que se tornou referência para gestores e financiadores.", metric: "1 estudo", sub: "de referência nacional" },
        { tag: "In-company", title: "Capacitação de equipe completa de hospital", desc: "Programa customizado em governança, projetos e prestação de contas.", metric: "100%", sub: "do quadro capacitado" },
        { tag: "Mentoria", title: "OSCs aceleradas captaram R$ 6M juntas", desc: "Em 12 meses de mentoria, organizações estruturaram suas primeiras captações relevantes.", metric: "R$6M", sub: "captados pelas mentoradas" },
      ],
      methodTitle: <>Aprender, aplicar e <span style={{ color: "var(--bp-primary)" }}>multiplicar impacto</span>.</>,
      method: [
        { n: "01", title: "Diagnóstico", desc: "Identificação de necessidades e objetivos de aprendizagem." },
        { n: "02", title: "Trilha", desc: "Curadoria de conteúdo e mentores para cada perfil." },
        { n: "03", title: "Aplicação", desc: "Projetos práticos aplicados à realidade da organização." },
        { n: "04", title: "Mentoria", desc: "Acompanhamento individual durante a jornada." },
        { n: "05", title: "Comunidade", desc: "Rede ativa de egressos para troca contínua." },
      ],
      ecosystemTitle: <>Cataliza no centro do <span style={{ color: "var(--bp-primary)" }}>ecossistema GCA</span>.</>,
      ecosystemDescription: "Conhecimento que potencializa captação, gestão, transparência e comunicação.",
      ecosystem,
      ctaTitle: <>Pronto para <em className="not-italic">transformar sua liderança social</em>?</>,
      ctaDescription: "Conheça as trilhas do Instituto Cataliza e descubra o programa ideal para você ou para sua equipe.",
      ctaPrimaryLabel: "Conhecer as trilhas",
    }}
  />
);

export default Cataliza;
