// lib/api.ts
const ROUTES = {
  chat: "https://emotion-aware-prod-assistant.onrender.com/chat"
};

export async function postMessage(input: string): Promise<string> {
  try {
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
    console.log("✅ Backend response:", data);
    return data?.final_response ?? "(no response)";
  } catch (err) {
    console.error("❌ Failed to fetch from backend:", err);
    return "(error processing message)";
  }
}
