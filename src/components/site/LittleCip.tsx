import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, X, Send } from "lucide-react";
import littleCipImg from "@/assets/little-cip.png";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const WELCOME_TEXT =
  "Olá! Eu sou o Little Cip, seu consultor estratégico do Grupo Cipriano Ayala. Que bom te ver por aqui — me conta, no que posso ajudar hoje?";

type Msg = { role: "user" | "assistant"; content: string };

export const LittleCip = () => {
  const [muted, setMuted] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [waving, setWaving] = useState(true);
  const [bubble, setBubble] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Oi! Que bom te ver aqui. Me conta, em que posso te ajudar hoje?" },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // stop wave after 4.5s (3 loops of 1.5s)
  useEffect(() => {
    const t = setTimeout(() => setWaving(false), 4600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  const playWelcome = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.muted = muted;
    audio.play()
      .then(() => {
        setSpeaking(true);
        setShowBubble(true);
        setBubble("");
        // typewriter
        let i = 0;
        const total = WELCOME_TEXT.length;
        const duration = Math.max(2500, (audio.duration || 6) * 1000);
        const step = Math.max(20, duration / total);
        const iv = setInterval(() => {
          i++;
          setBubble(WELCOME_TEXT.slice(0, i));
          if (i >= total) clearInterval(iv);
        }, step);
      })
      .catch(() => {
        setShowBubble(true);
        setBubble(WELCOME_TEXT);
        setTimeout(() => setShowBubble(false), 8000);
      });
  };

  const onCipClick = () => {
    // Always try to play audio on user gesture
    playWelcome();
    // Open chat after short delay so user sees the wave + bubble first
    setTimeout(() => setChatOpen(true), 400);
  };

  const send = async () => {
    const text = input.trim();
    if (!text || sending) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("little-cip-chat", {
        body: { messages: next },
      });
      if (error) throw error;
      setMessages([...next, { role: "assistant", content: data.reply || "Desculpe, não consegui responder agora." }]);
    } catch (e) {
      setMessages([...next, { role: "assistant", content: "Tive um problema ao responder. Tente novamente em instantes." }]);
    } finally {
      setSending(false);
    }
  };

  const sizeClasses = chatOpen
    ? "w-[80px] h-[80px] md:w-[80px] md:h-[80px]"
    : "w-[110px] h-[110px] md:w-[180px] md:h-[180px]";

  return (
    <>
      <audio
        ref={audioRef}
        src="/little-cip-welcome.mp3"
        preload="auto"
        onEnded={() => {
          setSpeaking(false);
          setTimeout(() => setShowBubble(false), 600);
        }}
      />

      {/* Chat widget */}
      {chatOpen && (
        <div className="fixed z-50 bottom-4 right-4 md:right-[110px] w-[calc(100vw-2rem)] md:w-[360px] h-[70vh] md:h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-primary text-primary-foreground">
            <div>
              <div className="font-display font-bold text-sm">Little Cip</div>
              <div className="text-[11px] opacity-90">Consultor Estratégico</div>
            </div>
            <button onClick={() => setChatOpen(false)} aria-label="Fechar" className="p-1 hover:bg-white/10 rounded">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/30">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm"
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-muted-foreground">
                  digitando…
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="p-3 border-t border-border bg-card flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva sua mensagem…"
              className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              disabled={sending}
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-primary text-primary-foreground disabled:opacity-50"
              aria-label="Enviar"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Little Cip */}
      <div className="fixed z-50 bottom-2 right-2 md:bottom-4 md:right-4 flex flex-col items-end gap-2 select-none">
        {showBubble && !chatOpen && (
          <div className="relative max-w-[260px] md:max-w-[300px] mr-4 mb-1 bg-card border border-border shadow-lg rounded-2xl px-4 py-3 text-sm text-foreground animate-fade-in">
            {bubble}
            <span className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
          </div>
        )}

        <div className="relative">
          <button
            onClick={onCipClick}
            aria-label="Falar com Little Cip"
            className={cn(
              "relative block transition-[width,height] duration-300 cip-entry",
              sizeClasses
            )}
          >
            {speaking && (
              <span className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse pointer-events-none" />
            )}
            <div className={cn("relative w-full h-full", waving ? "cip-wave" : "cip-breath", speaking && "cip-speaking")}>
              <img
                src={littleCipImg}
                alt="Little Cip — Assistente"
                className="relative w-full h-full object-contain drop-shadow-xl"
                draggable={false}
              />
            </div>
          </button>

          {!chatOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMuted((v) => !v);
              }}
              aria-label={muted ? "Ativar som" : "Silenciar"}
              className="absolute -top-1 -left-1 h-7 w-7 grid place-items-center rounded-full bg-card border border-border shadow text-foreground/70 hover:text-primary"
            >
              {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
