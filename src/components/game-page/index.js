import React, { Component } from 'react';

import MyGame from '../../containers/my-game/';

class GamePage extends Component {
    render() {
        return (
            <div className="container">

                <h1 className="display-3">Game</h1>
                <div>
                    <MyGame/>
                </div>

            </div>
        );
    }
}

export default GamePage;
