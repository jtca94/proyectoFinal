import { Container, Grid, Typography, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { array } from "yup";

const AllRatings = (props) => {
  const { id: productid } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {

  const getRatings = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${productid}/ratings`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const arrayRatings = await res.json();
      setData(arrayRatings.ratings)
    } catch (error) {
      console.log(error)
    }
  };
  getRatings();
  }, []);

  return (
<></>
  );
};

export default AllRatings;
