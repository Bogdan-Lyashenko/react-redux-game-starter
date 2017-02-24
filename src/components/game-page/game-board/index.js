import React, { Component, PropTypes } from 'react';
import ScoreTable from './score-table/';

class GameBoard extends Component {
    render() {
        return (
            <div className="playView">
                <div>
                    <ScoreTable
                        players={this.props.players}
                        totalFrames={this.props.totalFrames}
                        currentPlayerIndex={this.props.currentPlayerIndex}
                        currentFrame={this.props.currentFrame} />

                    <form className="form-inline">
                        <button className="btn btn-primary" onClick={this.props.onPlayerStep} > Ball!</button>
                        <button className="btn btn-info" onClick={this.props.handleAutoPlay}>Auto play</button>
                    </form>
                </div>
            </div>
        );
    }
}

GameBoard.propTypes = {    
    players: PropTypes.array.isRequired,
    totalFrames: PropTypes.number.isRequired,
    currentFrame: PropTypes.number.isRequired,
    currentPlayerIndex: PropTypes.number.isRequired,
    onPlayerStep: PropTypes.func.isRequired,
    handleAutoPlay: PropTypes.func.isRequired
};

export default GameBoard;
