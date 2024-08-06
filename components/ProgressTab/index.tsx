import React from "react";
import LinearProgressBar from "@app/components/ProgressBar/LinearProgressBar";
import { useRouter } from "next/navigation";

const ProgressTab: React.FC<{
  label: string;
  progress: number;
  isSelected?: boolean;
  link: string;
}> = ({ label, progress, isSelected, link }) => {
  const router = useRouter();
  return (
    <div
      className={`w-full h-full max-w-40 text-black dark:text-white ${isSelected ? "shadow-lg dark:shadow-gray-700" : ""}`}
    >
      <button
        onClick={() => router.push(link)}
        className={`w-full border-t-2 border-l-2 border-r-2 max-w-40 p-2`}
      >
        {label}
      </button>
      <LinearProgressBar totalProgress={progress} />
    </div>
  );
};

export default ProgressTab;
