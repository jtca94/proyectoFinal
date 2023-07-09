import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import signImg from "../../images/sign.svg";
import { useFormik } from 'formik';
import { createUserValidationSchema } from "../../helpers/validationSchemas";



const Register = () => {
 
  const formik = useFormik({
    initialValues: {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
    },
    validationSchema: createUserValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container maxWidth="lg" sx={{my: 10}}>
      <Typography variant="h3" fontWeight={500} sx={{textAlign: "center"}}>
        Crea tu Usuario
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={signImg}
            alt="Sign in"
            sx={{width: "100%", height: "100%", mt: {xs: 5, md: 0}}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <form>
            <TextField
              name="userName"
              fullWidth
              label="Nombre de Usuario"
              variant="outlined"
              sx={{mt: 3}}
              placeholder="JuanG92"
              required
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
            <TextField
              name="firstName"
              fullWidth
              label="Nombre"
              variant="outlined"
              sx={{mt: 3}}
              placeholder="Juan"
              required
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              name="lastName"
              fullWidth
              label="Apellido"
              variant="outlined"
              sx={{mt: 3}}
              placeholder="González"
              required
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              name="email"
              fullWidth
              label="Email"
              variant="outlined"
              sx={{mt: 3}}
              type={"email"}
              placeholder="myemail@mail.com"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              name="password"
              fullWidth
              type="password"
              label="Contraseña"
              variant="outlined"
              sx={{mt: 3}}
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
            name="confirmPassword"
              fullWidth
              type="password"
              label="Repite tu contraseña"
              variant="outlined"
              sx={{mt: 3}}
              required
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
            <TextField
              name="address"
              fullWidth
              label="Domicilio"
              variant="outlined"
              sx={{mt: 3}}
              placeholder="Av. Siempre Viva 123"
              required
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}  
            />
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              size="large"
              sx={{mt: 3}}
              disabled={!(formik.isValid && formik.dirty)}
              onClick={formik.handleSubmit}
            >
              Crear Usuario
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Register;
