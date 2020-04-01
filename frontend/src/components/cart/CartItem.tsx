import React from 'react';

export default function CartItem({item, value}: {item: any, value:any}) {
    //const { _id, title, img, price, total, count } = item;
    const { _id, img, title, count, total } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="ui fluid container" style={{marginTop: "2em"}}>
            <div className="ui stackable five column grid"style={{margin: "auto", backgroundColor: "#ccb8b8", borderRadius: "5px 5px 5px 5px"}}>
                <div className="column">
                    <img src={img} className="ui image" alt="product"/>
                </div>
                <div className="column">
                    <h3><b>{title}</b></h3>
                </div>
                <div className="column">
                    <div className="ui stackable three column grid" style={{justifyContent: "center"}}>
                        <h3 style={{marginTop: "1.5em"}}><span className="column" onClick={() => decrement(_id)}><strong style={{fontSize: "1em", cursor: 'pointer'}}>-</strong></span></h3>
                        <h3><span className="column">{count}</span></h3>
                        <h3><span className="column" onClick={() => increment(_id)}><strong style={{fontSize: "1em", cursor: 'pointer'}}>+</strong></span></h3>
                    </div>
                </div>
                <div className="column" onClick={() => {removeItem(_id)}}><i style={{fontSize: "1.5em"}} className="trash alternate icon"></i></div>
                <div className="column"><h3>{total}Kr</h3></div>
            </div>
        </div>
    )
}