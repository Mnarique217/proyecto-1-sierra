/** Importacion de librerias */
import React from 'react';

/** Estilos del AsideComponent */
import './Aside.scss';

/** Html del AsideComponent */
export const html = (state, props) => (
  <div id="AsideComponent" className="container-fluid aside-container">
    <div className="row">
      <div className="col-md-2 text-center">
        <h2 class="title">Keywords</h2>
      </div>

      <div className="col-md-3">
        <div class="icon-box wow fadeInUp">
          <div class="icon"><i class="fa fa-shopping-bag"></i></div>
          <h4 class="title">Search by descriptions</h4>
        </div>
        <input type="text" className="input-text" />
      </div>

      <div className="col-md-3">
        <div class="icon-box wow fadeInUp">
          <div class="icon"><i class="fa fa-map-marker"></i></div>
          <h4 class="title">Search by location</h4>
        </div>
        <input type="text" className="input-text" />
      </div>

      <div className="col-md-2">
        <div class="icon-box wow fadeInUp">
          <div class="icon"><i class="fa fa-clock-o"></i></div>
          <h2 class="title">Search by type job</h2>
        </div>

        <div className="input-radio-container">
          <input type="radio" value="true" />
          <p>Full Time </p>

          <input type="radio" value="false" />
          <p>Partial Time </p>
        </div>

      </div>

      <div className="col-md-1">
        <button className="btn-search">Search</button>
      </div>


    </div>
  </div>
);