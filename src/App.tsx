import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Portal from "./pages/Portal.tsx";
import Otimistas from "./pages/Otimistas.tsx";
import EPS from "./pages/EPS.tsx";
import Fundify from "./pages/Fundify.tsx";
import Certisafe from "./pages/Certisafe.tsx";
import Cataliza from "./pages/Cataliza.tsx";
import ThreeS from "./pages/ThreeS.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/otimistas" element={<Otimistas />} />
          <Route path="/eps" element={<EPS />} />
          <Route path="/fundify" element={<Fundify />} />
          <Route path="/certisafe" element={<Certisafe />} />
          <Route path="/cataliza" element={<Cataliza />} />
          <Route path="/3s-marketing" element={<ThreeS />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
