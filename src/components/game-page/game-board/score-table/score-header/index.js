import React, { Component, PropTypes } from 'react';
import './score-header.css';

class ScoreHeader extends Component {
    constructor(props) {
        super(props);

        this.frames = [];
        for (let i = 0; i < this.props.totalFame; i++) {
            this.frames.push({name: i + 1, index: i});
        }
    }

    render() {
        
        return (
            <thead className="scoreHeader">
                <tr>
                    <th className="currentGameFrame">
                        <b>{this.props.currentGame}</b>
                    </th>
                    
                    {this.frames.map(frame => (
                        <th key={frame.index}
                            className={this.props.currentFrame === (frame.index) ? 'frame currentFrame' : 'frame'}>
                            { frame.name }
                        </th>
                    ))}

                    <th>
                        <span>Score</span>
                    </th>
                </tr>
            </thead>
        );
    }
}

ScoreHeader.propTypes = {
    currentGame: PropTypes.string.isRequired
};

export default ScoreHeader;
