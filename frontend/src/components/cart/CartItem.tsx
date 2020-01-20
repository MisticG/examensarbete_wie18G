import React from 'react';

export default function CartItem({item, value}: {item: any, value:any}) {
    //const { id, title, img, price, total, count } = item;
    const { id, img, title, count, total, price } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="ui fluid container" style={{marginTop: "2em"}}>
            <div className="ui equal width centered column grid"style={{margin: "auto"}}>
                <div className="column">
                    <img src={img} className="ui image" alt="product"/>
                </div>
                <div className="column">
                    <h3>product: </h3> {title}
                </div>
                <div className="column"><h3>Price:</h3>{price}</div>
                <div className="column" style={{display: "flex"}}>
                    <button className="ui black button" style={{height: "40%"}} onClick={() => decrement(id)}>-</button>
                    <button className="ui black button" style={{height: "40%"}}>{count}</button>
                    <button className="ui black button" style={{height: "40%"}} onClick={() => increment(id)}>+</button>
                </div>
                <div className="column" onClick={() => {removeItem(id)}}><i style={{fontSize: "2em"}} className="trash alternate icon"></i></div>
                <div className="column"><h3>Item total : {total}</h3></div>
            </div>
        </div>
    )
}