import React from 'react';
import './App.css';
import List from './components/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Library Store</h1>
        <br/>
      </header>
      
      

      
      <List title='Books'/>
      
      <footer>
        
        <p className="bott">Copyright Elsevier 2020</p>
      </footer>
    </div>
  );
}






export default App;
