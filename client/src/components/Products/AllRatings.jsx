import {useState, useEffect} from "react";
import PropTypes from "prop-types";

const AllRatings = ({productId}) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const getRatings = async () => {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_API_URL}/products/${productId}/ratings`
        );
        const res = await data.json();
        if (res.ok === true) {
          setRatings(res.ratings);
        } else {
          throw new Error(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRatings();
  }, [productId]);

  return (
    <>
      <h2>Valoraciones</h2>
      {ratings.length > 0 ? (
        ratings.map((rating) => (
          <div key={rating.id}>
            <p>{rating.comment}</p>
            <p>{rating.rating}</p>
          </div>
        ))
      ) : (
        <p>No hay valoraciones</p>
      )}
    </>
  );
};

export default AllRatings;

AllRatings.propTypes = {
  productId: PropTypes.number.isRequired,
};
