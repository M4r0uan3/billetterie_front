import React, { Component, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getThemes } from "../services/themeService";
import { getEvent, saveEvent } from "../services/eventService";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./eventForm.css";
import axiosInstance from "../axios";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const EventForm = () => {
  let history = useNavigate();
  let { id } = useParams();
  let [event, setEvent] = useState(null);
  const obj = {
    email: "",
    orderId: id,
  };

  const confirmOrder = async () => {
    try {
      const user = await axiosInstance.get("/auth/users/me");
      obj.email = user.data.email;
      emailjs
        .send("service_fvjdi9b", "template_6nibjhw", obj, "dOwZAwwXEddueAB0A")
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      // console.log(obj.email);
    } catch (ex) {
      console.log(ex);
    }
  };

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
          <p className="text-muted">{event?.location}</p>
          <div className="mt-auto">
            <Button
              className="w-100"
              onClick={() => {
                confirmOrder();
                toast.success("Check your email inbox and confirm the order.");
                history("/");
              }}
            >
              Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
