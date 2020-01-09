import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from './components/Gallery';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="sticky">
                    <div className="ui container center aligned">
                        <div className="ui five big item secondary menu container" style={naviStyle}>
                            <Link to="/" className="item">HEM</Link>
                            <Link to="/gallery" className="item">GALLERI</Link>
                            <Link to="/about" className="item">OM OSS</Link>
                            <Link to="/contact" className="item">KONTAKT</Link>
                            <Link to="/products" className="item">TJÄNSTER & UTBUD</Link>
                        </div>
                    </div>
                </div>
                
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/products">
                        <Products />
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