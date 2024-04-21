import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-sm max-w-xl">
      <div className=' text-end'>
      <button onClick={onClose} className="text-red-500 hover:text-red-700">
          Close
        </button>
      </div>
        {children} {/* Content passed as props */}
        
      </div>
    </div>
  );
};

export default Modal;