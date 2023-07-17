import {Container} from "@mui/material";
//splide
import "@splidejs/splide/css";
//components
import ProductsSlide from "../../components/Home/ProductsSlide";
import HeroSlide from "../../components/Home/HeroSlide";

const Inicio = () => {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{backgroundColor: "#33363d"}}
    >
      <HeroSlide />
      <ProductsSlide />
    </Container>
  );
};
export default Inicio;
