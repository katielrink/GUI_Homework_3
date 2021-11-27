import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import { ProductsRepository } from "../api/productRepository";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const ProductList = prop => {
    const [products, setProducts] = useState(undefined);
    const productRepository = new ProductsRepository();
    
    useEffect(() => {
        productRepository.getProducts().then(x => setProducts(x));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    let onSelect = id => {
        
    }

    let onAddToCart = id => {
        
    }

    if (!products) {
        return <div>Loading...</div>
    }

    return <ul className = "list">{
        products.map(product => <li key={product.id}>
            <Card>
                <Card.Img src={product.imageUrl}/>
                <div class="card-body">
                    <h3>{product.name}</h3>
                    <Badge className="priceB badge-primary">{"$" + product.price}</Badge>
                    <button className="btn btn-primary btn-block" onClick={ () => onSelect({product.id}) }>More Details</button>
                </div>
            </Card>
        </li>)
    }</ul>
}

