import {
  Typography,
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Autocomplete,
  Snackbar,
  Alert
} from "@mui/material";
import {InputAdornment} from "@mui/material";
import {newProductValidationSchema} from "../../../helpers/validationSchemas";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {gameCategories} from "../../../utils/gameCategories";
import {useContext, useState} from "react";
import {AuthContext} from "../../../context/AuthContext";
// recordar que en el backend la imagen sigue siendo obligatoria
const Sells = () => {
  const {token, user} = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userId: user,
      name: "",
      price: "",
      category: "",
      image: "",
      stock: "",
      description: "",
    },
    validationSchema: newProductValidationSchema,
    onSubmit: async (values) => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (res.ok === true) {
          formik.resetForm();
          setOpen(true);
          setTimeout(() => {
          setOpen(false);
          navigate("/dashboard");
          }, 1500);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
    <Snackbar
        open={open}
        autoHideDuration={1500}
        sx={{mb: 3}}
        anchorOrigin={{vertical: "bottom", horizontal: "center"}}
        size="large"
      >
        <Alert severity="success">Usuario creado con éxito</Alert>
      </Snackbar>
      <Typography align="center" component="h1" variant="h3" sx={{mb: 3}}>
        Sube un Artículo
      </Typography>
      <Box
        sx={{
          mb: 3,
          textAlign: "center",
          border: "1px solid black",
          p: 2,
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{fontSize: "24px", color: "custom.purple"}}
        >
          Vende el videojuego que ya no usas
        </Typography>
        <Typography sx={{fontSize: "16px"}} gutterBottom>
          Llena el formulario con sus datos y sube tu artículo a la venta.
        </Typography>
      </Box>
      <Container
        maxWidth="false"
        sx={{
          py: 3,
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      >
        <form>
          <Grid container spacing={2} sx={{mb: 3}}>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                name="name"
                id="outlined-basic"
                label="Nombre del juego"
                variant="outlined"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="price"
                type="number"
                id="outlined-basic"
                label="Precio"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                id="combo-box-demo"
                options={gameCategories}
                fullWidth
                onChange={(e, value) => {
                  formik.setFieldValue("category", value?.label || "");
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    helperText={
                      formik.touched.category && formik.errors.category
                    }
                    name="category"
                    label="Categoría"
                    variant="outlined"
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.category && Boolean(formik.errors.category)
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                name="image"
                id="outlined-basic"
                label="URL Imagen de referencia"
                variant="outlined"
                fullWidth
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="stock"
                type="number"
                id="outlined-basic"
                label="Stock"
                variant="outlined"
                fullWidth
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                helperText={formik.touched.stock && formik.errors.stock}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="text"
                name="description"
                id="outlined-basic"
                label="Descripción"
                variant="outlined"
                multiline
                fullWidth
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Volver
          </Button>
          <Button
            disabled={!(formik.isValid && formik.dirty)}
            variant="contained"
            color="success"
            sx={{
              ml: {xs: 0, sm: 3},
              mt: {xs: 2, sm: 0},
              display: {xs: "block", sm: "inline-block"},
            }}
            onClick={formik.handleSubmit}
          >
            Publicar artículo
          </Button>
        </form>
      </Container>
    </>
  );
};
export default Sells;
