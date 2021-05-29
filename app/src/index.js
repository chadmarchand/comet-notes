import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import App from './components/app/App';
import { store, push } from './store';

seedMockInitialState();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

function seedMockInitialState() {
  store.dispatch(
    push(
      {
        title: 'Test123',
        id: uuidv4(),
        content: 'Here is some content',
      },
    ),
  );
}
