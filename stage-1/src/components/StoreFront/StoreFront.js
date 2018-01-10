import React, { Component } from 'react';
import axios from 'axios';
import './StoreFront.css';

class StoreFront extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://practiceapi.devmountain.com/products/")
            .then((response) => {
                this.setState({
                    products: response
                })
            })
    }

    render() {
        let { products } = this.state
        let productDisplay = Object.keys(products).map((e, index) => {
            return (
                <div className="product-container" key={index}>
                    <h2>{e.title}</h2>
                    <img src={e.image} alt="" />
                    <h2>{e.desc}</h2>
                    <h3>{"$" + e.price + ".00"}</h3>
                    <button onClick={() => this.props.addToShoppingCart(e)}>Purchase!</button>
                </div>
            )
        })
        return (
            <div className="storefront-container">
                {productDisplay}
            </div>
        )
    }
}

export default StoreFront;