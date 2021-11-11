import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Product } from '../models/product';
import {ProductReview} from '../models/productReview';
import { ReviewForm } from './reviewForm';
import { ReviewList } from './reviewList';

export class ProductDetails extends React.Component {
        state = {
            displayProduct: new Product(
                1,
                "Jif Peanut Butter, 40 ounce",
                "7g of Protein per serving with no preservatives, artifical flavors or colors.",
                7.99,
                "https://johnlawrimore.com/smu/101.png",
                []
            )
        };

    addReview(review) {
        var reviews = this.state.displayProduct.reviews;
        reviews.push(review);
        this.setState({ reviews });
    }
    render(){
        return <>
            <nav>Breadcrumbs</nav>
            <Jumbotron>
                <h1>{this.state.displayProduct.name}</h1>
                <img src={this.state.displayProduct.imageUrl} />
                <Badge>{this.state.displayProduct.price}</Badge>
                <p>{this.state.displayProduct.description}</p>
            </Jumbotron>
            <ReviewList reviews={this.state.displayProduct.reviews} />
            <ReviewForm addReview={review => this.addReview(review)}/>
        </>;
    }
}