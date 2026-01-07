import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
  return (
    <div style={{ padding: 24 }}>
      <MessageBubble text="Merhaba 👋 LiveChatCoach hazır." />
      <ChatInput />
    </div>
  );
}
