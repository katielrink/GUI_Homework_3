import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import { ProductsRepository } from "../api/productRepository";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CartService} from '../services/cartService';

export const ProductList = prop => {
    const [products, setProducts] = useState(undefined);
    const productRepository = new ProductsRepository();
    const cartService = new CartService();
    
    useEffect(() => {
        productRepository.getProducts().then(x => setProducts(x));
    }, []);


    if (!products) {
        return <div>Loading...</div>
    }

    return <ul className = "list">{
        products.map(product => <li key={product.id}>
            <Card>
                <Card.Img src={product.imageUrl}/>
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <Badge className="priceB badge-primary">{"$" + product.price}</Badge>
                    <Link to={ `products/${product.id}` } className="btn btn-sm btn-success mt-3">Product Details</Link>
                    <Link to={ `cart` } className="btn btn-sm btn-success mt-3">
                        <span onClick={cartService.addToCart(product)}>Add To Cart</span>
                     </Link>
                </div>
            </Card>
        </li>)
    }</ul>
}

