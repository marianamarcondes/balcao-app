import React from "react";
import iconTime from "../img/icon-time.svg";
// import { ButtonDrop } from "./buttons";
import { InputGlobal } from "./inputs";

export function ItemsSalon({ itemsOnChange, amount, editContent, itemName, itemPrice }){
  return (
    <><div className="itemsMenu">
      <InputGlobal
        dataInput="amount"
        inputOnChange={itemsOnChange}
        inputValue={amount}
        inputClassName="amount"
        inputGlobalType="number"
        inputGlobalPlaceHolder="0"
        inputContentEdit={editContent} />
      <p className="itemName">{itemName}</p>
      <p className="itemPrice">{itemPrice}</p>
    </div><hr /></>
  )
}
export function ItemsKitchen({ orderTime, table }) {
  return (
    <div className="itemsMenu">
      <div className="orderTime">
      <img src={iconTime} alt="Horário que o pedido foi feito" />
      <p>{orderTime}</p>
      </div>
      <p className="numberTable">{table}</p>
    </div>
  );
}
