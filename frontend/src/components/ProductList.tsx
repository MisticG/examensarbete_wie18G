import React, { Component } from 'react';
import '../css/header.css';
import Footer from './Footer';
import {ProductConsumer } from '../context'
import Product from './Product';
import FadeIn from 'react-fade-in';

export default class Products extends Component <{}> {

    render() {
        return (
            <div>
                <div className="section" style={outer}>
                    <div className="ui container" style={{marginTop: "4em", marginBottom: "4em", textAlign: "center"}}>
                    <h1>Blommor</h1>
                    <h3 style={{marginBottom: "3em"}}>Här erbjuder vi det som finns online hos oss just nu!</h3>
                    <b><h3>(Obs! Endast testversion! Ej riktiga varor!)</h3></b>
                    <FadeIn delay={200} transitionDuration={1000}>
                    <div className="ui stackable three column grid">
                        <ProductConsumer>
                            {value => {
                                return value.products.map((products: { _id: number, img: string, title: string, price: number, inCart: boolean }) => {
                                    return <Product key={products._id}
                                    _id = {products._id}
                                    img={products.img}
                                    title={products.title}
                                    price={products.price}
                                    inCart={products.inCart}
                                      />
                                });
                            }}
                        </ProductConsumer>
                        </div>
                    </FadeIn>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const outer: React.CSSProperties = {
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)"
}