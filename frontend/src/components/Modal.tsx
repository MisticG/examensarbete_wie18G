import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return(
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const { title, price } = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                            <div id="modal" className="ui mini modal" style={modalStyle}>
                                <div className="header">Dina valda blommor är tillagda
                                </div>
                                <div className="header">
                                    <h3>{title}</h3>
                                    <h3>Pris: {price}Kr</h3>
                                </div>
                                <div className="content">
                                    <Link to="/products">
                                        <button className="ui orange button" onClick={() => closeModal()}>Tillbaka</button>
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link to="/cart">
                                        <button className="ui green button" onClick={() => closeModal()}>Till kundvagn</button>
                                    </Link>
                                </div>
                            </div>      
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const modalStyle: React.CSSProperties = {
    display: "inline-block",
    width: "50%",
    height: "50%",
    position: "fixed", 
    top: "calc(50% - 25%)", // half of width
    left: "calc(50% - 25%)" // half of height
}
