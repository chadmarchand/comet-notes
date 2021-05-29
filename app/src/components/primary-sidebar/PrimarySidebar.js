import React from 'react';
import './PrimarySidebar.css';
import { useSelector } from 'react-redux'

const selectNotes = state => state.notes;

function PrimarySidebar() {
  function selectNote(noteId) {
    console.log('Selecting note with ID', noteId);
  }

  const notes = useSelector(selectNotes);

  return (
    <div className="primary-sidebar">
      This is the primary sidebar.

      <ul>
        {notes.map(note =>
          (
            <li
              key={note.id}
              onClick={() => selectNote(note.id)}
            >
              {note.title} {note.id}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default PrimarySidebar;
