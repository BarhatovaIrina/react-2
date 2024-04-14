import styles from "./ProductList.module.scss";
import data from '../../data.json';
import Product from "../product/Product";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [products,setProducts]=useState([]);
    const [visibleCount, setVisibleCount] = useState(2);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 2);
    };
    useEffect (()=> {
        setProducts(data);
    },[])

    const changeLike = (id) => {
        const updatedProducts = products.map(item => {
            if (item.id === id) {
                return { ...item, like: !item.like };
            }
            return item;
        });
        setProducts(updatedProducts);
        // console.log(products);
    }
    const deleteProduct = (id)=> {
        const updatedProducts = products.filter(item => item.id !== id);
        setProducts(updatedProducts);
        // console.log('del', id);
    }

    return (
        <div className={styles.container}>
        <h2>List</h2>

        <div className={styles.productList}>
        {products.slice(0, visibleCount).map((item) => (
                    // <div key={item.id} onClick={() => changeLike(item.id)}>
                    <div key={item.id} >
                        <Product product={item} deleteProduct={deleteProduct} changeLike={changeLike}/>
                    </div>
                ))}
        
        </div>
        {visibleCount < products.length && (
            <button onClick={handleShowMore} className={styles.more}>Еще</button>
        )}
        </div>
        
    );
}
export default ProductList;