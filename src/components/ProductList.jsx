function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h2>Product Catalog</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>Price: ${product.price.toFixed(2)}</p>

          <button onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;