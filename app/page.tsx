"use client";

import { useState } from "react";
import { postMessage } from "@/lib/api";
import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";

export default function Page() {
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
    const userMsg = `You: ${text}`;
    setMessages((prev) => [...prev, userMsg]);

    try {
      setLoading(true);
      const res = await postMessage(text);

      const botMsg = `Assistant: ${res?.trim() || "(no response)"}`;
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, "Assistant: (error processing message)"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <div className="space-y-2 mb-4">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} text={msg} />
        ))}
        {loading && <ChatBubble text="Assistant is thinking..." />}
      </div>
      <ChatInput onSend={handleSend} />
    </main>
  );
}
