import {Box, Container} from "@mui/material";
//splide
import "@splidejs/splide/css";
//components
import ProductsSlide from "../../components/Home/ProductsSlide";
import HeroSlide from "../../components/Home/HeroSlide";
import Article from "../../components/Home/Article";

const Inicio = () => {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{backgroundColor: "#33363d"}}
    >
      <HeroSlide />
      <ProductsSlide />
      <Box sx={{pb: 10}}>
        <Article />
      </Box>
    </Container>
  );
};
export default Inicio;
