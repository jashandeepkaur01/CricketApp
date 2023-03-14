import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
function CustomInputDateTime() {
    const [value, onChange] = useState(new Date());
    return (
    <>  
      <DateTimePicker onChange={onChange} value={value} />
    </>
  )
}

export default CustomInputDateTime