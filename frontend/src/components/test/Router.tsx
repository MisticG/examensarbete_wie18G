import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class LocalRouter extends Component {
    render() {
        return (
          <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Hem</Link>
                </li>
                <li>
                  <Link to="/gallery">Galleri</Link>
                </li>
                <li>
                  <Link to="/about">Om oss</Link>
                </li>
                <li>
                  <Link to="/contact">Kontakt</Link>
                </li>
                <li>
                  <Link to="/service">Tjänster och Utbud</Link>
                </li>
              </ul>
            </nav>
    
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
          </div>
        </Router>
      );
    }
}