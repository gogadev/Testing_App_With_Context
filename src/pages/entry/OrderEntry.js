import React from "react";
import Button from "react-bootstrap/Button";
import { useOrderDetails } from "../../context/OrderDetails";
import Options from "./Options";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();

  const orderDisabled = orderDetails.totals.scoops === "$0.00";

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase("review")}>
        Order Sundae!
      </Button>
    </div>
  );
};

export default OrderEntry;
