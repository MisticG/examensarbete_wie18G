import React, { Component } from 'react';
import newsImg from '../assets/images/bukett_1.jpg';
//import MediaQuery from 'react-responsive';

export default class LatestNews extends Component {
    
    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nihil assumenda magnam nesciunt rerum beatae adipisci consequatur inventore nisi exercitationem. Impedit veritatis ex nulla! Atque dignissimos quis error dolor ex!"
    render() {
        return (
            <div className="section latestNews" style={outer}>
                <div style={news}>
                    <h1>Senaste nytt i butiken</h1>
                    <div className="ui stackable two column grid">
                        <div className="column" style={{textAlign: "left"}}>
                            <p>{this.text}
                            </p> <br></br>
                            <p>{this.text}
                            </p> <br></br>
                            <p>{this.text}
                            </p> <br></br>
                        </div>
                        <div className="column">
                            <img src={newsImg} style={imgStyle} alt="big ass bouquet"/>
                        </div>
                    </div>
                    <div>
                        <a style={{cursor: "pointer"}}><h2 style={{fontSize: "2em", marginTop: "2em"}}>Se flera inlägg...</h2></a>
                    </div>
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
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}

