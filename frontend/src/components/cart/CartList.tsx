import React from 'react';
import CartItem from './CartItem';

export default function CartList({value} : {value:any}) {
    const { cart } = value
    return (
        <div>
            {cart.map((item: { id:number }) => {
                return <CartItem key={item.id} item={item} value={value} />;
            } )}
            
        </div>
    )
}