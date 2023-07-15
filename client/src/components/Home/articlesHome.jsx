import article1 from "../../images/article1.jpg"
import article2 from "../../images/article2.jpg"
import article3 from "../../images/article3.jpg"
import article4 from "../../images/article4.jpg"
import article5 from "../../images/article5.jpg"

import articlesHome from "./articlesDB.js";
import { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material"

const ArticlesHome = () => {

    const [articleSelected, setArticleSelected] = useState(null);
    const articlesHomeDB = articlesHome
  
    useEffect(() => {
      const indiceAleatorio = Math.floor(Math.random() * articlesHomeDB.length);
      const articuloAleatorio = articlesHomeDB[indiceAleatorio];
      setArticleSelected(articuloAleatorio)
    }, []);
    

    return (

      <Grid
      container
      justifyContent='center'
      sx={{marginY: '5rem'}}>
          {articleSelected ? (
          <>
          {/* Box Left */}

          <Grid
          item
          xs={12} sm={10} md={10} lg={6}>
            <Grid
            container
            justifyContent='center'>
              <Grid
              item
              xs={10} sm={10} md={10} lg={10}
              justifyContent='center'>
                <img
                src={article2}
                style={{borderRadius: '1%',}}
                width='100%' />
              </Grid>
            </Grid>
          </Grid>

          {/* Box Right */}

          <Grid
          item
          sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}
          xs={12} sm={10} md={10} lg={6}>
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
                alignItems: 'center'
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
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  paddingBottom: '2rem'}}>
                    {articleSelected.subtitle}
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
          xs={10} sm={10} md={10} lg={10}>
            <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold'}}>
                  Cargando ...
                </Typography>
          </Grid>
            
          )}
          




        </Grid>
        

    );
  };
  export default ArticlesHome;