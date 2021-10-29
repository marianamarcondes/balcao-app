import "../css/demand.css";
import { Select, SelectOption } from "../components/select";
import { useEffect, useState } from "react";
import { ButtonBack, ButtonConfirm, ButtonOption } from "../components/buttons";
import { Navigator } from "../router/navigator";
import { useHistory } from "react-router";
import { GetProducts, NewOrder} from "../services/data";
import { ItemsSalon, ItemBurger } from "../components/products";
import { Receipt } from "../components/popups";

export default function Demand() {
  const history = useHistory();
  const userEmail = localStorage.getItem("workerEmail");
  const userToken = localStorage.getItem("workerToken");

  // const [clickNote, setClickNote] = useState("");
  const [seeReceipt, setSeeReceipt] = useState("");
  const [tableOption, setTableOption] = useState("qual o número da mesa?");
  const [menu, setMenu] = useState("breakfast");

  const [table, setTable] = useState();
  const [breakfast, setBreakfast] = useState([]);
  const [simpleBurgers, setSimpleBurgers] = useState([]);
  const [doubleBurgers, setDoubleBurgers] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);
  // const [obs, setObs] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    GetProducts(userToken).then((products) => {
      setBreakfast(products.filter((item) => item.type === "breakfast"));
      const hamb = products.filter((item) => item.sub_type === "hamburguer");
      setSimpleBurgers(
        hamb.filter((item) => item.name === "Hambúrguer simples")
      );
      setDoubleBurgers(
        products.filter((item) => item.name === "Hambúrguer duplo")
      );
      setSides(products.filter((item) => item.sub_type === "side"));
      setDrinks(products.filter((item) => item.sub_type === "drinks"));
    });
  }, [userToken]);

  const addItem = (item, event) => {
    const findItem = cart.find((elemento) => elemento.id === item.id);
    const indexItem = cart.indexOf(findItem);
    if (findItem) {
      cart[indexItem].qtd = Number(event.target.value);
      setCart([...cart]);
    } else {
      item.qtd = Number(event.target.value);
      setCart([...cart, item]);
    }
  };

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
                  option={tableOption}
                />
                <SelectOption optionValue="1" option="MESA 1" />
                <SelectOption optionValue="2" option="MESA 2" />
                <SelectOption optionValue="3" option="MESA 3" />
                <SelectOption optionValue="4" option="MESA 4" />
                <SelectOption optionValue="5" option="MESA 5" />
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
                  amountOnChange={(event) => {
                    addItem(item, event);
                  }}
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
                  amountOnChange={(event) => {
                    addItem(item, event);
                  }}
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
                  amountOnChange={(event) => {
                    addItem(item, event);
                  }}
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
                  amountOnChange={(event) => {
                    addItem(item, event);
                  }}
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
                  dataItemMenu={item.id}
                  amountOnChange={(event) => {
                    addItem(item, event);
                  }}
                  editContent={true}
                  itemName={item.name}
                  itemPrice={"R$ " + item.price}
                />
              );
            })}
        </table>
        {/* <ButtonOption
          btnId="takeNote"
          btnClassName="takeNoteButton"
          option="adicionar observação"
          btnAction={() => setClickNote("clickNote")}
        />
        {clickNote === "clickNote" && (
          <PopUpNote
            closeNote={() => setClickNote("")}
            saveNote={(event) => setObs(event.target.value)}
          />
        )} */}
        <div className="buttonsDemand">
          <ButtonBack
            btnClass="btnBack salonBack"
            btnAction={() => Navigator(history, "/home")}
          />
          <ButtonConfirm
            btnClassName="btnConfirm salonConfirm"
            btnText="VER PEDIDO"
            btnAction={() => {
              if (
                tableOption === " " ||
                tableOption === null ||
                tableOption === "qual o número da mesa?"
              ) {
                setTableOption("Preencha o número da mesa.");
              } else {
                const filterQtd = cart.filter((product) => {
                  if (product.qtd > "0") {
                    return true;
                  } else {
                    return false;
                  }
                });
                setCart(filterQtd);
                setSeeReceipt("clickReceipt");
              }
            }}
          />
          {seeReceipt === "clickReceipt" && (
            <Receipt
              arrCart={cart}
              btnCancel={() => setSeeReceipt("")}
              btnConfirm={() => {
                NewOrder(userToken, userEmail, table, cart).then(() => Navigator(history, "/home"))
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}

// issues: [{number: 1, problem: "depois de selecionar item, se trocar de menu (ex café para bebidas")
// e voltar para o primeiro (menu cafe) o placeholder aparece e não o valor que havia selecionado antes"},
//{number: 2, problem: "salvar a obersação forneceida pelo usuario e enviar para cozinha, junto do pedido"},
//          ]
