import React, { useState } from 'react';
// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State, City }  from 'country-state-city';
// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'
import CustomDropdown from '../CustomDropdown';
import { useSelector } from 'react-redux';

// import CustomDropdown from './CustomDropdown';

function LocationInput() {
    const stadiums = useSelector((state)=>state.matchReducer)
    console.log("stadiums ",stadiums)
    const allCountries = Country.getAllCountries().map(obj => obj["name"]);
    const allStates = State.getAllStates().map(obj => obj["name"]);
    const allCities = City.getAllCities().map(obj => obj["name"]);
    return (
        <div className='p-2'>
            <CustomDropdown labelForDropdown={"Country"} dropdownOptions={allCountries}/>     
            <CustomDropdown labelForDropdown={"State"} dropdownOptions={allStates}/>     
            {/* <CustomDropdown labelForDropdown={"City"} dropdownOptions={allCities}/>      */}
        </div>
    )
}

export default LocationInput