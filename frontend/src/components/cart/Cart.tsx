import React, { Component } from 'react';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return(
            <div className="section" style={outer}>
                <div className="ui container" style={{marginTop: "4em", marginBottom: "4em", textAlign: "center"}}>
                    <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return (
                            <React.Fragment>
                                    <div className="header" style={{marginTop: "5em" }}>
                                        <h1>Din kundvagn</h1>
                                    </div>
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
            </div>
        )
    }
}

const outer: React.CSSProperties = {
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)"
}