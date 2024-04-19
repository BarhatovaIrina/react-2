import styles from "./ProductList.module.scss";
import data from '../../data.json';
import Product from "../product/Product";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [products,setProducts]=useState([]);

    const [visibleCount, setVisibleCount] = useState(3);


    const [counter, setCounter]=useState(0);

    const handleCounter = ()=> {
        setCounter(counter+1);
    }

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    useEffect(()=> {
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
    }
   
    // const deleteProduct = (id) =>{
    //     const updatedProducts = products.filter ((item)=> item.id!==id);
    //     setProducts(updatedProducts);
    // }

    const deleteProduct = (id)=>{
        const updatedProducts = products.filter((item)=> item.id!==id);
        setProducts(updatedProducts);
    }

    return (
        <div className={styles.container}>
        <h2>List</h2>

        <div className={styles.productList}>
        {products.slice(0, visibleCount).map((item) => (
                    <div key={item.id} >
                        <Product product={item} deleteProduct={deleteProduct} changeLike={changeLike}/>
                    </div>
                ))}
        
        </div>
        {visibleCount < products.length && (
            <button onClick={handleShowMore} className={styles.more}>Еще</button>
        )}

        {/* <button onClick={()=>{setCounter(counter+1)}}>click {counter}</button> */}
        
        <button onClick={handleCounter}>click {counter}</button>
        </div>
        
    );
}
export default ProductList;