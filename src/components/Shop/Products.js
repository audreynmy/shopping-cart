import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import PRODUCT_DATA from "../../productdata";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCT_DATA.map((item) => (
          <ProductItem
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
