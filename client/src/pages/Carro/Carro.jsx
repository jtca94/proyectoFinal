import {
  Container,
  Typography,
  Box,
  Divider,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CartCard from "../../components/Cart/CartCard";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import cartImg from "../../images/cartImg.png";
import { useNavigate } from "react-router-dom";

const Carro = () => {
  const { cart, setCart, total } =
    useContext(CartContext);
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSubmitToFetch = async (body) => {
    try {
      const data = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      if (data.ok !== true) {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hanbleSubmitOrders = () => {
    cart.forEach((product) => {
      const { id: productid, quantity } = product;
      const body = { userid: user, productid, quantity };
      handleSubmitToFetch(body);
    });
    setOpen(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <Container maxWidth="lg" sx={{}}>
      <Typography
        variant="h3"
        fontStyle="italic"
        align="center"
        fontWeight={500}
        color="custom.blue"
        sx={{ py: 3, textShadow: "0 0 10px rgba(0,0,0,0.5)" }}
      >
        Mi Compra
      </Typography>
      <Divider sx={{ mb: 3 }} />
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
            <Divider sx={{ mb: 3 }} />
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
              onClick={hanbleSubmitOrders}
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
            <Typography sx={{ py: 3 }} align="center" variant="h4">
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        size="large"
        sx={{ mt: 10 }}
      >
        <Box
          sx={{
            minWidth: "400px",
            maxWidth: "600px",
            background: "#000",
            borderRadius: "8px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{
              flex: 1,
              color: "black",
            }}
          >
            <Typography variant="h6" color="#4CAF50">
              ¡Compra realizada con éxito!
            </Typography>
            <Typography variant="body1" color="#4CAF50">
              ¡Gracias por tu compra! Hemos procesado tu pedido y pronto
              recibirás más información.
            </Typography>
          </Alert>
        </Box>
      </Snackbar>
    </Container>
  );
};
export default Carro;
