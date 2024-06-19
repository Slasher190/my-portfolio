"use client";

import { useState } from "react";
import { FaEllipsisH, FaVideo, FaCommentDots } from "react-icons/fa";

const ControlPanel: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex space-x-2 bg-white p-4 rounded-lg ">
      <button
        className="text-black px-2 py-1 rounded-[6px] bg-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaEllipsisH />
      </button>
      <button className="bg-white text-[20px] text-black p-2 rounded-lg flex items-center space-x-2">
        <FaVideo />
        <span>Video call</span>
      </button>
      <button className="bg-white text-[20px] text-black p-2 rounded-lg flex items-center space-x-2">
        <FaCommentDots />
        <span>Message</span>
      </button>
    </div>
  );
};

export default ControlPanel;
