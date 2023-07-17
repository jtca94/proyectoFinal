import {Box, Grid, Typography, Button} from "@mui/material";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartCard = () => {
  const {cart, handleRemoveFromCart, handleAddToCart, handleClearItem} = useContext(CartContext);
  return (
    <>
      {cart.map((item) => (
        <Grid
          spacing={3}
          container
          // add DOM remove transition
          sx={{
            alignItems: "center",
            my: 3,
          }}
          key={item.id}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{display: "flex", justifyContent: "center"}}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: "250px",
                objectFit: "cover",
                borderRadius: "1rem",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{textAlign: {xs: "center", md: "left"}}}
            >
              {item.name}
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{textAlign: {xs: "center", md: "left"}}}
            >
              {item.category}
            </Typography>
          </Grid>
          <Grid
            sx={{display: "flex", flexDirection: "column"}}
            item
            xs={12}
            md={4}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {xs: "center", md: "space-evenly"},
                alignItems: "center",
                m: 3,
              }}
            >
              <Button
                onClick={() => {
                  handleRemoveFromCart(item);
                }}
                disabled={item.quantity === 1}
                variant="contained"
                size="small"
                color="error"
                sx={{borderRadius: "50%"}}
              >
                <RemoveIcon />
              </Button>
              <Typography variant="h5" fontWeight="bold" sx={{mx: 3}}>
                {item.quantity}
              </Typography>
              <Button
                onClick={() => {
                  handleAddToCart(item);
                }}
                disabled={item.quantity === item.stock}
                variant="contained"
                color="info"
                size="small"
                sx={{borderRadius: "50%"}}
              >
                <AddIcon />
              </Button>
            </Box>
            <Typography textAlign="center" variant="h5" fontWeight="bold">
              ${parseInt(item.price * item.quantity).toLocaleString("cl-CL")}
            </Typography>
            <Button
              variant="outlined"
              color="error"
              sx={{
                mt: 2,
                mx: "auto",
              }}
              onClick={() => {
                handleClearItem(item);
              }}
            >
              Eliminar
            </Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
export default CartCard;
