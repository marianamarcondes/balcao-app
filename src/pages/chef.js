import "../css/chef.css";
import logoPreto from "../img/logo-preto.png";
import { useState } from "react";
import { GetOrders } from "../services/data";
import { ButtonOption } from "../components/buttons";

export default function Chef() {
  const userToken = localStorage.getItem("workerToken");
  const [orders, setOrders] = useState([]);

  GetOrders(userToken).then((orders) => {
    const listKitchen = orders.filter(
      (itens) =>
        itens.status.includes("preparing") || itens.status.includes("pending")
    );
    setOrders(listKitchen);
  });

  const OrderStatus = async (id, newStatus) => {
    const status = { status: newStatus };
    const orderId = Number(id);

    await fetch("https://lab-api-bq.herokuapp.com/orders/" + orderId, {
      method: "PUT",
      headers: {
        accept: "application/json",
        Authorization: userToken,
      },
      body: JSON.stringify(status),
    }).then(() =>
      GetOrders(userToken).then((orders) => {
        const listKitchen = orders.filter(
          (itens) =>
            itens.status.includes("preparing") ||
            itens.status.includes("pending")
        );
        setOrders(listKitchen);
      })
    );
  };

  return (
    <div className="kitchen">
      <header className="tableKitchen">
        <img src={logoPreto} alt="Logo Balcão - Cozinha" />
      </header>
      <div className="tableKitchen">
        {orders.map((order) => {
          return (
            <section className="card" key={order.id}>
              <div className="orderInfo">
                <h1 className="tableKitchen">Mesa: {order.table}</h1>
                <p>Garçom: {order.client_name} </p>
                {order.status === "pending" && (
                  <p className="statusPending">
                    {order.status.replace("pending", "PENDENTE")}
                  </p>
                )}
                {order.status === "preparing" && (
                  <p className="statusPreparing">
                    {order.status.replace("preparing", "EM ANDAMENTO")}
                  </p>
                )}

                <time>
                  {`${new Date(order.createdAt).toLocaleDateString(
                    "pt-br"
                  )} - ${new Date(order.createdAt).toLocaleTimeString("pt-br", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}h`}
                </time>

                {order.Products.map((items, index) => (
                  <div className="orderProducts" key={index}>
                    <p>
                      {items.qtd}x {items.name}
                    </p>
                    <p>{items.flavor}</p>
                    <p>{items.complement}</p>
                  </div>
                ))}
                {order.status === "pending" && (
                  <ButtonOption
                    btnClassName="button"
                    option="começar preparo"
                    btnAction={() => {
                      OrderStatus(order.id, "preparing");
                    }}
                  />
                )}

                {order.status === "preparing" && (
                  <ButtonOption
                    btnClassName="button"
                    option="finalizado"
                    btnAction={() => {
                      OrderStatus(order.id, "ready");
                    }}
                  />
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
