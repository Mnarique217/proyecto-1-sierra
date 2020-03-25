/** Importacion de librerias */
import React from 'react';

/** Otros Componentes */
import {ControlInputComponent} from '../index'

/** Estilos del Keywords */
import './Keywords.scss';

/** Html del KeywordsComponent */
export const html = (args) => (
  <div id="KeywordsComponent" className="container-fluid">
    <div className="row">

      <div className="col-md-3">
        <ControlInputComponent
          id="description"
          icon="fa fa-shopping-bag"
          label="Search by descriptions"
          value=""
          handleChanges={args.handleChangeDescriptions}></ControlInputComponent>
      </div>

      <div className="col-md-3">
        <ControlInputComponent
          id="location"
          icon="fa fa-map-marker"
          label="Search by location"
          value=""
          handleChanges={args.handleChangeLocation}></ControlInputComponent>
      </div>

      <div className="col-md-3">
        <ControlInputComponent
          id="isFullTime"
          icon="fa fa-clock-o"
          label="Search by type job"
          value=""
          handleChanges={args.handleChangeisFullTime}></ControlInputComponent>
      </div>

      <div className="col-md-1">
        <button className="btn-search" onClick={args.submit}>Search</button>
      </div>

    </div>
  </div>
);