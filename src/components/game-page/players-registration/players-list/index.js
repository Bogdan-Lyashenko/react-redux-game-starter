import React, { Component, PropTypes } from 'react';
import './players-list.css';

class PlayersList extends Component {

    render() {
        return (           
            <div>
                <hr/>   
                <h3> Players: </h3>
                <ol className="playersList">
                    {this.props.players.map(player => (
                        <li key={Math.random()}>{ player.displayName }</li>                    
                    ))}
                </ol>
                <hr/>   
            </div>
        );
    }
}


PlayersList.propTypes = {
    players: PropTypes.array.isRequired
};

export default PlayersList;
