import React from "react";

export function Select({ selectId, selectClassName, selectPlaceHolder }) {
  return (
    <select
      id={selectId}
      className={selectClassName}
      placeholder={selectPlaceHolder}
    ></select>
  );
}

export function SelectOption({optionValue, option}) {
  return <option value={optionValue}>{option}</option>;
}
