import React from "react";
import { Col, Row } from "react-bootstrap";


const CustomHeader = ({ date, changeMonth, changeYear }) => {
  const months = new Array(12).fill(null).map((_, i) => ({
    value: i,
    label: format(setMonth(new Date(), i), "MMMM", {
      locale: en,
    }),
  }));

  const years = new Array(70).fill(null).map((_, i) => 1940 + i);
  const days = new Array(30).fill(null).map((_, i) => 1 + i);

  const handleYearChange = ({ target: { value } }) => changeYear(value);
  const handleMonthChange = ({ target: { value } }) => changeMonth(value);

  return (
    <Row className="g-1" style={{ maxWidth: 400 }}>
      <Col sm="5">
        <select className="form-select">
          {months.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </Col>
      <Col sm="3">
        <select className="form-select">
          {days.map((day) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </select>
      </Col>
      <Col sm="4">
        <select className="form-select">
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </Col>
    </Row>
  );
};

function DropdownDOB() {
  const changeMonth = () => console.log("change month");
  const changeYear = () => console.log("change year");

  return (
    <CustomHeader
      date={new Date()}
      changeMonth={changeMonth}
      changeYear={changeYear}
    />
  );
}

export default DropdownDOB;
