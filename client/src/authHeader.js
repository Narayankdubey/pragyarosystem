export default function authHeader() {
  const user = localStorage.getItem("jwt");

  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return "";
  }
}
