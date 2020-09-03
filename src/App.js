import React from 'react';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Library Store</h1>
      </header>
      <List title='Books' />
      <List title='Videos' />
      <footer>
      </footer>
    </div>
  );
}

export default App;
