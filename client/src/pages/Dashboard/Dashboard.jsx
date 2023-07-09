import {Button, Container, Grid, Typography} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import InicioDash from "./Inicio/InicioDash";
import MyProducts from "./MisProductos/MyProducts";
import Shopping from "./Compras/Shopping";
import Sells from "./Vender/Sells";

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
          sx={{
            backgroundColor: "#fff",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            sx={{mb: 2, mt: 4, width: "80%"}}
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
            sx={{m: 2, mb: 4, width: "80%"}}
            onClick={() => navigate("sellprod")}
          >
            Vender Producto
          </Button>
        </Grid>
        <Grid item xs={12} md={8}>
          <Container sx={{ml: {xs: 0, md: 1.5}}}>
            <Routes>
              <Route path="/" element={<InicioDash />} />
              <Route path="/myprod" element={<MyProducts />} />
              <Route path="/mycart" element={<Shopping />} />
              <Route path="/sellprod" element={<Sells />} />
            </Routes>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
