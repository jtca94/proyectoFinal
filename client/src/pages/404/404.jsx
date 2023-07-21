import {useNavigate} from "react-router-dom";
import {Box, Typography, Button} from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        404 - Página no encontrada
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.5rem",
          color: "#555",
          textAlign: "center",
          maxWidth: "400px",
          marginBottom: "1rem",
        }}
      >
        Lo siento, la página que estás buscando no existe o pudo haber sido
        movida.
      </Typography>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button
          sx={{width: "100px", mx: 1}}
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Inicio
        </Button>
        <Button
          sx={{width: "100px", mx: 1}}
          variant="outlined"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Volver
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
