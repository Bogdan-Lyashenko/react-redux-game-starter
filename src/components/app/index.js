import React, { Component } from 'react';
import Header from './header/';

import './app.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header location={this.props.location} />
            
                <div className="container appContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
