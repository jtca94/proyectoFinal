import {Typography, Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Shopping = () => {
    const navigate = useNavigate();
  return (
    <>
      <Typography align="center" component="h1" variant="h3" sx={{mb: 3}}>
        Productos adquiridos
      </Typography>
      <Box sx={{mb: 3, textAlign: 'center', border: '1px solid black', p: 2, borderRadius: '10px', backgroundColor: '#fff'}}>
        <Typography variant="h3" sx={{fontSize: "24px", color: "custom.purple"}}>
          Mis compras
        </Typography>
        <Typography sx={{fontSize: "16px"}} gutterBottom>
          Administra todas las compras realizadas y verifica su
          estado.
        </Typography>
      </Box>

      <Button variant="contained" sx={{ display: "block", mb: 3}} onClick={() => {navigate("/dashboard")}}>
        Volver
      </Button>
    </>
  );
};
export default Shopping;
