export default function MessageBubble({
  role,
  text
}: {
  role: "user" | "assistant";
  text: string;
}) {
  return (
    <div
      className={`max-w-[70%] px-4 py-2 rounded-lg ${
        role === "user"
          ? "ml-auto bg-blue-600 text-white"
          : "mr-auto bg-gray-200 text-black"
      }`}
    >
      {text}
    </div>
  );
}
