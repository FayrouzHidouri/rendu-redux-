import React from "react";
import { useSelector } from "react-redux";

function Events() {
  const events = useSelector((state) => state.events.events);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          {/* Autres détails de l'événement */}
        </div>
      ))}
    </div>
  );
}

export default Events;
