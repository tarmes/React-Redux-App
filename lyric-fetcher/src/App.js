import React, { useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import SearchForm from './components/SearchForm';
import { fetchLyrics } from './store/actions';
import { connect } from 'react-redux';

function App(props) {

  const { fetchLyrics } = props;

  useEffect(() => {
    fetchLyrics();
  }, [fetchLyrics])

  return (
    <div className="App">
      <header className="App-header">
        <h1>These are the lyrics:</h1>
        <SearchForm />
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
