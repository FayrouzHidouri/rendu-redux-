import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEventReducer } from "./redux/slices/eventsSlice";

function AddEvents() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddEvent = () => {
    dispatch(addEventReducer({ title }));
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
}

export default AddEvents;
