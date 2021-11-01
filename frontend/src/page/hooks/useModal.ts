import { useState } from "react";

export const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  return { modalOpen, handleModalOpen, handleModalClose };
};
