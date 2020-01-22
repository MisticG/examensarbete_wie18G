import React, { Component } from 'react';
import '../css/header.css';
import Footer from './Footer';
import FadeIn from 'react-fade-in';

interface State {
    name: string,
    email: string,
    message: string
}

export default class About extends Component <{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
    }

    

    onNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({name: event.currentTarget.value})
    }

    onEmailChange= (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({email: event.currentTarget.value})
    }

    onMessageChange= (event: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({message: event.currentTarget.value})
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        fetch('/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then(res => {
            if(res.status === 'success') {
                alert("Message sent")
                this.resetForm()
            } else if (res.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({name: '', email: '', message: ''})
    }

    //Lägg till validation rules
    render() {
        return (
            <div>
                <div className="section" style={outer}>
                    <div className="ui container" style={{marginTop: "4em", marginBottom: "4em"}}>
                        <form className="ui form section" onSubmit={this.handleSubmit.bind(this)} style={outer}>
                            <h1>Kontaktformulär</h1>
                            <FadeIn delay={200} transitionDuration={1000}>
                                <div style={{textAlign: "left"}}>
                                    <div className="field">
                                        <label><h3>Namn</h3></label>
                                        <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                                    </div>
                                    <div className="field">
                                        <label><h3>E-mail</h3></label>
                                        <input type="text" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                    </div>
                                    <div className="field">
                                        <label><h3>Ditt meddelande</h3></label>
                                        <textarea value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                                    </div>
                                    <button className="ui green button" type="submit">Submit</button>
                                </div>
                            </FadeIn>
                        </form>                        
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