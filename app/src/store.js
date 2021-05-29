import { createSlice, configureStore } from '@reduxjs/toolkit';
import { NIL } from 'uuid';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    selectedNoteId: NIL,
  },
  reducers: {
    push: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    select: (state, action) => {
      state.selectedNoteId = action.payload;
    },
  },
});

export const { push, select } = notesSlice.actions;

const store = configureStore({
  reducer: notesSlice.reducer,
});

// SHOULDDO remove or configure via debug param
store.subscribe(() => console.log(store.getState()));

export { store };
