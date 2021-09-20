import "../css/register.css";
import { useState } from "react";
import { Select, SelectOption } from "../components/select";
import { InputGlobal } from "../components/inputs";
import { ButtonCancel, ButtonConfirm } from "../components/buttons";
// import { registerWorker } from "../services/auth";
import tituloCadastro from "../img/titulo-cadastro.png";

export default function Register() {
  const [occupation, setOccupation] = useState('');
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  let tempPassword = Math.random().toString(6).slice(-6);
  
  const workerFile = {occupation, userName, userEmail, tempPassword};
  console.log(workerFile)
  const registerWorker = async (event, {workerFile}) => {
    const apiToSignin = "https://lab-api-bq.herokuapp.com/users";
    event.preventDefault();
    return await fetch(apiToSignin, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        name: workerFile.userName,
        email: workerFile.userEmail,
        password: workerFile.tempPassword,
        role: workerFile.occupation,
        restaurant: "Balcao APP",
      }),
    })
      .then((response) => response.json())
       .then((json)=> {
        const token = json.token;
        const code = json.code;
        const email = workerFile.email;
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
    <div className="register" data-register="">
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
          selectPlaceHolder="cargo"
          selectOptions={
            <>
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
            //   btnAction = {} aqui chama a função do botão
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
