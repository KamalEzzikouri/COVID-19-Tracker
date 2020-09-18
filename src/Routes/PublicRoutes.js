import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';


import { E404, Covid19} from '../Component';

import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';


const PublicRoutes = () => {

    

    // <!-- Global site tag (gtag.js) - Google Analytics -->

    ReactGA.initialize('UA-176766366-2');
    const history = createBrowserHistory()
    history.listen(location => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });

       ReactGA.event({
        category: 'Users',
        action: 'Kamal Ezzikouri, Welcome to my Portfolio Website'
        });

    useEffect(() => {
         ReactGA.pageview(window.location.pathname + window.location.search)
     }, [history])


        return(
        <Router history={history}>
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
        </Router>
        );
    
}


export default PublicRoutes;