// MUI
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Box,
} from "@mui/material";
// React
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const CardProducts = (props) => {
  return (
    <>
      <Link to={props.to} style={{textDecoration: "none"}}>
        <Card
          sx={{
            backgroundColor: "white",
            padding: 2,
            borderRadius: "10px",
            boxShadow: "0px 9px 15px -1px rgba(0,0,0,0.2)",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "10px",
              padding: "1rem",
            }}
            component="img"
            alt="Imagen"
            height="420rem"
            image={props.img}
          />
          <CardContent
            sx={{
              textTransform: "uppercase",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" component="h2">
              {props.title}
            </Typography>
            <Box my={2}>
              <Typography
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "1rem",
                  display: "inline",
                  padding: ".2rem",
                }}
                variant="subtitle2"
                fontWeight="light"
              >
                {props.category}
              </Typography>
            </Box>
            <Box mb={2}>
              <Divider></Divider>
            </Box>
            <Typography variant="body2" color="textSecondary" flexGrow={1}>
              {props.description}
            </Typography>
            <Typography variant="h4" fontWeight="bold" component="h2">
              {props.price}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CardProducts;

CardProducts.propTypes = {
  to: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};