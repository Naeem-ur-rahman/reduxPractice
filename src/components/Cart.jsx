import React from 'react';
import { useSelector } from 'react-redux';
import { getItemsSelector } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const items = useSelector(getItemsSelector)
    const total = items.reduce((acc, v) => acc + v.price, 0)
    console.log("Items: ", items)
    return (
        <div className='cart-container'>
            <Link to="/fetch">
                <button style={{ marginRight: '200px' }}>API Fetch Page</button>
            </Link>
            <p>Total Items: {items.length} (Rs. {total})/-</p>
        </div>
    );
}

export default Cart;
