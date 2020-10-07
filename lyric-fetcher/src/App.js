import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>These are the lyrics:</h1>
        <SearchForm />
      </header>
    </div>
  );
}

export default App;
