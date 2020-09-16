import React, {Component} from 'react';



import { Cards, Chart, CountryPicker } from '../../Component';


import { FetchData } from '../../api'


class Covid19 extends Component{

  state ={
    data: {},
    country: '',

  }

  async componentDidMount(){

    const Fdata = await FetchData();
    
    this.setState({ data: Fdata })
  }


  handleCountryChange = async (country) =>{
    const Fdataapis = await FetchData(country);
    this.setState({ data: Fdataapis, country: country })
   
  }

  render(){
    const { data , country} = this.state;
  return (
    <div>
        <div className="container">
          <Cards  data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={ data } country= { country } />
        </div>
    </div>
  );
  }
}

export default Covid19;
