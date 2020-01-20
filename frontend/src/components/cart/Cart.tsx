import React, { Component } from 'react';
import CartColumns from './CartColumn';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return(
            <div className="ui fluid container" style={{textAlign: "center"}}>
                <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length>0) {
                        return (
                           <React.Fragment>
                                <div className="header" style={{marginTop: "5em" }}>
                                    <h1>Kundvagn</h1>
                                </div>
                                <CartColumns/>
                                <CartList value={value} />
                                <CartTotals value={value} />
                            </React.Fragment>
                        )
                    } else {
                        return <EmptyCart />
                    }
                }}
                </ProductConsumer>
            </div>
        )
    }
}