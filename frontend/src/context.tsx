import React, { Component } from 'react';
import {storeProducts, detailProduct } from './data';
const defaultValue: any = '';

const ProductContext = React.createContext(defaultValue);

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts: any[] = [];
        storeProducts.forEach( item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    };

    getItem = (id: number) => {
        const product = this.state.products.find((item: { id: number; }) => item.id === id)
        return product;
    };

    handleDetail = (id: number) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        });
    };

    addToCart = (id: number) => {
        let tempProducts: any[] = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {products: tempProducts, cart:[...this.state.cart, product]};
        }, () => {
            console.log(this.state)
        })

    }

    openModal = (id: number) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = (id: number) => {
        console.log('this is increment menthod')
    }

    decrement = (id: number) => {
        console.log('this is decrement menthod')
    }

    removeItem = (id: number) => {
        console.log('item remove method')
    }

    clearCart = () => {
        console.log('cart cleared')
    }

    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                <React.Fragment>
                {this.props.children}
                </React.Fragment>
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}