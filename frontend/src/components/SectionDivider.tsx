import React, { Component } from 'react';

interface Props {
    image: string
}

export default class SectionDivider extends Component<Props,{}> {

    render() {
        return (
            <div className="border_bg" style={{backgroundImage: `url(${this.props.image})`}}>
                <div className="header_text">
                    <span className="border">
                        Border Background Text Two
                    </span>
                </div>
            </div>
        )
    }
}