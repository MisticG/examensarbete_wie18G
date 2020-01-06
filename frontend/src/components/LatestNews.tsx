import React, { Component } from 'react';
import newsImg from '../assets/images/bukett_1.jpg';

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
                            <img src={newsImg} style={imgStyle} />
                        </div>
                    </div>
                    <div>
                        <a style={{cursor: "pointer"}}><h2 style={{fontSize: "2.5em", marginTop: "1em"}}>Se flera inlägg...</h2></a>
                    </div>
                </div>
            </div>
        )
    }
}

const outer: React.CSSProperties = {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
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