// lib/api.ts
const ROUTES = {
  chat: "https://emotion-aware-prod-assistant.onrender.com/chat"
};

interface BackendResponse {
  input: string;
  emotion: string;
  goal: string;
  suggested_action: string;
  tool_result: any;
  final_response: string | null;
}

export async function postMessage(input: string): Promise<BackendResponse> {
  const res = await fetch("https://emotion-aware-prod-assistant.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });

  const data = await res.json();
  console.log("✅ Backend response:", data);
  return data;
}
