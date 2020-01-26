import React, { Component } from 'react';
import newsImg from '../assets/images/bukett_1.jpg';
import { Link } from 'react-router-dom';

export default class LatestNews extends Component {
  
    text = "Välkommen till Backa Blommor! Vi har precis lanserat vår nya webbsida på nätet. Har du några frågor så hör gärna av dig till oss på"
    
    render() {
        return (
            <div className="section latestNews" style={outer}>
                <div style={news}>
                    <h1 style={{marginBottom: "1em"}}>Senaste nytt i butiken</h1>
                    <div className="ui stackable two column grid">
                        <div className="column" style={{textAlign: "left"}}>
                            <h3>{this.text} <Link to="/contact">kontaktsidan</Link> </h3> 
                        </div>
                        <div className="column">
                            <img src={newsImg} style={imgStyle} alt="big ass bouquet"/>
                        </div>
                    </div>
                    {/*<div>
                        <a style={{cursor: "pointer"}}><h2 style={{fontSize: "2em", marginTop: "2em"}}>Se flera inlägg...</h2></a>
                    </div>*/}
                </div>
            </div>
        )
    }
}

const outer: React.CSSProperties = {
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)"
}

const news: React.CSSProperties = {
    fontFamily: "Dancing_Script"
}

const imgStyle: React.CSSProperties = {
    width: "80%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}

