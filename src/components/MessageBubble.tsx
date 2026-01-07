export default function MessageBubble({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: 12,
        background: "#eee",
        borderRadius: 8,
        marginBottom: 8,
      }}
    >
      {text}
    </div>
  );
}
