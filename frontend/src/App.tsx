import React, { Component } from 'react';
import './App.css';
import LocalRouter from './components/test/Router';

export default class App extends Component {
    render() {
        return (
          <div className="ui fluid container" style={{backgroundColor: "rgba(139, 108, 108, 0.9)"}}>
            <LocalRouter />
          </div>
        )
    }
}