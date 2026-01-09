import { useEffect, useState } from "react";

export default function useGetMeme(memetype) {
  const [meme, setMeme] = useState(null);

  const fetchMeme = async () => {
    if (!memetype) return;

    const res = await fetch(`https://meme-api.com/gimme${memetype}/50`);
    const data = await res.json();
    setMeme(data);
  };

  // 🔥 IMPORTANT: depend on memetype
  useEffect(() => {
    fetchMeme();
  }, [memetype]);

  return { meme, fetchMeme };
}
