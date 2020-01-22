import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

interface Props {
    
    _id: number,
    img: string,
    title: string,
    price: number,
    inCart: boolean
    
}

export default class Product extends Component<Props,{}> {
    render() {
        const { _id, img, title, price, inCart} = this.props

        //Styla cards!
        return (
            <ProductConsumer>
                {value => (
            
                    
                <div className="column">
                    <div className="ui image" onClick={() => { value.handleDetail(_id)}}>
                    <Link to="/details">
                        <img src={img} alt="product" />
                    </Link>
                    </div>
                    <div className="content">
                        <div className="header">
                            <h3>{title}</h3>
                        </div>
                        <div className="extra content">
                            <h3>Price: {price}</h3>
                            <button className="ui green button" disabled={inCart? true : false} 
                            onClick={() => {
                                value.addToCart(_id);
                                value.openModal(_id);
                                }}>Add to Cart</button>
                        {inCart? (<p className="ui disabled">{' '}Product in Cart</p>) : ('')}
                        </div>
                    </div>
                    

                </div>
                
            
            )}
            </ProductConsumer>
        )
    }
}