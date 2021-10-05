import { useHistory } from "react-router";
import { ButtonBack } from "../components/buttons";
import { ItemTable } from "../components/products";
import {Navigator} from "../router/navigator"
import logoPreto from "../img/logo-preto.png";

export default function Chef() { 
  const history = useHistory();
    return (
      <div className="kitchen" data-kitchen=''>
      <header>
        <img src={logoPreto} alt="Logo- Balcao APP" />
        <p>você tem {"x"} pedidos para preparar.</p>
      </header>
      <table className="tableKitchen">
        <ItemTable
          orderTime={"data e hora"}
          table={"ex. mesa 1"}
          classBtnDrop={"classe exemplo"}
          btnDropAction={() => console.log("clicou no botao")}
        />
      </table>
      <ButtonBack
      btnClass={"btnBack"}
      btnAction={() => Navigator(history, "/home")}
      />
    </div>
    );
  
  };