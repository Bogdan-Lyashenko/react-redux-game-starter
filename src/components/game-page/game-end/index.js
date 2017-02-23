import React, { Component } from 'react';

class GameEnd extends Component {
    render() {
        let winner = this.props.winner || {};

        return (
            <div>
                <div>
                    <h1> Player <i>{winner.displayName}</i> won!. Score - <b>{winner.score}</b>.</h1>
                </div>
                <div>
                    <button className="btn" onClick={this.props.onGameRestart}>Restart</button>
                </div>
            </div>
        );
    }
}

export default GameEnd;
