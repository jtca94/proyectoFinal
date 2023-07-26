import {
  Typography,
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import {useEffect, useState, useContext} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {useNavigate} from "react-router-dom";

const Shopping = () => {
  const [purchases, setPurchases] = useState([]);
  const [open, setOpen] = useState(false);
  const {token, logout} = useContext(AuthContext);
  //  fetch all orders
  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        if (!res.ok) {
          throw new Error(res.status);
        }
        const data = await res.json();
        setPurchases(data.orders);
      } catch (error) {
        console.log(error);
        if (error.message === "401") {
          setOpen(true);
        }
      }
    };
    response();
  }, [token]);
  //  handle close session
  const handleClose = () => {
    setOpen(false);
    logout();
    navigate("/login");
  };
  //  navigate
  const navigate = useNavigate();
  return (
    <>
      <Typography align="center" component="h1" variant="h3" sx={{mb: 3}}>
        Productos adquiridos
      </Typography>
      <Box
        sx={{
          mb: 3,
          textAlign: "center",
          border: "1px solid black",
          p: 2,
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{fontSize: "24px", color: "custom.purple"}}
        >
          Mis compras
        </Typography>
        <Typography sx={{fontSize: "16px"}} gutterBottom>
          Administra todas las compras realizadas y verifica su estado.
        </Typography>
      </Box>
      <Container maxWidth="false">
        <Typography variant="h5" sx={{mb: 3}}>
          Revisa el estado de tus compras
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {purchases.map((purchase) => (
            <Box
              key={purchase.id}
              sx={{
                width: {xs: "100%", sm: "30%"},
                border: "1px solid black",
                borderRadius: "10px",
                p: 2,
                mb: 3,
              }}
            >
              <Typography variant="h6" sx={{mb: 1}}>
                ID de compra: {purchase.id}
              </Typography>
              <Typography variant="body1" sx={{mb: 1}}>
                Artículos: {purchase.quantity}
              </Typography>
              {/* <Typography variant="body1" sx={{mb: 1}}>
                Precio: ${purchase.product.price}
              </Typography>*/}
              <Typography variant="body1" sx={{mb: 1, color: "warning.main"}}>
                Estado: Pendiente
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      <Button
        variant="contained"
        sx={{display: "block", mb: 3}}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Volver
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Sesión expirada</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tu token de sesión ha expirado, vuelve a iniciar sesión, pulsa
            continuar para ir a la página de inicio de sesión.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            color="error"
            sx={{display: "block", m: 3, color: "white"}}
          >
            ir a Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Shopping;
