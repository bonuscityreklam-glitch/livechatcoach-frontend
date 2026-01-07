import { useEffect } from "react";
import { apiFetch } from "@/lib/api";

export default function Page() {
  useEffect(() => {
    apiFetch("/api/health")
      .then((res) => {
        console.log("HEALTH:", res);
      })
      .catch(console.error);
  }, []);

  return <div>Frontend çalışıyor</div>;
}
