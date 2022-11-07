import type { Component } from "solid-js";
import {createSignal} from "solid-js";

import styles from "./Product.module.css"

const Hello: Component = ({ key, data, onClickHandler }) => {
  const [inCart, setInCart] = createSignal(false);
  
  return(
    <div class={styles.Card}>
      <h2 class={styles.Name}>{data.name}</h2>
      <p class={styles.Price}>{data.price}</p>
      <Show when={inCart()}>In cart</Show>
      <button class={styles.Cart} onClick={() => {
      setInCart(true)
      onClickHandler(data)
      }}>Add to cart</button>
    </div>
  );
};

export default Hello;