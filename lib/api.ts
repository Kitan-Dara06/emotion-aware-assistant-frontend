// 6. Sample: lib/api.ts
export async function postMessage(input: string): Promise<string> {
  const res = await fetch(ROUTES.chat, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });
  const data = await res.json();
  return data.final_response || "No response.";
}