const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.livechatcoach.com";

export async function sendMessage(message: string) {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
}
