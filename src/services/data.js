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

// export const GetAllDayMenu = async (token) => {
//   try {
//     const response = await fetch("https://lab-api-bq.herokuapp.com/products", {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: token,
//       },
//     });
//     const data = await response.json();
//     const allDay = data.filter((item) => item.type === "all-day");
//     return allDay;
//   } catch (json) {
//     const code = json.code;
//     if (code === 401 || code === 404) {
//       throw new Error(json.message);
//     }
//   }
// };
