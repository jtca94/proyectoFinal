/* MUI */
import {Grid, Container, Box, Button, Typography} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {CartContext} from "../../context/CartContext";
import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const DetailProductId = (props) => {
  const {handleAddToCart} = useContext(CartContext);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{mt: 15, mb: 15}}>
      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={12} sm={12} md={6} sx={{my: "auto"}}>
          <Box
            component="img"
            src={props.image}
            alt={props.name}
            sx={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container display="flex" flexDirection="column" gap={6}>
            {/* TÍTULO DE ARTÍCULO */}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{textTransform: "uppercase"}}
            >
              {props.name}
            </Typography>
            {/* CATEGORÍA DE ARTÍCULO */}
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                textTransform="uppercase"
                borderRadius={5}
                display="inline"
                justifyContent="center"
                sx={{
                  paddingInline: "1rem",
                  paddingBlock: "0.5rem",
                  backgroundColor: "#f50057",
                  color: "#fff",
                  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                }}
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
                $
                {parseInt(props.price).toLocaleString("de-De", {
                  style: "currency",
                  currency: "CLP",
                })}
              </Typography>
            </Box>
            {/* BOTONES VOLVER Y COMPRA */}
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={6}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    borderRadius: 5,
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                  onClick={() => navigate(-1)}
                >
                  Volver
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color="secondary"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => {
                    user
                      ? (handleAddToCart(props), props.setOpen(true))
                      : navigate("/login");
                  }}
                  sx={{
                    borderRadius: 5,
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                >
                  AGREGAR AL CARRITO
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
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  setOpen: PropTypes.func.isRequired,
};
