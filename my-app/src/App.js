import './App.css';
import Header from './components/header/Header.jsx';
import {Routes,
  Route,
  BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import { useEffect, useState } from "react";
import data from './data.json';
import Error from './pages/Error.jsx';
import ProductListApi from './components/productList/ProductListApi.jsx';
 
function App() {
  const [products,setProducts]=useState([]);

  useEffect(()=> {
    setProducts(data);
    console.log(products);
},[])

const changeLike = (id) => {
  const updatedProducts = products.map(item => {
      if (item.id === id) {
          return { ...item, like: !item.like };
      }
      return item;
  });
  setProducts(updatedProducts);
}


const deleteProduct = (id)=>{
  const updatedProducts = products.filter((item)=> item.id!==id);
  setProducts(updatedProducts);
}

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog products={products} changeLike={changeLike} deleteProduct={deleteProduct} />}></Route>
          <Route path="/about" element={<Home />}></Route>
          <Route path="/catalog_api" element={<ProductListApi />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>  

      </div>
    </Router>
  );
}

export default App;
