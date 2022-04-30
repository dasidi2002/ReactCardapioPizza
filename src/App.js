import React from 'react';
import {BrowserRouter as Router}  from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data'
import Feature from './components/feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Pizzas' data={productData}/>
      <Feature/>
      <Products heading='Doces' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
