
import React from 'react';

const ConfirmDelete = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-bold text-red-600 mb-4">Confirm Delete</h2>
        <p className="mb-6">Are you sure you want to delete this person?</p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-red-500  px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
