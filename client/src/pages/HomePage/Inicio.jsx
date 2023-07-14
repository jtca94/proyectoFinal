import {Box, Container, Typography, Grid} from "@mui/material";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/css";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.jpg";
import article1 from "../../images/article1.jpg"
import ProductsSlide from "../../components/Home/ProductsSlide";

import articlesHome from "../../components/Home/articlesDB";
import { useEffect, useState } from "react";
import articles from "../../images/article1.jpg"

const Inicio = () => {

  const [articleSelected, setArticleSelected] = useState(null);
  const articlesHomeDB = articlesHome

  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * articlesHomeDB.length);
    const articuloAleatorio = articlesHomeDB[indiceAleatorio];
    setArticleSelected(articuloAleatorio);
  }, []);

  return (
    <>
    
      <Container disableGutters maxWidth="false">
        <Splide
        //ignorar css
          options={{
            lazyLoad: "nearby",
            speed: 1500,
            cover: true,
            rewind: true,
            drag: true,
            type: "loop",
            width: "100%",
            perPage: 1,
            perMove: 1,
            height: "80vh",
            autoplay: true,
            pagination: false,
          }}
        >
          <SplideSlide>
            <img src={slide1} alt="slide1" />
            <Box className="slideText">
              <Typography
                variant="h2"
                fontWeight={500}
                fontStyle="italic"
                sx={{
                  color: "custom.yellow",
                  WebkitTextStroke: "0.5px black",
                  mb: 5,
                  fontSize: {xs: "38px", md: "64px"},
                }}
              >
                Vive la experiencia de juego definitiva
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  fontSize: {xs: "16px", md: "28px"},
                }}
              >
                Suma horas de diversión y emoción a medida que te sumerges en la
                experiencia de juego más inmersiva, con gráficos de última
                generación y efectos especiales impresionantes.
              </Typography>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <img src={slide2} alt="slide2" />
            <Box className="slideText">
              <Typography
                variant="h2"
                fontWeight={500}
                fontStyle="italic"
                sx={{
                  color: "custom.lightPurple",
                  WebkitTextStroke: "0.5px black",
                  mb: 5,
                  fontSize: {xs: "38px", md: "64px"},
                }}
              >
                Explora mundos infinitos
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  fontSize: {xs: "16px", md: "28px"},
                }}
              >
                Sumérgete en emocionantes mundos virtuales, descubre nuevos
                paisajes, desafía criaturas asombrosas y vive aventuras
                inolvidables.
              </Typography>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <img src={slide3} alt="slide3" />
            <Box className="slideText">
              <Typography
                variant="h2"
                fontWeight={500}
                fontStyle="italic"
                sx={{
                  color: "#00FFFF",
                  WebkitTextStroke: "0.5px black",
                  mb: 5,
                  fontSize: {xs: "34px", md: "64px"},
                }}
              >
                Desafía tus límites
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  fontSize: {xs: "16px", md: "28px"},
                }}
              >
                Supera obstáculos, mejora tus habilidades y demuestra tu valía
                mientras te enfrentas a desafíos únicos y descubres nuevas
                formas de superar tus límites.
              </Typography>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <img src={slide4} alt="slide4" />
            <Box className="slideText">
              <Typography
                variant="h2"
                fontWeight={500}
                fontStyle="italic"
                sx={{
                  color: "#8A2BE2",
                  WebkitTextStroke: "0.5px grey",
                  mb: 5,
                  fontSize: {xs: "38px", md: "64px"},
                }}
              >
                Libera tu creatividad
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  fontSize: {xs: "16px", md: "28px"},
                }}
              >
                Crea y personaliza mundos virtuales a tu gusto, desata tu
                imaginación y dale vida a tus propias ideas, ya sea construyendo
                niveles, diseñando personajes o incluso desarrollando tus
                propios videojuegos.
              </Typography>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <img src={slide5} alt="slide5" />
            <Box className="slideText">
              <Typography
                variant="h2"
                fontWeight={500}
                fontStyle="italic"
                sx={{
                  color: "#00FF00",
                  WebkitTextStroke: "0.5px black",
                  mb: 5,
                  fontSize: {xs: "38px", md: "64px"},
                }}
              >
                Sumérgete en la historia
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  fontSize: {xs: "16px", md: "28px"},
                }}
              >
                Embárcate en épicas aventuras narrativas, descubre giros
                inesperados, conoce personajes inolvidables y vive historias
                cautivadoras que te transportarán a otros mundos.
              </Typography>
            </Box>
          </SplideSlide>
        </Splide>
      </Container>
      <ProductsSlide />
      <Grid
      container
      sx={{marginY: '5rem'}}>

          
          {articleSelected ? (
          <>
          {/* Box Left */}

          <Grid
          item
          xs={6}>
            <img src={articleSelected.img} alt="" />
          </Grid>

          {/* Box Right */}

          <Grid
          item
          sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}
          xs={6}>
            <Grid
            container
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
              <Grid
              item xs={9}>
                <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
                }}>
                  <Typography
                  sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  textAlign: 'center'}}>
                    {articleSelected.title}
                  </Typography>
                  <Typography
                  sx={{
                  fontSize: '1rem',
                  fontWeight: 'light',
                  textAlign: 'justify',
                  textTransform: 'uppercase'}}>
                    {articleSelected.text}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          </>
          ) : (
          <Grid
          item
          xs={12}>
            <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold'}}>
                  Cargando ...
                </Typography>
          </Grid>
            
          )}
          




        </Grid>
    </>
  );
};
export default Inicio;
