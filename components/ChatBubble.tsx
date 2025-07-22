import React from "react";
export default function ChatBubble({ text }: { text: string }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-sm p-3 rounded-xl shadow">
      {text}
    </div>
  );
}
