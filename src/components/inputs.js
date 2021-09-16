import React from "react";

export function InputLogin({
  inputId,
  inputType,
  inputPlaceHolder
}) {
  return (
      <input
        id={inputId}
        className="inputLogin" 
        type={inputType}
        placeholder={inputPlaceHolder}
      />
    
  );
}

export function InputGlobal({
  inputGlobalId,
  inputClassName,
  inputGlobalType,
  inputGlobalPlaceHolder,
  inputContentEdit
}) {
  return (
    <input
      id={inputGlobalId}
      class='inputGlobal'
      className={inputClassName}
      type={inputGlobalType}
      contenteditable={inputContentEdit}
      placeholder={inputGlobalPlaceHolder}
    />
  );
}
