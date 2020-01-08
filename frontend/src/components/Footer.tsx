import React, { Component } from 'react';
import fbLogo from '../assets/images/logos/facebook-logo.png';

export default class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
            <div className="ui container"  >
                <div className="ui stackable two column grid" style={{justifyContent: "center"}} >
                    <h2 style={{fontSize: "3em"}}>Vi har öppet 365 dagar om året!</h2>
                    <div className="column" >
                        <h3>Backa Blommor<br></br>
                        Backavägen 2 <br></br>
                        41705 Göteborg</h3> <br></br>
                        <h3>(Huvudentrén till Stora Coop på Backaplan.)</h3>
                    </div>
                    <div className="column">

                        <img src={fbLogo} style={{display: "flex", width: "15%"}}></img>
                        <button style={buttonStylezz} className="ui button">Kontakta oss</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const footerStyle: React.CSSProperties = {
    backgroundColor: "rgba(139, 108, 108, 0.4)",
    paddingBottom: "5em",
    paddingTop: "3em",
}

const buttonStylezz: React.CSSProperties = {
    fontFamily: "Dancing_Script", 
    fontSize: "1.5em",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    color: "rgba(0, 0, 0, 0.95)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "1.5em"
}