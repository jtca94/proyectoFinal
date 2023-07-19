{
  /* MUI */
}
import {
  Grid,
  Container,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
{
  /* React */
}
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
{
  /* Información del usuario */
}
import { AuthContext } from "../../context/AuthContext";

const RatingForm = () => {
  const { token, user, userName } = useContext(AuthContext);
  const { id: productid } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);

  const handleInputComment = (event) => {
    setComment(event.target.value);
  };

  const handleChange = (event, newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRating(0);
    setComment("");

    // Código para enviar los datos al servidor utilizando fetch
    const data = {
      userid: parseInt(user),
      productid: parseInt(productid),
      rating: rating,
      comment: comment,
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/ratings/${productid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      ).then((response) => {
        if (response.ok) {
          console.log("La solicitud se pudo enviar correctamente");
        } else {
          throw new Error("Error al enviar la solicitud");
        }
      });
    } catch (error) {
      console.log(error);
    }

    setOpen(true);
  };

  return (
    <Container sx={{ marginBottom: 15 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* Alert al agregar calificación */}
          <Snackbar
            open={open}
            autoHideDuration={1500}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            size="large"
            sx={{ mt: 10 }}
          >
            <Alert severity="success">Calificación enviada con éxito</Alert>
          </Snackbar>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          marginBottom={2}
          display="flex"
          justifyContent="start"
        >
          <Typography textTransform="uppercase" variant="h5" fontWeight="bold">
            califica este producto
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Typography
            textTransform="uppercase"
            variant="subtitle2"
            fontWeight="bold"
          >
            POR {userName}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Rating
            required
            name="rating"
            value={rating}
            onChange={handleChange}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            icon={<StarIcon fontSize="inherit" />}
          />
          <Typography
            textTransform="uppercase"
            variant="subtitle2"
            fontWeight="light"
          >
            ({rating})
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item
                xs={12}
                sm={12}
                md={9}
                lg={9}>
                <TextField
                  label="ESCRIBE TU CALIFICACIÓN"
                  fullWidth
                  required
                  margin="normal"
                  multiline
                  rows={2}
                  value={comment}
                  onChange={handleInputComment}
                />
              </Grid>
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
              >
                <Button
                  sx={{
                    borderRadius: ".5rem",
                    width: "90%",
                    height: "70%",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RatingForm;
