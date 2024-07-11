import React, { ReactNode } from "react";

const ProfileLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-8 p-8 h[100%]">
      <div className="col-span-1 text-black bg-surface rounded-lg shadow-flat self-start">
        <div className="p-10 rounded-lg">
          <div className="border-2">hello world</div>
          <div>Jerk</div>
          <div>Jerk</div>
          <div>Jerk</div>
          <div>Jerk</div>
          <div>Jerk</div>
        </div>
      </div>
      <div className="p-10 col-span-2 row-auto max-h-fit text-black bg-surface rounded-lg shadow-flat h-auto min-h-[200vh]">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
