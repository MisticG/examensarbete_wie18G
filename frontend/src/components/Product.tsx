import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

interface Props {
    
    id: number,
    img: string,
    title: string,
    price: number,
    inCart: boolean
    
}

export default class Product extends Component<Props,{}> {
    render() {
        const { id, img, title, price, inCart} = this.props

        //Styla cards!
        return (
            <ProductConsumer>
                {value => (
            <div className="ui link cards">
                    
                <div>
                    <div className="ui image" onClick={() => { value.handleDetail(id)}}>
                    <Link to="/details">
                        <img src={img} alt="product" />
                    </Link>
                    </div>
                    <div className="content">
                        <div className="header">
                            {title}
                        </div>
                        <div className="extra content">
                            <h3>Price: {price}</h3>
                            <button className="ui green button" disabled={inCart? true : false} 
                            onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                                }}>Add to Cart</button>
                        {inCart? (<p className="ui disabled">{' '}Product in Cart</p>) : (<i className="cart plus icon"/>)}
                        </div>
                    </div>
                    

                </div>
                
            </div>
            )}
            </ProductConsumer>
        )
    }
}