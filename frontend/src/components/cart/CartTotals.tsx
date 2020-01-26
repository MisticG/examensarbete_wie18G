import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function cartTotals({value}: {value:any}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart } = value;

    return (
    <React.Fragment>
        <div className="ui container" style={{marginTop: "2em"}}>
            <div className="ui equal width centered row grid"style={{margin: "auto"}}>
                <div className="row">
                    <Link to="/products">
                        <button className="ui red button" onClick={() => clearCart()}>Töm kundvagnen</button>
                    </Link>
                </div>
                <div className="row"><h3>Summa: {cartSubTotal} Kr</h3></div>
                <div className="row"><h3>Varav moms: {cartTax} Kr</h3></div>
                <div className="row"><h3>Total summa: {cartTotal} Kr</h3></div>
                <PayPalButton total={cartTotal} clearCart={clearCart} />
            </div>
        
        </div>
    </React.Fragment>
    )
}