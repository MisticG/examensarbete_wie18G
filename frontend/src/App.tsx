import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from './components/Gallery';
import Main from './components/Main';
import About from './components/About';

export default class App extends Component {
    render() {
        return (
            <Router>
              <div style={{backgroundColor: "rgba(139, 108, 108, 0.9)"}}>
                  <div className="ui container center aligned">
                      <div className="ui five big item secondary menu container" style={naviStyle}>
                          <Link to="/" className="item">HEM</Link>
                          <Link to="/gallery" className="item">GALLERI</Link>
                          <Link to="/about" className="item">OM OSS</Link>
                          <Link to="/contact" className="item">KONTAKT</Link>
                          <Link to="/offers" className="item">TJÄNSTER & UTBUD</Link>
                      </div>
                  </div>
                </div>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
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
                    {/*<Contact />*/}
                </Route>
                <Route path="/offers">
                    {/*<Offers />*/}
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