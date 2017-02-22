import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlayer, startGame} from '../../../actions'

import PlayersRegistration from '../../../components/game-page/players-registration/';

import './start-view.css';

class StartView extends Component {    
    render() {
        return (
            <div className="startView">
                <PlayersRegistration 
                    players={this.props.game.players}
                    addPlayer={(name, frames)=> this.props.dispatch(addPlayer(name, frames)) }
                    onStartClick={() => this.props.dispatch(startGame(true)) }/>                
            </div>
        );
    }
}

export default connect(function (state) {
    return state;
})(StartView);
