import React, { Component,  PropTypes} from 'react';
import ScoreHeader from './score-header/';
import ScoreRows from './score-rows/';

import './score-table.css';

class ScoreTable extends Component {

    render() {
        return (
            <div className="scoreTable">
                <table className="table-bordered table-condensed">
                    <ScoreHeader totalFrames={this.props.totalFrames}
                     currentFrame={this.props.currentFrame}
                     currentGame={'Game 1'} />

                    <ScoreRows
                     players={this.props.players}                     
                     currentFrame={this.props.currentFrame}
                     currentPlayer={this.props.players[this.props.currentPlayerIndex]}/>
                </table>
            </div>
        );
    }
}

ScoreTable.propTypes = {
    players: PropTypes.array.isRequired,
    totalFrames: PropTypes.number.isRequired,
    currentFrame: PropTypes.number.isRequired,
    currentPlayerIndex: PropTypes.number.isRequired
};


export default ScoreTable;


