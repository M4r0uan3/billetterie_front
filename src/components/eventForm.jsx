import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getThemes } from "../services/themeService";
import { getEvent, saveEvent } from "../services/eventService";

class EventForm extends Component {
  state = {
    data: {
      title: "",
      themeId: "",
      describtion: "",
      unitPrice: "",
    },
    themes: [],
    errors: {},
  };
  async componentDidMount() {
    const { data: themes } = await getThemes();
    this.setState({ themes });
    const eventId = this.props.match.params.id;
    if (eventId === "new") {
      return;
    }

    const { data: event } = await getEvent(eventId);
    if (!event) return this.props.history.repalce("/not-found");
    this.setState({ data: this.mapToViewModel(event) });
  }
  render() {
    return <h1>Form</h1>;
  }
}

// const EventForm = () => {
//   let history = useNavigate();
//   let { id } = useParams();
//   return (
//     <div>
//       <h1>Event Form {id}</h1>
//       <button
//         type="button"
//         className="btn btn-secondary"
//         onClick={() => {
//           history("/events");
//         }}
//       >
//         Khdem
//       </button>
//     </div>
//   );
// };

export default EventForm;
