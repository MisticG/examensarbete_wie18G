import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
    render() {
        return(
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } =
                    value.detailProduct;
                    return (
                        <div style={{marginTop: "5em", textAlign: "center"}} className="ui container">
                            <h1>{title}</h1>
                            <div>
                                <Link to="/products">
                                    <button className="ui green button">Back to products</button>
                                </Link>
                            </div>
                            <div>
                            
                            <button className="ui blue button" disabled={inCart? true : false}
                            onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                                }}>Add to cart</button>
                            
                            </div>
                            <img className="ui image" src={img} alt="product"/>
                            <h2>Price: {price}</h2>
                            <h2> Description: {info}</h2>
                            <h2>Made by: {company}</h2>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}