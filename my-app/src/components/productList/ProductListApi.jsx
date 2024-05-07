import { useEffect, useState } from "react";
import styles from "./ProductList.module.scss";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActions } from "@mui/material";
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ProductListApi = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] =useState(false);
    const [open, setOpen] = useState(false);
    const [textFilter, setTextFilter]=useState('');
    const [productsFiltered, setProductsFiltered]=useState([]);
    const [textModal, setTextModal]=useState('');
    const handleOpen = (text) => {
        setTextModal(text);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setTextModal('');
    }
    useEffect(()=> {
        console.log(textFilter);
        if (textFilter !== '') {
                    const filteredProducts = products.filter(item => item.title.toLowerCase().includes(textFilter.toLowerCase()));
                    setProductsFiltered(filteredProducts);
                } else {
                    setProductsFiltered(products);
                }
        // console.log(productsFiltered)
    },[textFilter])
    
    useEffect (()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((json) => 
                {
                    setProducts(json);
                    setLoaded(true);
                });
    },[])
    
    return (
    <>
        {!loaded && <Box  alignItems="center">
                <CircularProgress></CircularProgress>
            </Box>
        }

        <h1>Data from API </h1>
        <div className={styles.container}>
            <Box component="form"
                sx={{  '& > :not(style)': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off" >
                <TextField id="standard-basic" label="Filter" variant="standard" 
                    onChange={(event) => {
                        setTextFilter(event.target.value);
                  }} />
            </Box>
            <div className={styles.productList}>
               { textFilter==='' ?
                products.map((item) => (
                            <Card key={item.id} sx={{ width: 300 }}>
                                <CardContent >
                                    <Typography variant="h4" component="div"  > {item.title}</Typography>
                                    <Typography variant="body2" sx={{ fontSize: 16 }}color="text.secondary"  >{item.price}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={()=>{handleOpen(item.description)}}>View</Button>
                                    <Button size="small">Like</Button>
                                </CardActions>
                            </Card>
                        )):
                    productsFiltered.map((item) => (
                            <Card key={item.id} sx={{ width: 300 }}>
                                <CardContent >
                                    <Typography variant="h4" component="div"  > {item.title}</Typography>
                                    <Typography variant="body2" sx={{ fontSize: 16 }}color="text.secondary"  >{item.price}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={()=>{handleOpen(item.description)}}>View</Button>
                                    <Button size="small">Like</Button>
                                </CardActions>
                            </Card>
                        ))
                    }
            </div>
        </div>
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {textModal}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
    </div>
    </>);
}
export default ProductListApi;

{/* <h1>Data from API </h1>
        <div className={styles.container}>
            <div className={styles.productList}>
                {products.map((item) => (
                            <div key={item.id} >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
            </div>
        </div> */}