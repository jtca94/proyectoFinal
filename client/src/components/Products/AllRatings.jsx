import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllRatings = () => {
  const { id: productid } = useParams();

  const [data, setData] = useState([]);

  const getProduct = async (id) => {
    try {
      const data = await fetch(
        `${import.meta.env.VITE_API_URL}/ratings/${productid}`
      );
      const res = await data.json();
      console.log(res.rating)
    } catch (error) {
      console.log(error);
    }
  };

  getProduct();

  return (
    <div>

    </div>
  );
};

export default AllRatings;
