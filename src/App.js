import React from 'react';
import './App.css';
import List from './components/list/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Library Store</h1>
      </header>
      <main>
        <List title="Books" />
        <List title="Videos" />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
