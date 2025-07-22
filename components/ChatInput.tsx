import React, { useState } from "react";

export default function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSend(input);
        setInput("");
      }}
      className="flex gap-2"
    >
      <input
        type="text"
        className="flex-1 border p-2 rounded-xl"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl">
        Send
      </button>
    </form>
  );
}