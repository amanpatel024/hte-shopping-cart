
function OrderSummary({ cart }) {

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Order Summary</h2>

      <p>Total Quantity: {totalQuantity}</p>

      <p>Final Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default OrderSummary;
