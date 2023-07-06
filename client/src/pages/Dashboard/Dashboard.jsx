import {Button, Container, Grid, Typography} from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{my: 10}}>
      <Typography component="h1" variant="h3" sx={{mb: 3}}>
        Dashboard
      </Typography>
      <Grid
        container
        sx={{backgroundColor: "lightgray", borderRadius: "15px", p: 3}}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{backgroundColor: "#fff", textAlign: "center", borderRadius: "15px"}}
        >
          <Button
            color="secondary"
            variant="contained"
            sx={{m: 2, width: "80%"}}
          >
            Mis Productos
          </Button>
          <Button
            color="secondary"
            variant="contained"
            sx={{m: 2, width: "80%"}}
          >
            Mis Compras
          </Button>
          <Button
            color="secondary"
            variant="contained"
            sx={{m: 2, width: "80%"}}
          >
            Vender Producto
          </Button>
        </Grid>
        <Grid item xs={12} md={8}>
          <Container>
            <Typography
              component="h2"
              variant="h4"
              sx={{mb: 3, textAlign: "center"}}
            >
              Mis Productos
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
