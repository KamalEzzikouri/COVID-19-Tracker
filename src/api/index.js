import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

export const FetchData = async (country) =>{

    let ChangedUrl = url;

    if(country){
      ChangedUrl = `${url}/countries/${country}`
    }

    try {
        // const { data: {confirmed, recovered, deaths, lastUpdate} } 
        const { data } = await axios.get(ChangedUrl);

        const ModifiedData ={
            Confirmed: data.confirmed,
            Recovered: data.recovered,
            Deaths: data.deaths,
            LastUpdate: data.lastUpdate
        }

        return ModifiedData;

    } catch (err) {

        console.log(err);
        
    }
}



export const FetchDailyData = async () =>{
    try {
        const {data } = await axios.get(`${url}/daily`)
     
        const ModifiedDailyData = data.map((dailydata) =>({
            Confirmed: dailydata.confirmed.total,
            Deaths: dailydata.deaths.total,
           // Recovered: dailydata.recovered.total,
            Date: dailydata.reportDate
        }))


        return ModifiedDailyData;

    } catch (err) {
        console.log(err);
    }
}


export const FetchCountries = async () =>{
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name)

    } catch (err) {
        console.log(err)
    }
}