// lib/api.ts
export async function postMessage(input: string): Promise<string> {
  const res = await fetch("https://emotion-aware-prod-assistant.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });

  if (!res.ok) {
    console.error("Error response:", await res.text());
    return "Sorry, something went wrong.";
  }

  const data = await res.json();
  return data.final_response || "No response from assistant.";
}
