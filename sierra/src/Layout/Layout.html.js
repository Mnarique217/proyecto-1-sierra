/** Importacion de librerias */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/** Componentes Externos */
import {AsideComponent} from '../Components'

/** Estilos del LayoutComponent */
import './Layout.scss';

/** Html del LayoutComponent */
export const html = () => (
  <div id="LayoutComponent" className="container-fluid">

    <div className="row">
      <div className="col-md-12">
        <AsideComponent></AsideComponent>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <Router>
          <Switch>
            <Route exact path="/search"></Route>
            <Route path="/description-job"></Route>
          </Switch>
        </Router>
      </div>
    </div>
  </div>
);