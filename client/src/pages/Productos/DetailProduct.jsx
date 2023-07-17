import {Grid, Box, Typography, Snackbar, Alert} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import DetailProductId from "../../components/Products/DetailProductId";
import NotFound from "../404/404.jsx";

const DetailProduct = () => {
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
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{marginBottom: "6rem"}}
          >
            <Grid item xs={10}>
              <Typography variant="h4" fontWeight="bold" marginY={2}>
                Comentarios
              </Typography>
              <Typography variant="h6" fontWeight="light">
                User1
              </Typography>
              <Box marginBottom={2}>
                <StarBorderIcon></StarBorderIcon>
                <StarBorderIcon></StarBorderIcon>
                <StarBorderIcon></StarBorderIcon>
                <StarBorderIcon></StarBorderIcon>
                <StarBorderIcon></StarBorderIcon>
              </Box>
              <Typography variant="subtitle2" fontWeight="light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate quis quibusdam eius praesentium eligendi
                exercitationem veritatis maiores atque debitis deleniti
                assumenda delectus ex, magnam dolor nihil similique harum. Esse
                cum eveniet totam. Tempora similique asperiores assumenda,
                blanditiis delectus laudantium reiciendis officia adipisci
                voluptatem repellat cumque quod, quasi quibusdam? Atque
                distinctio architecto cumque fugit ipsum laboriosam officiis
                repellendus quibusdam aperiam optio consequuntur quidem et
                perspiciatis est illo molestiae ad, laudantium nostrum?
                Reiciendis, debitis similique. Sit sunt nihil unde quam ad. Iste
                culpa, ipsa est perferendis voluptate, ad ea cumque aliquid
                dignissimos quaerat aperiam? Consectetur, sequi laudantium?
                Facilis ab assumenda sit repellendus.
              </Typography>
            </Grid>
          </Grid>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DetailProduct;
