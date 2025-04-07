"use client";

import React, { useState } from 'react';
import Header from "./components/ui/Header/Header";
import Modal from "./components/ui/Modal/Modal";
import PlayScreen from "./components/ui/PlayScreen/PlayScreen";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <button onClick={openModal} className="bg-primary text-secondary px-4 py-2 rounded">
          Play
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <PlayScreen />
        </Modal>
      </main>
    </div>
  );
}
