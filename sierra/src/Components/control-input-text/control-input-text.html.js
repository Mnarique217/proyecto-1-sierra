/** Importacion de librerias */
import React from './node_modules/react';

/** Estilos del AsideComponent */
import './ControlInput.scss';

/** Html del AsideComponent */
export const html = (state, onChange) => {
  return (
    <div id="ControlInputComponent">

      <div className="icon-box wow fadeInUp">
        <div className="icon">
          <i className={state.icon}></i>
        </div>
      </div>

      <label htmlFor={`input-search${state.id}`} className="title">{state.label}</label>
      <input type="text" ref="inputSearch" id={`input-search${state.id}`} className="input-text"
        onChange={onChange} value={state.value} />

      {/* <div className="input-radio-container">
        <input type="radio" value="true" />
        <p>Full Time </p>
      </div>

      <div className="input-radio-container">
        <input type="radio" value="false" />
        <p>Partial Time </p>
      </div> */}




    </div>
  )
};