import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventForm = () => {
  let history = useNavigate();
  let { id } = useParams();
  return (
    <div>
      <h1>Event Form {id}</h1>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          history("/events");
        }}
      >
        Khdem
      </button>
    </div>
  );
};

export default EventForm;
