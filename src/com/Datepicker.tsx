import React, { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";
import { SelectDatepicker } from "react-select-datepicker";

type Props = {
  name?: string;
  min: string;
  max: string;
  value?: string;
};

const Datepicker: React.FC<Props> = ({ name, min, max, value }) => {
  const defaultDate: Date | null = value ? new Date(value) : null;
  const [selectedDay, setSelectedDay] = useState<Date | null>(defaultDate);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    document
      .querySelectorAll(".rsd__react-select-datepicker")
      .forEach((item) => {
        item.classList.add("gap-2");
      });
    document.querySelectorAll(".rsd__select-day").forEach((item) => {
      item.classList.add("form-select");
    });
    document.querySelectorAll(".rsd__select-month").forEach((item) => {
      item.classList.add("form-select");
    });
    document.querySelectorAll(".rsd__select-year").forEach((item) => {
      item.classList.add("form-select");
    });
  }, []);

  function onDateChange(date: Date | null) {
    if (date) {
      setSelectedDay(date);
      setSelectedValue(date.toISOString().split("T")[0]);
    }
  }

  return (
    <>
      <SelectDatepicker
        maxDate={new Date(max)}
        minDate={new Date(min)}
        hideLabels
        selectedDate={selectedDay}
        onDateChange={onDateChange}
      />
      <FormControl
        className="d-none"
        value={selectedValue}
        required
        type="date"
        name={name}
      />
      <FormControl.Feedback type="invalid">
        Field is required
      </FormControl.Feedback>
    </>
  );
};

export default Datepicker;
