import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl  } from '@material-ui/core'

import { FetchCountries } from '../../api';


const CountryPickerForm = ( { handleCountryChange } ) =>{


    const [FetchDataCountries, SetFetchCountries ] = useState([]);

    useEffect(()=>{
        const FatchApiCountries = async () =>{
            SetFetchCountries (await FetchCountries())
        }

        FatchApiCountries();

    }, [SetFetchCountries])




    return(
        <div className="container CountryClass">
             <label htmlFor="Countries" className="CountriesClass">ِChoose a Country: </label>
            <FormControl className="FormControl select-style">
               
                <NativeSelect defaultValue="" 
            onChange = {(e) => handleCountryChange (e.target.value)} >
                    <option className="CountriesFlag" value="">Global</option>
                    {FetchDataCountries.map((country, i) =>
                     <option  className="CountriesFlag" key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )

}


export default CountryPickerForm;