import "../css/demand.css";
import tituloLancar from "../img/titulo-lancar.png";
import { Select, SelectOption } from "../components/select";
import { useState } from "react";
import { ButtonOption } from "../components/buttons";
export default function Demand() {
  const [table, setTable] = useState();

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
                option="Qual o número da mesa?"
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
          <div className="menuTab">
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
          </div>
        
        </table>
      </main>
    </div>
  );
}
