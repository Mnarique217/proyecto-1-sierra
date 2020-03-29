/** Importacion de librerias */
import React from 'react';

/** Estilos del AsideComponent */
import './control-input-radio.scss';

/** Html del AsideComponent */
export const html = (args) => {
  return (
    <div id="ControlInputRadioComponent">
      <input  type="radio"
              id={`radio-${args.id}`}
              value={args.value}
              checked={args.checked}
              onChange={args.handleChanges} />

      <label>{args.label}</label>
    </div>
  )
};