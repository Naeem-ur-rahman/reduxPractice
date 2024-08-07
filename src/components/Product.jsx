import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
const Product = (props) => {
    const dispatch = useDispatch()
    return (
        <div className='product-item'>
            <div className='image-container'>
                <img src={props.image} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <p>Rs. {props.price}/-</p>
            <button onClick={(e) => dispatch(addItem({ name: props.name, price: props.price }))}>Add to Cart</button>
        </div>
    );
}

export default Product;
