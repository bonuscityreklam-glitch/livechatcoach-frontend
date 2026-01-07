type Props = {
  role: "user" | "ai";
  message: string;
};

export default function MessageBubble({ role, message }: Props) {
  const isUser = role === "user";

  return (
    <div
      style={{
        alignSelf: isUser ? "flex-end" : "flex-start",
        background: isUser ? "#2563eb" : "#1f2937",
        color: "white",
        padding: "12px 16px",
        borderRadius: 12,
        maxWidth: "75%",
        marginBottom: 10,
        whiteSpace: "pre-wrap",
      }}
    >
      {message}
    </div>
  );
}
