import React, { Component } from 'react';
import '../css/serviceAndColumns.css';

interface Props {
    image: string,
    text: string
    altText: string
}

export default class ColumnRight extends Component<Props,{}> {

    render() {
        return (
            <div className="ui stackable two column grid container containerStyle2">
                <div className="column">
                    <img src={this.props.image} style={imgStyle} alt={this.props.altText} />
                </div>
                <div className="column columnRight">
                    <p>{this.props.text}
                    </p>
                </div>
            </div>
        )
    }
}


const imgStyle: React.CSSProperties = {
    width: "85%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    alignContent: "left"
}