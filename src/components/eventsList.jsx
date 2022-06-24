import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

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
    let quantity = 0;
    return (
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-sm-4 mb-3">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={event.images[0].image}
                height="70px"
                className="img-thumbnail"
                style={{ objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                  <span className="fs-5 ">{event.title}</span>
                  <span className="ms-2 text-muted">{event.unit_price}DH</span>
                </Card.Title>
                <div className="mt-auto">
                  <Link
                    to={`/events/${event.id}`}
                    className="btn btn-primary w-100"
                  >
                    Show More
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default EventsList;
