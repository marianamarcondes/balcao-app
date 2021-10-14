import "../css/login.css";
import { useState, useEffect} from "react";
import { useHistory } from "react-router";
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

  const [emailPlaceholder, setEmailPlaceholder]= useState("email@exemplo.com");
  const [passPlaceholder, setPassPlaceholder] = useState("insira sua senha");
  const [selection, setSelection] = useState("selecione o cargo");
  
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
                option={selection}
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
          inputPlaceHolder={emailPlaceholder}
        />
        <InputLogin
          dataInput="passLogin"
          inputOnChange={(event) => setPassLogin(event.target.value)}
          inputValue={passLogin}
          inputId="inputLoginPass"
          inputType="password"
          inputPlaceHolder={passPlaceholder}
        />
        <ButtonConfirm
          btnClassName="btnConfirm loginPage"
          btnText="ENTRAR"
          btnAction={(event)=> {
            if (occupationLogin === "" || occupationLogin === null){
             setSelection("Por favor, informe o cargo.")
            }
            if(emailLogin === "" || emailLogin.length > 5 || emailLogin === null){
             setEmailPlaceholder("Por favor, insira um email.");
            }
            if (passLogin === "" || passLogin.length > 6 || passLogin === null){
              setPassPlaceholder("Por favor, insira uma senha válida.")
            }
            else {
            LoginWorker(workerInfo, history)}
          }}
        />
      </main>
    </div>
  );
}
