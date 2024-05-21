import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import Product from './pages/Product/Product';
import { useState } from 'react';
import Carts from './pages/Carts/Carts';

function App({ products }) {
  const [carts, setCarts] = useState([]);

  let allPrice = carts.reduce((acum, elem) => acum + elem.initprice, 0)
  // console.log(allPrice);

  // addToCard
  const addToCart = (item) => {
   
    let isBool = false;
    carts.forEach((el) => {
      if(el.id === item.id) {
        isBool = true;
        setCarts(carts.map((elem) => {
          if(elem.id === item.id) {
            return {
              ...elem,
              count : ++elem.count,
              initprice : elem.price * elem.count,
              
            }
          }else {
            return elem
          }
        }))
      }
    })

    if(!isBool) {
      setCarts((prev) => {
        return [...prev, item]
      })
    }
  }

  const changeCount = (item, count) => {
    setCarts(carts.map((el) => {
      if(el.id === item.id) {
        return {
          ...el,
          count : count,
          initprice : el.price * count
        }
      }else {
        return el
      }
    }))
  }
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Loyout carts={carts}/>}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products}  addToCart={ addToCart}/>} />
          <Route path='/carts' element={<Carts carts={carts} changeCount={changeCount} allPrice={allPrice}/> }/>
          <Route path='/products/:id' element={<Product products={products} /> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
