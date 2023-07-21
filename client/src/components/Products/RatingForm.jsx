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
  const {userName, token} = useContext(AuthContext);

  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
          formik.resetForm();
          setRating(0);
          window.location.reload();
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log(error);
        setError(true);
        setErrorMessage(error.message);
        formik.resetForm();
      }
    },
  });

  return (
    <Container maxWidth="lg" sx={{marginBottom: 5}}>
      <Grid container>
        {/* Alert al agregar calificación */}
        <Snackbar
          open={open}
          autoHideDuration={4000}
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
            sx={{mb: 1}}
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
            sx={{mb: 1}}
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
              <Grid item xs={12}>
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
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
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
                  disabled={formik.isSubmitting || !formik.isValid}
                  onClick={formik.handleSubmit}
                  xs={12}
                >
                  Enviar
                </Button>
                <Alert
                  severity="error"
                  sx={{display: error ? "flex" : "none", width: "100%", mb: 3}}
                >
                  {errorMessage}
                </Alert>
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
  productId: PropTypes.number.isRequired,
};
