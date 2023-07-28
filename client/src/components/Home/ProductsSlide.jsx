import {Container, Typography} from "@mui/material";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useContext} from "react";
import {ProductsContext} from "../../context/ProductsContext";
import CardHome from "./Card";
import LinearLoad from "../../utils/LinearLoad";

export const ProductsSlide = () => {
  const {products, loading} = useContext(ProductsContext);
  return (
    <Container align="center" maxWidth="false" sx={{my: 3, py:3}}>
      <Typography
        fontWeight={600}
        variant="h3"
        align="center"
        fontStyle="italic"
        sx={{
          color: "#00ff00",
          my: 2,
          mb: 5,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Productos destacados
      </Typography>
      {loading && <LinearLoad />}
      <Splide
        options={{
          clickable: true,
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
