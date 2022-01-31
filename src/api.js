const API = "http://10.0.2.2:3000";

export const createUser = async (newUser) => {
  const res = await fetch(`${API}/register`, {
    mode: "no-cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  console.log(res);
};
