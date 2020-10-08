import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const initialSearchValues = {
    artist: '',
    song: ''
}

function SearchForm(props) {

    const { isLoading, setUrl } = props;

    const [newSearch, setNewSearch] = useState(initialSearchValues);

    const handleChanges = (evt) => {
        const { name, value } = evt.target;
        setNewSearch({ ...newSearch, [name] : value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const artistSearchUrl = newSearch.artist.replace(' ', '_');
        const songSearchUrl = newSearch.song.replace(' ', '_');
        setUrl(`https://api.lyrics.ovh/v1/${artistSearchUrl}/${songSearchUrl}`)
    }

    const renderLoader = () => {
        return (
            <>
                <Loader
                    type="Audio"
                    color="#00BFFF"
                    height={25}
                    width={50}
                    timeout={30000} //30 secs
                />
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Artist
                <input 
                    type='text' 
                    name='artist' 
                    onChange={handleChanges} 
                    value={newSearch.artist}
                />
            </label>
            <label>
                Song
                <input 
                    type='text' 
                    name='song' 
                    onChange={handleChanges} 
                    value={newSearch.song}
                />
            </label>
            <button>{isLoading ? renderLoader() : 'Search'}</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps, {})(SearchForm);