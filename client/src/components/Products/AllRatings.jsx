// React
import {useEffect, useContext} from "react";
// proptypes
import PropTypes from "prop-types";
// context
import {RatingsContext} from "../../context/RatingsContext";
//MUI
import {Container, Divider, Grid, Rating, Typography} from "@mui/material";

const AllRatings = ({productId}) => {
  const {ratings, setRatings} = useContext(RatingsContext);

  useEffect(() => {
    const getRatings = async () => {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_API_URL}/products/${productId}/ratings`
        );
        const res = await data.json();
        if (res.ok === true) {
          setRatings(res.ratings);
        } else {
          throw new Error(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRatings();
  }, [productId, setRatings]);

  return (
  <Container maxWidth="xl" sx={{mt: 2}}>
    <Typography variant="h3" fontWeight={500} textAlign="center" sx={{mb: 3}}>Comentarios del Producto</Typography>
    <Grid container sx={{mb: 5}}>
      {ratings.map((rating) => (
        <Grid item xs={12} key={rating.id}>
          <Typography textTransform="uppercase" fontWeight={500} variant="h5">{rating.username}</Typography>
          <Rating value={rating.rating} precision={0.5} size="large" readOnly />
          <Typography variant="body1">{rating.comment}</Typography>
          <Divider sx={{my: 2}} />
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default AllRatings;

AllRatings.propTypes = {
  productId: PropTypes.number.isRequired,
};
