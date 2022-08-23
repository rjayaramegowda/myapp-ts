import React, { useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";

import en from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";
import { format, setMonth } from "date-fns";

type Props = {
  name: string;
}

const DropdownDOB : React.FC<Props> = ({name}) => {
  const [today, setToday] = useState<Date | undefined>();
  const [dob, setDob] = useState<string | number | string[] | undefined>('');


  const months = new Array(12).fill(null).map((_, i) => ({
    value: i,
    label: format(setMonth(new Date(), i), "MMMM", {
      locale: en,
    }),
  }));

  const years = new Array(70).fill(null).map((_, i) => 1940 + i);
  const days = new Array(31).fill(null).map((_, i) => 1 + i);

  const handleYearChange = (e:any) => {
    setToday(new Date(today ? today.setFullYear(e.target.value) : 0) || '');
    setDob(today ? today.toISOString().split("T")[0] : '');
  };

  const handleMonthChange = (e:any) => {
    setToday(new Date(today ? today.setMonth(e.target.value) : 0) || '');
    setDob(today ? today.toISOString().split("T")[0] : '');
  };

  const handleDateChange =  (e:any) => {
    setToday(new Date(today ? today.setDate(e.target.value) : 0) || '');
    setDob(today ? today.toISOString().split("T")[0] : '');
  };

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
      <Col sm="12">
        <FormControl
          className="d-none"
          value={dob}
          type="date"
          name={name}
        />
      </Col>
    </Row>
  );
};

export default DropdownDOB;
