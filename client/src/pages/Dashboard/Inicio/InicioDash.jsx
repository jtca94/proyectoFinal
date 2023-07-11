import {Box, Typography} from "@mui/material";
import imageDash from "../../../images/iniciodash.svg";

const InicioDash = () => {
  return (
    <>
      <Typography variant="h3" fontWeight={500} align="center" color='#fff' sx={{WebkitTextStroke: '0.5px black', mt: {xs:3, md: 0}}}>
        Bienvenido a tu Dashboard
      </Typography>
      <Typography variant='h6' sx={{ color: "custom.purple", my: 2}} align="center">
        La plataforma perfecta para publicar y vender tus videojuegos.
      </Typography>
      <Box
        component="img"
        src={imageDash}
        alt="imagen de inicio de dashboard"
        sx={{width: {xs:"100%", md:'50%'}, height: "auto", display: "block", mx: "auto", my: 3}}
      />
      <Box sx={{mb: 3, textAlign: 'center', border: '1px solid black', py: 1, borderRadius: '10px', backgroundColor: '#fff'}}>
        <Typography variant="h3" sx={{fontSize: "24px", color: "custom.purple"}}>
          Mis productos
        </Typography>
        <Typography sx={{fontSize: "16px"}} gutterBottom>
          Gestiona y visualiza todos los videojuegos que has subido para vender.
        </Typography>
      </Box>

      <Box sx={{mb: 3, textAlign: 'center', border: '1px solid black', p: 2, borderRadius: '10px', backgroundColor: '#fff'}}>
        <Typography variant="h3" sx={{fontSize: "24px", color: "custom.purple"}}>
          Mis compras
        </Typography>
        <Typography sx={{fontSize: "16px"}} gutterBottom>
          Administra todas las compras realizadas y verifica su
          estado.
        </Typography>
      </Box>

      <Box sx={{mb: 3, textAlign: 'center', border: '1px solid black', py: 1, borderRadius: '10px', backgroundColor: '#fff'}}>
        <Typography variant="h3" sx={{fontSize: "24px", color: "custom.purple"}}>
          Vender producto
        </Typography>
        <Typography sx={{fontSize: "16px"}} gutterBottom>
          Agrega una nueva publicación para poner a la venta un juego.
        </Typography>
      </Box>

      <Typography sx={{fontSize: "14px", mt: 3}}>
        Explora todas las funciones de nuestro Dashboard y aprovecha al máximo
        esta plataforma para vender tus videojuegos a entusiastas de todo el
        mundo.
      </Typography>
    </>
  );
};
export default InicioDash;
