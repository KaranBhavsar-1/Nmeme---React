import LikeButton from "./LikeButton";
import DownloadButton from "./DownloadButton";

export default function MemeCard({Meme,count,currentMemeNo}) {
  return (
    <div className="flex justify-center">
      {/* CARD CONTAINER */}
      <div
        id="memeBox"
        tabIndex={0}
        className="
          mt-2
          relative
          w-[380px] h-[550px]
          border-2 border-[#333]
          rounded-[10px]
          overflow-hidden
          flex flex-col
          
        "
      >
        {/* IMAGE AREA */}
        <div className="flex-1 flex items-center justify-center bg-transparent">
          <img
            id="image"
            src={Meme.url}
            alt="Meme"
            // className="max-w-full max-h-full object-contain"
            className="max-h-[420px] w-auto object-contain"
          />
        </div>

        {/* TEXT AREA (NOW BELOW IMAGE) */}
        <div
          className="
            px-3 py-2
            text-black
            bg-gray-400
            min-h-[120px]
            flex flex-col
            items-start
            text-left
            overflow-y-auto
          "
        >
          <h3 className="text-[18px] font-semibold my-[2px]">
            {Meme.subreddit}
          </h3>

          <h2 className="text-[16px] my-[2px]">
             {Meme.title}
          </h2>

          <h2 className="text-[14px] my-[2px] text-blue-800 underline break-all">
             {Meme.postLink}
          </h2>
        </div>

        {/* MEME COUNT */}
        <div
          id="memeCount"
          className="
            absolute top-[10px] right-[10px]
            bg-white/80
            px-2 py-1
            rounded-md
            font-bold text-[14px]
            text-black
            pointer-events-none
            select-none
            z-20
          "
        >
          Memes Count=  {currentMemeNo+1}/{count}
        </div>

        {/* ACTION BUTTONS */}
        <div
          className="
            absolute right-[10px] bottom-[140px]
            flex flex-col gap-5 z-20
          "
        >
          <LikeButton />
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}
