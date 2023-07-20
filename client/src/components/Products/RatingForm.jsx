// MUI
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
// Formik
import {useFormik} from "formik";
import {ratingValidationSchema} from "../../helpers/validationSchemas";
// React
import {useState} from "react";
import {useContext} from "react";
// Context
import {AuthContext} from "../../context/AuthContext";
// PropTypes
import PropTypes from "prop-types";

const RatingForm = ({productId}) => {
  const {userName} = useContext(AuthContext);
  const {token} = useContext(AuthContext);

  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
    },
    validationSchema: ratingValidationSchema,
    onSubmit: async (values) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/products/${productId}/ratings`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
          }
        );
        const data = await res.json();
        if (data.ok === true) {
          setOpen(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  return (
    <Container sx={{marginBottom: 10}}>
      <Grid container>
        {/* Alert al agregar calificación */}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          anchorOrigin={{vertical: "top", horizontal: "center"}}
          size="large"
          sx={{mt: 10}}
        >
          <Alert severity="success">Calificación enviada con éxito</Alert>
        </Snackbar>
        <Grid item marginBottom={2} display="flex" justifyContent="start">
          <Typography textTransform="uppercase" variant="h5" fontWeight="bold">
            califica este producto
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
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
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Rating
            required
            name="rating"
            value={formik.values.rating}
            onChange={(event, newValue) => {
              formik.setFieldValue("rating", newValue);
              setRating(newValue);
            }}
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
          <form>
            <Grid sx={{flexDirection: "column"}} container>
              <Grid item xs={12} md={6}>
                <TextField
                  label="ESCRIBE TU CALIFICACIÓN"
                  fullWidth
                  required
                  margin="normal"
                  multiline
                  rows={4}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="comment"
                  variant="outlined"
                  placeholder="Escribe tu comentario"
                  error={
                    formik.touched.comment && Boolean(formik.errors.comment)
                  }
                  helperText={formik.touched.comment && formik.errors.comment}
                />
              </Grid>
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
                md={6}
              >
                <Button
                  sx={{
                    borderRadius: ".5rem",
                    width: "100%",
                    fontWeight: "bold",
                    my: 2,
                  }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={formik.handleSubmit}
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

RatingForm.propTypes = {
  productId: PropTypes.string.isRequired,
};
