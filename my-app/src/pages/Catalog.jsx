import ProductList from "../components/productList/ProductList";

const Catalog = (props) => {
    const {products, changeLike, deleteProduct}=props;

    return (
        <>
        <h1>Catalog page</h1>
        {
            <ProductList list={products} changeLike={changeLike} deleteProduct={deleteProduct} />   
        }
        </>
    );
}
export default Catalog;