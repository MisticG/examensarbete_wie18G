import React from 'react';
import CartItem from './CartItem';

export default function CartList({value} : {value:any}) {
    const { cart } = value
    return (
        <div>
            {cart.map((item: { _id:number }) => {
                return <CartItem key={item._id} item={item} value={value} />;
            } )}
            
        </div>
    )
}