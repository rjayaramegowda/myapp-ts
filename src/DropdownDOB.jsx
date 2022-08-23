import React, { useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";

import en from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";
import { format, setMonth } from "date-fns";

const DropdownDOB = () => {
  const [today, setToday] = useState(new Date());
  const [dob, setDob] = useState();

  const months = new Array(12).fill(null).map((_, i) => ({
    value: i,
    label: format(setMonth(new Date(), i), "MMMM", {
      locale: en,
    }),
  }));

  const years = new Array(70).fill(null).map((_, i) => 1940 + i);
  const days = new Array(30).fill(null).map((_, i) => 1 + i);

  const handleYearChange = ({ target: { value } }) => {
    setToday(new Date(today.setFullYear(value)));
    setDob(today.toISOString().split("T")[0]);
  };

  const handleMonthChange = ({ target: { value } }) => {
    setToday(new Date(today.setMonth(value)));
    setDob(today.toISOString().split("T")[0]);
  };

  const handleDateChange = ({ target: { value } }) => {
    setToday(new Date(today.setDate(value)));
    setDob(today.toISOString().split("T")[0]);
  };

  const dateHandler = ({ target: { value } }) => setDob(value);

  return (
    <Row className="g-1 my-5" style={{ maxWidth: 400 }}>
      <Col sm="5">
        <select className="form-select" onChange={handleMonthChange} required>
        <option value=''>Month</option>
          {months.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}

        </select>
        <div class="invalid-feedback">
      Please select a valid state.
    </div>
      </Col>
      <Col sm="3">
        <select className="form-select" onChange={handleDateChange} required>
        <option value=''>Day</option>
          {days.map((day) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </select>
      </Col>
      <Col sm="4">
        <select className="form-select" onChange={handleYearChange} required>
        <option value=''>Year</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </Col>
      <Col sm="12 mt-2">
        <FormControl
          value={dob}
          type="date"
          name="dob"
          onChange={dateHandler}
        />
      </Col>
    </Row>
  );
};

export default DropdownDOB;
