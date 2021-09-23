import React from "react";
import "../css/register.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Select, SelectOption } from "../components/select";
import { InputGlobal } from "../components/inputs";
import { ButtonCancel, ButtonConfirm } from "../components/buttons";
import { tempPassword } from "../utils/tempPass";
import { Navigator } from "../router/navigator";
import { RegisterWorker } from "../services/auth";
import tituloCadastro from "../img/titulo-cadastro.png";

export default function Register() {
  const history = useHistory();
  const [occupation, setOccupation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workerFile, setWorkerFile] = useState({});

  useEffect(() => {
    setWorkerFile({occupation, name, email, tempPassword});
  }, [occupation, name, email]);

  return (
    <div className="register" data-register="signin">
      <header className="logoRegister">
        <img src={tituloCadastro} alt="Cadastro" />
      </header>
      <main className="mainRegister">
        <p>qual a função?</p>
        <Select
          dataSelect="select"
          selectOnChange={(event) => setOccupation(event.target.value)}
          selectValue={occupation}
          selectClassName="selectRegister"
          selectOptions={
            <>
              <SelectOption
                disabled
                selected
                optionValue="tag"
                option="selecione o cargo"
              />
              <SelectOption optionValue="waiter" option="Garçom/Garçonete" />
              <SelectOption optionValue="chef" option="Chef de cozinha" />
            </>
          }
        />
        <p>nome completo</p>
        <InputGlobal
          dataInput="name"
          inputOnChange={(event) => setName(event.target.value)}
          inputValue={name}
          inputClassName="inputGlobal registerName"
          inputGlobalType="text"
          inputGlobalPlaceHolder="João da Silva Santos"
          inputContentEdit="true"
        />
        <p>email</p>
        <InputGlobal
          dataInput="email"
          inputOnChange={(event) => setEmail(event.target.value)}
          inputValue={email}
          inputClassName="inputGlobal registerEmail"
          inputGlobalType="email"
          inputGlobalPlaceHolder="exemplo@email.com"
          inputContentEdit="true"
        />
        <p className="firstPassRegister">
          a senha temporária é <br />
          <span className="tempPass" data-item="pass">
            {tempPassword}
          </span>
        </p>

        <div className="endButtons">
          <ButtonCancel
            btnClassName="btnCancel registerExit"
            btnText="SAIR"
            btnAction={() => Navigator(history, "/")}
          />
          <ButtonConfirm
            btnClassName="btnConfirm registerAdd"
            btnText="CONFIRMAR"
            btnAction={() => RegisterWorker(workerFile)}
          />
        </div>
      </main>
    </div>
  );
}
