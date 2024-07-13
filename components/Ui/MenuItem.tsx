// src/components/MenuItem.tsx
import { useRouter } from "next/navigation";
import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  active = false,
  link,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className={`flex items-center p-3 my-2 rounded-lg ${active ? "bg-gray-200" : "hover:bg-gray-200"} cursor-pointer`}
    >
      <div className="mr-3">{icon}</div>
      <span className="text-gray-900">{text}</span>
    </div>
  );
};

export default MenuItem;
