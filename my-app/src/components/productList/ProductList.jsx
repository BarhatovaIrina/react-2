import styles from "./ProductList.module.scss";
import data from '../../data.json';
import Product from "../product/Product";
const ProductList = () => {

    return (
        <div className={styles.productList}>
            <h2>List</h2>
            {data.map((item, index) => (
                <div key={index}>
                    <Product product={item} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}
export default ProductList;