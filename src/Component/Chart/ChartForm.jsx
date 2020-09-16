import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import { FetchDailyData } from '../../api'



const ChartForm = ({ data, country }) =>{

    const [ DailyData, SetDailyData ] = useState([]);

    useEffect(() =>{

        const FetchData = async () =>{
           SetDailyData ( await FetchDailyData());
        }

        FetchData();
    }, []);

    const LineChar = (
        DailyData.length
        ? (
            <Line
            data ={{
                labels: DailyData.map (({ Date}) => Date),
                datasets: [{
                    data: DailyData.map (({ Confirmed }) => Confirmed),
                    label: 'Infected',
                    borderColor:'#3333ff', 
                    fill: true,
                }, 
                // {
                //     data: DailyData.map (({ Recovered }) => Recovered),
                //     label: 'Recovered',
                //     borderColor:'#3333bb', 
                //     backgroundColor:'rgba(0, 255, 0, 0.5)',
                //     fill: true,
                // },
            
                {
                    data: DailyData.map (({ Deaths }) => Deaths),
                    label: 'Deaths',
                    borderColor:'red', 
                    backgroundColor:'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        />
        ): null 
    );

    const BarChart = (
        data.Confirmed
        ?(
            <Bar 
            data = {{
                labels: [ 'Infected' , 'Recovered', 'Deaths' ],
                datasets: [{
                    label: 'Peoples',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'
                    ],
                    data: [data.Confirmed.value, data.Recovered.value, data.Deaths.value]
                }]

            }}
            options ={{
                legend: {display: false },
                title: {display: true ,fontColor:'#079992', fontFamily:'bolder' , fontSize:25, text: ` Current State in ${ country }`}
            }}
            />
        ): null

    );


    return(
        <div className="container">
            {country ? BarChart : LineChar}
        </div>
    )

}


export default ChartForm;