import React, { Component, PropTypes } from 'react';
import PlayerScoreRow from './player-score-row/';

import './score-rows.css';

class ScoreRows extends Component {

    render() {
        var currentPlayer = this.props.currentPlayer;
        
        return (           
            <tbody className="scoreRows">
                {this.props.players.map(player => (                    
                    <PlayerScoreRow
                        player={player}
                        isCurrentPlayer={currentPlayer.id === player.id}
                        currentFrame={this.props.currentFrame}
                        key={player.id} />
                ))}
            </tbody>
        );
    }
}

ScoreRows.propTypes = {
    players: PropTypes.array.isRequired,
    currentPlayer: PropTypes.object.isRequired,
    currentFrame: PropTypes.number.isRequired
};

export default ScoreRows;

