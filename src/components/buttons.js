import React from "react";

export function ButtonCancel({ btnClassName, btnAction, btnText }) {
  return (
    <button
      id="btnCancel"
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      {btnText}
    </button>
  );
}

export function ButtonConfirm({ btnClassName, btnText, btnAction }) {
  return (
    <button
      id="btnConfirm"
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      {btnText}
    </button>
  );
}

export function ButtonBack({ btnClass, btnAction }) {
  return (
    <button id="btnBack" className={btnClass} type="button" onClick={btnAction}>
      voltar
    </button>
  );
}

export function ButtonInsideTable({ btnText, btnAction }) {
  return (
    <button
      id="btnInsideTable"
      className="btnInsideTable"
      type="button"
      onClick={btnAction}
    >
      {btnText}
    </button>
  );
}

export function ButtonDrop({
  btnId,
  btnClassName,
  btnType,
  btnAction,
  imgBtnDrop,
  btnImg
}) {
  return (
    <button
      id={btnId}
      className={btnClassName}
      type={btnType}
      onClick={btnAction}
    >
      <img className={imgBtnDrop} src={btnImg} alt="Botão de Exibição" />
    </button>
  );
}

export function ButtonOption({ btnId, btnClassName, option, btnAction }) {
  return (
    <button
      id={btnId}
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      {option}
    </button>
  );
}
