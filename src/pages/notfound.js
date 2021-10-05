import "../css/notfound.css"
import mesa from "../img/mesa.png"

export default function NotFound() { 
    return (
      <div className="notfound">
      <h2 className="title404">404</h2>
      <p className="textNotFound"> Opa, o balcão está vazio. Vamos verificar isso para você!</p>
      <p className="textNotFound" >Tente voltar daqui a pouco :D </p>
      <img className="imgNotFound" src={mesa} alt="Imagem - balcão vazio"/>
      </div>
    );
  
  };