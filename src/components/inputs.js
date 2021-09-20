import React from "react";

export function InputLogin({
  inputName,
  dataInput,
  inputOnChange,
  inputValue,
  inputId,
  inputType,
  inputPlaceHolder,
}) {
  return (
      <input
        name={inputName}
        data-item={dataInput}
        onChange={inputOnChange}
        value={inputValue}
        id={inputId}
        className="inputLogin" 
        type={inputType}
        placeholder={inputPlaceHolder}
      />
    
  );
}

export function InputGlobal({
  inputName,
  dataInput,
  inputOnChange,
  inputValue,
  inputGlobalId,
  inputClassName,
  inputGlobalType,
  inputGlobalPlaceHolder,
  inputContentEdit
}) {
  return (
    <input
    name={inputName}
      data-item={dataInput}
      onChange={inputOnChange}
      value={inputValue}
      id={inputGlobalId}
      className={inputClassName}
      type={inputGlobalType}
      contentEditable={inputContentEdit}
      placeholder={inputGlobalPlaceHolder}
    />
  );
}
