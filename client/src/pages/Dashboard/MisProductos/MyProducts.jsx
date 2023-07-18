import {
  Typography,
  Box,
  Button,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import UserArticles from "../../../components/Dashboard/userArticles";
import {AuthContext} from "../../../context/AuthContext";

const MyProducts = () => {
  const {token, logout} = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/productsByUser`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.status === 401) {
          throw new Error(
            "Tu token de sesión ha expirado, vuelve a iniciar sesión"
          );
        }
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        setOpen(true);
      }
    };
    getProducts();
  }, [token]);

  const handleClose = () => {
    setOpen(false);
    logout();
    navigate("/login");
  };

  const navigate = useNavigate();
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Sesión expirada
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Tu token de sesión ha expirado, vuelve a iniciar sesión, pulsa continuar para ir a la página de inicio de sesión.
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
      <Typography align="center" component="h1" variant="h3" sx={{mb: 3}}>
        Productos en venta
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
          Estos son tus productos en venta
        </Typography>
        <Typography sx={{fontSize: "16px"}} gutterBottom>
          Administra todos tus juegos y verifica su estado.
        </Typography>
      </Box>
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
          Artículos
        </Typography>
      </Box>
      {products.length === 0 ? (
        <Typography sx={{fontSize: "16px", mb: 3}} gutterBottom>
          No tienes productos en venta
        </Typography>
      ) : (
        products.map((product) => (
          <UserArticles
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
            stock={product.stock}
          />
        ))
      )}
      <Button
        variant="contained"
        sx={{display: "block", my: 3}}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Volver
      </Button>
    </>
  );
};
export default MyProducts;
