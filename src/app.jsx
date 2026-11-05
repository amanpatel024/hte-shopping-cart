
import { useState } from 'react';

import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import OrderSummary from './Components/OrderSummary';

function App() {

  const products = [
    { id: 'hte_96g', name: '96-Well Glass-Lined Plate', price: 45.50 },
    { id: 'hte_384p', name: '384-Well Polypropylene Plate', price: 22.00 },
    { id: 'hte_24d', name: '24-Well Deep Well Plate', price: 18.75 },
    { id: 'hte_1536c', name: '1536-Well COC Plate', price: 85.00 }
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div>
      <h1>HTE Plates Shopping Cart</h1>

      <ProductList
        products={products}
        onAddToCart={addToCart}
      />

      <Cart
        cart={cart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
      />

      <OrderSummary cart={cart} />
    </div>
  );
}

export default App;
