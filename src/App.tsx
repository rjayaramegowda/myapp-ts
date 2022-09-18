import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AsynchronousSearching from "./com/AsynchronousSearching";
import MyDate from "./com/MyDate";
import NativePickers from "./com/NativePickers";
import CustomDateRangeInputs from "./com/CustomDateRangeInputs";

function App() {
  useEffect(() => {
    console.log("init()");
  }, []);

  const [activeTab, setActiveTab] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Container>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        className="my-5"
      >
        <Tab
          icon={<FlightIcon />}
          className="w-100 text-capitalize"
          value="one"
          label="Flights"
          wrapped
        />
        <Tab
          icon={<HotelIcon />}
          className="w-100 text-capitalize"
          value="two"
          label="Hotels"
        />
        <Tab
          icon={<DirectionsCarIcon />}
          className="w-100 text-capitalize"
          value="three"
          label="Cars"
        />
      </Tabs>

      <h1>react-bootstrap-typeahead</h1>
      <AsynchronousSearching />
      <CustomDateRangeInputs />
    </Container>
  );
}

export default App;
