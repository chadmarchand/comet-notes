import { createSlice, configureStore } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: []
  },
  reducers: {
    push: (state, action) => {
      state.notes = [ ...state.notes, action.payload ];
    }
  }
});

export const { push } = notesSlice.actions;

const store = configureStore({
  reducer: notesSlice.reducer
});

// SHOULDDO remove or configure via debug param
store.subscribe(() => console.log(store.getState()));

export { store };
