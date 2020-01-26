import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import ColumnRight from './ColumnRight';
import Footer from './Footer';

export default class ProductDetails extends Component {
    render() {
        return(
            <ProductConsumer>
                {value => {
                    const { _id, img, info, title, inCart } = 
                    value.detailProduct;
                    return (
                        <div>
                        <div className="section" style={outer}>
                            <div className="ui container" style={{marginTop: "4em", marginBottom: "4em", textAlign: "center"}}>
                                <ColumnRight 
                                headerText={title}
                                image={img}
                                text={info}
                                altText='produktbild'
                                />
                            </div>
                            <div className="ui stackable two column grid container">
                                <div className="column">
                                    <Link to="/products">
                                        <button className="ui orange button">Tillbaka</button>
                                    </Link>
                                </div>
                                <div className="column">
                                    <button className="ui green button" disabled={inCart? true : false}
                                    onClick={() => {
                                        value.addToCart(_id);
                                        value.openModal(_id);
                                    }}>Lägg till i kundvagn</button>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const outer: React.CSSProperties = {
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)"
}