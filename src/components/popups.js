import React from "react";
import { ButtonConfirm, ButtonCancel } from "./buttons";
// import { InputGlobal } from "./inputs";

// export const PopUpWelcome = () => {
//   return (
//     <div id="modal" className="modal">
//       <h2 className="welcome">BEM VINDO!</h2>
//       <p className="welcomeMessage">
//         como é seu primeiro acesso, escolha uma senha definitiva:
//       </p>
//       <p className="passInfo">6 dígitos númericos</p>
//       <InputGlobal
//         inputGlobalId="inputPassPopup"
//         inpuGlobaltValue="number"
//         inputGlobalType="password"
//         inputGlobalPlaceHolder=" *  *  *  *  *  *"
//       />
//       <div className="endButtons">
//         <ButtonCancel
//           btnClassName="cancelPopup"
//           btnText="FECHAR"
//           //   btnAction = {} aqui chama a função do botão
//         />
//         <ButtonConfirm
//           btnClassName="savePass"
//           btnText="SALVAR"
//           //   btnAction = {} aqui chama a função do botão
//         />
//       </div>
//     </div>
//   );
// };

export function PopUpNote({ closeNote, saveNote }) {
  return (
    <div id="modal" className="modal">
      <div className="modalInside">
        <h2 className="note">Alguma observação?</h2>
        <textarea
          className="inputNote"
          rows="10"
          cols="50"
          placeholder="Digite aqui as observações"
        />
        <div className="endButtons">
          <ButtonCancel
            btnClassName="closeNote"
            btnText="FECHAR"
            btnAction={closeNote}
          />
          <ButtonConfirm
            btnClassName="saveNote"
            btnText="SALVAR"
            btnAction={saveNote}
          />
        </div>
      </div>
    </div>
  );
}

export function Receipt ({amount, item, price, payment, confirmOrder, closeOrder}) {
  return (
    <div id="modal" className="modal">
    <div className="modalInside">
      <h2 className="titleReceipt">comanda</h2>
      <div className="itemsSelected">
        <p className="itemReceipt"> {amount}x  {item} --- R$ {price}</p>
      </div>
      <p className="payment"> total: R$ {payment}</p>
    <div className="endButtons">
          <ButtonCancel
            btnClassName="closeNote"
            btnText="FECHAR"
            btnAction={closeOrder}
          />
          <ButtonConfirm
            btnClassName="saveNote"
            btnText="CONFIRMAR"
            btnAction={confirmOrder}
          />
    </div>
    </div>
    </div>
  );
};
