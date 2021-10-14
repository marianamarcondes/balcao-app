export const GetProducts = async (token) => {
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/products", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data;
  } catch (json) {
    const code = json.code;
    if (code === 401 || code === 404) {
      throw new Error(json.message);
    }
  }
};

const host = "https://lab-api-bq.herokuapp.com";

const access = (endpoint, method, body, token) => {
    try {
      return fetch(`${host}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
      });
    } catch (json) {
      const code = json.code;
      if (code !== 200) {
        throw new Error(json.message);
      }
    }
  };

export const NewOrder = (order, token) => {
  console.log(order);
  return access(
    "/orders",
    "POST",
    {
      client: order.client,
      table: order.table,
      products: order.products,
    },
    token
  );
};
