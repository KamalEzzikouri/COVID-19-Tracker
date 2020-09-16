import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'


const CardsForm = ({data: {Confirmed, Recovered, Deaths, LastUpdate}} ) =>{


    if(!Confirmed && !Recovered && !Deaths){
        return 'Loading ...'
    }

    return(
        <div className="container mb-5 mt-5">
            <Grid container spacing={3} justify="center">

     {/*Begin  First Card */}
                <Grid  item component = {Card} xs={12} md={3} className="Infected">
                    <CardContent className="Infected-Style">
                        <Typography className="TypeOfCovid TypeOfCovid-Infected" color="textSecondary" gutterBottom >
                            Infected
                        </Typography>
                        <Typography variant="h5" >
                            <CountUp
                            start={0}
                            end={Confirmed.value}
                            duration={5}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(LastUpdate).toLocaleString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Active cases of Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
   {/*End  First Card */}

    {/*Begin  Second Card */}   
                <Grid  item component = {Card} xs={12} md={3} className="Recovered">
                    <CardContent>
                        <Typography className="TypeOfCovid TypeOfCovid-Recovered" color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5" >
                        <CountUp
                            start={0}
                            end={Recovered.value}
                            duration={5}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                        {new Date(LastUpdate).toLocaleString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Recoveries from Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
{/*End  Second Card */} 

    {/*Begin  Third Card */} 
                <Grid  item component = {Card} xs={12} md={3} className="Deaths">
                    <CardContent>
                        <Typography className="TypeOfCovid TypeOfCovid-Deaths" color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" >
                        <CountUp
                            start={0}
                            end={Deaths.value}
                            duration={5}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                        {new Date(LastUpdate).toLocaleString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Deaths caused by Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
    {/*End  Third Card */} 

            </Grid>
        </div>
    )

}


export default CardsForm;