import {Select, SelectOption} from '../components/select'
import { InputGlobal } from '../components/inputs';
import { ButtonCancel, ButtonConfirm } from '../components/buttons'
import tituloCadastro from '../img/titulo-cadastro.png'

export default function Register() { 
  return (
    <div className="register">
      <img src={tituloCadastro} alt="Cadastro" />
      <p>qual a função?</p>
      <Select
        selectId="selectRegister"
        selectClassName="selectRegister"
        selectPlaceHolder="cargo"
        selectOptions={
          <>
            <SelectOption optionValue="salon" option="Garçom/Garçonete" />
            <SelectOption optionValue="kitchen" option="Chef de cozinha" />
          </>
        }
      />
      <p>nome completo</p>
      <InputGlobal
        inputGlobalId="nameRegister"
        inputClassName="inputGlobal"
        inputGlobalType="text"
        inputGlobalPlaceHolder="João da Silva Santos"
        inputContentEdit="true"
      />
      <p>email</p>
      <InputGlobal
        inputGlobalId="emailRegister"
        inputClassName="inputGlobal"
        inputGlobalType="email"
        inputGlobalPlaceHolder="exemplo@email.com"
        inputContentEdit="true"
      />
      <p>a senha temporária é</p>
      <div> RANDOM SENHA - fazer função </div>
      <div className="endButtons">
        <ButtonCancel
          btnClassName="cancelPopup"
          btnText="SAIR"
          //   btnAction = {} aqui chama a função do botão
        />
        <ButtonConfirm
          btnClassName="confirmAdd"
          btnText="CONFIRMAR"
          //   btnAction = {} aqui chama a função do botão
        />
      </div>
    </div>
  );

};
