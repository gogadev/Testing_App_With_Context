import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions"
import Row from "react-bootstrap/Row";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // optionType is "scoops" or "toppings"
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        //error;
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
};

export default Options;
