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

export const NewOrder = async (token, email, table, products) => {
  const order = await fetch("https://lab-api-bq.herokuapp.com/orders", {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: token
    },
    body: {
      "client": email,
      "table": table,
      "products": products,
    },
  });
  console.log(order)
  return order;
};

export const getOrders = async (token) => {
  const response = await fetch("https://lab-api-bq.herokuapp.com/orders", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: token,
    },
  });
  console.log(response);
  return response
};
