import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Styles = styled.div`
    padding: 60px 0;
    margin: 20px;
    color: #282c34;

    .search-inputs {
        display: flex;
        flex-direction: column;
    }

    input {
        margin: 0 2%;
        padding: .5em 0
    }

    label {
        font-size: 2em;
    }

    .loader-button-container {
        margin: 20px;
    }
`

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
                    color="#282c34"
                    height={30}
                    width={30}
                    timeout={30000}
                    className="loader-button" //30 secs
                />
            </>
        )
    }

    return (
        <Styles>
            <form onSubmit={handleSubmit}>
                <div className='search-inputs'>
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
                </div>
                <div className='loader-button-container'>
                    <button>{isLoading ? renderLoader() : 'Search'}</button>
                </div>
            </form>
        </Styles>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps, {})(SearchForm);