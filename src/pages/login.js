import "../css/login.css";
import { useState } from "react";
import { InputLogin } from "../components/inputs";
import { Select, SelectOption } from "../components/select";
import { ButtonConfirm } from "../components/buttons";
import logoCinza from "../img/logo-cinza.png";
import see from "../img/see.svg";
import { ShowPass } from "../utils/showPass";

export default function Login() {
  const [emailLogin, setEmailLogin] = useState("");
  const [occupationLogin, setOccupationLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  return (
    <div className="login" data-login="login">
      <header className="logoLogin">
        <img src={logoCinza} alt="logo - Balcao App" />
      </header>
      <h2 className="titleLogin"> LOGIN </h2>
      <main className="mainLogin">
        <Select
          dataSelect="selectLogin"
          selectOnChange={(event) => setOccupationLogin(event.target.value)}
          selectValue={occupationLogin}
          selectClassName="selectLogin"
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
              <SelectOption optionValue="admin" option="Admin." />
            </>
          }
        />
        <InputLogin
          dataInput="emailLogin"
          inputOnChange={(event) => setEmailLogin(event.target.value)}
          inputValue={emailLogin}
          inputId="inputLoginEmail"
          inputType="email"
          inputPlaceHolder="email@exemplo.com"
        />
        <InputLogin
          dataInput="passLogin"
          inputOnChange={(event) => setPassLogin(event.target.value)}
          inputValue={passLogin}
          inputId="inputLoginPass"
          inputType="password"
          inputPlaceHolder="insira sua senha"
        />
        <span className="eye" onClick={(e) => ShowPass(e)}><img data-item="imgEye" id="imgEye" alt="Mostrar/esconder senha" src={see}/></span>
        <ButtonConfirm
          btnClassName="btnConfirm loginPage"
          btnText="ENTRAR"
          btnAction={(event) => console.log(event.target.value)}
        />
      </main>
    </div>
  );
}
