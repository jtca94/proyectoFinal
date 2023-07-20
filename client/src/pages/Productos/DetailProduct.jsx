import {Snackbar, Alert} from "@mui/material";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import DetailProductId from "../../components/Products/DetailProductId";
import NotFound from "../404/404.jsx";
import RatingForm from "../../components/Products/RatingForm";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const DetailProduct = () => {
  const { userName } = useContext(AuthContext);
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
          {userName ? <RatingForm productId={singleProduct.id.toString()} /> : null} 
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DetailProduct;
