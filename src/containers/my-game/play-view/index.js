import React, { Component, PropTypes } from 'react';
import { doPlayerNextStep } from '../../../actions';
import GameBoard from '../../../components/game-page/game-board/';
import { connect } from 'react-redux';

import './play-view.css';


class PlayView extends Component {

    constructor (props) {
        super(props);

        this.onPlayerStep = this.onPlayerStep.bind(this);
        this.handleAutoPlay = this.handleAutoPlay.bind(this);
    }

    onPlayerStep() {
        this.props.dispatch(doPlayerNextStep());
    }

    handleAutoPlay() {
        this.props.dispatch(doPlayerNextStep()).then((game) => {
            setTimeout(() => {
                if (!game.isGameSessionDone) {
                    this.handleAutoPlay()
                }
            }, 100);
        });
    }

    render() {
        return (
            <div className="playView">
                <GameBoard
                    players={this.props.players}
                    currentPlayerIndex={this.props.currentPlayerIndex}
                    currentFrame={this.props.currentFrame}
                    onPlayerStep={this.onPlayerStep}
                    handleAutoPlay={this.handleAutoPlay} />
            </div>
        );
    }
}

PlayView.propTypes = {
    players: PropTypes.array.isRequired,
    currentFrame: PropTypes.number.isRequired,
    currentPlayerIndex: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
	return {
		players: state.game.players,
		currentFrame: state.game.currentFrame,
		currentPlayerIndex: state.game.currentPlayerIndex
	};
};

export default connect(
  mapStateToProps
)(PlayView);
