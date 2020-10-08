import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Styles = styled.div`
    background-color: #282c34;
    color: white;
    border-top: 2px solid black;
    min-height: 50vh;

    .lyrics-container-on {
        border: 2px solid white;
        border-radius: 10%;
        margin: 20px 5%
        
    }
`


function LyricDisplay(props) {

    const { lyrics, isLoaded } = props;

    return (
        <Styles>
            <div className='large-container'>
                <div className={'lyric-display-container'}>
                    <h2>These are the lyrics:</h2>
                    <div className={lyrics += '' ? 'lyrics-container-on' : 'lyrics-container-off'}>
                        <p>{lyrics}</p>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

const mapStateToProps = (state) => {
    return {
      lyrics: state.lyrics,
      isLoaded: state.isLoaded
    }
  }

export default connect(mapStateToProps, {})(LyricDisplay);