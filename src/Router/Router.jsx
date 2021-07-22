import { Home } from '@material-ui/icons';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from '../Components/Footer/Footer';
import { NavBar } from '../Components/NavBar/NavBar';
import { HomePage } from '../Pages/HomePage/HomePage';
import { RentalDetails } from '../Pages/RentalDetails/RentalDetails';

const Router = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
            <Route exact path="/">
               <HomePage/>
            </Route>
            <Route exact path="/search">
              <RentalDetails/>
            </Route>

                </Switch>
          <Footer/>
        </div>
    );
};

export default Router;