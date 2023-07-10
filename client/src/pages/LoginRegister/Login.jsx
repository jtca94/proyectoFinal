import {
  Alert,
  Button,
  Collapse,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {loginValidationSchema} from "../../helpers/validationSchemas";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.ok === true) {
        console.log(data);
        setError(false);
        setMessage("");
        setOpen(true);
        formik.resetForm();
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        console.log(data);
        setError(true);
        setMessage(data.message);
        formik.resetForm();
      }
    },
  });
  return (
    <Container maxWidth="lg" sx={{my: 20}}>
      <Typography variant="h3" fontWeight={500} sx={{textAlign: "center"}}>
        Inicia Sesión
      </Typography>
      <Grid container sx={{mt: 5, justifyContent: "center"}}>
        <Grid item xs={12} md={6}>
          <Collapse in={error}>
            <Alert severity="error" sx={{mb: 3}}>
              {message}
            </Alert>
          </Collapse>
          <form>
            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              placeholder="email@mail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              variant="outlined"
              sx={{mt: 5}}
              placeholder="********"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Typography variant="body1" sx={{mt: 3, textAlign: "center"}}>
              ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              sx={{mt: 3}}
              size="large"
              onClick={formik.handleSubmit}
            >
              Iniciar Sesión
            </Button>
          </form>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        anchorOrigin={{vertical: "top", horizontal: "center"}}
        size="large"
        sx={{mt: 10}}
      >
        <Alert severity="success">Sesión iniciada con éxito</Alert>
      </Snackbar>
    </Container>
  );
};
export default Login;
