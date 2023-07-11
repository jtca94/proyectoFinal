import {Grid, Box, Typography, Button} from "@mui/material";
import PropTypes from "prop-types";

const UserArticles = ({name, price, image, category, stock}) => {
  return (
    <Grid container sx={{mt: 3}}>
      <Grid item xs={12} sm={3} sx={{display: "flex", justifyContent: {xs: "center", sm: "normal"}}}>
        <Box
          component="img"
          src={image}
          sx={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid black",
          }}
          alt="imagen de producto"
        />
      </Grid>
      <Grid container item sx={{display: "flex"}} xs={12} sm={6}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: {xs: "center", sm: "normal"},
          }}
        >
          <Typography
            variant="h3"
            sx={{fontSize: "24px", color: "custom.purple"}}
          >
            {name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: {xs: "center", sm: "normal"},
          }}
        >
          <Typography variant="body1">{category}</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: {xs: "center", sm: "normal"},
          }}
        >
          <Typography variant="body1">Cantidad: {stock}</Typography>
        </Grid>
      </Grid>
      <Grid container item sx={{display: "flex"}} xs={12} sm={3}>
        <Grid
          item
          xs={6}
          sm={12}
          sx={{display: "flex", justifyContent: {xs: "center", sm: "normal"}}}
        >
          <Typography sx={{fontSize: "24px"}} variant="h5">
            {/* precio debe ir en formato  $1.000 */}
            {`$ ${parseInt(price).toLocaleString("es-CL")}`}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={12} sx={{display: {xs: "flex", sm: "block"}, justifyContent: "center"}}>
          <Button variant="outlined" size="small" color="error">
            Eliminar
          </Button>
        </Grid>
      </Grid>
      <hr style={{width: "90%", align: "center"}} />
    </Grid>
  );
};

UserArticles.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};
export default UserArticles;
