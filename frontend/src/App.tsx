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
import SideBar from './components/Sidebar';
import ThankYou from './components/ThankYou';

interface State {
    visible: boolean
}

export default class App extends Component <{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu() {
        this.setState({visible: !this.state.visible})
    }
   
    render() {
       
        return (
            <ProductProvider>
            <Router>
                
                    <div className="sticky">    
                        <div className="ui container center aligned numb" style={{marginTop: "1em", marginBottom: "1em"}}>
                            <SideBar 
                                toggleMenu={this.toggleMenu}
                                showSideBar={this.state.visible}    
                            />
                        </div>
                    </div>
               
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
                    <Route path="/thankyou">
                        <ThankYou />
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