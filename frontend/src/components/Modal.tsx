import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return(
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                        <div id="modal" className="ui modal" style={modalStyle}>
                            <div className="header">{title}</div>
                            <div className="image content">
                                <img src={img} className="image"/>
                                <div className="description">
                                    <p>Pris: {price}Kr</p>
                                    <h2>Item added to cart</h2>
                                    <Link to="/products">
                                        <button className="ui blue button" onClick={() => closeModal()}>Continue shopping</button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="ui blue button" onClick={() => closeModal()}>Go to Cart</button>
                                    </Link>
                                </div>
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
