import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6.15,
    description: "This is the first product - amazing!",
    title: "Test Product 1",
  },
  {
    id: "p2",
    price: 9,
    description: "This is the second product - amazing!",
    title: "Test Product 2",
  },
  {
    id: "p3",
    price: 25.53,
    description: "This is the third product - amazing!",
    title: "Test Product 3",
  },
  {
    id: "p4",
    price: 56.78,
    description: "This is the fourth product - amazing!",
    title: "Test Product 4",
  },
];

const Products = (props) => {
  const productsList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      title={product.title}
      price={product.price}
      id={product.id}
      description={product.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsList}</ul>
    </section>
  );
};

export default Products;
