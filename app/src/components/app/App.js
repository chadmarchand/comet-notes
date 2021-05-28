import './App.css';
import Api from '../../api';
import PrimarySidebar from '../primary-sidebar/PrimarySidebar';
import EditorPanel from '../editor-panel/EditorPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimarySidebar />
        <EditorPanel />
      </header>
    </div>
  );
}

export default App;
