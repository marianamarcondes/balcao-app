export const GetMorningMenu = async (token) => {
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/products", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    const breakfast = data.filter((item) => item.type === "breakfast");
    return console.log(breakfast);
  } catch (json) {
    const code = json.code;
    if (code === 401 || code === 404) {
      throw new Error(json.message);
    }
  }
};

export const GetAllDayMenu = async (token) => {
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/products", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    const allDay = data.filter((item) => item.type === "all-day");
    return allDay;
  } catch (json) {
    const code = json.code;
    if (code === 401 || code === 404) {
      throw new Error(json.message);
    }
  }
};
