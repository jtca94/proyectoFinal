// MUI
import {Snackbar, Alert, Grid, Typography, Container} from "@mui/material";
// REACT & RRDOM
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
// CONTEXT
import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";
import {RatingsProvider} from "../../context/RatingsContext";
// COMPONENTS
import DetailProductId from "../../components/Products/DetailProductId";
import NotFound from "../404/404.jsx";
import RatingForm from "../../components/Products/RatingForm";
import AllRatings from "../../components/Products/AllRatings";
import RatingOverview from "../../components/Products/RatingOverview";

const DetailProduct = () => {
  const {userName} = useContext(AuthContext);
  const [singleProduct, setSingleProduct] = useState([]);
  const [checkID, setCheckID] = useState(false);
  const [open, setOpen] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    getProduct(id);
  }, [id]);

  const getProduct = async (id) => {
    try {
      const data = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${id}`
      );
      const res = await data.json();
      if (res.ok === true) {
        setCheckID(true);
      }
      setSingleProduct(res.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RatingsProvider>
        {checkID ? (
          <>
            <Snackbar
              anchorOrigin={{vertical: "top", horizontal: "right"}}
              open={open}
              sx={{marginTop: "4rem"}}
              autoHideDuration={6000}
              onClose={() => setOpen(false)}
            >
              <Alert
                onClose={() => setOpen(false)}
                severity="success"
                sx={{width: "100%"}}
              >
                Producto añadido al carrito
              </Alert>
            </Snackbar>
            <DetailProductId
              id={singleProduct.id}
              image={singleProduct.image}
              name={singleProduct.name}
              category={singleProduct.category}
              description={singleProduct.description}
              price={singleProduct.price}
              stock={singleProduct.stock}
              setOpen={setOpen}
            />
            <Container maxWidth="lg">
              <Grid container>
                <Grid item xs={12} md={6}>
                  {userName ? (
                    <RatingForm productId={singleProduct.id} />
                  ) : (
                    <Typography>
                      Debes iniciar sesión para dejar una valoración
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <RatingOverview />
                </Grid>
              </Grid>
            </Container>
            <AllRatings productId={singleProduct.id} />
          </>
        ) : (
          <NotFound />
        )}
      </RatingsProvider>
    </>
  );
};

export default DetailProduct;
