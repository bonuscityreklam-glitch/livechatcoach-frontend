"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Yükleniyor...");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://api.livechatcoach.com"}/health`)
      .then(res => res.text())
      .then(data => setStatus(data))
      .catch(() => setStatus("API bağlantı hatası"));
  }, []);

  return (
    <main style={{ padding: 40, color: "white" }}>
      <h1>LiveChatCoach</h1>
      <p>Backend Durumu:</p>
      <pre>{status}</pre>
    </main>
  );
}
