import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class LocalRouter extends Component {
    render() {
        return (
            <Router>
                <div className="ui container fixed center aligned">
                    <div className="ui five big item secondary menu container" style={naviStyle}>
                        <Link to="/" className="item">HEM</Link>
                        <Link to="/gallery" className="item">GALLERI</Link>
                        <Link to="/about" className="item">OM OSS</Link>
                        <Link to="/contact" className="item">KONTAKT</Link>
                        <Link to="/service" className="item">TJÄNSTER & UTBUD</Link>
                    </div>
                </div>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/about">
                    {/*<About />*/}
                </Route>
                <Route path="/users">
                    {/*<Users />*/}
                </Route>
                <Route path="/">
                    {/*<Home />*/}
                </Route>
                </Switch>
            </Router>
        );
    }
}

const naviStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,
    fontWeight: "normal",
    color: "black",
    fontFamily: "Montserrat"
}