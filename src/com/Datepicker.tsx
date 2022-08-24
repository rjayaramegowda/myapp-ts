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
  const [selectedDa, setSelectedDa] = useState<Date | null>(
    new Date(value) || null
  );
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    document
      .querySelector(".rsd__react-select-datepicker")
      ?.classList.add("gap-2");
    document.querySelector(".rsd__select-day")?.classList.add("form-select");
    document.querySelector(".rsd__select-month")?.classList.add("form-select");
    document.querySelector(".rsd__select-year")?.classList.add("form-select");
  }, []);

  function onDateChange(date: Date | null) {
    if (date) {
      setSelectedDa(date);
      setSelectedValue(date.toISOString().split("T")[0]);
    }
  }

  return (
    <>
      <SelectDatepicker
        maxDate={new Date(max)}
        minDate={new Date(min)}
        hideLabels
        selectedDate={selectedDa}
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
