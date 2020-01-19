import React, { Component } from 'react';
import '../css/header.css';
import Footer from './Footer';
import {ProductConsumer } from '../context'
import Product from './Product';

export default class Products extends Component <{}> {

    /*constructor(props: {}) {
        super(props)
        this.state = {
            products: [{
                _id: 0,
                title: '',
                description: ''
            }]
        }
    }

    componentDidMount() {
        fetch('/posts')
        .then(res => res.json())
        .then(products => this.setState({products} , () => console.log('customers fetched..', products)))
    }


    getProducts() {
        return (
            this.state.products.map( products =>
          <div key={products._id}>
                <h1>{products.title}</h1>
                <h2>{products.description}</h2>
            </div>
        ))
    }*/

    render() {
        return (
            <div>
                <div className="section" style={outer}>
                    <div className="ui container" style={{marginTop: "4em", marginBottom: "4em", textAlign: "center"}}>
                        <ProductConsumer>
                            
                            {value => {
                                return value.products.map((products: { id: number, img: string, title: string, price: number, inCart: boolean }) => {
                                    return <Product key={products.id}
                                    id = {products.id}
                                    img={products.img}
                                    title={products.title}
                                    price={products.price}
                                    inCart={products.inCart}
                                      />
                                    
                                });
                            }}
                            
                        </ProductConsumer>
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

/*import React, { Component } from 'react';
//import './App.css';
interface State {
    test: [{
        id: number,
        firstName: string,
        lastName: string
    }];
}

export default class Test extends Component <{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            test: [{
                id: 0,
                firstName: '',
                lastName: ''
            }]
        }
    }

    componentDidMount() {
        fetch('/api/test')
        .then(res => res.json())
        .then(test => this.setState({test}, () => console.log('customers fetched..', test)))
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                   {this.state.test.map(test =>
                        <li key={test.id}> {test.firstName} {test.lastName}</li>
                    )}
                </ul>
            </div>
        )
    }
}

*/
