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
      <Link to={ `${import.meta.env.VITE_BASE_URL}/productos/${props.to}`
      } style={{textDecoration: "none"}}>
        <Card
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 9px 15px -1px rgba(0,0,0,0.2)",
            height: "100%",
          }}
        >
          <CardMedia
            sx={{
              objectFit: "cover",
            }}
            component="img"
            alt="Imagen"
            height="250"
            image={props.image}
          />
          <CardContent
            sx={{
              textTransform: "uppercase",
            }}
          >
            <Typography
              mb={2}
              variant="subtitle1"
              fontWeight="bold"
              component="h2"
            >
              {props.name}
            </Typography>
            <Box mb={2}
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}  
              >
              <Typography
                sx={{
                  backgroundColor: "custom.purple",
                  color: "white",
                  borderRadius: "1rem",
                  display: "inline",
                  px: 1.5,
                  py: 0.5,
                }}
                variant="body2"
              >
                {props.category}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "custom.yellow",
                  borderRadius: "1rem",
                  display: "inline",
                  px: 1.5,
                  py: 0.5,
                  ml: 2,
                }}
                variant="body2"
              >
                Stock: {props.stock}
              </Typography>
            </Box>
            <Box sx={{flexGrow: 1}} mb={2}>
              <Divider></Divider>
            </Box>
            <Box sx={{display: "flex-column", justifyContent: "end" }} >
              <Typography variant="h4" fontWeight="bold" component="h2">
                $
                {parseInt(props.price).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "CLP",
                })}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CardProducts;

CardProducts.propTypes = {
  to: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};
