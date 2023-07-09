import {
  Typography,
  Box,
  Button,
  Grid,
  TextField,
  Container,
} from "@mui/material";
import {InputAdornment} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Sells = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography align="center" component="h1" variant="h3" sx={{mb: 3}}>
        Sube un Artículo
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
          Vende el videojuego que ya no usas
        </Typography>
        <Typography sx={{fontSize: "16px"}} gutterBottom>
          Llena el formulario con sus datos y sube tu artículo a la venta.
        </Typography>
      </Box>
      <Container
        maxWidth="false"
        sx={{
          py: 3,
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      >
        <form>
          <Grid container spacing={2} sx={{mb: 3}}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Nombre del juego"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="number"
                id="outlined-basic"
                label="Precio"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Categoría"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="URL Imagen de referencia"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="number"
                id="outlined-basic"
                label="Stock"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Descripción"
                variant="outlined"
                multiline
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Volver
          </Button>
          <Button variant="contained" color="success" sx={{ml: 2}}>
            Publicar artículo
          </Button>
        </form>
      </Container>
    </>
  );
};
export default Sells;
