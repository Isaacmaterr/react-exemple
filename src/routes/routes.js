import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Painel from './../Painel';
import PrivateRoute from './Guards/PrivateRoute'


const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Painel} />
      <PrivateRoute  path="/sobre" component={()=><h1>Hello World</h1>} />
    </Switch>
  </BrowserRouter>
)
export default Routes;