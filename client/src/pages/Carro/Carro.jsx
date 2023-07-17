import {Container, Typography, Box, Divider, Button} from "@mui/material";
import CartCard from "../../components/Cart/CartCard";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import cartImg from "../../images/cartImg.png";

const Carro = () => {
  const {cart, total} = useContext(CartContext);
  return (
    <Container maxWidth="lg" sx={{}}>
      <Typography
        variant="h3"
        fontStyle="italic"
        align="center"
        fontWeight={500}
        color="custom.blue"
        sx={{py: 3, textShadow: "0 0 10px rgba(0,0,0,0.5)"}}
      >
        Mi Compra
      </Typography>
      <Divider sx={{mb: 3}} />
      <Typography variant="h4">Aquí puedes editar tu compra</Typography>
      <Box
        sx={{
          borderRadius: "1rem",
          backgroundColor: "lightgrey",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          pb: 4,
          mb: 10,
          mt: 3,
        }}
      >
        {cart.length > 0 ? (
          <>
            <CartCard />
            <Divider sx={{mb: 3}} />
            <Typography
              color="custom.blue"
              variant="h4"
              sx={{
                textAlign: "center",
                mt: 6,
                width: "300px",
                mx: "auto",
                fontWeight: "bold",
                textShadow: "0 0 3px rgba(0,0,0,0.5)",
              }}
            >
              Total: ${parseInt(total).toLocaleString("cl-CL")}
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{
                display: "flex",
                mx: "auto",
                mt: 5,
                width: 300,
              }}
            >
              Finalizar Compra
            </Button>
          </>
        ) : (
          <>
            <Typography sx={{py: 3}} align="center" variant="h4">
              No hay productos en el carrito
            </Typography>
            <Box
              component="img"
              src={cartImg}
              alt="cartImg"
              sx={{
                display: "flex",
                mx: "auto",
                mb: 3,
                width: 300,
                objectFit: "contain",
                borderRadius: "1rem",
              }}
            />
          </>
        )}
      </Box>
    </Container>
  );
};
export default Carro;
