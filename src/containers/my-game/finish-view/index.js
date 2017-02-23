import React, { Component } from 'react';
import { restartGame, showWinner } from '../../../actions'
import GameEnd from '../../../components/game-page/game-end/';

import { connect } from 'react-redux'

import './finish-view.css';

class FinishView extends Component {
    componentDidMount() {
        this.props.dispatch(showWinner());
    }

    render() {
        return (            
            <div className="finishView">
                <GameEnd winner={this.props.winner} onGameRestart={()=>this.props.dispatch(restartGame())} />
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
