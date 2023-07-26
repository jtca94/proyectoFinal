// MUI
import {
  Box,
  Container,
  Divider,
  Grid,
  Pagination,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
// Components
import CardProducts from "../../components/Products/CardProducts";
import CategoryFilters from "../../components/Products/CategoryFilters";
import Loading from "../../utils/Loading";
// React
import {useContext, useState} from "react";
// Context
import {ProductsContext} from "../../context/ProductsContext";

const Productos = () => {
  const {
    products,
    filteredProducts,
    loading,
    sortedProducts,
    setSortedProducts,
  } = useContext(ProductsContext);
  const [alignment, setAlignment] = useState("");

  const [page, setPage] = useState(1);
  // marcaje del ordenamiento
  const handleAlignment = (newAlignment) => {
    setAlignment(newAlignment);
  };
  //ordenamiento de datos

  const sortProducts = (type) => {
    const isFiltered = filteredProducts.length > 0;
    const productsToSort = isFiltered ? filteredProducts : products;
    if (type === "nombre") {
      const sorted = productsToSort.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setSortedProducts(sorted);
    } else if (type === "precio") {
      const sorted = productsToSort.sort((a, b) => {
        return a.price - b.price;
      });
      setSortedProducts(sorted);
    } else if (type === "subida") {
      const sorted = productsToSort.sort((a, b) => {
        return a.id - b.id;
      });
      setSortedProducts(sorted);
    }
  };
  // paginacion

  const handleChange = (event, value) => {
    setPage(value);
  };
  const startIndex = (page - 1) * 9;
  const endIndex = page * 9;
  const currentPage = sortedProducts.slice(startIndex, endIndex);

  return (
    <Container maxWidth="false" sx={{backgroundColor: "#3b3b3b"}}>
      <Loading isLoading={loading} />
      <Container maxWidth="xl" sx={{pb: 10}}>
        <Grid container justifyContent="center" spacing={2} mb={5}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{justifyContent: {xs: "center"}, my: 3}}
          >
            <CategoryFilters />
          </Grid>
          <Grid item xs={12} sm={12} md={9} gap={3}>
            <Typography
              variant="h4"
              fontStyle="italic"
              fontWeight="bold"
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                my: 3,
                color: "#00BB9D",
              }}
            >
              Productos
            </Typography>
            <Divider
              sx={{
                backgroundColor: "#00BB9D",
                height: "0.1rem",
                width: "80%",
                mx: "auto",
              }}
            />
            <Box sx={{my: 3, display: "flex", justifyContent: "center"}}>
              <ToggleButtonGroup
                color="primary"
                sx={{mt: 2}}
                aria-label="text formatting"
                value={alignment}
              >
                <ToggleButton
                  value="nombre"
                  onClick={() => {
                    handleAlignment("nombre");
                    sortProducts("nombre");
                  }}
                  aria-label="nombre"
                  sx={{
                    color: "#00BB9D",
                    backgroundColor: "#3b3b3b",
                    border: "1px solid #00BB9D",
                    borderRadius: "0.5rem",
                  }}
                >
                  <Typography variant="h6">Nombre</Typography>
                </ToggleButton>
                <ToggleButton
                  onClick={() => {
                    handleAlignment("precio");
                    sortProducts("precio");
                  }}
                  sx={{
                    color: "#00BB9D",
                    backgroundColor: "#3b3b3b",
                    border: "1px solid #00BB9D",
                    borderRadius: "0.5rem",
                  }}
                  value="precio"
                  aria-label="precio"
                >
                  <Typography variant="h6">Precio</Typography>
                </ToggleButton>
                <ToggleButton
                  onClick={() => {
                    handleAlignment("subida");
                    sortProducts("subida");
                  }}
                  sx={{
                    color: "#00BB9D",
                    backgroundColor: "#3b3b3b",
                    border: "1px solid #00BB9D",
                    borderRadius: "0.5rem",
                  }}
                  value="subida"
                  aria-label="subida"
                >
                  <Typography variant="h6">Recientes</Typography>
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Grid container justifyContent="center" spacing={2} sx={{my: 3}}>
              {currentPage.map((product) => (
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

            <Grid container justifyContent="center">
              <Pagination
                onChange={handleChange}
                count={Math.ceil(sortedProducts.length / 9)}
                size="large"
                sx={{
                  my: 3,
                  "& .MuiPaginationItem-root": {
                    color: "#00BB9D",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#00BB9D",
                    color: "#fff",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Productos;
