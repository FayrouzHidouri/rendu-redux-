import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEventReducer } from "../redux/slices/eventsSlice";

function UpdateEvent({ event }) {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const dispatch = useDispatch();

  const handleUpdateEvent = () => {
    dispatch(
      updateEventReducer({
        id: event.id,
        title: title,
        description: description,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleUpdateEvent}>Update Event</button>
    </div>
  );
}

export default UpdateEvent;
