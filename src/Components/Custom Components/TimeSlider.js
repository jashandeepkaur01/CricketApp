import React from 'react'

function TimeSlider() {
  return (
    <span className='bg-white mt-20 w-59 p-2'>
        {/* <label>Select Match Time: </label> */}
        
        <label for="appt">Select Match time:</label>
        <input type="time" id="appt" name="appt"></input>

        {/* <TimePicker onChange={onChange} value={time} /> */}
    </span>
  )
}

export default TimeSlider