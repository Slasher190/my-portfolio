import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed md:hidden inset-0 flex items-start pt-[100px] justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className=" rounded-lg flex items-start justify-center shadow-lg w-full p-6 z-10">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
