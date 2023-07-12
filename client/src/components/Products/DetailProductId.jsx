/* MUI */
import {Grid, Container, Box} from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useUserContext} from "../../context/UserContext";
import {theme} from "../../main";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const DetailProductId = (props) => {
  const objectFiltered = props.addToCart;
  const {setCart} = useUserContext();
  const handleAddToCart = () => {
    const keyCartLS = localStorage.getItem("CartLS");
    if (keyCartLS === null) {
      localStorage.setItem("CartLS", JSON.stringify([objectFiltered]));
      const CartLSSet = JSON.parse(localStorage.getItem("CartLS"));
      setCart(CartLSSet);
    } else {
      const CartLSExist = JSON.parse(localStorage.getItem("CartLS"));
      const copiaCart = [...CartLSExist];
      copiaCart.push(objectFiltered);
      localStorage.setItem("CartLS", JSON.stringify(copiaCart));
      setCart(copiaCart);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" paddingY={10}>
        <Grid item xs={12} sm={12} md={10} lg={6}>
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <img src={props.imgURL} alt="" height="500px" />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={6}>
          <Grid container display="flex" flexDirection="column" gap={6}>
            {/* TÍTULO DE ARTÍCULO */}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{textTransform: "uppercase"}}
            >
              {props.title}
            </Typography>
            {/* CATEGORÍA DE ARTÍCULO */}
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                textTransform="uppercase"
                style={{backgroundColor: theme.palette.secondary.main}}
                borderRadius={5}
                display="inline"
                justifyContent="center"
                padding={1}
              >
                {props.category}
              </Typography>
            </Box>
            {/* DESCRIPCION DE ARTÍCULO */}
            <Typography
              variant="subtitle2"
              fontWeight="light"
              align="justify"
              sx={{textTransform: "uppercase"}}
            >
              {props.description}
            </Typography>
            {/* PRECIO DE ARTÍCULO */}
            <Box justifyContent="end">
              <Typography variant="h3" fontWeight="bold">
                {props.price}
              </Typography>
            </Box>
            {/* BOTONES CONTACTO Y COMPRA */}
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Button
                  fullWidth
                  variant="contained"
                  style={{
                    borderRadius: "3rem",
                    fontSize: "1.2rem",
                    paddingInline: "1.5rem",
                    paddingBlock: "1rem",
                  }}
                >
                  CONTACTO
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleAddToCart}
                  sx={{whiteSpace: "nowrap"}}
                  color="secondary"
                  style={{
                    borderRadius: "3rem",
                    fontSize: "1.2rem",
                    paddingInline: "1.5rem",
                    paddingBlock: "1rem",
                  }}
                >
                  AGREGAR AL CARRITO <ShoppingCartIcon></ShoppingCartIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailProductId;

DetailProductId.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired,
    addToCart: PropTypes.object.isRequired,
}

