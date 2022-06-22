import React, { Component, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getThemes } from "../services/themeService";
import { getEvent, saveEvent } from "../services/eventService";
import { Link } from "react-router-dom";
import "./eventForm.css";

// class EventForm extends Component {
//   state = {
//     data: {
//       title: "",
//       themeId: "",
//       describtion: "",
//       unitPrice: "",
//     },
//     themes: [],
//     errors: {},
//   };

//   async componentDidMount() {
//     const { data: themes } = await getThemes();
//     this.setState({ themes });

//     const eventId = this.props.value.matches.params.id;
//     console.log(eventId);
//     try {
//       const { data: event } = await getEvent(eventId);
//       this.setState({ data: this.mapToViewModel(event) });
//     } catch (ex) {
//       if (ex.response && ex.response.status === 404)
//         this.props.history.repalce("/not-found");
//     }
//   }
//   render() {
//     return <h1>Form</h1>;
//   }
// }

const EventForm = () => {
  let history = useNavigate();
  let { id } = useParams();
  let [event, setEvent] = useState(null);

  useEffect(() => {
    async function getEventById() {
      try {
        const { data: event } = await getEvent(id);
        setEvent(event);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) history("/not-found");
      }
    }
    getEventById();
  }, [id]);
  console.log(event);
  return (
    <div className="container">
      <div className="details" key={event?.id}>
        <div className="big-img">
          <img src={event?.images[0].image} alt="img" />
        </div>
        <div className="box">
          <div className="row">
            <h2>{event?.title}</h2>
            <span>{event?.unit_price} DH</span>
          </div>
          <p>{event?.description}</p>
          <p>{event?.location}</p>
          <button className="btn btn-dark">Add to cart</button>
          <Link to="/events">
            <button className="btn btn-outline-danger btn-md m-2">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
