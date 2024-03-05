import React from "react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/wishListSlice";

function Event({ event }) {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(event));
  };

  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      {/* Autres détails de l'événement */}
      <button onClick={handleAddToWishlist}>ADD TO WISHLIST</button>
    </div>
  );
}

export default Event;
