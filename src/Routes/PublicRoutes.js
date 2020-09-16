import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';


import { E404, Covid19} from '../Component';


class PublicRoutes extends Component {
    render(){
        return(
            <Switch>

                <Route 
                    path="/"
                    exact
                    component={Covid19} />
                    
                {/* <Route 
                    path="/"
                    exact
                    component={} /> */}


                     {/* this one have to be the last one */}

                <Route
                    path="*"
                    exact
                    component={E404}
                />


            </Switch>
        )
    }
}


export default PublicRoutes;