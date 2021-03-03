import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LoadingPage from './components/LoadingPage';


function Routes() {
    return (
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoadingPage} />
                <Route path="/home" exact component={HomeComponent} />

            </Switch>
       </BrowserRouter>
    )
}

export default Routes
