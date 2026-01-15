import { useState } from "react";
import downloadIcon from "../../../assets/images/DownloadButton.png";

function DownloadButton({ url, title }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!url) return;

    try {
      setDownloading(true);

      const res = await fetch(url, { mode: "cors" });
      const blob = await res.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${title || "meme"}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // 📱 Mobile fallback (especially iOS)
      window.open(url, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="
        w-[50px] h-[50px]
        flex items-center justify-center
        bg-transparent
        hover:scale-110
        transition-transform
      "
      title="Download Meme"
    >
      <img
        src={downloadIcon}
        alt="Download"
        className={`
          w-7 h-7
          transition-transform duration-300
          ${downloading ? "opacity-50 scale-110" : ""}
        `}
      />
    </button>
  );
}

export default DownloadButton;
