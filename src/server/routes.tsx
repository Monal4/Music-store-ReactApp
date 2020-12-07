import React, { useEffect, useState, Component } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Landing from "../pages/welcome";
import LogInPage from '../pages/signin.signup.page'
import {NavBar} from "../components/index";

const Routes = () => {

    const history = useHistory();

    const handleNavEvents = (eventKey:any) => {
        switch (eventKey) {
          case "/":
            history.push("/");
            break;
          default:
          console.log("caught unmatched path from navbar");
          break;
        }
      };

    return(
        <div>
            <header>
                <NavBar
                // onSelect={(eventKey: any, e?: React.SyntheticEvent<{}>) => handleNavEvents(e)}  
                />
            </header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        {/* <Landing /> */}
                        <LogInPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;