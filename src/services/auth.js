export const RegisterWorker = async (workerFile) => {
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: workerFile.name,
        email: workerFile.email,
        password: workerFile.tempPassword,
        role: workerFile.occupation,
        restaurant: "Balcao APP",
      }),
    });
    const json = await response.json();
    const token = json.token;
    const email = json.email;
    localStorage.setItem("workerToken", token);
    localStorage.setItem("workerEmail", email);
    if (token) {
      console.log("Usuário cadastrado!");
    }
  } catch (json) {
    const code = json.code;
    if (code === 400 || code === 403) {
      throw new Error(json.message);
    }
  }
};

export const LoginWorker = async (workerInfo) => {
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: workerInfo.emailLogin,
        password: workerInfo.passLogin,
      }),
    });
    const json = await response.json();
    const token = json.token;
    const email = json.email;
    const occupation = json.role;
    localStorage.setItem("workerToken", token);
    localStorage.setItem("workerEmail", email);
    localStorage.setItem("workerOccupation", occupation);
    if (token) {
      console.log("Usuário logado!");
    }
  } catch (json) {
    const code = json.code;
    if (code === 400 || code === 403) {
      throw new Error(json.message);
    }
  }
};
