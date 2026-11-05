
function Cart({ cart, onIncrease, onDecrease }) {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>

            <p>Price: ${item.price.toFixed(2)}</p>

            <p>Quantity: {item.quantity}</p>

            <p>
              Subtotal: $
              {(item.price * item.quantity).toFixed(2)}
            </p>

            <button onClick={() => onDecrease(item.id)}>
              -
            </button>

            <button onClick={() => onIncrease(item.id)}>
              +
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
