import React, { useState } from 'react';
import { connect } from 'react-redux';

const initialSearchValues = {
    artist: '',
    song: ''
}

function SearchForm(props) {

    const { isLoading } = props;

    const [newSearch, setNewSearch] = useState(initialSearchValues);

    const handleChanges = (evt) => {
        const { name, value } = evt.target;
        setNewSearch({ ...newSearch, [name] : value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <button>Submit Search</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps, {})(SearchForm);