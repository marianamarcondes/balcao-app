import "../css/demand.css";
import tituloLancar from "../img/titulo-lancar.png";
import noteIcon from "../img/note.svg";
import { Select, SelectOption } from "../components/select";
import { useEffect, useState } from "react";
import { ButtonBack, ButtonConfirm, ButtonOption } from "../components/buttons";
import { InputGlobal } from "../components/inputs";
import { Navigator } from "../router/navigator";
import { useHistory } from "react-router";
import { GetProducts } from "../services/data";
import { ItemsSalon } from "../components/products";

export default function Demand() {
  const history = useHistory();
  const userToken = localStorage.getItem("workerToken");

  const [menu, setMenu] = useState("breakfast");
  const [breakfast, setBreakfast] = useState([]);
  const [burguers, setBurguers] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);
 
  const [table, setTable] = useState();
  const [note, setNote] = useState();
  const [payment] = useState("valor total");
  
  useEffect(() => {
  GetProducts(userToken).then((list)=>{
      setBreakfast(list.filter((item) => item.type === "breakfast"));
      setBurguers(list.filter((item) => item.sub_type === "hamburguer"))
      setSides(list.filter((item) => item.sub_type === "side"))
      setDrinks(list.filter((item) => item.sub_type === "drinks"))
    })
  }, []);

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
              btnAction={() => setMenu("breakfast")}
            />
            <ButtonOption
              btnId="allDayMenu"
              btnClassName="allDay Burguers"
              option="Hambúrgueres"
              btnAction={() => setMenu("burgues")}
            />
            <ButtonOption
              btnId="allDayMenu"
              btnClassName="allDay Side"
              option="Acompanhamentos"
              btnAction={() => setMenu("sides")}
            />
            <ButtonOption
              btnId="allDayMenu"
              btnClassName="allDay Drink"
              option="Bebidas"
              btnAction={() => setMenu("drinks")}
            />
          </nav>
          {menu === "breakfast" ? (
            <div className="menuBreakfast">
              {
                breakfast.map(item => {
                  return (
                    <ItemsSalon
                      itemsOnChange={(event) => console.log(event.target.value)}
                      amount={Number}
                      editContent={true}
                      itemName={item.name}
                      itemPrice={item.price}
                    />
                  );
                })}
            </div>
          ) : (
            <div className="menuAllDay">
              {
                burguers.map(item => {
                  return (
                    <ItemsSalon
                      itemsOnChange={(event) => console.log(event.target.value)}
                      amount={console.log("amount")}
                      editContent={true}
                      itemName={item.name}
                      itemPrice={item.price}
                    />
                  );
                })}
            </div>
          )}
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
      <table className="receiptTable">
        <h2 className="titleReceipt">R E C I B O</h2>
        <hr />
        <div className="itemsSelected">
          <InputGlobal
            dataInput="amountSelected"
            inputOnChange="false"
            inputValue={console.log("amount")}
            inputClassName="amountSelected"
            inputGlobalType="text"
            inputGlobalPlaceHolder="0"
            inputContentEdit="false"
          />
          <p className="itemNameReceipt">{console.log("item")}</p>
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
