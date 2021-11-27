import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Product } from '../models/product';
import {ProductReview} from '../models/productReview';
import { ReviewForm } from './reviewForm';
import { ReviewList } from './reviewList';

export class ProductDetails extends React.Component {

    addReview(review) {
        var reviews = this.state.displayProduct.reviews;
        reviews.push(review);
        this.setState({ reviews });
    }

    render(){
        return <>
            <Jumbotron className="mainInfo">
                <img className="productImage" src={this.state.displayProduct.imageUrl} />
                <h1>{this.state.displayProduct.name}</h1>
                <Badge className="priceB badge-primary">{"$" + this.state.displayProduct.price}</Badge>
                <p className="description">{this.state.displayProduct.description}</p>
            </Jumbotron>
            <ReviewList reviews={this.state.displayProduct.reviews} />
            <ReviewForm addReview={review => this.addReview(review)}/>
        </>;
    }
}