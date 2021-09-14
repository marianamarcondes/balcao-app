import React from "react";

export default function ButtonCancel({ btnClassName, btnAction }) {
  return (
    <button
      id="btnCancel"
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      CANCELAR
    </button>
  );
}

export function ButtonConfirm({ btnClassName, btnText, btnAction }) {
  return (
    <button
      id="btnConfirm"
      className={btnClassName}
      class="btnConfirm"
      type="button"
      onClick={btnAction}
    >
      {btnText}
    </button>
  );
}

export function ButtonLogout({ btnClassName, btnAction }) {
  return (
    <button
      id="btnLogout"
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      sair
    </button>
  );
}

export function ButtonBack({ btnAction }) {
  return (
    <button id="btnBack" className="btnBack" type="button" onClick={btnAction}>
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
  description,
  imgBtnDrop,
  btnImg
}) {
  return (
    <button
      id={btnId}
      class="btnDrop"
      className={btnClassName}
      type={btnType}
      onClick={btnAction}
    >
      {description}
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
