export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        color: "#fff",
        flexDirection: "column",
        gap: "12px"
      }}
    >
      <h1>LiveChatCoach</h1>
      <p>Frontend başarıyla çalışıyor ✅</p>
      <small>Backend: api.livechatcoach.com</small>
    </main>
  );
}
