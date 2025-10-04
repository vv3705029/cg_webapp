import React, { useEffect, useState } from "react";
import { getEvents } from "../api";
import Card from "../components/Card";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then(res => {
        console.log(res.data); // ✅ Debugging log
        setEvents(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card
          key={event._id || event.id}  // ✅ ensure unique key (fallback if backend uses id)
          image={event.thumbnail}
          title={event.title}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default Events;
