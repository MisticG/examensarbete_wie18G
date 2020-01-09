import React, { Component } from 'react';
import '../css/header.css';
import Footer from './Footer';
import FadeIn from 'react-fade-in';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="section" style={outer}>
                    <div className="ui container" style={{marginTop: "4em", marginBottom: "4em"}}>
                        <div className="ui form section" style={outer}>
                            <h1>Kontaktformulär</h1>
                            <FadeIn delay={200} transitionDuration={1000}>
                                <div style={{textAlign: "left"}}>
                                    <div className="field">
                                        <label><h3>Namn</h3></label>
                                        <input type="text"/>
                                    </div>
                                    <div className="field">
                                        <label><h3>E-mail</h3></label>
                                        <input type="text" />
                                    </div>
                                    <div className="field">
                                        <label><h3>Ditt meddelande</h3></label>
                                        <textarea></textarea>
                                    </div>
                                    <div className="ui right floated green submit button">Submit</div>
                                </div>
                            </FadeIn>
                        </div>                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const outer: React.CSSProperties = {
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
}