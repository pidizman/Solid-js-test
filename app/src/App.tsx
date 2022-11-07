import type { Component } from 'solid-js';
import { lazy } from "solid-js"
import { Routes, Route, A } from "@solidjs/router"

const Home = lazy(() => import("./components/Home.tsx"));
const Cart = lazy(() => import("./components/Cart.tsx"));

import styles from './App.module.css';

const App: Component = () => {
  return<>
    <nav>
      <A href="/">Home</A>
      <A href="/cart">Cart</A>
    </nav>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Routes>
    </>
};

export default App;