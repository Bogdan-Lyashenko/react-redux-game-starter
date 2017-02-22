import React, { Component, PropTypes } from 'react';
import './player-score-row.css';

class PlayerScoreRow extends Component {

    render() {
        var player = this.props.player;

        return (
            <tr className={this.props.isCurrentPlayer ? 'currentPlayerScoreRow' : 'playerScoreRow'}>
                <td className="currentGameFrame">
                    <b>{player.displayName}</b>
                </td>

                {player.frames.map((frame, i) => (
                    <td className={ (this.props.currentFrame === i) ? 'frame currentFrame' : 'frame'} key={i}>
                        {(frame[0] || 0) +'/' + (frame[1] || 0)}
                    </td>
                ))}

                <td>
                    <b>{player.score || 0}</b>
                </td>
            </tr>
        );
    }
}

PlayerScoreRow.propTypes = {
    isCurrentPlayer: PropTypes.bool.isRequired,
    currentFrame: PropTypes.number.isRequired,
    player: PropTypes.object.isRequired
};

export default PlayerScoreRow;
