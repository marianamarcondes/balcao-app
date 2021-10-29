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

export function ButtonOption({ btnClassName, option, btnAction }) {
  return (
    <button
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      {option}
    </button>
  );
}

// export function ButtonInsideTable({ btnText, btnAction }) {
//   return (
//     <button
//       id="btnInsideTable"
//       className="btnInsideTable"
//       type="button"
//       onClick={btnAction}
//     >
//       {btnText}
//     </button>
//   );
// }