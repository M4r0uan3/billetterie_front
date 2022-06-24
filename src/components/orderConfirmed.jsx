import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const OrderConfirmed = () => {
  let history = useNavigate();
  let { id } = useParams();
  return (
    <div className="container">
      <h1>Order Confirmation</h1>
      <p>
        The purchase of the order number <b>{id}</b> has been successfully
        confirmed
      </p>
    </div>
  );
};

export default OrderConfirmed;
