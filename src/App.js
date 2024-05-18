import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import Product from './pages/Product/Product';

function App({ products }) {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products} />} />
          <Route path='/products/:id' element={<Product products={products} /> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
