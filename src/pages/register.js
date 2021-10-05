import "../css/register.css";
import { React,  useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Select, SelectOption } from "../components/select";
import { InputGlobal } from "../components/inputs";
import { ButtonCancel, ButtonConfirm } from "../components/buttons";
import { tempPassword } from "../utils/simpleFunc";
import { Logout, RegisterWorker } from "../services/auth";
import tituloCadastro from "../img/titulo-cadastro.png";

export default function Register() {
  const history = useHistory();
  const [occupation, setOccupation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workerFile, setWorkerFile] = useState({});
  
  const [selectRegister, setSelecRegister] = useState("selecione o cargo");
  const [namePlaceholder, setNamePlaceholder] = useState("João da Silva Santos");
  const [emailPlaceholder, setEmailPlaceholder] = useState("exemplo@email.com");
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
                option={selectRegister}
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
          inputGlobalPlaceHolder={namePlaceholder}
          inputContentEdit="true"
        />
        <p>email</p>
        <InputGlobal
          dataInput="email"
          inputOnChange={(event) => setEmail(event.target.value)}
          inputValue={email}
          inputClassName="inputGlobal registerEmail"
          inputGlobalType="email"
          inputGlobalPlaceHolder={emailPlaceholder}
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
            btnAction={() => Logout(history)}
          />
          <ButtonConfirm
            btnClassName="btnConfirm registerAdd"
            btnText="CONFIRMAR"
            btnAction={() => {
              if (occupation === "" || occupation === null){
                setSelecRegister("Por favor, insira o cargo.")
              }
              if (name === "" || name === null || name.length > 8){
                setNamePlaceholder("Por favor, insira o nome completo.")
              }
              if(email === "" || email === null || email.length > 5 ){
                setEmailPlaceholder("Por favor, insira um email válido.")
              }
              else {
              RegisterWorker(workerFile)}
            }}
          />
        </div>
      </main>
    </div>
  );
}
