import { Handshake, Globe2, BookOpen, Sparkles, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const items = [
  { icon: Handshake, title: "Parcerias internacionais" },
  { icon: Globe2, title: "Projetos globais" },
  { icon: BookOpen, title: "Troca de conhecimento" },
  { icon: Sparkles, title: "Impacto sem fronteiras" },
];

// Approximate lat/lng converted to SVG coords on a 1000x500 equirectangular projection
const points = [
  { name: "Brasil", lat: -14, lng: -51 },
  { name: "EUA", lat: 38, lng: -97 },
  { name: "Portugal", lat: 39, lng: -8 },
  { name: "Reino Unido", lat: 54, lng: -2 },
  { name: "Moçambique", lat: -18, lng: 35 },
  { name: "Angola", lat: -11, lng: 17 },
  { name: "Japão", lat: 36, lng: 138 },
  { name: "Austrália", lat: -25, lng: 133 },
];

const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * 1000,
  y: ((90 - lat) / 180) * 500,
});

const brasil = project(-14, -51);

export const International = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="container-custom relative">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Internacionalização</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 leading-tight tracking-tight">
            Levando nossa excelência <span className="text-gradient">além das fronteiras</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Atuamos em parceria com organizações internacionais para ampliar oportunidades, compartilhar conhecimento e gerar impacto global.
          </p>
        </div>

        {/* World map */}
        <div
          ref={ref}
          className="relative rounded-3xl bg-card border border-border shadow-[var(--shadow-md)] p-4 md:p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto relative"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
              </linearGradient>
              <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="hsl(var(--primary))" opacity="0.18" />
              </pattern>
            </defs>

            {/* Dotted world silhouette via simple landmass paths (stylized) */}
            <g fill="hsl(var(--primary))" opacity="0.15">
              {/* Americas */}
              <path d="M150,90 q40,-20 80,-10 q30,10 40,40 q5,30 -10,60 q-20,40 -10,80 q10,40 -10,70 q-20,30 -50,40 q-30,5 -50,-20 q-20,-30 -10,-70 q10,-40 0,-80 q-10,-40 0,-70 q5,-25 20,-40z" />
              {/* Europe + Africa */}
              <path d="M470,80 q40,-15 80,-5 q40,15 50,50 q5,30 -15,55 q-10,15 0,35 q15,30 5,70 q-10,40 -40,70 q-30,30 -55,20 q-25,-10 -30,-50 q-5,-40 5,-80 q5,-30 -10,-55 q-15,-25 -5,-55 q5,-25 15,-55z" />
              {/* Asia */}
              <path d="M650,70 q60,-20 130,-10 q70,10 100,50 q20,30 0,70 q-20,30 -60,40 q-40,10 -90,5 q-50,-5 -80,-30 q-30,-25 -25,-60 q5,-35 25,-65z" />
              {/* Australia */}
              <path d="M780,330 q40,-10 80,0 q30,10 30,40 q0,30 -30,40 q-40,10 -80,-5 q-25,-15 -20,-40 q5,-25 20,-35z" />
            </g>

            {/* Connection arcs from Brasil */}
            {points
              .filter((p) => p.name !== "Brasil")
              .map((p, i) => {
                const target = project(p.lat, p.lng);
                const mx = (brasil.x + target.x) / 2;
                const my = Math.min(brasil.y, target.y) - 80;
                const d = `M${brasil.x},${brasil.y} Q${mx},${my} ${target.x},${target.y}`;
                return (
                  <path
                    key={p.name}
                    d={d}
                    fill="none"
                    stroke="url(#arcGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="600"
                    strokeDashoffset={inView ? 0 : 600}
                    style={{
                      transition: `stroke-dashoffset 1.6s ease-out ${i * 0.2}s`,
                    }}
                  />
                );
              })}

            {/* Points */}
            {points.map((p, i) => {
              const c = project(p.lat, p.lng);
              const isHub = p.name === "Brasil";
              return (
                <g key={p.name} style={{ opacity: inView ? 1 : 0, transition: `opacity 0.5s ease-out ${0.4 + i * 0.15}s` }}>
                  <circle cx={c.x} cy={c.y} r={isHub ? 26 : 18} fill="url(#pulseGrad)">
                    <animate attributeName="r" values={`${isHub ? 18 : 12};${isHub ? 32 : 24};${isHub ? 18 : 12}`} dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isHub ? 7 : 5}
                    fill={isHub ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={c.x + 10}
                    y={c.y - 8}
                    fontSize="14"
                    fontWeight="600"
                    fill="hsl(var(--primary-deep))"
                    className="font-display"
                  >
                    {p.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-accent ring-2 ring-white shadow-glow" />
              Sede — Brasil
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-primary ring-2 ring-white" />
              Parcerias e atuação internacional
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {points.length} países conectados
            </span>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-[var(--shadow-sm)] animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </span>
              <span className="font-medium">{it.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
