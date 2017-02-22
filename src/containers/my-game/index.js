import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import StartView from './start-view/';
import PlayView from './play-view/';
import FinishView from './finish-view/';

import './my-game.css';


class MyGame extends Component {
    render() {
        let props = this.props;

        return (
            <div className="myGame">
                { !props.isGameStarted ? <StartView /> :
                    (!props.isGameSessionDone ? <PlayView /> : <FinishView />) }
            </div>            
        );
    }
}

MyGame.propTypes = {
    isGameSessionDone: PropTypes.bool.isRequired,
    isGameStarted: PropTypes.bool.isRequired
};


const mapStateToProps = (state) => {
    return {
        isGameStarted: state.game.isGameStarted,
        isGameSessionDone: state.game.isGameSessionDone
    };
};

export default connect(mapStateToProps)(MyGame);
