import {Container, Grid, Typography, TextField, Button} from "@mui/material";

const Register = () => {
  return (
    <Container maxWidth="lg" sx={{my: 10}}>
      <Typography variant="h3" fontWeight={500} sx={{textAlign: "center"}}>
        Crea tu Usuario
      </Typography>
      <Grid container sx={{justifyContent: "center"}}>
        <Grid item xs={12} md={6}>
          <form>
            <TextField
              fullWidth
              label="Nombre de Usuario"
              variant="outlined"
              sx={{mt: 3}}
              placeholder="Juan"
            />
            <TextField
              fullWidth
              label="Nombre"
              variant="outlined"
              sx={{mt: 3}}
              placeholder="Juan"
            />
            <TextField
              fullWidth
              label="Apellido"
              variant="outlined"
              sx={{mt: 3}}
              placeholder="González"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{mt: 3}}
              type="email"
              placeholder="myemail@mail.com"
            />
            <TextField
              fullWidth
              type="password"
              label="Contraseña"
              variant="outlined"
              sx={{mt: 3}}
            />
            <TextField
              fullWidth
              type="password"
              label="Repite tu contraseña"
              variant="outlined"
              sx={{mt: 3}}
            />
            <TextField
              fullWidth
              label="Domicilio"
              variant="outlined"
              sx={{mt: 3}}
              placeholder="Av. Siempre Viva 123"
            />
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              size="large"
              sx={{mt: 3}}
            >
              Crear Usuario
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Register;
