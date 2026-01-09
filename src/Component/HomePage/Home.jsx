import React, { useState } from "react";
import MemeCard from "./MemeCard/MemeCard";
import { useMeme } from "../FetchMemesAPI/MemeCOntext";

function Home() {
  const { meme, fetchMeme } = useMeme();
  const [currentMemeNo, setCurrentMemeNo] = useState(0);

  const handleNext = async () => {
    if (currentMemeNo < meme.memes.length - 1) {
      setCurrentMemeNo((prev) => prev + 1);
    } else {
      await fetchMeme();
      setCurrentMemeNo(0);
    }
  };

  return (
    <div>
      {meme && (
        <MemeCard
          Meme={meme.memes[currentMemeNo]}
          count={meme.count}
          currentMemeNo={currentMemeNo}
        />
      )}

      <div className="flex justify-center">
        <button
          className="bg-blue-600 px-2 py-2 rounded mt-2"
          onClick={handleNext}
        >
          Next Meme
        </button>
      </div>
    </div>
  );
}

export default Home;
