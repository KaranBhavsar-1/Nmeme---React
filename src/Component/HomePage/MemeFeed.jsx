import { useEffect, useRef } from "react";
import MemeCard from "./MemeCard/MemeCard";
import { useMeme } from "../FetchMemesAPI/MemeContext";

export default function MemeFeeder() {
  const { meme, fetchMeme } = useMeme();
  const containerRef = useRef(null);

  const memes = meme?.memes || [];

  // 🧠 Fetch more when near bottom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            Number(entry.target.dataset.index) >= memes.length - 2
          ) {
            fetchMeme();
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    const children = container.children;
    for (let child of children) observer.observe(child);

    return () => observer.disconnect();
  }, [memes.length, fetchMeme]);

  return (
    <div
      ref={containerRef}
      className="
        w-[380px] h-[520px]
        overflow-y-scroll
        snap-y snap-mandatory
        no-scrollbar
        rounded-lg
        border-2 border-[#333]
        bg-white
      "
    >
      {memes.map((memeItem) => (
        <div
          key={memeItem.postLink}
          className="h-full snap-start flex items-center justify-center"
        >
          <MemeCard Meme={memeItem} />
        </div>
      ))}
    </div>
  );
}
