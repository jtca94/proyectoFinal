import {Box, Button, Container, Grid, Typography} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import InicioDash from "./Inicio/InicioDash";
import MyProducts from "./MisProductos/MyProducts";
import Shopping from "./Compras/Shopping";
import Sells from "./Vender/Sells";
import LogoutIcon from "@mui/icons-material/Logout";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {UserProductsProvider} from "../../context/userProducts";

const Dashboard = () => {
  const {logout, userName} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{my: 10}}>
      <Box sx={{display: {xs: "block", sm: "flex"}, alignItems: "center"}}>
        <Typography component="h1" variant="h3" sx={{mb: 3, flexGrow: 1}}>
          Buen día {userName}
        </Typography>
        <LoadingButton
          loading={loading}
          variant="contained"
          color="error"
          sx={{mb: {xs: 4, sm: 2}}}
          startIcon={<LogoutIcon />}
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              logout();
              setLoading(false);
              navigate("/");
            }, 1500);
          }}
        >
          Cerrar Sesión
        </LoadingButton>
      </Box>
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
            <UserProductsProvider>
              <Routes>
                <Route path="/" element={<InicioDash />} />
                <Route path="/myprod" element={<MyProducts />} />
                <Route path="/mycart" element={<Shopping />} />
                <Route path="/sellprod" element={<Sells />} />
              </Routes>
            </UserProductsProvider>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
