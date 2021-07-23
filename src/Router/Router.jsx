import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/NavBar/NavBar";
import { HomePage } from "../Pages/HomePage/HomePage";
import { RentalDetails } from "../Pages/RentalDetails/RentalDetails";
import {ProfilePage} from "../Pages/ProfilePage/ProfilePage"

const Router = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search">
          <RentalDetails />
        </Route>
        <Route path="/vehicleDetails/:id"></Route>
        <Route exact path="/account">
          <ProfilePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Router;
