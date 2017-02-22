import React, { Component } from 'react';
import { restartGame } from '../../../actions'
import { connect } from 'react-redux'

import './finish-view.css';

class FinishView extends Component {

    render() {
        let winner = this.props.winner;

        return (            
            <div className="playView">
                <div>
                    <h1> Player <i>{winner.displayName}</i> won!. Score - <b>{winner.score}</b>.</h1>
                </div>
                <button className="btn" onClick={()=>this.props.dispatch(restartGame())}>Restart</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		winner: state.game.winner
	};
};
 
export default connect(
  mapStateToProps
)(FinishView);
