import React, { Component } from 'react';

import E404Form from '../E404/E404Form';


class E404 extends Component{
    render(){
        return(
            <div>
                <E404Form {...this.props } />
            </div>
        )
    }
}

export default E404;