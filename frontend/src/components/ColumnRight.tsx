import React, { Component } from 'react';
import '../css/serviceAndColumns.css';

interface Props {
    headerText: string,
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
                <h3><b>{this.props.headerText}</b></h3>
                    <h3 style={{lineHeight: "2rem"}}>{this.props.text}
                    </h3>
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