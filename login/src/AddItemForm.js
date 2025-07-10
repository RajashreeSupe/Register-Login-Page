import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './itemSlice';

export default function AddItemForm({ onCancel, onSave }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (!name || !address || !gender) {
      setError('All fields are required');
      return;
    }
    dispatch(addItem({ id: Date.now(), name, address, gender }));
    onSave();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add Item</h2>
      <div className="mb-2">
        <label>Name:</label>
        <input className="border w-full" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>Address:</label>
        <input className="border w-full" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>Gender:</label>
        <label><input type="radio" value="Male" checked={gender === 'Male'} onChange={e => setGender(e.target.value)} /> Male</label>
        <label className="ml-4"><input type="radio" value="Female" checked={gender === 'Female'} onChange={e => setGender(e.target.value)} /> Female</label>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 mr-2">Save</button>
      <button onClick={onCancel} className="bg-gray-300 px-4 py-2">Cancel</button>
    </div>
  );
}
