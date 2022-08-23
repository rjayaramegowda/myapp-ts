import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

function DateFeildDropdown() {

    const [dob, setDob] = useState('2022-08-25');
    return (
        <div>
            <FormControl value={dob} type="date" name="dob" />
        </div>
    );
}

export default DateFeildDropdown;