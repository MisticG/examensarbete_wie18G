import React, { Component } from 'react';
import '../css/header.css';
import ColumnLeft from './ColumnLeft';
import IsleofSky from '../assets/images/scotland_IoS.jpg';
import GoogleMap from '../assets/images/map.jpg';
import Footer from './Footer';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

export default class About extends Component {
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores debitis omnis perferendis? Provident libero pariatur nisi! Esse fuga quibusdam natus accusantium voluptate. Blanditiis, similique! Quia quae cupiditate natus in."

    render() {
        return (
            <div>
                <div className="section" style={outer}>
                    <div className="ui container" style={{marginTop: "4em", marginBottom: "4em", textAlign: "center"}}>
                        <h1>Om oss</h1>
                        <FadeIn delay={200} transitionDuration={1000}>
                        <div>
                        <ColumnLeft text={this.text} image={IsleofSky} altText="Isle of sky"/> 
                        </div>
                        </FadeIn>
                    </div>
                    <div className="ui container" style={{marginTop: "4em", marginBottom: "4em"}}>
                        <h1>Öppettider och besöksadress</h1>
                        <FadeIn delay={200} transitionDuration={1000}>
                            <div className="ui stackable two column grid" style={{justifyContent: "center"}} >
                                <div className="column" style={{textAlign: "left"}}>
                                <h3> Besöksadress: Backavägen 2, Göteborg. (Entrén till Stora Coop) <br></br>
                                <br></br>
                                    Måndag - lördag <br></br> 10 - 19 <br></br>
                                    Söndag <br></br> 11 - 17</h3>
                                    <Link to="/contact"><button style={buttonStylezz} className="ui button">Kontakta oss</button></Link>
                                </div>
                                <div className="column">
                                    <img src={GoogleMap} style={{display: "flex", width: "100%"}} alt="map to the store"></img>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

  


}

const outer: React.CSSProperties = {
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)"
}

const buttonStylezz: React.CSSProperties = {
    fontFamily: "Dancing_Script", 
    fontSize: "1.5em",
    backgroundColor: "rgba(198, 237, 228, 0.95)",
    color: "rgba(0, 0, 0, 0.95)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "1.5em"
}
