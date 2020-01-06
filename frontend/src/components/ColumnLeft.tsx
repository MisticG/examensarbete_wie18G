import React, { Component } from 'react';

interface Props {
    image: string,
    text: string
}

export default class ColumnLeft extends Component<Props,{}> {

    render() {
        return (
            <div className="ui stackable two column grid container" style={{marginTop: "3.5em"}}>
                <div className="column" style={{textAlign: "left", paddingLeft: "3.4em"}}>
                    <p>{this.props.text}
                    </p>
                </div>
                <div className="column">
                    <img src={this.props.image} style={imgStyle} />
                </div>
            </div>
        )
    }
}


const imgStyle: React.CSSProperties = {
    width: "85%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}