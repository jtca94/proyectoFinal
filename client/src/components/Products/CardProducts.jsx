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

  const formattedPrice = parseFloat(props.price).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    useGrouping: true,
  }).replace(/,/g, '.')

  return (
  <>
  <Link 
  to={props.to} 
  style={{textDecoration: 'none'}}>
    <Card sx={{ 
      backgroundColor: 'white',
      borderRadius: '10px', 
      boxShadow: '0px 9px 15px -1px rgba(0,0,0,0.2)'
      }}>
      <CardMedia
        sx={{ 
        borderRadius: '10px',
        padding: '1rem'}}
        component="img"
        alt="Imagen"
        height="420rem"
        image={props.image}/>
      <CardContent  
      sx={{ 
        textTransform: 'uppercase' }}>
        <Typography  
        variant="h6" 
        fontWeight="bold" 
        component="h2">
          {props.name}
        </Typography>
        <Box my={2}
        justifyContent='space-between'
        display='flex'
        alignItems='end'>
          <Typography 
          sx={{
            backgroundColor: 'black', 
            color: 'white', 
            borderRadius: '1rem',
            display: 'inline',
            padding: '.4rem'}} 
            variant="subtitle2" 
            fontWeight="light">
            {props.category}
          </Typography>
          <Typography 
          variant="subtitle2" 
          fontWeight="light" 
          component="h5"
          textTransform='uppercase'>
            Stock: {props.stock} un.
          </Typography>
        </Box>
        <Box mb={2}>
          <Divider></Divider>
        </Box>
        <Typography 
        variant="h4" 
        fontWeight="bold" 
        component="h2">
          ${formattedPrice}
        </Typography>
      </CardContent>
    </Card>
  </Link>
  </>
  )
}

export default CardProducts

CardProducts.propTypes = {
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};