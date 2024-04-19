import styles from "./Product.module.scss";

const Product = (props) => {
    const {product, deleteProduct, changeLike }=props;

    const handleDelete = (id) => {
        deleteProduct(id);
    }
    const handleChangeLike=(id) => {
        changeLike(id);
    }
    
    return (
        <div className={`${styles.product} ${product.like ? styles.like : styles.dislike}`}>
            <p>{product.title}</p>
            <p className={styles.price__main}>{product.price}</p> 
            <p>{product.discount}</p>
            <p>{product.like}</p>
            <button onClick={()=>handleChangeLike(product.id)}>{product.like? 'dislike': 'like'}</button>

            <button onClick={()=>handleDelete(product.id)}>Удалить</button>
        </div>
    );
}
export default Product;