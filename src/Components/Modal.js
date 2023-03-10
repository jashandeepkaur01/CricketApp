import React, { useState } from 'react'
import { InputField } from './InputField';
import './Modal.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from './Custom Components/CustomDatePicker';
import CustomDropdown from './Custom Components/CustomDropdown';
import TimePicker from 'react-time-picker';
import TimeSlider from './Custom Components/TimeSlider';
import LocationInput from './Custom Components/LocationInput';
import CustomInputDateTime from './Custom Components/CustomInputDateTime';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
  
  export function Modal({visible,title,toggleModal,SubmitText}) {
    const [value, setValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [time, onChange] = useState('10:00');
    const timeStr = "HH:MM";

    const handleChange = (e) => {
      setValue(e.target.value)
    };

    const handleSubmit =()=>{
      toggleModal();
    }
    
    const handleClick=()=>{
      toggleModal();
    }
    
    if(!visible){
      return null;
    }
    
    
  return (
    <div className='container'>
    <div className='header'>
    <header>{title}</header>
    <i id="icon" onClick={handleClick} className="bi bi-x-circle"></i>
    </div>
    {/* {children} */}
    <div className='content'>
      {/* map */}
      {/* teams */}

      <div className='p-2'></div>
      <CustomDropdown labelForDropdown={"Team 1"} dropdownOptions={["CSK","RCB","Australia"]}/>
      <CustomDropdown labelForDropdown={"Team 2"} dropdownOptions={["CSK","China","RCB","Australia"]}/>

      <CustomDropdown labelForDropdown={"Tournament"} dropdownOptions={["CSK","China","RCB","Australia"]}/>
      <CustomDropdown labelForDropdown={"Match Type"} dropdownOptions={["T20","Odi","Test"]}/>
      {/* <CustomDatePicker DateLabel="Select Match Day"/>
      <TimeSlider/> */}
      <LocationInput label={"Select Match Date and Time"}/>
      <CustomInputDateTime label={"Select Date and Time for the match"}/>
    </div>

    <button type="button" id="btn" className="btn btn-secondary" onClick={handleSubmit}>{SubmitText}</button>
    </div>
  )
}

