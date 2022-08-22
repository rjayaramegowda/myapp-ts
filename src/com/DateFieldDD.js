import React, { useState } from 'react';
import Datepicker from 'react-datepicker';

import es from 'date-fns/locale/es';
import en from 'date-fns/locale/en-GB';

import 'react-datepicker/dist/react-datepicker.css';

import { format, setMonth, getMonth, getYear } from 'date-fns';



const locales = {
  es,
  en,
};

const customHeader = ({ date, changeMonth, changeYear }) => {
  const months = new Array(12).fill(null).map((_, i) => ({
    value: i,
    label: format(setMonth(new Date(), i), 'MMMM', {
      locale: en,
    }),
  }));

  const years = new Array(10).fill(null).map((_, i) => 2000 + i);

  const handleYearChange = ({ target: { value } }) => changeYear(value);
  const handleMonthChange = ({ target: { value } }) => changeMonth(value);

  return (
    <div>
      <select onChange={handleMonthChange} value={getMonth(date)}>
        {months.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>

      <select onChange={handleYearChange} value={getYear(date)}>
        {years.map(year => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

function DateFieldDD() {
  const [selected, setSelected] = useState(new Date());
  const [locale, setLocale] = useState('en');

  const handleOnChange = date => setSelected(date);
  const nextLocale = locale === 'en' ? 'es' : 'en';

  return (
    <div className="App">
      <button onClick={() => setLocale(nextLocale)}>
        switch locale to {nextLocale}
      </button>

      <Datepicker
        selected={selected}
        dateFormat="dd/MM/yyyy"
        onChange={handleOnChange}
        renderCustomHeader={props => customHeader({ ...props})}
        locale={locales[locale]}
      />
    </div>
  );
}


export default DateFieldDD;