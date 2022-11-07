import type { Component } from 'solid-js';
import {createSignal} from "solid-js"
import Product from './Product';
import { products } from "../../../products.json";

import styles from './Home.module.css';

const App: Component = () => {
  const [cart, setCart] = createSignal([]);

  const AddToCart = function(product){
    let newCart = [...cart()];
    newCart.push(product);
    console.log(newCart);
    setCart(newCart);
  };
  
  
  return (
    <div class={styles.App}>
      <div class={styles.ProductCard}>
        {products.map(item => 
        <Product key={item.id} data={item} onClickHandler={AddToCart}/>)}
      </div>
    </div>
  );
};

export default App;