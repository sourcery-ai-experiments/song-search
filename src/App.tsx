import React from 'react';
import logo from './logo.svg';
import Search from './components/atoms/searchInput/Search';
import CardSong from './components/cardSong/CardSong';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search/>
      <CardSong/>
    </div>
  );
}

export default App;
