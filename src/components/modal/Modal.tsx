import { useEffect } from "react";
import PostEditor from "../userPanel/PostEditor";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-tertiary-300 bg-opacity-25 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-lg bg-tertiary-500 p-2.5 text-center text-sm text-tertiary-200"
        onClick={(e) => e.stopPropagation()}
      >
        <PostEditor onCloseModal={onClose} rows={6} />
      </div>
    </div>
  );
}
