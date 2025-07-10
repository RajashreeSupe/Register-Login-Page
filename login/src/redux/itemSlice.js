// redux/itemSlice.js
import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    editItem: (state, action) => {
      const index = state.items.findIndex(i => i.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addItem, editItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
