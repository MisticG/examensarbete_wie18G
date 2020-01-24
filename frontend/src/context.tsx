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

    /*getProducts = () => {
        fetch('/posts')
        .then(res => res.json())
        .then(products => this.setState({products}, () => console.log('customers fetched..', products)))
    }*/

    setProducts = () => {
        let tempProducts: any[] = [];
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            res.forEach( (item: any) => {
                const singleItem = { ...item }
                console.log(singleItem)
                tempProducts = [...tempProducts, singleItem]
            })
            this.setState(() => {
                return { products: tempProducts } 
            })
        })
    };   
        
        /*let tempProducts: any[] = [];
        storeProducts.forEach( item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    };*/

    getItem = (_id: number) => {
        const product = this.state.products.find((item: { _id: number }) => item._id === _id)
        return product;
    };

    handleDetail = (_id: number) => {
        const product = this.getItem(_id);
        this.setState(() => {
            return {detailProduct: product}
        });
    };

    addToCart = (_id: number) => {
        let tempProducts: any[] = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(_id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {products: tempProducts, cart:[...this.state.cart, product]};
        }, () => {
            this.addTotals();
        })

    }

    openModal = (_id: number) => {
        const product = this.getItem(_id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = (_id: number) => {
        let tempCart: any = [...this.state.cart];
        const selectedProduct = tempCart.find((item: {_id: number}) => item._id === _id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
        })
    }

    decrement = (_id: number) => {
        let tempCart: any = [...this.state.cart];
        const selectedProduct = tempCart.find((item: {_id: number}) => item._id === _id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        if(product.count === 0) {
            this.removeItem(_id)
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals();
            })
        }
    }

    removeItem = (_id: number) => {
        let tempProducts: any[] = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter((item: {_id: number}) => item._id !== _id)
        const index = tempProducts.indexOf(this.getItem(_id))
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart:[...tempCart],
                products: [...tempProducts],
            }
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map((item: { total: number })  => (subTotal += item.total))
        const tempTax = subTotal * 0.25;
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
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
                
                {this.props.children}
               
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}