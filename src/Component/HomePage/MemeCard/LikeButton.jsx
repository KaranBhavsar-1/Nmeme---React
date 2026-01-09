import { useState } from "react";
import likeImg from "/src/assets/images/LikeMeme.png";
import likedImg from "/src/assets/images/LikedMeme.png"; // add this image
function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="
        w-[50px] h-[50px]
        flex items-center justify-center
        select-none
        transition-transform duration-200
        hover:scale-110
        active:scale-125
      "
    >
      <img
        src={liked ? likedImg : likeImg}
        alt="Like"
        className={`
          w-7 h-7
          transition-all duration-300
          ${liked ? "scale-125" : "scale-100"}
        `}
        draggable={false}
      />
    </button>
  );
}

export default LikeButton;
