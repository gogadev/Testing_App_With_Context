import React from "react";

import SummaryForm from "./pages/summary/SummaryForm";
import Options from "./pages/entry/Options";
import OrderEntry from "./pages/entry/OrderEntry";

import Container from "react-bootstrap/Container";

import { OrderDetailsProvider } from "./context/OrderDetails";

import "./App.css";

const App = () => {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
        <Options />
      </OrderDetailsProvider>
    </Container>
  );
};

export default App;
