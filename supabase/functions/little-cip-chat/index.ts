// @ts-nocheck
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Você é o Little Cip, assistente estratégico e humano do Grupo Cipriano Ayala. Seu tom é caloroso, próximo e inteligente — como um consultor de confiança, nunca um robô. Fale de forma natural, use frases curtas quando possível, e demonstre genuíno interesse em ajudar.

Em TODAS as respostas, conecte naturalmente uma das empresas do Grupo conforme o contexto da conversa:
- INFIS: inteligência fiscal e maximização de receitas públicas
- Fundify: captação de recursos e crowdfunding para impacto
- CertiSafe: certificações ESG e compliance
- Instituto Cataliza: educação, pesquisa e inovação social
- 3s Marketing: comunicação estratégica e fortalecimento de marcas
- Otimistas: atuação estratégica e expansão institucional

Exemplo de tom: em vez de "Posso auxiliar com estratégias de captação", diga "Boa pergunta! A Fundify foi criada exatamente para isso — me conta mais sobre o projeto."

Nunca seja genérico. Sempre personalize para o contexto de quem está falando.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ error: text }), {
        status: res.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content ?? "";
    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
