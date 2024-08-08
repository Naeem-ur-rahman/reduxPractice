import React from 'react';
import Cart from '../components/Cart';
import Product from '../components/Product';
import { products } from '../data/products';

const Home = () => {
    return (
        <>
            <Cart />
            <div className='product-container'>
                {products.map(product => <Product {...product} />)}
            </div>
        </>

    );
}

export default Home;
