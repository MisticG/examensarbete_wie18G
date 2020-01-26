import React, { Component, FormEvent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MediaQuery from 'react-responsive';

interface Props {
    toggleMenu: () => void
    showSideBar: boolean
}

export default class SideBar extends Component <Props, {}> {
    constructor(props: Props) {
        super(props);

    }
   
    render() {
        const { toggleMenu, showSideBar  } = this.props
       
        return (
            <MediaQuery maxDeviceWidth={850}>
                
                    <h2 onClick={toggleMenu} style={{fontSize: "2rem", marginBottom: 0, cursor: "pointer"}}>Backa Blommor</h2>
                    <i className="angle down icon" /> 
                
                {showSideBar ?
                    <div style={{width: "100%", marginTop: "0.5em"}}>
                        <h3 ><Link to="/" onClick={toggleMenu} className="item" style={{color: "black"}}>HEM</Link></h3>
                        <h3><Link to="/gallery" onClick={toggleMenu} className="item" style={{color: "black"}}>GALLERI</Link></h3>
                        <h3><Link to="/about"  onClick={toggleMenu} className="item" style={{color: "black"}}>OM OSS</Link></h3>
                        <h3><Link to="/contact"  onClick={toggleMenu} className="item" style={{color: "black"}}>KONTAKT</Link></h3>
                        <h3><Link to="/products"  onClick={toggleMenu} className="item" style={{color: "black"}}>BLOMMOR</Link></h3>
                        <h3><Link to="/cart" onClick={toggleMenu} className="item" style={{color: "black"}}><i className="shipping fast icon"></i> </Link></h3>
                    </div>: <div></div>}
            </MediaQuery>
        )
    }
}