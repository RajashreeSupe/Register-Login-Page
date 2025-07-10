import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from './itemSlice';

export default function ItemList({ onEdit, onAdd }) {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const [confirmId, setConfirmId] = useState(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Item List</h1>
      <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onAdd}>Add New Item</button>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>No.</th><th>Name</th><th>Address</th><th>Gender</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={item.id} className="border">
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.gender}</td>
              <td>
                <button onClick={() => onEdit(item)} className="mr-2">✏️</button>
                <button onClick={() => setConfirmId(item.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {confirmId && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded">
            <p>Are you sure you want to delete?</p>
            <button onClick={() => { dispatch(deleteItem(confirmId)); setConfirmId(null); }} className="bg-red-500 text-white px-4 py-2 mr-2">Yes</button>
            <button onClick={() => setConfirmId(null)} className="bg-gray-300 px-4 py-2">No</button>
          </div>
        </div>
      )}
    </div>
  );
}

