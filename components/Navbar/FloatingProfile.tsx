import React from "react";
import Modal from "@app/components/Modal/Modal"; // Adjust the import path as needed
import { useRouter } from "next/navigation";

interface SearchProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const FloatingProfile: React.FC<SearchProps> = ({
  isModalOpen,
  closeModal,
}) => {
  const router = useRouter();
  const handleProfileClick = () => {
    router.push("/profile/profile-info");
    closeModal();
  };
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="fixed right-0 top-11 p-6">
        <div className="flex flex-col justify-end space-y-4 p-6 bg-gray-100 rounded-lg shadow-md w-40">
          <button
            onClick={handleProfileClick}
            className="text-blue-600 text-lg font-semibold hover:text-blue-700 focus:outline-none"
          >
            Profile
          </button>
          <button className="text-blue-600 text-lg font-semibold hover:text-blue-700 focus:outline-none">
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FloatingProfile;
