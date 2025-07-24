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

export async function postMessage(input: string): Promise<any> {
  const payload = {
    input,
    user_profile: "You prefer warm, validating responses.", // can be static for now
    history: [], // empty or track message history later
    emotion_history: [], // empty or track later
  };

  const res = await fetch(ROUTES.chat, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
}
