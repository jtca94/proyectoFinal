import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";

  const CardProducts = (props) => {

    const linkStyle = {
      textDecoration: 'none',
    };

    const { imageUrl, title, description, brand, price } = props;
  
    return (
      <>
      <CssBaseline />
      <Link 
      to="/details-product" 
      style={linkStyle}>
        <Card sx={{ 
          backgroundColor: 'white', 
          padding: 2, 
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
            image={imageUrl}/>
          <CardContent  
          sx={{ 
            textTransform: 'uppercase' }}>
            <Typography  
            variant="subtitle1" 
            fontWeight="bold" 
            component="h2">
              {title}
            </Typography>
            <Box my={2}>
              <Typography 
              sx={{
                backgroundColor: 'black', 
                color: 'white', 
                borderRadius: '1rem',
                display: 'inline',
                padding: '.2rem'}} 
                variant="subtitle2" 
                fontWeight="light">
                {brand}
              </Typography>
            </Box>
            <Box mb={2}>
              <Divider></Divider>
            </Box>
            <Typography 
             variant="body2" 
             color="textSecondary" 
             flexGrow={1}>
              {description}
            </Typography>
            <Typography 
            variant="h4" 
            fontWeight="bold" 
            component="h2">
              {price}
            </Typography>
          </CardContent>
        </Card>
      </Link>
      </>
    )
  }
  export default CardProducts