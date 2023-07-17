// MUI
import {Container, Divider, Grid, Typography} from "@mui/material";
// Components
import CardProducts from "../../components/Products/CardProducts";
import CategoryFilters from "../../components/Products/CategoryFilters";
// React
import {useContext} from "react";
// Context
import {ProductsContext} from "../../context/ProductsContext";

const Productos = () => {
  const {products} = useContext(ProductsContext);
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center" spacing={2} mb={5}>
        <Grid item xs={12} md={3} sx={{justifyContent: {xs: "center"}, my: 3}}>
          <CategoryFilters />
        </Grid>
        <Grid item xs={12} sm={12} md={9} gap={3} >
        <Typography
            variant="h4"
            fontStyle="italic"
            fontWeight="bold"
            sx={{
              textTransform: "uppercase",
              textAlign: "center",
              my: 3,
              color: "#f50057",
            }}
          >
            Productos
          </Typography>
          <Divider sx={{backgroundColor: "#f50057", height: "0.1rem", width: "80%", mx: "auto", }} />
          <Grid container justifyContent="center" spacing={2} sx={{my: 3}}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <CardProducts
                  image={product.image}
                  name={product.name}
                  stock={product.stock}
                  category={product.category}
                  description={product.description}
                  price={product.price}
                  to={product.id}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Productos;
