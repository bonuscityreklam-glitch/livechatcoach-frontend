"use client";

import { useState } from "react";

type Props = {
  onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Müşteri mesajını yaz..."
        style={{
          flex: 1,
          padding: 12,
          borderRadius: 8,
          border: "none",
        }}
      />
      <button
        onClick={handleSend}
        style={{
          padding: "12px 18px",
          borderRadius: 8,
          background: "#22c55e",
          color: "black",
          fontWeight: "bold",
          border: "none",
        }}
      >
        Gönder
      </button>
    </div>
  );
}
