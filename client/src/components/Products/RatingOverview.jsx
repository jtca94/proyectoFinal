// React
import {useContext, useEffect, useState} from "react";
// Context
import {RatingsContext} from "../../context/RatingsContext";
//MUI
import {Container, Grid, Rating, Typography} from "@mui/material";

const RatingOverview = () => {
  const {ratings} = useContext(RatingsContext);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const getStars = () => {
      const stars =
        ratings.reduce((acc, rating) => acc + rating.rating, 0) /
        ratings.length;
      setStars(stars);
    };
    getStars();
  }, [ratings]);

  return (
    <Container>
      <Typography
        sx={{mb: 2}}
        textTransform="uppercase"
        variant="h5"
        fontWeight="bold"
      >
        Valoraciones Generales
      </Typography>
      {ratings.length > 0 ? (
        <>
          <Typography variant="h5">Promedio: {stars.toFixed(1)}</Typography>
          <Rating
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#ff6d75",
              },
            }}
            value={stars}
            size="large"
            precision={0.1}
            readOnly
          />
          <Typography sx={{mb: 2}} variant="h6">
            {ratings.length}{" "}
            {ratings.length === 1 ? "valoración" : "valoraciones"}{" "}
          </Typography>
          <Grid container>
            <Grid item xs={3}>
              <Typography sx={{mr: 1, mb: 1}} variant="body1">
                5 Estrellas
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{display: "flex"}}>
              <Rating value={5} readOnly />
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                ( {ratings.filter((rating) => rating.rating === 5).length} )
              </Typography>
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                {(ratings.filter((rating) => rating.rating === 5).length /
                  ratings.length) *
                  100}
                %
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Typography sx={{mr: 1, mb: 1}} variant="body1">
                4 Estrellas
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{display: "flex"}}>
              <Rating value={4} readOnly />
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                ( {ratings.filter((rating) => rating.rating === 4).length} )
              </Typography>
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                {(ratings.filter((rating) => rating.rating === 4).length /
                  ratings.length) *
                  100}
                %
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Typography sx={{mr: 1, mb: 1}} variant="body1">
                3 Estrellas
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{display: "flex"}}>
              <Rating value={3} readOnly />
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                ( {ratings.filter((rating) => rating.rating === 3).length} )
              </Typography>
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                {(ratings.filter((rating) => rating.rating === 3).length /
                  ratings.length) *
                  100}
                %
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Typography sx={{mr: 1, mb: 1}} variant="body1">
                2 Estrellas
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{display: "flex"}}>
              <Rating value={2} readOnly />
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                ( {ratings.filter((rating) => rating.rating === 2).length} )
              </Typography>
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                {(ratings.filter((rating) => rating.rating === 2).length /
                  ratings.length) *
                  100}
                %
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Typography sx={{mr: 1, mb: 1}} variant="body1">
                1 Estrella
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{display: "flex"}}>
              <Rating value={1} readOnly />
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                ( {ratings.filter((rating) => rating.rating === 1).length} )
              </Typography>
              <Typography sx={{ml: 1, mb: 1}} variant="body1">
                {(ratings.filter((rating) => rating.rating === 1).length /
                  ratings.length) *
                  100}
                %
              </Typography>
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography variant="h3">No hay suficientes valoraciones</Typography>
      )}
    </Container>
  );
};

export default RatingOverview;
