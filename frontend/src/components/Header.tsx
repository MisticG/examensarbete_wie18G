import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <div className="header_bg0">
                <div className="header_text">
                    <span className="border">
                        testing...
                    </span>
                </div>
            </div>
        )
    }
}

/*const insideStyles: React.CSSProperties  = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };*/

  /*const backStyle: React.CSSProperties = {
    backgroundImage: `url(${Header_bg})`,
    opacity: 0.7,
    width: "100%",
    height: "100rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  }*/