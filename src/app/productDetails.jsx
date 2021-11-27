import '../index.css'
import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { Product } from '../models/product';
import {ProductReview} from '../models/productReview';
import { ReviewForm } from './reviewForm';
import { ReviewList } from './reviewList';
import { ProductsRepository } from "../api/productRepository";
import { useParams } from "react-router";
import { CartService} from '../services/cartService';

export const ProductDetails = prop => {

    const productRepository = new ProductsRepository();
    const [product, setProduct] = useState(undefined);
    const params = useParams();
    const id = params.productId;
    const cartService = new CartService();

    useEffect(() => {
        productRepository.getProduct(id).then(x => setProduct(x));
    }, []);


    let  addReview = review => {
        productRepository.addReview(id, review);
    }

    if (!product) {
        return <div>Loading...</div>
    }

    return <>
        <Jumbotron className="mainInfo">
            <img className="productImage" src={product.imageUrl} />
            <h1>{product.name}</h1>
            <Badge className="priceB badge-primary">{"$" + product.price}</Badge>
            <p className="description">{product.description}</p>
        </Jumbotron>
        <ReviewList reviews={product.reviews} />
        <ReviewForm addReview={review => addReview(review)}/>
    </>
}