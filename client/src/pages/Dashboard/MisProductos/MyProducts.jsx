import {Typography, Box, Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

const MyProducts = () => {
  const navigate = useNavigate();
  return (
    <>
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
        <Grid  container sx={{mt: 3}}>
          <Grid item xs={12} sm={3}>
            <Box
              component="img"
              src="https://plus.unsplash.com/premium_photo-1687991219913-6b74a90a834d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              sx={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              alt="imagen de producto"
            />
          </Grid>
          <Grid container item sx={{display: "flex"}} xs={12} sm={6}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: {xs: "center", sm: "normal"},
              }}
            >
              <Typography
                variant="h3"
                sx={{fontSize: "24px", color: "custom.purple"}}
              >
                Nombre del producto
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: {xs: "center", sm: "normal"},
              }}
            >
              <Typography variant="body1">Categoría</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: {xs: "center", sm: "normal"},
              }}
            >
              <Typography variant="body1">Stock</Typography>
            </Grid>
          </Grid>
          <Grid container item sx={{display: "flex"}} xs={12} sm={3}>
            <Grid
              item
              xs={6}
              sm={12}
              sx={{display: "flex", justifyContent: "center"}}
            >
              <Typography sx={{fontSize: "24px"}} variant="h5">
                Precio
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12} sx={{display: "block", me: "auto"}}>
              <Button variant="outlined" size="small" color="error">
                Eliminar
              </Button>
            </Grid>
          </Grid>
          <hr style={{width: "90%", align: "center"}} />
        </Grid>
      </Box>

      <Button
        variant="contained"
        sx={{display: "block", mb: 3}}
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
