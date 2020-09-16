import React, { Component } from 'react';

import CountryPickerForm from '../CountryPicker/CountryPickerForm';


class CountryPicker extends Component{
    render(){
        return(
            <div>
                <CountryPickerForm {...this.props } /> 
            </div>
        )
    }
}


export default CountryPicker;