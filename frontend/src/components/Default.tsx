import React, { Component } from 'react';

export default class Default extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Page not found</h2>
            </div>
        )
    }
}