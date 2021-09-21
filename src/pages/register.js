import "../css/register.css";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Select, SelectOption } from "../components/select";
import { InputGlobal } from "../components/inputs";
import { ButtonCancel, ButtonConfirm } from "../components/buttons";
import { tempPassword } from "../utils/tempPass";
import { Navigator } from "../router/navigator";
// import { registerWorker } from "../services/auth";
import tituloCadastro from "../img/titulo-cadastro.png";

export default function Register() {
  const history = useHistory();
  const [occupation, setOccupation] = useState("");
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
 

  const workerFile = { occupation, userName, userEmail, tempPassword };
  console.log(workerFile);
  const registerWorker = async (event, {workerFile}) => {
    event.preventDefault();
    await fetch('https://lab-api-bq.herokuapp.com/users', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: workerFile.userName,
        email: workerFile.userEmail,
        password: workerFile.tempPassword,
        role: workerFile.occupation,
        restaurant: "Balcao APP",
      }),
    })
      .then((response) =>{
        const json = response.json()
        const token = json.token;
        const code = json.code;
        const email = json.email;
        localStorage.setItem("workerToken", token);
        localStorage.setItem("workerEmail", email);
        if (json.token !== undefined && code === 200) {
          console.log("Usuário cadastrado!");
        }
      })
      .catch((json) => {
        const code = json.code;
        if (code === 400 || code === 403) {
          throw new Error(json.message);
        }
      });
  };

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
          inputValue={userName}
          inputClassName="inputGlobal registerName"
          inputGlobalType="text"
          inputGlobalPlaceHolder="João da Silva Santos"
          inputContentEdit="true"
        />
        <p>email</p>
        <InputGlobal
          dataInput="email"
          inputOnChange={(event) => setEmail(event.target.value)}
          inputValue={userEmail}
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
            btnAction = {()=> Navigator(history, '/')}
          />
          <ButtonConfirm
            btnClassName="btnConfirm registerAdd"
            btnText="CONFIRMAR"
            btnAction={(event) => {
              registerWorker(event, { workerFile });
            }}
          />
        </div>
      </main>
    </div>
  );
}
