import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const DownloadButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="inline-flex h-10 animate-shimmer uppercase gap-3 items-center justify-center rounded-md border border-green bg-[linear-gradient(110deg,#065F46,45%,#047857,55%,#065F46)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-green-200">
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default DownloadButton;
