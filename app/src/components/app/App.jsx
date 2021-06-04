import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import PrimarySidebar from '../primary-sidebar/PrimarySidebar';
import EditorPanel from '../editor-panel/EditorPanel';
import CommandPalette from '../command-palette/CommandPalette';
import { store } from '../../store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <CommandPalette />
          <PrimarySidebar />
          <EditorPanel />
        </header>
      </div>
    </Provider>
  );
}

export default App;
