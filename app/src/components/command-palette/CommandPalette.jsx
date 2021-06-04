import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

function CommandPalette() {
  useHotkeys('ctrl+;', () => { alert('Shortcut!'); }, { filterPreventDefault: 'true' });

  return (
    <div>
      CommandPalette
    </div>
  );
}

export default CommandPalette;
