import React, { Component } from 'react';
//import './App.css';
interface State {
    test: [{
        id: number,
        firstName: string,
        lastName: string
    }];
}

export default class Test extends Component <{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            test: [{
                id: 0,
                firstName: '',
                lastName: ''
            }]
        }
    }

    componentDidMount() {
        fetch('/api/test')
        .then(res => res.json())
        .then(test => this.setState({test}, () => console.log('customers fetched..', test)))
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                   {this.state.test.map(test =>
                        <li key={test.id}> {test.firstName} {test.lastName}</li>
                    )}
                </ul>
            </div>
        )
    }
}


