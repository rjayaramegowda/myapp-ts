import React, { useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import en from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";
import { format, setMonth } from "date-fns";

type Props = {
  name: string;
  min: string;
  max: string;
  value?: string;
};

const DropdownDOB: React.FC<Props> = ({ name, min, max, value }) => {
  let maxYears: number =
    new Date(max).getFullYear() - new Date(min).getFullYear();
  maxYears = maxYears > 0 ? maxYears : 1;
  const startYear = new Date(min).getFullYear();
  const [today, setToday] = useState<Date | undefined>();
  const [dob, setDob] = useState<string | number | string[] | undefined>(value);
  const defaultValues: string[] = value ? value.split("-") : [];
  console.log("defaultValues = ", defaultValues[1]);

  const months = new Array(12).fill(null).map((_, i) => ({
    value: i,
    label: format(setMonth(new Date(), i), "MMMM", {
      locale: en,
    }),
  }));

  const years = new Array(maxYears).fill(null).map((_, i) => startYear + i);
  const days = new Array(31).fill(null).map((_, i) => 1 + i);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToday(
      new Date(today ? today.setFullYear(parseInt(e.target.value)) : 0) || ""
    );
    setDob(today ? today.toISOString().split("T")[0] : "");
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToday(
      new Date(today ? today.setMonth(parseInt(e.target.value)) : 0) || ""
    );
    setDob(today ? today.toISOString().split("T")[0] : "");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToday(
      new Date(today ? today.setDate(parseInt(e.target.value)) : 0) || ""
    );
    setDob(today ? today.toISOString().split("T")[0] : "");
  };

  return (
    <Row className="g-2">
      <Col sm="4">
        <select
          className="form-select"
          onChange={handleMonthChange}
          required
          defaultValue={
            defaultValues.length > 2 ? parseInt(defaultValues[0]) - 1 : ""
          }
        >
          <option value="">Month</option>
          {months.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        <FormControl.Feedback type="invalid">
          Field is required
        </FormControl.Feedback>
      </Col>
      <Col sm="4">
        <select
          defaultValue={defaultValues.length > 2 ? defaultValues[2] : ""}
          className="form-select"
          onChange={handleDateChange}
          required
        >
          <option value="">Day</option>
          {days.map((day) => (
            <option value={day} key={day}>
              {day}
            </option>
          ))}
        </select>
        <FormControl.Feedback type="invalid">
          Field is required
        </FormControl.Feedback>
      </Col>
      <Col sm="4">
        <select
          className="form-select"
          onChange={handleYearChange}
          required
          defaultValue={defaultValues.length > 2 ? defaultValues[0] : ""}
        >
          <option value="">Year</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
        <FormControl.Feedback type="invalid">
          Field is required
        </FormControl.Feedback>
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
