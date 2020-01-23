import React, { Component } from 'react';
import '../css/header.css';
import FadeIn from 'react-fade-in';

export default class Header extends Component {

    render() {
        return (
            <div className="header_bg0">
              
                    <div className="header_text container">
                    <FadeIn delay={100} transitionDuration={1200}>
                        <div className="ui stackable three column centered container headering">
                            <div className="column" style={{marginBottom: "1em"}}>
                                Backa
                            </div>
                            <div className="column headerStyle" style={{fontFamily: "MontSerrat"}}>
                                Blommor    
                            </div>
                            <div className="column headerStyle2">
                                <button style={buttonStyle} className="ui button">Kontakta oss</button>
                            </div>                   
                        </div>
                        </FadeIn> 
                    </div>
                
            </div>
        )
    }
}

const buttonStyle: React.CSSProperties = {
    fontFamily: "Dancing_Script", 
    fontSize: "0.3em",
    backgroundColor: "rgba(198, 237, 228, 0.95)",
    color: "rgba(0, 0, 0, 0.95)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    opacity: 1
}