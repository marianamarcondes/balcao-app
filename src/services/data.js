let url = "https://lab-api-bq.herokuapp.com/orders/";
let urlProducts = "https://lab-api-bq.herokuapp.com/products";

export const GetProducts = async (token) => {
  try {
    const response = await fetch(urlProducts, {
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
  try {
    const order = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        client: email,
        table: table,
        products: products,
      }),
    });
    return order;
  } catch (json) {
    const code = json.code;
    if (code !== 200) {
      throw new Error(json.message);
    }
  }
};

export const GetOrders = async (token) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    });
    const orders = response.json();
    return orders;
  } catch (json) {
    const code = json.code;
    if (code !== 200) {
      throw new Error(json.message);
    }
  }
};

