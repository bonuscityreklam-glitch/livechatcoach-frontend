import { apiFetch } from "@/lib/api";

async function sendMessage(message: string) {
  const data = await apiFetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ message })
  });

  return data;
}
