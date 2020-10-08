import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import SearchForm from './components/SearchForm';
import { fetchLyrics } from './store/actions';
import LyricDisplay from './components/LyricDisplay';
import { connect } from 'react-redux';

function App(props) {

  const { fetchLyrics } = props;

  const [url, setUrl] = useState('https://api.lyrics.ovh/v1/artist/title')

  useEffect(() => {
    fetchLyrics(url);
  }, [fetchLyrics, url])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Please search for your favorite song!</h1>
      </header>
      <SearchForm setUrl={setUrl}/>
      <LyricDisplay />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect( mapStateToProps, { fetchLyrics })(App);
