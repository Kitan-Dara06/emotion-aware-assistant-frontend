"use client";
import { useState } from "react";
import { postMessage } from "@/lib/api";
import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";

export default function Page() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = async (text: string) => {
    const userMsg = `You: ${text}`;
    setMessages((prev) => [...prev, userMsg]);

    const res = await postMessage(text);
    const botMsg = `Assistant: ${res}`;
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <div className="space-y-2 mb-4">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} text={msg} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </main>
  );
}