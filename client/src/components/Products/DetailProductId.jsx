/* MUI */
import { Grid } from "@mui/material"
import Button from "@mui/material/Button";

import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";

import Typography from "@mui/material/Typography";

const DetailProductId = (props) => {

const objectFiltered = props.addToCart
const { cart, setCart} = useUserContext()
const handleAddToCart = () => {
    
    const keyCartLS = localStorage.getItem('CartLS');

    if (keyCartLS === null){
        localStorage.setItem("CartLS", JSON.stringify([objectFiltered]))
        const CartLSSet = JSON.parse(localStorage.getItem("CartLS"))
        setCart(CartLSSet)
    } else{
        const CartLSExist = JSON.parse(localStorage.getItem("CartLS"))
        const copiaCart=[...CartLSExist]
        copiaCart.push(objectFiltered)
        localStorage.setItem("CartLS", JSON.stringify(copiaCart))
        setCart(copiaCart)
    }
}

useEffect(() => {
    }, [cart]);

return (
<>
<Grid 
container
justifyContent='center'
padding={2}
mb={5}>
    <Grid
    item
    xs={10} sm={10} md={10} lg={6}>
        <Grid
        container
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
            <img 
            src={props.imgURL} 
            alt=""
            height="500px"/>
        </Grid>
    </Grid>
    <Grid 
    item
    xs={10} sm={10} md={5} lg={6}>
        <Grid
        container
        display="flex"
        flexDirection="column"
        gap={6}>

            {/* TÍTULO DE ARTÍCULO */}

            <Typography 
            variant="h4" 
            fontWeight="bold">
                {props.title}
            </Typography>

            {/* CATEGORÍA DE ARTÍCULO */}

            <Typography 
            variant="h6" 
            fontWeight="bold">
                {props.category}
            </Typography>

            {/* DESCRIPCION DE ARTÍCULO */}

            <Typography 
            variant="subtitle2" 
            fontWeight="light">
                {props.description}
            </Typography>

            {/* PRECIO DE ARTÍCULO */}

            <Typography 
            variant="h3" 
            fontWeight="">
                {props.price}
            </Typography>

            {/* BOTONES CONTACTO Y COMPRA */}

            <Grid
            container
            display='flex'
            justifyContent='center'>
                <Grid
                item
                xs={4}>
                    <Button
                    variant="contained"
                    style={{ borderRadius: '3rem', fontSize: '1.2rem', paddingInline: '1.5rem', paddingBlock: '1rem' }}>
                        CONTACTO
                    </Button>
                </Grid>
                <Grid
                item
                xs={4}>
                    <Button
                    variant="contained"
                    onClick={handleAddToCart}
                    style={{ borderRadius: '3rem', fontSize: '1.2rem', paddingInline: '1.5rem', paddingBlock: '1rem' }}>
                        AGREGAR AL CARRITO
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
</Grid>
</>
)
}

export default DetailProductId