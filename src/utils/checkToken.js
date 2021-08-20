import { createBrowserHistory } from "history";
import jwt_decode from "jwt-decode";

export default function checkToken() {
  const token =
    JSON.parse(localStorage.getItem("access")) &&
    JSON.parse(localStorage.getItem("access"))["token"];

  if (token) {
    let decodedData = jwt_decode(token);
    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.removeItem("access");
      createBrowserHistory().push("/login");
      createBrowserHistory().go();
    }
  }
}
