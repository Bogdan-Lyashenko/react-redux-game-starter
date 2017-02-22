import React, { Component } from 'react';
import PlayersList from './players-list/';

import './players-registration.css';

function getFrames() {
    var list = [];

    for (let i = 0; i < 10; i++) {
        list.push([]);
    }

    return list;
}

class PlayersRegistration extends Component {
    constructor(props) {
        super(props);

        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer() {
        let displayName = this.textInput.value;
        this.textInput.value = '';
        
        this.props.addPlayer(
            displayName,
            getFrames()
        );
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Player name</label>
                        <input type="text" className="form-control" placeholder="Enter name.."
                               ref={(input) => { this.textInput = input; }}/>
                    </div>

                    <button className="btn btn-primary" onClick={this.addPlayer}>Add player</button>
                </form>

                { (this.props.players.length) ?                

                    <div>   
                        <PlayersList players={this.props.players}/>
                        <button className="btn btn-info" onClick={this.props.onStartClick}>Start!</button>
                    </div>   

                    : <hr/>
                }
                
            </div>
        );
    }
}

export default PlayersRegistration;
