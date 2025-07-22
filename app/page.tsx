"use client"

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string, text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: input }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input,
        user_profile: "You prefer warm, validating responses.",
        history: messages.map(m => m.text),
        emotion_history: []
      }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { role: "assistant", text: data.final_response }]);
    setInput("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-100 flex flex-col items-center p-6">
      <div className="text-3xl font-bold mb-4 text-center text-sky-800">🌸 Emotionally Aware Assistant</div>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-4 space-y-4">
        <div className="h-96 overflow-y-auto space-y-3 px-2">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-xl px-4 py-2 ${msg.role === "user" ? "bg-sky-200" : "bg-gray-100"} max-w-xs`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-gray-400 italic">Thinking...</div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-xl"
            placeholder="How are you feeling or what do you need to do?"
          />
          <button
            onClick={handleSubmit}
            className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
