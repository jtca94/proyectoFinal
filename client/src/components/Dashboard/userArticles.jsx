import {
  Grid,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import PropTypes from "prop-types";

const UserArticles = ({name, price, image, category, stock, id}) => {
  const {token} = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleDelete = async (ProductId) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${ProductId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 401) {
        throw new Error("No tienes permisos para eliminar este producto");
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container sx={{mt: 3}}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmar eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Vas a eliminar este producto, ¿estás seguro?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleDelete(id);
              setOpen(false);
              window.location.reload();
            }}
            autoFocus
            variant="contained"
            color="error"
            sx={{display: "block", m: 3, color: "white"}}
          >
            Eliminar
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            color="success"
            sx={{display: "block", m: 3, color: "white"}}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
      <Grid
        item
        xs={12}
        sm={3}
        sx={{display: "flex", justifyContent: {xs: "center", sm: "normal"}}}
      >
        <Box
          component="img"
          src={image}
          sx={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "1px solid black",
          }}
          alt="imagen de producto"
        />
      </Grid>
      <Grid container item sx={{display: "flex"}} xs={12} sm={6}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: {xs: "center", sm: "normal"},
          }}
        >
          <Typography
            variant="h3"
            sx={{fontSize: "24px", color: "custom.purple"}}
          >
            {name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: {xs: "center", sm: "normal"},
          }}
        >
          <Typography variant="body1">{category}</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: {xs: "center", sm: "normal"},
          }}
        >
          <Typography variant="body1">Cantidad: {stock}</Typography>
        </Grid>
      </Grid>
      <Grid container item sx={{display: "flex"}} xs={12} sm={3}>
        <Grid
          item
          xs={6}
          sm={12}
          sx={{display: "flex", justifyContent: {xs: "center", sm: "normal"}}}
        >
          <Typography sx={{fontSize: "24px"}} variant="h5">
            {/* precio debe ir en formato  $1.000 */}
            {`$ ${parseInt(price).toLocaleString("es-CL")}`}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={12}
          sx={{display: {xs: "flex", sm: "block"}, justifyContent: "center"}}
        >
          <Button
            onClick={() => setOpen(true)}
            variant="outlined"
            size="small"
            color="error"
          >
            Eliminar
          </Button>
        </Grid>
      </Grid>
      <hr style={{width: "90%", align: "center"}} />
    </Grid>
  );
};

UserArticles.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
export default UserArticles;
