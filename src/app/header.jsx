import '../index.css'
import React, { useState, useEffect } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Product } from '../models/product';
import {ProductReview} from '../models/productReview';
import { ReviewForm } from './reviewForm';
import { ReviewList } from './reviewList';
import { ProductsRepository } from "../api/productRepository";
import { useParams } from "react-router";
import { CartService} from '../services/cartService';

export const Header = props =>{

        return <div className="header">
            <Link to={ `/` } className="header">Store</Link>
        </div>
}