import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import Product from './pages/Product/Product';
import { useState } from 'react';
import Carts from './pages/Carts/Carts';
import {createPortal} from 'react-dom';

function Modal({children}){
  return (
    <div>
     {
      createPortal(children, document.getElementById('portal'))
     }
    </div>
  )
}

function App({ products }) {
  const [carts, setCarts] = useState([]);
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);


  console.log(orderData);
  const ModalOpen = () => setOpen(true)
  const ModalClose = () => setOpen(false)

  const orderFormApp = (data) => {
    // console.log(data);
    setOrderData((prev) => {
      return [{...data}]
    })
  }
  let allPrice = carts.reduce((acum, elem) => acum + elem.initprice, 0)
 

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
      {
        open &&  <Modal>
        <div className='modal'>
          <div className='modal-content'>
            <button onClick={ModalClose}>X</button>
            {
              orderData.map((el) => {
                return <div>
                    <h1>{el.name}</h1>
                    <b>{allPrice}</b>
                  </div>
              })
            }
          </div>
        </div>
      </Modal>
      }
     
      <Routes>
        <Route path='/' element={<Loyout carts={carts}/>}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products}  addToCart={ addToCart}/>} />
          <Route path='/carts' element={<Carts carts={carts} changeCount={changeCount} allPrice={allPrice} ModalOpen={ModalOpen} orderFormApp={orderFormApp}/> }/>
          <Route path='/products/:id' element={<Product products={products} /> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
