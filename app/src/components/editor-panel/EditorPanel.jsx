import React from 'react';
import { useSelector } from 'react-redux';

const selectNoteById = (state) => state.notes.find((note) => note.id === state.selectedNoteId);

function EditorPanel() {
  const selectedNote = useSelector(selectNoteById);

  const selectedNoteId = selectedNote ? selectedNote.id : 'Nothing selected';

  return (
    <div>
      { selectedNoteId }
    </div>
  );
}

export default EditorPanel;
