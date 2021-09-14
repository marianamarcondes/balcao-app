import React from 'react';
import { ButtonDrop } from './buttons'
import abrirSelecaoAzul from '../img/abrir-selecao-azul.png'
// import fecharSelecaoAzul from '../img/fechar-selecao-azul.png'

export function tableAdd({produto }) {
    return (
    //  input number -+ com contenteditable 
    <p>{produto}</p>
    );
  };

  export function tableReady({ functionofbutton, functionfortablename}) {
    return (
       //  input com data/hora do pedido 
    <ButtonDrop 
    btnId = 'btnTableBlue'
    btnClassName = 'btnTableBlue'
    btnType = 'button'
    btnAction = {functionofbutton}
    description = {functionfortablename}
    imgBtnDrop = 'imgBtnTableBlue'
    btnImg = {abrirSelecaoAzul}
    />
    );
  };
