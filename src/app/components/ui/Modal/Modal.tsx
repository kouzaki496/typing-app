import React from 'react';
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@radix-ui/react-dialog';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      <DialogContent className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white rounded-md shadow-lg p-4 w-[90%] relative">
          <DialogTitle className="text-lg font-bold">Game Screen</DialogTitle>
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
            &times;
          </button>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;