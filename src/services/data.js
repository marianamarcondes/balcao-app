export const GetProducts = async (token) => {
  try {                                                          //endpoint//
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
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/orders", {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
          "client": "string",
          "table": "2",
          "products": [
            {
              "id": 31,
              "qtd": 2
            }
          ]
        // client: email,
        // table: table,
        // products: [{ id: 33, qtd: 3}],
      }),
    });
    const order = response.json();
    return order;
  } catch (json) {
    const code = json.code;
    if (code !== 200) {
      throw new Error(json.message);
    }
  }
};

export const getOrders = async (token) => {
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/orders", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    });
    return response;
  } catch (json) {
    const code = json.code;
    if (code !== 200) {
      throw new Error(json.message);
    }
  }
};
