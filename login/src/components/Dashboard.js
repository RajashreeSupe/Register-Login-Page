import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddEditItem from './AddEditItem.js';
import ConfirmDelete from './ConfirmDelete.js';
import { addItem, deleteItem, editItem } from '../redux/itemSlice.js';

const Dashboard = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deletingItemId, setDeletingItemId] = useState(null);

  const handleAddEdit = (item) => {
    if (editingItem) {
      dispatch(editItem(item));
    } else {
      dispatch(addItem(item));
    }
    setShowForm(false);
    setEditingItem(null);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Person Directory</h2>
        <button
          className="btn btn-primary shadow"
          onClick={() => {
            setEditingItem(null);
            setShowForm(true);
          }}
        >
          + Add Person
        </button>
      </div>

      {showForm && (
        <div className="card mb-4 shadow">
          <div className="card-body">
            <AddEditItem
              item={editingItem}
              onSubmit={handleAddEdit}
              onCancel={() => {
                setShowForm(false);
                setEditingItem(null);
              }}
            />
          </div>
        </div>
      )}

      <div className="table-responsive shadow rounded bg-white p-3">
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-primary">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Address</th>
              <th>Gender</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.gender}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => {
                        setEditingItem(item);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => setDeletingItemId(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  No persons added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {deletingItemId && (
        <ConfirmDelete
          onConfirm={() => {
            dispatch(deleteItem(deletingItemId));
            setDeletingItemId(null);
          }}
          onCancel={() => setDeletingItemId(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
