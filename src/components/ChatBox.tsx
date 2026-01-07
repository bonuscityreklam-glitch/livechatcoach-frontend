"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

type Message = {
  role: "user" | "ai";
  message: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);

  async function handleSend(userMessage: string) {
    setMessages((prev) => [...prev, { role: "user", message: userMessage }]);

    // Şimdilik fake AI cevabı (backend bağlanınca değişecek)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          message:
            "Merhaba 👋 Size yardımcı olmaktan memnuniyet duyarım. Hangi konuda destek istiyorsunuz?",
        },
      ]);
    }, 700);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          padding: 20,
        }}
      >
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} message={m.message} />
        ))}
      </div>

      <div style={{ padding: 20 }}>
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
