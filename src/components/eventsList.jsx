import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

class EventsList extends Component {
  //   raiseSort = (column) => {
  //     const sortColumn = { ...this.props.sortColumn };
  //     if (sortColumn.column === column) {
  //       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //     } else {
  //       sortColumn.column = column;
  //       sortColumn.order = "asc";
  //     }
  //     this.props.onSort(sortColumn);
  //   };

  render() {
    const { events } = this.props;
    return (
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col mb-3">
            <div className="card h-100 w-80" style={{ width: "18rem" }}>
              <img
                src={event.images[0].image}
                className="img-thumbnail"
                alt="..."
                style={{ maxWidth: "24rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">
                  {event.city}, {event.location}
                </p>
                <p className="card-text">{event.unit_price} DH</p>
                <Link to={`/events/${event.id}`} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default EventsList;

//   <table className="table">
//     <thead className="thead-dark">
//       <tr>
//         <th onClick={() => this.raiseSort("title")}>Title</th>
//         <th onClick={() => this.raiseSort("theme")}>Theme</th>
//         <th onClick={() => this.raiseSort("city")}>City</th>
//         <th onClick={() => this.raiseSort("unit_price")}>Price</th>
//         <th></th>
//         <th></th>
//       </tr>
//     </thead>
//     <tbody>
//       {events.map((event) => (
//         <tr key={event.title}>
//           <td>{event.title}</td>
//           <td>{event.theme}</td>
//           <td>{event.city}</td>
//           <td>{event.unit_price} DH</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
