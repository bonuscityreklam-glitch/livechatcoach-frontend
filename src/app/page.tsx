import ChatBox from "@/components/ChatBox";

export default function Page() {
  return (
    <main
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #020617, #020617)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          height: "85vh",
          background: "#020617",
          borderRadius: 16,
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            padding: 16,
            borderBottom: "1px solid #1f2937",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          🎧 LiveChatCoach
        </header>

        <ChatBox />
      </div>
    </main>
  );
}
