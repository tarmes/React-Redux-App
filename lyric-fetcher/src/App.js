import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import SearchForm from './components/SearchForm';
import { fetchLyrics } from './store/actions';
import { connect } from 'react-redux';

function App(props) {

  const { fetchLyrics, lyrics } = props;

  const [url, setUrl] = useState('https://api.lyrics.ovh/v1/artist/title')

  useEffect(() => {
    fetchLyrics(url);
  }, [fetchLyrics, url])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Please search for your favorite song!</h1>
        <SearchForm setUrl={setUrl}/>
        <h2>These are the lyrics:</h2>
        <p>{lyrics}</p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lyrics: state.lyrics
  }
}

export default connect(mapStateToProps, { fetchLyrics })(App);
