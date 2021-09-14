import React from "react";

export function Select({ selectId, selectClassName, selectPlaceHolder, selectOptions}) {
  return (
    <select
      id={selectId}
      className={selectClassName}
      placeholder={selectPlaceHolder}
    >{selectOptions}</select>
  );
}

export function SelectOption({optionValue, option}) {
  return <option value={optionValue}>{option}</option>;
}
