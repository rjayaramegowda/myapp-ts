import React, { useState, useCallback, useEffect } from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import DropdownDOB from "./DropdownDOB";
import { SelectDatepicker } from "react-select-datepicker";

function App() {
  const [value, setValue] = useState<Date | null>();

  // const onDateChange = useCallback((date: Date) => {
  //   setValue(date);
  // }, []);

  useEffect(() => {
    document.querySelector(".rsd__react-select-datepicker")?.classList.add("gap-2");
    document.querySelector(".rsd__select-day")?.classList.add("form-select");
    document.querySelector(".rsd__select-month")?.classList.add("form-select");
    document.querySelector(".rsd__select-year")?.classList.add("form-select");
  }, []);

  function onDateChange(date: Date | null) {
    if (date) {
      setValue(date)
    }
  }

  return (
    <Container>
      <form action="submit-form.php">
        <Row>
          <Col md="12">
            <h1>React Bootstrap</h1>
            <DropdownDOB
              value="2021-05-07"
              min="2020-05-07"
              max="2022-05-07"
              name="dateOfBirth"
            />
          </Col>
          <Col md="12">
            <SelectDatepicker
              maxDate={new Date("1997-07-23T18:30:00.000Z")}
              minDate={new Date("1987-01-13T18:30:00.000Z")}
              hideLabels
              selectedDate={value}
              onDateChange={onDateChange}
            />
          </Col>
          <Col md="12">
            <FormControl className="d-none" required type="date" name="dob" value={value?.toISOString().split("T")[0] || ''} />
            </Col>

          <Col className="mt-5" md="12">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default App;
