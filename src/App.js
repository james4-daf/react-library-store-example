import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/list/List'
import BookService from "./services/BookService";

function App() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    console.log("hook running");
    BookService.getBooksFromApi().then(data => {
      setBookData(data);
    });
  }, [])

  //const bookData = BookService.getBooksFromApi();
  const videoData = BookService.getVideos();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="greenText">React Library Store</h1>
      </header>

      <main>
        <List title="Books" data={bookData} />
        <List title="Videos" data={videoData} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
