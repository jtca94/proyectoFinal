import {Button, Container, Grid, Typography} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import InicioDash from "./Inicio/InicioDash";

const Dashboard = () => {
  const navigate = useNavigate();
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
            onClick={() => navigate("myprod")}
          >
            Mis Productos
          </Button>
          <Button
            color="secondary"
            variant="contained"
            sx={{m: 2, width: "80%"}}
            onClick={() => navigate("mycart")}
          >
            Mis Compras
          </Button>
          <Button
            color="secondary"
            variant="contained"
            sx={{m: 2, width: "80%"}}
            onClick={() => navigate("sellprod")}
          >
            Vender Producto
          </Button>
        </Grid>
        <Grid item xs={12} md={8}>
          <Container>
            <Routes>
              <Route path="/" element={<InicioDash/>} />
              <Route path="/myprod" element={<h1>Mis Productos</h1>} />
              <Route path="/mycart" element={<h1>Mis Compras</h1>} />
              <Route path="/sellprod" element={<h1>Vender Producto</h1>} />
            </Routes>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
