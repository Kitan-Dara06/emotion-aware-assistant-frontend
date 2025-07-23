// lib/api.ts
const ROUTES = {
  chat: "https://emotion-aware-prod-assistant.onrender.com/chat"
};

export async function postMessage(input: string): Promise<string> {
  const res = await fetch(ROUTES.chat, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      input,
      user_profile: "",
      history: [],
      emotion_history: []
    }),
  });

  const data = await res.json();
  return data?.final_response ?? "(no response)";
}
