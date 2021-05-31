import React from 'react';
import './PrimarySidebar.css';
import { useSelector } from 'react-redux';
import { store, select } from '../../store';

const selectNotes = (state) => state.notes;

function PrimarySidebar() {
  function selectNote(noteId) {
    console.log('Selecting note with ID', noteId);
    store.dispatch(select(noteId));
  }

  const notes = useSelector(selectNotes);

  return (
    <div className="primary-sidebar">
      This is the primary sidebar.

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <button
              type="button"
              onClick={() => selectNote(note.id)}
              onKeyDown={() => selectNote(note.id)}
            >
              {note.title}
              {' '}
              {note.id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrimarySidebar;
