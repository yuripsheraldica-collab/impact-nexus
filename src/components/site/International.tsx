import { Handshake, Globe2, BookOpen, Sparkles, MapPin } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { useInView } from "@/hooks/useInView";

const items = [
  { icon: Handshake, title: "Parcerias internacionais" },
  { icon: Globe2, title: "Projetos globais" },
  { icon: BookOpen, title: "Troca de conhecimento" },
  { icon: Sparkles, title: "Impacto sem fronteiras" },
];

// [longitude, latitude]
const countries: { name: string; coords: [number, number]; group: "sede" | "mercosul" | "global" }[] = [
  { name: "Brasil", coords: [-51.92, -14.23], group: "sede" },
  { name: "Argentina", coords: [-63.62, -38.42], group: "mercosul" },
  { name: "Uruguai", coords: [-55.77, -32.52], group: "mercosul" },
  { name: "Paraguai", coords: [-58.44, -23.44], group: "mercosul" },
  { name: "Bolívia", coords: [-63.59, -16.29], group: "mercosul" },
  { name: "Venezuela", coords: [-66.59, 6.42], group: "mercosul" },
  { name: "EUA", coords: [-95.71, 39.0], group: "global" },
  { name: "Itália", coords: [12.57, 42.5], group: "global" },
  { name: "Cingapura", coords: [103.82, 1.35], group: "global" },
];

const brasil = countries[0].coords;
const targets = countries.slice(1);

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

        <div
          ref={ref}
          className="relative rounded-3xl bg-card border border-border shadow-[var(--shadow-md)] p-4 md:p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="relative">
            <ComposableMap
              projectionConfig={{ scale: 155 }}
              width={980}
              height={500}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography="/world-110m.json">
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const country = countries.find((c) => c.name === geoNameMap(geo.properties.name));
                    const highlighted = !!country;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: highlighted
                              ? country!.group === "sede"
                                ? "hsl(var(--accent) / 0.55)"
                                : country!.group === "mercosul"
                                ? "hsl(var(--primary) / 0.45)"
                                : "hsl(var(--primary) / 0.35)"
                              : "hsl(var(--muted))",
                            stroke: "hsl(var(--background))",
                            strokeWidth: 0.5,
                            outline: "none",
                            transition: "all 0.3s",
                          },
                          hover: {
                            fill: highlighted ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.3)",
                            outline: "none",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Connection lines */}
              {targets.map((t, i) => (
                <Line
                  key={t.name}
                  from={brasil}
                  to={t.coords}
                  stroke="hsl(var(--primary))"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  strokeDasharray="500"
                  style={{
                    strokeDashoffset: inView ? 0 : 500,
                    transition: `stroke-dashoffset 1.4s ease-out ${i * 0.12}s`,
                  }}
                />
              ))}

              {/* Markers */}
              {countries.map((c, i) => {
                const isHub = c.group === "sede";
                return (
                  <Marker
                    key={c.name}
                    coordinates={c.coords}
                    style={{ opacity: inView ? 1 : 0, transition: `opacity 0.5s ease-out ${0.4 + i * 0.1}s` } as any}
                  >
                    <circle
                      r={isHub ? 9 : 6}
                      fill={isHub ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                      stroke="white"
                      strokeWidth={2}
                    />
                    <circle r={isHub ? 9 : 6} fill={isHub ? "hsl(var(--accent))" : "hsl(var(--primary))"} opacity={0.4}>
                      <animate attributeName="r" values={`${isHub ? 9 : 6};${isHub ? 18 : 14};${isHub ? 9 : 6}`} dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <text
                      textAnchor="middle"
                      y={-14}
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        fill: "hsl(var(--primary-deep))",
                        paintOrder: "stroke",
                        stroke: "white",
                        strokeWidth: 3,
                      } as any}
                    >
                      {c.name}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-accent ring-2 ring-white shadow-glow" />
              Sede — Brasil
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-primary ring-2 ring-white" />
              Mercosul
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-primary/60 ring-2 ring-white" />
              EUA, Itália e Cingapura
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {countries.length} países conectados
            </span>
          </div>
        </div>

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

// Map TopoJSON English country names to our PT-BR labels
function geoNameMap(name: string): string {
  const map: Record<string, string> = {
    Brazil: "Brasil",
    Argentina: "Argentina",
    Uruguay: "Uruguai",
    Paraguay: "Paraguai",
    Bolivia: "Bolívia",
    Venezuela: "Venezuela",
    "United States of America": "EUA",
    Italy: "Itália",
    Singapore: "Cingapura",
  };
  return map[name] ?? name;
}
