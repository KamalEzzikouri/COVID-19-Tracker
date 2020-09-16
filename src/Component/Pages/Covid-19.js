import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Covid19Form from '../Covid-19/Covid-19Form';

class Covid19 extends Component {
    render(){
        return (
            <div>
                <Layout render = { () => <Covid19Form {...this.props } />} />
            </div>
        );
    }
}

export default Covid19;