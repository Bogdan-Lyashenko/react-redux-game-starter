import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import './header.css';

export default class Header extends Component {

    render() {
        const pathname = this.props.location.pathname;
        
        const isGamePage = pathname.indexOf('game') > -1;
        const isAboutPage = pathname.indexOf('about') > -1;

        return (

            <div className="pos-f-t">
                <div className="collapse" id="navbar-header">
                <div className="container bg-inverse p-a-1" />
            </div>

            <nav className="navbar navbar-light bg-faded navbar-fixed-top">
                <div className="container">
                    <div id="collapsingNavbar" className="collapse navbar-toggleable-xs">

                        <ul className="nav navbar-nav">
                            <li title="Game" className={isGamePage ? 'nav-item active' : 'nav-item'}>
								<IndexLink className="nav-link" to="/" >Game</IndexLink>
                            </li>
                            <li title="About" className={isAboutPage ? 'nav-item active' : 'nav-item'}>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
              </div>
            </nav>
          </div>
        );
    }
}
