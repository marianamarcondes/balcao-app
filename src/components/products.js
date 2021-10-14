import { React } from "react";
import iconTime from "../img/icon-time.svg";
import { ButtonDrop } from "./buttons";
import { InputGlobal } from "./inputs";

export function ItemsSalon({
  dataItemMenu,
  amountOnChange,
  editContent,
  itemName,
  itemPrice,
}) {
  return (
    <>
      <div className="itemsMenu" data-item={dataItemMenu}>
        <InputGlobal
          inputOnChange={amountOnChange}
          inputClassName="amount"
          inputGlobalType="number"
          inputGlobalPlaceHolder="0"
          inputContentEdit={editContent}
        />
        <p className="itemName">{itemName}</p>
        <p className="itemPrice">{itemPrice}</p>
      </div>
      <hr />
    </>
  );
}

export function ItemBurger({
  dataItemMenu,
  amountOnChange,
  amount,
  editContent,
  itemFlavor,
  itemComplement,
  itemPrice,
  burgerOption,
}) {
  let conect = " com ";
  if (itemComplement === null) {
    conect = "";
  }

  return (
    <>
      <div className="itemsMenu" data-itemMenu={dataItemMenu}>
        <InputGlobal
          inputOnChange={amountOnChange}
          inputValue={amount}
          inputClassName="amount"
          inputGlobalType="number"
          inputGlobalPlaceHolder="0"
          inputContentEdit={editContent}
        />
        <p className="itemName Hamburguer">
          {itemFlavor}
          {conect}
          {itemComplement}
        </p>
        <p className="itemPrice">{itemPrice}</p>
        <p className="burgerOption">{burgerOption}</p>
      </div>
      <hr />
    </>
  );
}
export function ItemTable({ orderTime, table, classBtnDrop, btnDropAction }) {
  return (
    <div className="itemsTable">
      <div className="orderTime">
        <img src={iconTime} alt="Horário que o pedido foi feito" />
        <p>{orderTime}</p>
      </div>
      <p className="numberTable">{table}</p>
      <ButtonDrop
        btnId={"btnDrop"}
        btnClassName={classBtnDrop}
        btnType={"button"}
        btnAction={btnDropAction}
        ClassImgBtnDrop={"imgDropButton"}
      />
    </div>
  );
}
