import React, { useState } from 'react';
// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State, City }  from 'country-state-city';
// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'
import CustomDropdown from '../CustomDropdown';
import { useDispatch, useSelector } from 'react-redux';

// import CustomDropdown from './CustomDropdown';

function LocationInput() {
    const stadiumList = useSelector((state)=>state.matchReducer)
    console.log("stadiums ",stadiumList)
    const dispatch = useDispatch();
    
    const allCountries = Country.getAllCountries().map(obj => obj["name"]);
    const allStates = State.getAllStates().map(obj => obj["name"]);
    const allCities = City.getAllCities().map(obj => obj["name"]);
    return (
        <div className='p-2'>
        <button onClick={()=>dispatch(stadiums([12,23]))}>dis</button>
            <CustomDropdown labelForDropdown={"Country"} dropdownOptions={allCountries}/>
            <CustomDropdown labelForDropdown={"State"} dropdownOptions={allStates}/>
            {/* <CustomDropdown labelForDropdown={"City"} dropdownOptions={allCities}/>*/}
        </div>
    )
}

export default LocationInput