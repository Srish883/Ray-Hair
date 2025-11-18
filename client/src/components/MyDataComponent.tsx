import { useEffect, useState } from "react";
import { makeRequest } from "@/lib/utils";

export default function MyDataComponent() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await makeRequest("/api/data", { method: "GET" });
        setData(res);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Fetched from server:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
