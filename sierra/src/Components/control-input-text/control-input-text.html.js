/** Importacion de librerias */
import React from 'react';

/** Estilos del AsideComponent */
import './control-input-text.scss';

/** Html del AsideComponent */
export const html = (args) => {
  return (
    <div id="ControlInputTextComponent">
      <input  type="text"
              ref="input-search"
              id={`input-search-${args.id}`}
              className="input-text"
              value={args.value}
              placeholder={args.placeholder}
              onChange={args.handleChanges}/>
    </div>
  )
};