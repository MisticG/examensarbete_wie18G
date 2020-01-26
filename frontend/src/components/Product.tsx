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
        const {_id, img, title, price, inCart} = this.props

        //Styla cards!
        return (
            <ProductConsumer>
                {value => (
                <div className="column" style={{marginBottom: "2em"}}>
                    <div className="ui image" onClick={() => { value.handleDetail(_id)}}>
                    <Link to="/details">
                        <img className="image "src={img} alt="product" />
                    </Link>
                    </div>
                    <div style={{marginTop:"1em"}}className="content">
                        <div className="header">
                            <h3><strong>{title}</strong></h3>
                        </div>
                        <div className="extra content">
                            <h3>{price} Kr</h3>
                            <button className="ui green button" disabled={inCart? true : false} 
                            onClick={() => {
                                value.addToCart(_id);
                                value.openModal(_id);
                                }}>Lägg till i kundvagn</button>
                        {inCart? (<p className="ui disabled">{' '}Produkten är tillagd</p>) : ('')}
                        </div>
                    </div>
                </div>
            )}
            </ProductConsumer>
        )
    }
}