import React, { Component } from 'react';
import newsImg from '../assets/images/bukett_1.jpg';

export default class LatestNews extends Component {
    //isTabletOrLess = useMediaQuery({ query: '(max-width: 1224px)' });
    
    render() {
        return (
            <div className="section latestNews" style={outer}>
                <div style={news}>
                    <h1>Senaste nytt i butiken</h1>
                    <div className="ui stackable two column grid">
                        <div className="column" style={{textAlign: "left"}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium maxime ut, doloremque neque eaque tempora ratione, natus
                            quis laboriosam assumenda saepe enim obcaecati quo, nihil sunt esse possimus iusto.
                            </p> <br></br>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium maxime ut, doloremque neque eaque tempora ratione, natus
                            quis laboriosam assumenda saepe enim obcaecati quo, nihil sunt esse possimus iusto.
                            </p> <br></br>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium maxime ut, doloremque neque eaque tempora ratione, natus
                            quis laboriosam assumenda saepe enim obcaecati quo, nihil sunt esse possimus iusto.
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
    /*margin: "1em",
    padding: "2em",*/
    fontFamily: "Dancing_Script"
}

const imgStyle: React.CSSProperties = {
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}