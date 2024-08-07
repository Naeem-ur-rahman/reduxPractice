import './App.css';
import Cart from './components/Cart';
import Product from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div className="App">
      <Cart />
      <div className='product-container'>
        {products.map(product => <Product {...product} />)}
      </div>
    </div>
  );
}

export default App;
