import { CartService } from '../services/cartService';
import React, { useState, useEffect } from 'react';

export const MyCart = props => {

        const cartService = new CartService();
        const cart = cartService.getCart();

        return <table className="table table-condensed table-striped">
        <thead>
            <tr>
                <th>Quantity</th>
                <th>Product</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.items.map((cartItem) => <tr key={cartItem.product.name}>
                    <td>{ cartItem.quantity}</td>
                    <td>{ cartItem.product.name }</td>
                    <td>{ cartItem.product.price }</td>
                </tr>)
            }
        </tbody>
    </table>
}