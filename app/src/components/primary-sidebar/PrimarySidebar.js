import React, { Component } from 'react';
import './PrimarySidebar.css';
import { useSelector } from 'react-redux'

const selectNotes = state => state.notes;

function PrimarySidebar() {
  const notes = useSelector(selectNotes);

  console.log('Notes', notes);

  return (
    <div className="primary-sidebar">
      This is the primary sidebar.

      <ul>
        {notes.map(note =>
          (<li key={note.title}>
            {note.title}
          </li>)
        )}
      </ul>
    </div>
  );
}

export default PrimarySidebar;
