import React, { Component } from 'react';

import CardsForm from '../Cards/CardsForm';


class Cards extends Component{
    render(){
        return(
            <div>
                <CardsForm {...this.props } /> 
            </div>
        )
    }
}


export default Cards;