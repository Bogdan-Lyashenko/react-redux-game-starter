import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import StartView from './start-view/';
import PlayView from './play-view/';
import FinishView from './finish-view/';

import { PLAYERS_REGISTRATION, GAME_IN_PROGRESS, GAME_WINNER } from '../../utils/constants';

import './my-game.css';


class MyGame extends Component {
    getScreen () {
        let props = this.props;

        switch (props.currentGamePhase) {
            case PLAYERS_REGISTRATION:
                return <StartView />;

            case GAME_IN_PROGRESS:
                return  <PlayView />;

            case GAME_WINNER:
                return  <FinishView />;

            default:
                return <StartView />;
        }
    }

    /**
     *
     * @param {Object} nextProps
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps) {
        return [PLAYERS_REGISTRATION, GAME_IN_PROGRESS, GAME_WINNER].indexOf(nextProps.currentGamePhase) !== -1;
    }

    render() {
        let screen = this.getScreen();

        return (
            <div className="myGame">
                { screen }
            </div>            
        );
    }
}

MyGame.propTypes = {
    currentGamePhase: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentGamePhase: state.game.currentGamePhase
    };
};

export default connect(mapStateToProps)(MyGame);
