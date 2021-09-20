export const registerWorker = (event, {infosWorker}) => {
  const apiToSignin = "https://lab-api-bq.herokuapp.com/users";
  event.preventDefault();
  fetch(apiToSignin, {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: {
      "name": infosWorker.userName,
      "email": infosWorker.userEmail,
      "password": infosWorker.tempPassword,
      "role": infosWorker.occupation,
      "restaurant": "Balcao APP",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const token = json.token;
      const code = json.code;
      const email = infosWorker.email;
      localStorage.setItem("workerToken", token);
      localStorage.setItem("workerEmail", email);
      if (json.token !== undefined && code === 200) {
        console.log("Usuário cadastrado!");
      }
    })
    .catch((json) => {
      const code = json.code;
      if (code === 400 || code === 403) {
        throw new Error(json.message);
      }
    });
};
