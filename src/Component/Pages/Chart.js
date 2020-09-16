import React, { Component } from 'react';

import ChartForm from '../Chart/ChartForm';


class Chart extends Component{
    render(){
        return(
            <div>
                <ChartForm {...this.props } /> 
            </div>
        )
    }
}


export default Chart;