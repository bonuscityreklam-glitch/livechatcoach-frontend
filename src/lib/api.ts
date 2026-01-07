const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function healthCheck() {
  const res = await fetch(`${API_URL}/api/health`);
  return res.json();
}
