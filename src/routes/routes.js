import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Painel from './../Painel';
import PrivateRoute from './Guards/PrivateRoute'
import Cadastro from './../Cadastro'


const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Painel} />
      <Route exact path="/cadastro" component={Cadastro} />
      <PrivateRoute  path="/sobre" component={()=><h1>Hello World</h1>} />
    </Switch>
  </BrowserRouter>
)
export default Routes;