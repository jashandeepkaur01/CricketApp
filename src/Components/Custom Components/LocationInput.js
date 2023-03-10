import React, { useState } from 'react';
// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State, City }  from 'country-state-city';
// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'

import CustomDropdown from './CustomDropdown';

function LocationInput() {
    const allCountries = Country.getAllCountries().map(obj => obj["name"]);

    return (
        <div className='p-2'>
            <CustomDropdown labelForDropdown={"Country"} dropdownOptions={allCountries}/>
            {console.log()}        
        </div>
    )
}

export default LocationInput