import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "O Grupo", href: "#grupo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Unidades", href: "#unidades" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-[var(--shadow-sm)]" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold text-lg shadow-soft transition-transform group-hover:scale-105">
            GA
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground">Grupo</div>
            <div className="font-display font-bold -mt-1 text-primary-deep">Cipriano Ayala</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-6" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <a href="#contato">
              Fale com um especialista
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden h-11 w-11 grid place-items-center rounded-lg border border-border bg-card"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a href="#contato">Fale com um especialista</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
