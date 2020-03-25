/** Importacion de librerias */
import React from 'react';

/** Otros Componentes */
import {KeywordsComponent} from '../index';

/** Estilos del AsideComponent */
import './Aside.scss';

/** Html del AsideComponent */
export const html = (args) => (
  <aside id="AsideComponent" className="container-fluid">
    <div className="row">

      <div className="col-md-2 text-center">
        <h2 className="title">{args.title}</h2>
      </div>

      <div className="col-md-10">
        <KeywordsComponent></KeywordsComponent>
      </div>

    </div>
  </aside>
);