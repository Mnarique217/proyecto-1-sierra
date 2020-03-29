/** Importacion de librerias */
import React from 'react';

/** Estilos del AsideComponent */
import './title-icon.scss';

/** Html del AsideComponent */
export const html = (args) => (
  <div id="TitleIconComponent">
    <div className="icon-box wow fadeInUp">
      <div className="icon">
        <i className={args.icon}></i>
      </div>
    </div>

    <label className="sub-title">{args.title}</label>
  </div>
);