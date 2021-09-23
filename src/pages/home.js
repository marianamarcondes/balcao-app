import "../css/home.css";
import { ButtonCancel, ButtonOption } from "../components/buttons";
import { Navigator } from "../router/navigator";
import logoPreto from "../img/logo-preto.png";
import logOffIcon from "../img/log-off-icon.svg";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  return (
    <div className="home" data-home="salon-home">
      <headers className="logoHome">
        <img src={logoPreto} alt="Logo - Balcao App" />
      </headers>
      <main className="mainHome">
        <ButtonOption
          btnId="takeOrder"
          btnClassName="takeOrder"
          option="Lançar pedido"
          btnAction={() => Navigator(history, "/demand")}
        />
        <ButtonOption
          btnId="readyToGo"
          btnClassName="readyToGo"
          option="Pedidos prontos"
          btnAction={() => Navigator(history, "/ready")}
        />
        <ButtonCancel
          btnClassName="logOffHome"
          btnAction={() => Navigator(history, "/")}
          btnText={<img src={logOffIcon} alt="Sair - LogOff" />}
        />
      </main>
    </div>
  );
}
