import { useHistory } from "react-router";
import { ButtonCancel } from "../components/buttons";
import { ItemTable } from "../components/products";
import logoPreto from "../img/logo-preto.png";
import { Logout } from "../services/auth";

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
     <ButtonCancel
     btnClassName={"btnCancel"}
    btnAction={()=> Logout(history)}
    btnText={"SAIR"}
          /> 
    </div>
    );
  
  };