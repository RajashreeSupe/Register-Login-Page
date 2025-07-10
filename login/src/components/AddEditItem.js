import React, { useState, useEffect } from 'react';

const AddEditItem = ({ item, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    gender: '',
  });

  useEffect(() => {
    if (item) {
      setForm(item);
    }
  }, [item]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address) {
      alert('Please fill in all fields.');
      return;
    }

    const finalItem = {
      ...form,
      id: item?.id || Date.now(),
    };

    onSubmit(finalItem);
  };

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        {item ? 'Edit Person' : 'Add New Person'}
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter address"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Gender</label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={form.gender === 'Male'}
                onChange={handleChange}
                className="form-check-input"
                id="male"
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={form.gender === 'Female'}
                onChange={handleChange}
                className="form-check-input"
                id="female"
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              {item ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditItem;
