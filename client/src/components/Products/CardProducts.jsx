// MUI
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Box,
  Grid,
} from "@mui/material";
// React
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const CardProducts = (props) => {
  return (
    <>
      <Link
        to={`${import.meta.env.VITE_BASE_URL}/productos/${props.to}`}
        style={{textDecoration: "none"}}
      >
        <Card
          sx={{
            backgroundColor: "#121212",
            color: "white",
            borderRadius: "10px",
            boxShadow: "0px 9px 15px -1px rgba(0,0,0,0.2)",
            height: "100%",
            pb: 3,
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
              textAlign: "left",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Typography
                mb={2}
                variant="subtitle1"
                fontWeight="bold"
                component="h2"
              >
                {props.name}
              </Typography>
              <Box
                mb={2}
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "#00BB9D",
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
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "space-between",
              }}
            >
              <Divider
                sx={{
                  backgroundColor: "#00BB9D",
                  height: "0.1rem",
                  flexGrow: 1,
                }}
              />
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{color: "#00BB9D", mt: 2}}
                component="h2"
              >
                $
                {parseInt(props.price).toLocaleString("de-DE", {
                  style: "currency",
                  currency: "CLP",
                })}
              </Typography>
            </Grid>
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
