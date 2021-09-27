import "../css/demand.css";
import tituloLancar from "../img/titulo-lancar.png";
import noteIcon from "../img/note.svg";
import { Select, SelectOption } from "../components/select";
import { useState } from "react";
import { ButtonBack, ButtonConfirm, ButtonOption } from "../components/buttons";
import { InputGlobal } from "../components/inputs";
import { Navigator } from "../router/navigator";
import { useHistory } from "react-router";

export default function Demand() {
  const history = useHistory();
  const [table, setTable] = useState();
  const [amount, setAmount] = useState();
  const [item] = useState("Exemplo de item ------------------------------- R$15");
  const [note, setNote] = useState();
  const [payment] = useState("valor total");

  return (
    <div className="demand" data-demand="demand">
      <header className="logoDemand">
        <img src={tituloLancar} alt="Lançar Pedido - Título" />
      </header>
      <main className="mainDemand">
        <Select
          dataSelect="selectTable"
          selectOnChange={(event) => setTable(event.target.value)}
          selectValue={table}
          selectClassName="selectTable"
          selectOptions={
            <>
              <SelectOption
                disabled
                selected
                optionValue="tag"
                option="qual o número da mesa?"
              />
              <SelectOption optionValue="one" option="Nº 1" />
              <SelectOption optionValue="two" option="Nº 2" />
              <SelectOption optionValue="three" option="Nº 3" />
              <SelectOption optionValue="four" option="Nº 4" />
              <SelectOption optionValue="five" option="Nº 5" />
            </>
          }
        />
        <table className="menuTable">
          <nav className="menuTab">
            <ButtonOption
              btnId="morningMenu"
              btnClassName="morningMenu"
              option="café da manhã"
              btnAction={() => console.log("clicou 1")}
            />
            <ButtonOption
              btnId="allDayMenu"
              btnClassName="allDayMenu"
              option="almoço e jantar"
              btnAction={() => console.log("clicou 2")}
            />
          </nav>
          <div className="itemsMenu">
            <InputGlobal
              dataInput="amount"
              inputOnChange={(event) => setAmount(event.target.value)}
              inputValue={amount}
              inputClassName="amount"
              inputGlobalType="number"
              inputGlobalPlaceHolder="0"
              inputContentEdit={true}
            />
            <p className="itemName">{item}</p>
          </div>
          <hr />
        </table>
        <div className="takeNote">
          <img src={noteIcon} alt="Adicionar observação" />
          <textarea
            data-item="note"
            onChange={(event) => setNote(event.target.value)}
            value={note}
            className="addNote"
            type="text"
            placeholder="observações"
            cols="30"
            row="10"
          />
        </div>
      </main>
      <table class="receiptTable">
        <h2 className="titleReceipt">R E C I B O</h2>
        <hr />
        <div className="itemsSelected">
          <InputGlobal
            dataInput="amountSelected"
            inputOnChange="false"
            inputValue={amount}
            inputClassName="amountSelected"
            inputGlobalType="text"
            inputGlobalPlaceHolder="0"
            inputContentEdit="false"
          />
          <p className="itemNameReceipt">{item}</p>
        </div>
        <p className="payment"> Total: R${payment}</p>
      </table>
      <div className="buttonsDemand">
        <ButtonBack
          btnClass="btnBack salonBack"
          btnAction={() => Navigator(history, "/home")}
        />
        <ButtonConfirm
          btnClassName="btnConfirm salonConfirm"
          btnText="FECHAR PEDIDO"
          btnAction={() => console.log("clicou no butao")}
        />
      </div>
    </div>
  );
}
