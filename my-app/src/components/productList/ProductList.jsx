import styles from "./ProductList.module.scss";
import Product from "../product/Product";
import {useState } from "react";

const ProductList = (props) => {
    const {list, changeLike, deleteProduct}=props;
    const [visibleCount, setVisibleCount] = useState(list.length || 3);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <div className={styles.container}>
            <div className={styles.productList}>
                {list.slice(0, visibleCount).map((item) => (
                            <div key={item.id} >
                                <Product product={item} deleteProduct={deleteProduct} changeLike={changeLike}/>
                            </div>
                        ))}
                       
            </div>
            {visibleCount < list.length && (
                <button onClick={handleShowMore} className={styles.more}>Еще</button>
            )} 
        </div>
        
    );
}
export default ProductList;