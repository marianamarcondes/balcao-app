import "../css/login.css";
import { useState, useEffect} from "react";
import { useHistory } from "react-router";
import { Navigator } from "../router/navigator";
import { InputLogin } from "../components/inputs";
import { Select, SelectOption } from "../components/select";
import { ButtonConfirm } from "../components/buttons";
import { LoginWorker } from "../services/auth";
import logoCinza from "../img/logo-cinza.png";

export default function Login() {
  const history = useHistory();
  const [emailLogin, setEmailLogin] = useState("");
  const [occupationLogin, setOccupationLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [workerInfo, setWorkerInfo] = useState({});

  useEffect(() => {
    setWorkerInfo({emailLogin, occupationLogin, passLogin});
  }, [emailLogin, occupationLogin, passLogin]);
  
  return (
    <div className="login" data-login="login">
      <header className="logoLogin">
        <img src={logoCinza} alt="logo - Balcao App" />
        <h2 className="titleLogin"> LOGIN </h2>
      </header>
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
        <ButtonConfirm
          btnClassName="btnConfirm loginPage"
          btnText="ENTRAR"
          btnAction={()=> LoginWorker(workerInfo).then((Navigator(history, "/home")))}
        />
      </main>
    </div>
  );
}
