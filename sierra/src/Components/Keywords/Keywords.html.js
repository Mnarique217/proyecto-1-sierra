/** Importacion de librerias */
import React from './node_modules/react';

/** Otros Componentes */
import {ControlInputComponent} from '../index'

/** Estilos del Keywords */
import './Keywords.scss';

/** Html del KeywordsComponent */
export const html = (args) => (
  <div id="KeywordsComponent" className="container-fluid">
    <div className="row">

      <div className="col-md-3">
        <ControlInputTextComponent
          id="description"
          icon="fa fa-shopping-bag"
          label="Search by descriptions"
          handleChanges={args.handleChangeDescriptions}></ControlInputTextComponent>
      </div>

      <div className="col-md-3">
        <ControlInputTextComponent
          id="location"
          icon="fa fa-map-marker"
          label="Search by location"
          handleChanges={args.handleChangeLocation}></ControlInputTextComponent>
      </div>

      <div className="col-md-3">
        {/* <ControlInputComponent
          id="isFullTime"
          icon="fa fa-clock-o"
          label="Search by type job"
          value=""
          handleChanges={args.handleChangeisFullTime}></ControlInputComponent> */}
      </div>

      <div className="col-md-1">
        <button className="btn-search" onClick={args.submit}>Search</button>
      </div>

    </div>
  </div>
);