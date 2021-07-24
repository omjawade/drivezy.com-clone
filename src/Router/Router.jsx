import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";
import { NavBar } from "../Components/NavBar/NavBar";
import { HomePage } from "../Pages/HomePage/HomePage";
import { RentalDetails } from "../Pages/RentalDetails/RentalDetails";
import { ProfilePage } from "../Pages/ProfilePage/ProfilePage";
import PaymentConfirm from "../Pages/PaymentConfirmation/PaymentConfirm";

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
        <Route path="/vehicleDetails/:id">
          <PaymentConfirm />
        </Route>
        <Route
    path="/account"
    render={({ match: { url } }) => (
      <>
       <Route path={`${url}`} >
          <Redirect to={`${url}/profile`} />
        </Route>
        <Route exact path={`${url}/:tab`}>
        <ProfilePage />
        </Route>
  
      </>
    )}
  />
     <Route >
          <Redirect to="/" />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default Router;
