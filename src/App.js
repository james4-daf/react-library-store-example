import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Library Store</h1>
      </header>
      <main>
        <div>
          <h3>Books</h3>
          <ul>
            <li>
              <div>
                <div>The colour of magic</div>
                <div>Terry Pratchett</div>
                <div>Fantasy</div>
              </div>
            </li>
            <li>
              <div>
                <div>The Light Fantastic</div>
                <div>Terry Pratchett</div>
                <div>Fantasy</div>
              </div>
            </li>
            <li>
              <div>
                <div>Death de Jour</div>
                <div>Kathy Reichs</div>
                <div>Crime</div>
              </div>
            </li>
            <li>
              <div>
                <div>The Holy Bible</div>
                <div>Various</div>
                <div>Religion</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
