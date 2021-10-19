import { useHistory } from "react-router";
import "../css/chef.css";
import { ButtonCancel } from "../components/buttons";
import { ItemTable } from "../components/products";
import logoPreto from "../img/logo-preto.png";
import { Logout } from "../services/auth";
import { useState } from "react";
import { DropMenuKitchen } from "../components/popups";

export default function Chef() {
  const history = useHistory();
  const [classBtnDrop, setClassBtnDrop] = useState("btnDropKitchen");
  return (
    <div className="kitchen">
      <header>
        <img className="logoKitchen" src={logoPreto} alt="Logo- Balcao APP" />
        <p className="numOrders">você tem {"x"} pedidos para preparar.</p>
      </header>
      <table className="tableKitchen">
        <ItemTable
          orderTime={"data e hora"}
          table={"ex. mesa 1"}
          classBtnDrop={classBtnDrop}
          btnDropAction={() => {
            if (classBtnDrop === "btnDropKitchen") {
              setClassBtnDrop("btnDropKitchen open");
            } else {
              setClassBtnDrop("btnDropKitchen");
            }
          }}
        />
        {classBtnDrop === "btnDropKichen open" && (
          <DropMenuKitchen
            qtdItem={"2 ex"}
            nameItem={"cafe ex"}
            deliver={console.log("clicou")}
          />
        )}
      </table>
      <ButtonCancel
        btnClassName={"btnCancel"}
        btnAction={() => Logout(history)}
        btnText={"SAIR"}
      />
    </div>
  );
}
