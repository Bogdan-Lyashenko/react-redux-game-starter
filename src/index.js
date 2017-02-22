import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import jquery from 'jquery';
window.$ = window.jQuery=jquery;
window.Tether=require('tether');
require('bootstrap/dist/js/bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';

import { Provider } from 'react-redux'
import store from './store/getStore'

import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
const history = useRouterHistory(createHashHistory)();

import App from './components/app/';
import Game from './components/game-page/';
import About from './components/about-page/';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Game}/>
              <Route path="/about" component={About}/>
          </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
