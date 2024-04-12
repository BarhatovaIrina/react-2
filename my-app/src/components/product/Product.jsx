import styles from "./Product.module.scss";

const Product = (props) => {
    const {product}=props;

    return (
        <div className={styles.product}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.discount}</p>
        </div>
    );
}
export default Product;