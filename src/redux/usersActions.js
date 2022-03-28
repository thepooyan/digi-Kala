export const deleteUser = (username) => {
  return { type: "DELETE_USER", username: username };
};
export const newUser = (username, password, nickname, admin) => {
  return {
    type: "NEW_USER",
    username: username,
    password: password,
    nickname: nickname,
    admin: admin,
  };
};
