// 6. Sample: lib/api.ts
export const ROUTES = {
  chat: "https://emotion-aware-prod-assistant.onrender.com", // Replace with your backend URL
};


export async function postMessage(input: string): Promise<string> {
  const res = await fetch(ROUTES.chat, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });
  const data = await res.json();
  return data.final_response || "No response.";
}
