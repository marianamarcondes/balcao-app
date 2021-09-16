import React from 'react';
import ButtonCancel, { ButtonConfirm, ButtonOption } from './buttons';
import { InputGlobal } from './inputs';

export function PopUpWelcome() {
  return (
    <div id='modal' className='modal'>
      <h2 className='welcome'>BEM VINDO!</h2>
      <p className='welcomeMessage'>
        como é seu primeiro acesso, escolha uma senha definitiva:
      </p>
      <p className='passInfo'>6 dígitos númericos</p>
     <InputGlobal
     inputGlobalId = 'inputPassPopup'
     inpuGlobaltValue = 'number'
     inputGlobalType = 'password'
     inputGlobalPlaceHolder = ' *  *  *  *  *  *'
     />
     <div className='endButtons'>
      <ButtonCancel
        btnClassName='cancelPopup'
        btnText='FECHAR'
        //   btnAction = {} aqui chama a função do botão
      />
      <ButtonConfirm
        btnClassName='savePass'
        btnText='SALVAR'
        //   btnAction = {} aqui chama a função do botão
      />
      </div>
    </div>
  );
}

export function PopUpHamb() {
  return (
    <div id='modal' className='modal'>
      <h2 className='chooseHamb'>Qual hamburguer?</h2>
      <ButtonOption
        btnId='cow'
        btnClassName='options'
        option='bovino'
        //   btnAction = {} aqui chama a função do botão
      />
      <ButtonOption
        btnId='chicken'
        btnClassName='options'
        option='frango'
        //   btnAction = {} aqui chama a função do botão
      />
       <ButtonOption
        btnId='veggie'
        btnClassName='options'
        option='vegetariano'
        //   btnAction = {} aqui chama a função do botão
      />
      <div className='endButtons'>
      <ButtonCancel
        btnClassName='cancelPopup'
        btnText='CANCELAR'
        //   btnAction = {} aqui chama a função do botão
      />
      <ButtonConfirm
        btnClassName='nextPopUp'
        btnText='PRÓXIMO'
        //   btnAction = {} aqui chama a função do botão
      />
      </div>
    </div>
  );
};

export function PopUpAdd() {
  return (
    <div id='modal' className='modal'>
      <h2 className='titleAdd'>Adicionais</h2>
      <p className='addMessage'>+ R$1,00 cada</p>
      <ButtonOption
        btnId='cheese'
        btnClassName='options'
        option='queijo'
        //   btnAction = {} aqui chama a função do botão
      />
      <ButtonOption
        btnId='egg'
        btnClassName='options'
        option='ovo'
        //   btnAction = {} aqui chama a função do botão
      />
      <div  className='endButtons'>
      <ButtonCancel
        btnClassName='cancelPopup'
        btnText='FECHAR'
        //   btnAction = {} aqui chama a função do botão
      />
      <ButtonConfirm
        btnClassName='confirmAdd'
        btnText='CONFIRMAR'
        //   btnAction = {} aqui chama a função do botão
      />
      </div>
    </div>
  );
};

export function PopUpObserve() {
  return (
    <div id='modal' className='modal'>
      <h2 className='note'>Alguma observação?</h2>
     <InputGlobal
     inputGlobalId = 'inputNote'
     inpuGlobaltValue = 'text'
     inputGlobalType = 'text'
     inputGlobalPlaceHolder = 'Clique aqui para começar a anotar.'
     />
     <div  className='endButtons'>
      <ButtonCancel
        btnClassName='closeNote'
        btnText='FECHAR'
        //   btnAction = {} aqui chama a função do botão
      />
      <ButtonConfirm
        btnClassName='saveNote'
        btnText='CONFIRMAR'
        //   btnAction = {} aqui chama a função do botão
      />
     </div>
    </div>
  );
};
