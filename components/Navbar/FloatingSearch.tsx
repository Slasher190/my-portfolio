import React from "react";
import { AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";
import Modal from "@app/components/Modal/Modal"; // Adjust the import path as needed

interface SearchProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const FloatingSearch: React.FC<SearchProps> = ({ isModalOpen, closeModal }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="flex-[1]  px-4 py-2 rounded-[40px] bg-[#2c2f58] flex items-center">
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 px-4 rounded-full bg-transparent text-white placeholder-white focus:outline-none"
        />
        <AiOutlineFilter className="ml-2 text-xl" />
      </div>
    </Modal>
  );
};

export default FloatingSearch;
