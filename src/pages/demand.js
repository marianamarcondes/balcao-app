import "../css/demand.css";
import tituloLancar from "../img/titulo-lancar.png";
import noteIcon from "../img/note.svg"
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
  const [item] = useState("Exemplo de item");
  const [note, setNote] = useState();


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
        <hr/>
        </table>
      </main>
      <div className="takeNote">
      <img src={noteIcon} alt="Adicionar observação"/>
      <InputGlobal
       dataInput="note"
       inputOnChange={(event)=> setNote(event.target.value)}
       inputValue={note}
       inputClassName="addNote"
       inputGlobalType="text"
       inputGlobalPlaceHolder="observações"
       />
       </div>
       <ButtonBack
       btnAction={() => Navigator(history, "/home")}
       />
       <ButtonConfirm
        btnClassName="btnConfirm salon"
        btnText="VER PEDIDO"
        btnAction={()=> console.log("clicou no butao")}
       />
    </div>
  );
}
