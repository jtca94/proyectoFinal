import {Container, Typography} from "@mui/material";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useContext} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import CardHome from "./Card";

export const ProductsSlide = () => {
  const {products} = useContext(ProductsContext);
  return (
    <Container maxWidth="xl" sx={{height: "100vh"}}>
      <Typography
        fontWeight={400}
        variant="h3"
        align="center"
        sx={{
          color: "custom.purple",
          my: 2,
          mb: 5,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Productos destacados
      </Typography>
      <Splide
        options={{
          padding: {right: "5rem", left: "5rem"},
          pagination: false,
          speed: 800,
          gap: "2rem",
          width: "100%",
          type: "loop",
          rewind: true,
          perPage: 5,
          perMove: 1,
          autoplay: true,
          breakpoints: {
            1440: {
              perPage: 5,
            },
            1024: {
              perPage: 3,
            },
            820: {
              perPage: 2,
            },
            600: {
              perPage: 1,
            },
          },
        }}
      >
        {products.map((product) => (
          <SplideSlide key={product.id}>
            <CardHome product={product} />
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};
export default ProductsSlide;
