import "../css/demand.css";
import { Select, SelectOption } from "../components/select";
import { useEffect, useState } from "react";
import { ButtonBack, ButtonConfirm, ButtonOption } from "../components/buttons";
import { Navigator } from "../router/navigator";
import { useHistory } from "react-router";
import { GetProducts } from "../services/data";
import { ItemsSalon, ItemBurger } from "../components/products";
import { PopUpNote, Receipt } from "../components/popups";

export default function Demand() {
  const history = useHistory();
  const userToken = localStorage.getItem("workerToken");

  const [menu, setMenu] = useState("breakfast");
  const [breakfast, setBreakfast] = useState([]);
  const [simpleBurgers, setSimpleBurgers] = useState([]);
  const [doubleBurgers, setDoubleBurgers] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [amountBreakfast] = useState();
  const [amountSimpleBurgers] = useState();
  const [amountDoubleBurgers] = useState();
  const [amountSides] = useState();
  const [amountDrinks] = useState();

  const [table, setTable] = useState();
 
  const [clickNote, setClickNote] = useState();
  const [seeReceipt, setSeeReceipt] = useState();
 
  useEffect(() => {
    GetProducts(userToken).then((products) => {
      setBreakfast(products.filter((item) => item.type === "breakfast"));
      const hamb = products.filter((item) => item.sub_type === "hamburguer");
      setSimpleBurgers(
        hamb.filter((item) => item.name === "Hambúrguer simples")
      );
      setDoubleBurgers(products.filter((item) => item.name === "Hambúrguer duplo"));
      setSides(products.filter((item) => item.sub_type === "side"));
      setDrinks(products.filter((item) => item.sub_type === "drinks"));
    });
    
  }, []);

  const [drinkSelected] = useState({});
  console.log(drinkSelected);
  
  return (
    <div className="demand" data-demand="demand">
      <header className="headerDemand">
        <div className="selectDemand">
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
        </div>
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
      </header>

      <main className="mainDemand">
        <table className="menuTable">
          {menu === "breakfast" &&
            breakfast.map((item) => {
              return (
                <ItemsSalon
                  dataItemMenu={item.id}
                  amountOnChange={(event) =>
                    (event.target.value)
                  }
                  amount={amountBreakfast}
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
                dataItemMenu={item.id}
                  amountOnChange={(event) =>
                    (event.target.value)
                  }
                  amount={amountSimpleBurgers}
                  editContent={true}
                  itemFlavor={"burger " + item.flavor}
                  itemComplement={item.complement}
                  itemPrice={"R$ " + item.price}
                  burgerOption={"S"}
                />
              );
            })}
          {menu === "burgers" &&
            doubleBurgers.map((item) => {
              return (
                <ItemBurger
                  dataItemMenu={item.id}
                  amountOnChange={(event) =>
                    (event.target.value)
                  }
                  amount={amountDoubleBurgers}
                  editContent={true}
                  itemFlavor={"burger " + item.flavor}
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
                  dataItemMenu={item.id}
                  amountOnChange={(event) => (event.target.value)}
                  amount={amountSides}
                  editContent={true}
                  itemName={item.name}
                  itemPrice={"R$ " + item.price}
                />
              );
            })}
          {menu === "drinks" &&
            drinks.map((item, event) => {
              return (
                <ItemsSalon
                  dataItemMenu={item.id}
                  amountOnChange={() => {
                    const drinkSelected = ({
                    drinkId: item.id, 
                    drinkName: item.name, 
                    drinkPrice: item.price})
                  }
                 }
                  amount={amountDrinks}
                  editContent={true}
                  itemName={item.name}
                  itemPrice={"R$ " + item.price}
                />
              );
            })}
        </table>
        <ButtonOption
          btnId="takeNote"
          btnClassName="takeNoteButton"
          option="adicionar observação"
          btnAction={() => setClickNote("clickNote")}
        />
        {clickNote === "clickNote" && (
          <PopUpNote
            closeNote={() => setClickNote("")}
            saveNote={() => console.log("salvar obs")}
          />
        )}
        <div className="buttonsDemand">
          <ButtonBack
            btnClass="btnBack salonBack"
            btnAction={() => Navigator(history, "/home")}
          />
          <ButtonConfirm
            btnClassName="btnConfirm salonConfirm"
            btnText="VER PEDIDO"
            btnAction={() =>setSeeReceipt("clickReceipt") }
          />
          {seeReceipt === "clickReceipt" && (
            <Receipt
            amount={"3"}
            item={"burguer vegetariano com queijo"}
            price={"5"}
            payment={"5"}
            closeOrder={() => setSeeReceipt("")}
            confirmOrder={console.log("finalizar pedido")}
            />
          )}
        </div>
      </main>
    </div>
  );
}
