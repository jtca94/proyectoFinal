import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="lg" sx={{my: 20}}>
      <Typography variant="h3" fontWeight={500} sx={{textAlign: "center"}}>
        Inicia Sesión
      </Typography>
      <Grid container sx={{mt: 5, justifyContent: "center"}}>
        <Grid item xs={12} md={6}>
          <form>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="email@mail.com"
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="outlined"
              sx={{mt: 5}}
              placeholder="********"
            />
            <Typography variant="body1" sx={{mt: 3, textAlign: "center"}}>
              ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              sx={{mt: 3}}
              size="large"
            >
              Iniciar Sesión
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
