import {
  Typography,
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Autocomplete,
} from "@mui/material";
import {InputAdornment} from "@mui/material";
import {newProductValidationSchema} from "../../../helpers/validationSchemas";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {gameCategories} from "../../../utils/gameCategories";

const Sells = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      image: "",
      stock: "",
      description: "",
    },
    validationSchema: newProductValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
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
            sx={{ml: 2}}
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
