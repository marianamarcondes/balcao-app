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
import { ItemsSalon, ItemBurger } from "../components/products";

export default function Demand() {
  const history = useHistory();
  const userToken = localStorage.getItem("workerToken");

  const [menu, setMenu] = useState("breakfast");
  const [breakfast, setBreakfast] = useState([]);
  const [simpleBurgers, setSimpleBurgers] = useState([]);
  const [doubleBurgers, setDoubleBurgers] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [table, setTable] = useState();
  const [note, setNote] = useState();
  const [payment] = useState("valor total");

  useEffect(() => {
    GetProducts(userToken).then((list) => {
      setBreakfast(list.filter((item) => item.type === "breakfast"));
      const hamb = list.filter((item) => item.sub_type === "hamburguer");
      setSimpleBurgers(
        hamb.filter((item) => item.name === "Hambúrguer simples")
      );
      setDoubleBurgers(list.filter((item) => item.name === "Hambúrguer duplo"));
      setSides(list.filter((item) => item.sub_type === "side"));
      setDrinks(list.filter((item) => item.sub_type === "drinks"));
    });
  }, [userToken]);

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
              btnClassName="allDay Burgers"
              option="hambúrgueres"
              btnAction={() => setMenu("burgers")}
            />
            <ButtonOption
              btnId="allDayMenu"
              btnClassName="allDay Side"
              option="acompanhamentos"
              btnAction={() => setMenu("sides")}
            />
            <ButtonOption
              btnId="allDayMenu"
              btnClassName="allDay Drink"
              option="bebidas"
              btnAction={() => setMenu("drinks")}
            />
          </nav>
          {menu === "breakfast" &&
            breakfast.map((item) => {
              return (
                <ItemsSalon
                  amountOnChange={(event) => event.target.value}
                  amount={console.log("amount breakfast")}
                  editContent={true}
                  itemName={item.name}
                  itemPrice={"R$ " + item.price}
                />
              );
            })}
          {menu === "burgers" &&
            simpleBurgers.map((item) => {
              return (
                <ItemBurger
                  amountOnChange={console.log("item")}
                  amount={console.log("amount")}
                  editContent={true}
                  itemFlavor={"burguer "+item.flavor}
                  itemComplement={item.complement}
                  itemPrice={"R$ " + item.price}
                  burgerOption={"S"}
                />
              );
            })
            }
            {menu === "burgers" &&
            doubleBurgers.map((item) => {
              return (
                <ItemBurger
                  amountOnChange={console.log("item")}
                  amount={console.log("amount")}
                  editContent={true}
                  itemFlavor={"burguer "+item.flavor}
                  itemComplement={item.complement}
                  itemPrice={"R$ " + item.price}
                  burgerOption={"D"}
                />
              );
            })}
          {menu === "sides" &&
            sides.map((item) => {
              return (
                <ItemsSalon
                  amountOnChange={(event) => event.target.value}
                  amount={console.log("amount breakfast")}
                  editContent={true}
                  itemName={item.name}
                  itemPrice={"R$ " + item.price}
                />
              );
            })}
            {menu === "drinks" &&
            drinks.map((item) => {
              return (
                <ItemsSalon
                  amountOnChange={(event) => event.target.value}
                  amount={console.log("amount breakfast")}
                  editContent={true}
                  itemName={item.name}
                  itemPrice={"R$ " + item.price}
                />
              );
            })}
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
      </main>
      <table className="receiptTable">
        <h2 className="titleReceipt">R E C I B O</h2>
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
      
    </div>
  );
}
