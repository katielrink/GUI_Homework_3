import React from 'react'
import { product } from '../models/product';
import {productReview} from '../models/productReview';
import { reviewForm } from './reviewForm';
import { reviewList } from './reviewList';

export class productDetails extends React.Component {
    state = {
        product : new product (
            1,
            "Jif Peanut Butter, 40 ounce",
            "7g of Protein per serving with no preservatives, artifical flavors or colors.",
            7.99,
            "https://johnlawrimore.com/smu/101.png",
            []
       )
    };
    render(){
        return <>
        <div className="container">
            <nav></nav>
            <div className="product-content">
                <h1>{this.product.name}</h1>
                <img src={this.product.imageUrl}/>
                <h2>{this.product.price}</h2>
                <p>this.product.description</p>
            </div>
            <reviewList/>
            <reviewForm/>
        </div>
        </>
    }
}