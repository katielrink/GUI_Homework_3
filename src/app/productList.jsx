import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import { ProductsRepository } from "../api/productRepository";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CartService} from '../services/cartService';
import { Button } from 'react-bootstrap'; 

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

    return <>
        <Link to={ `/` } className="navbar">Tasty Treats</Link>
        <ul className = "list">{
        products.map(product => <li key={product.id}>
            <Card class="col card h-20">
                <Card.Img className="list-img" src={product.imageUrl}/>
                <div className="card-body">
                    <Badge className="priceB badge-primary">{"$" + product.price}</Badge>
                    <h3>{product.name}</h3>
                    <Link to={ `products/${product.id}` } className="btn btn-product btn-sm btn-success mt-3">Product Details</Link>
                    <br/>
                    <Link to={ `cart` } >
                        <Button className="btn btn-cart btn-sm btn-success mt-3" onClick = {() => cartService.addToCart(product)}>Add To Cart</Button>
                    </Link>
                </div>
            </Card>
        </li>)
        }</ul>
    </>
}

