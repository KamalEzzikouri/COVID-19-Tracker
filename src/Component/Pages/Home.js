import React, { Component } from 'react';

import HomeForm from '../Home/HomeForm';


class Home extends Component{
    render(){
        return(
            <div>
                <HomeForm {...this.props } /> 
            </div>
        )
    }
}


export default Home;