import React from 'react';
import { ROUTES } from './routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {ProductList} from './app/productList'
import './app.css';

export function App() {
    return (
        <>
            <ProductList></ProductList>
        </>
    );
}