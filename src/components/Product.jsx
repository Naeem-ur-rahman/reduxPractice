import React from 'react';

const Product = (props) => {
    return (
        <div className='product-item'>
            <div className='image-container'>
                <img src={props.image} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <p>Rs. {props.price}/-</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;
