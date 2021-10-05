import { useHistory } from "react-router";
import { ButtonBack } from "../components/buttons";
import { ItemTable } from "../components/products";
import {Navigator} from "../router/navigator"
import tituloProntos from "../img/titulo-prontos.png";


export default function Ready() {
  const history = useHistory();
  return (
    <div className="ready" data-ready="">
      <header>
        <img src={tituloProntos} alt="Pedidos prontos" />
        <p>{"x"} mesas aguardam a entrega.</p>
      </header>
      <table className="tableReady">
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
}
