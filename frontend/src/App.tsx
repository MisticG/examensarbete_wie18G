import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from './components/Gallery';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/ProductList';
import Cart from './components/cart/Cart';
import { ProductProvider } from './context'
import ProductDetails from './components/ProductDetails';
import Modal from './components/Modal';
import Default from './components/Default';
import MediaQuery from 'react-responsive';

interface State {
    visible: boolean
    
}

export default class App extends Component <{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            visible: false,
            
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu(e: React.FormEvent) {
        this.setState({visible: !this.state.visible})
    }
   
    render() {
       
        return (
            <ProductProvider>
            <Router>
                <MediaQuery maxDeviceWidth={850}>
                    <div className="sticky">    
                        <div className="ui container center aligned" style={{marginTop: "1em", marginBottom: "1em"}}>
                            <i className="bars icon" onClick={this.toggleMenu}/>
                            {this.state.visible && 
                            <div style={{width: "100%", marginTop: "1em"}}>
                                <h3 ><Link to="/" className="item" style={{color: "black"}}>HEM</Link></h3>
                                <h3><Link to="/gallery" className="item" style={{color: "black"}}>GALLERI</Link></h3>
                                <h3><Link to="/about" className="item" style={{color: "black"}}>OM OSS</Link></h3>
                                <h3><Link to="/contact" className="item" style={{color: "black"}}>KONTAKT</Link></h3>
                                <h3><Link to="/products" className="item" style={{color: "black"}}>BLOMMOR</Link></h3>
                                <h3><Link to="/cart" className="item" style={{color: "black"}}><i className="shipping fast icon"></i> </Link></h3>
                            </div>}
                            
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={851}>
                <div className="sticky">
                    <div className="ui container center aligned">
                        <div className="ui five big item secondary menu container" style={naviStyle} >
                    
                            <Link to="/" className="item">HEM</Link>
                            <Link to="/gallery" className="item">GALLERI</Link>
                            <Link to="/about" className="item">OM OSS</Link>
                            <Link to="/contact" className="item">KONTAKT</Link>
                            <Link to="/products" className="item">BLOMMOR</Link>
                            <Link to="/cart" className="item"><i className="shipping fast icon"></i> </Link>
                    
                        </div>
                    </div>
                </div>
                </MediaQuery>
                <Modal /> 
        
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
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/details">
                        <ProductDetails />
                    </Route>
                    <Route>
                        <Default />
                    </Route>
                </Switch>
            </Router>
            </ProductProvider>
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