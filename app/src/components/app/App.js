import './App.css';
import PrimarySidebar from '../primary-sidebar/PrimarySidebar';
import EditorPanel from '../editor-panel/EditorPanel';
import { store } from '../../store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PrimarySidebar />
          <EditorPanel />
        </header>
      </div>
    </Provider>
  );
}

export default App;
